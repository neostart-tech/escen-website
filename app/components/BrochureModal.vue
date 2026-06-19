<template>
  <div v-if="isOpen && isReadyToShow" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl transition-all" @click.stop>
      <div class="flex justify-between items-center p-6 border-b border-gray-100">
        <h3 class="text-xl font-bold text-gray-900">Télécharger la brochure</h3>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
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
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="votre@email.com" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
          <div class="w-full">
             <input ref="phoneInput" v-model="form.phone" type="tel" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="Votre numéro" />
          </div>
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
import { ref, watch, onMounted } from 'vue'
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

const phoneInput = ref(null)
let itiTel = null

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
    }
}

// Vérifier si le prospect a déjà téléchargé une brochure
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    // on vérifie le localStorage
    const savedProspect = localStorage.getItem('escen_prospect_registered')
    if (savedProspect) {
      isReadyToShow.value = false // On n'affiche jamais la modale
      const prospectData = JSON.parse(savedProspect)
      
      // Envoi en arrière-plan pour mettre à jour les formations téléchargées
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

      // Directement émettre l'événement pour télécharger et empêcher l'affichage
      emit('submit', prospectData)
      emit('close')
    } else {
      isReadyToShow.value = true // On affiche la modale
      // Si la modale s'ouvre, on initialise l'input tel
      setTimeout(() => initIti(), 100);
    }
  } else {
    isReadyToShow.value = false
  }
})

const submitForm = async () => {
  if (itiTel) {
    const num = itiTel.getNumber();
    if (num) form.value.phone = num;
    else {
      const cd = itiTel.getSelectedCountryData();
      form.value.phone = (cd ? '+' + cd.dialCode : '') + ' ' + phoneInput.value.value;
    }
  }

  isSubmitting.value = true
  try {
    const { $axios } = useNuxtApp()
    
    // Appel API pour sauvegarder les informations de contact (Prospects)
    await $axios.post('/public/prospects', {
      nom: form.value.name,
      email: form.value.email,
      tel: form.value.phone,
      formation_visee: props.brochureName || 'Brochure Web',
      origine: 'Téléchargement Brochure'
    })

    // Sauvegarder dans le localStorage pour les prochains téléchargements
    localStorage.setItem('escen_prospect_registered', JSON.stringify({
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    }))
  } catch(e) {
    console.error("Erreur lors de l'envoi des informations de contact:", e)
    // On continue quand même pour ne pas bloquer le téléchargement
  } finally {
    isSubmitting.value = false
    emit('submit', { ...form.value })
    
    // Réinitialisation optionnelle
    form.value.name = ''
    form.value.email = ''
    form.value.phone = ''
  }
}
</script>
