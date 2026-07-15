<template>
  <div v-if="isOpen && isReadyToShow" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl transition-all" @click.stop>
      <div class="flex justify-between items-start p-6 border-b border-gray-100">
        <div>
          <h3 class="text-xl font-bold text-gray-900">Télécharger la brochure</h3>
          <p class="text-sm text-gray-500 mt-1">Nous souhaitons vous envoyer plus d'informations sur cette formation.</p>
        </div>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors mt-1">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form @submit.prevent="submitForm" class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom et prénoms</label>
          <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="Votre nom et prénoms" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            :class="['w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#01b4d5]/20', formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#01b4d5]']"
            placeholder="votre@email.com"
            @input="formErrors.email = ''"
          />
          <p v-if="formErrors.email" class="mt-1 text-xs text-red-500">{{ formErrors.email }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
          <div class="w-full">
             <input
               ref="phoneInput"
               type="tel"
               required
               :class="['w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#01b4d5]/20', formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#01b4d5]']"
               placeholder="Votre numéro"
               @input="formErrors.phone = ''"
             />
          </div>
          <p v-if="formErrors.phone" class="mt-1 text-xs text-red-500">{{ formErrors.phone }}</p>
        </div>
        <div class="pt-4">
          <button type="submit" :disabled="isSubmitting" class="w-full bg-[#01b4d5] hover:bg-[#0056b3] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-70 flex justify-center items-center">
            <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span v-else>Confirmer et télécharger</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useNuxtApp } from '#app'

const props = defineProps({
  isOpen: Boolean,
  brochureName: String
})

const emit = defineEmits(['close', 'submit'])

const form = ref({
  name: '',
  email: '',
  phone: ''
})

const isSubmitting = ref(false)
const isReadyToShow = ref(false)
const formErrors = ref({ email: '', phone: '' })

const phoneInput = ref(null)
let itiTel = null

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const validateForm = () => {
  formErrors.value = { email: '', phone: '' }
  let valid = true

  if (!emailRegex.test(form.value.email)) {
    formErrors.value.email = 'Adresse email invalide (ex: nom@domaine.com)'
    valid = false
  }

  if (itiTel) {
    const result = itiTel.isValidNumber()
    if (result === false) {
      // Utils chargés → numéro invalide selon libphonenumber
      formErrors.value.phone = 'Numéro invalide — vérifiez l\'indicatif et le numéro.'
      valid = false
    } else if (result === null) {
      // Utils pas encore chargés (CDN async) → vérification basique de secours :
      // rejeter les numéros trop courts ou composés uniquement de zéros
      const dialCode = (itiTel.getSelectedCountryData()?.dialCode || '').replace(/\D/g, '')
      const allDigits = form.value.phone.replace(/\D/g, '')
      const localPart = dialCode && allDigits.startsWith(dialCode)
        ? allDigits.slice(dialCode.length)
        : allDigits
      if (localPart.length < 6 || /^0+$/.test(localPart)) {
        formErrors.value.phone = 'Numéro invalide — vérifiez l\'indicatif et le numéro.'
        valid = false
      }
    }
  }

  return valid
}

const getCountryCode = () => {
    return fetch("https://api.country.is/")
        .then(res => res.json())
        .then(data => data.country ? data.country.toLowerCase() : 'tg')
        .catch(() => 'tg');
};

const initIti = async () => {
    const { $intlTelInput } = useNuxtApp()
    if (phoneInput.value && $intlTelInput && !itiTel) {
        itiTel = $intlTelInput(phoneInput.value, {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                getCountryCode().then(code => callback(code));
            },
            separateDialCode: true,
            useFullscreenPopup: false,
            dropdownContainer: document.body,
            utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.15.0/build/js/utils.js'
        });
        if (form.value.phone) itiTel.setNumber(form.value.phone);

        // Si l'utilisateur tape le numéro complet avec indicatif (+xxx...),
        // normaliser dès qu'il quitte le champ pour éviter le doublon d'indicatif
        phoneInput.value.addEventListener('blur', () => {
            const val = phoneInput.value?.value?.trim()
            if (val?.startsWith('+')) {
                itiTel.setNumber(val)
                formErrors.value.phone = ''
            }
        })
    }
}

watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    formErrors.value = { email: '', phone: '' }
    const savedProspect = localStorage.getItem('escen_prospect_registered')
    if (savedProspect) {
      isReadyToShow.value = false
      const prospectData = JSON.parse(savedProspect)

      try {
        const { $axios } = useNuxtApp()
        await $axios.post('/public/prospects', {
          nom: prospectData.name,
          email: prospectData.email,
          tel: prospectData.phone,
          formation_visee: props.brochureName || 'Brochure Web',
          origine: 'Téléchargement Brochure'
        })
      } catch (e) {
        console.error("Erreur lors de la mise à jour des formations:", e)
      }

      emit('submit', prospectData)
      emit('close')
    } else {
      isReadyToShow.value = true
      setTimeout(() => initIti(), 100);
    }
  } else {
    isReadyToShow.value = false
  }
})

const resetForm = () => {
  form.value.name = ''
  form.value.email = ''
  form.value.phone = ''
  if (itiTel) itiTel.setNumber('')
}

const submitForm = async () => {
  // Normaliser si l'utilisateur a tapé le numéro complet avec indicatif (+xxx...)
  if (itiTel && phoneInput.value?.value?.trim().startsWith('+')) {
    itiTel.setNumber(phoneInput.value.value.trim())
  }

  // Lire le numéro depuis intl-tel-input SANS écrire dans le DOM (pas de v-model)
  let phoneNumber = ''
  if (itiTel) {
    const num = itiTel.getNumber()
    if (num) {
      phoneNumber = num
    } else {
      const cd = itiTel.getSelectedCountryData()
      phoneNumber = (cd ? '+' + cd.dialCode : '') + phoneInput.value?.value
    }
  }

  // Stocker temporairement pour la validation et l'envoi
  form.value.phone = phoneNumber

  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const { $axios } = useNuxtApp()

    await $axios.post('/public/prospects', {
      nom: form.value.name,
      email: form.value.email,
      tel: phoneNumber,
      formation_visee: props.brochureName || 'Brochure Web',
      origine: 'Téléchargement Brochure'
    })

  } catch(e) {
    // Erreurs de validation backend (422) : afficher et bloquer
    if (e.response?.status === 422) {
      const errors = e.response.data?.errors || {}
      if (errors.email) formErrors.value.email = errors.email[0]
      if (errors.tel) formErrors.value.phone = errors.tel[0]
      isSubmitting.value = false
      return
    }
    // Erreur réseau / 500 : on log mais on continue (le téléchargement ne doit pas être bloqué)
    console.error("Erreur lors de l'envoi des informations de contact:", e)
  }

  // Sauvegarder en localStorage après toute issue (sauf 422) pour éviter de reposer
  // la question à l'utilisateur lors des prochains téléchargements
  localStorage.setItem('escen_prospect_registered', JSON.stringify({
    name: form.value.name,
    email: form.value.email,
    phone: phoneNumber
  }))

  isSubmitting.value = false
  emit('submit', { ...form.value, phone: phoneNumber })
  resetForm()
}
</script>
