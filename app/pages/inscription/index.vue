<template>
  <div class="min-h-screen flex font-sans text-gray-900 bg-[#FAFAFA] selection:bg-[#01b4d5] selection:text-white">
    
    <!-- LEFT PANEL: Luxury Branding -->
    <div class="hidden lg:flex lg:w-5/12 bg-[#1A2238] flex-col justify-between p-16 relative overflow-hidden text-white shadow-2xl z-10">
      <!-- Decorative Lighting -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01b4d5]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#01b4d5]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div class="relative z-10">
        <NuxtLink to="/">
          <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-12 w-auto mb-24 filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity">
        </NuxtLink>

        <h1 class="text-4xl lg:text-5xl font-serif font-light leading-tight mb-6">
          Votre avenir <br>
          <span class="font-medium text-[#01b4d5]">commence ici.</span>
        </h1>
        <p class="text-gray-300 text-lg leading-relaxed font-light max-w-sm">
          Intégrez l'ESCEN et rejoignez l'élite des professionnels de demain. Un parcours d'excellence vous attend.
        </p>
      </div>

    </div>

    <!-- RIGHT PANEL: Form Area -->
    <div class="flex-1 relative h-screen overflow-y-auto overflow-x-hidden bg-[#FAFAFA]">
      
      <!-- Top Navigation -->
      <div class="absolute top-0 left-0 w-full p-6 lg:px-12 lg:py-8 flex justify-between items-center z-50 bg-[#FAFAFA]/90 backdrop-blur-md">
        <NuxtLink to="/" class="lg:hidden">
          <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-8 w-auto">
        </NuxtLink>
        <div class="hidden lg:block"></div> <!-- Spacer -->
        <NuxtLink to="/" class="text-sm font-medium text-gray-500 hover:text-[#01b4d5] transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Retourner au site
        </NuxtLink>
      </div>

      <!-- Form Container -->
      <div class="w-full max-w-2xl mx-auto px-6 pt-32 pb-24 lg:px-16">
        <div>
          <!-- Title Section -->
          <div class="mb-12 flex flex-col items-start">
            <span class="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-[#01b4d5] bg-[#01b4d5]/10 rounded-full uppercase">
              Étape {{ etapeActive + 1 }} sur {{ etapes.length }}
            </span>
            <h2 class="text-3xl font-serif text-[#1A2238] mb-2">{{ etapes[etapeActive] }}</h2>
            <p class="text-sm text-gray-500 font-light">Veuillez renseigner les informations requises avec précision.</p>
          </div>

          <!-- Elegant Progress Steps -->
          <div class="mb-12 border-b border-gray-200 pb-12">
            <div class="flex items-center justify-between relative">
              <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-200 z-0"></div>
              <div class="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#01b4d5] z-0 transition-all duration-700 ease-in-out" :style="`width: ${(etapeActive / (etapes.length - 1)) * 100}%`"></div>
              
              <div v-for="(etape, index) in etapes" :key="index" class="relative z-10 flex flex-col items-center group">
                <div class="w-3 h-3 rounded-full transition-all duration-500 ring-4 ring-[#FAFAFA]"
                     :class="[
                       etapeActive === index ? 'bg-[#01b4d5] w-4 h-4 shadow-[0_0_15px_rgba(1,180,213,0.5)]' : 
                       etapeActive > index ? 'bg-[#01b4d5]' : 
                       'bg-gray-300'
                     ]">
                </div>
                <span class="absolute top-8 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap hidden sm:block"
                      :class="etapeActive === index ? 'text-[#01b4d5]' : etapeActive > index ? 'text-gray-800' : 'text-gray-400'">
                  {{ etape }}
                </span>
              </div>
            </div>
          </div>

          <!-- The Form -->
          <div class="relative w-full">
            
            <!-- ETAPE 0 : Identité -->
            <Transition name="fade-slide" mode="out-in">
              <form v-if="etapeActive === 0" @submit.prevent="nextStep" class="space-y-8">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="form-group">
                    <label>Nom de famille <span class="text-red-500">*</span></label>
                    <input v-model="formData.nom" type="text" required class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Prénom(s) <span class="text-red-500">*</span></label>
                    <input v-model="formData.prenom" type="text" required class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Nom de jeune fille</label>
                    <input v-model="formData.nom_jeune_fille" type="text" class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Genre <span class="text-red-500">*</span></label>
                    <select v-model="formData.genre" required class="form-input">
                      <option value="" disabled selected hidden>Sélectionner</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Date de naissance <span class="text-red-500">*</span></label>
                    <input v-model="formData.date_naissance" type="date" :min="minDateString" :max="maxDateString" required class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Lieu de naissance <span class="text-red-500">*</span></label>
                    <input v-model="formData.lieu_naissance" type="text" required class="form-input">
                  </div>
                  <div class="form-group sm:col-span-2">
                    <label>Nationalité <span class="text-red-500">*</span></label>
                    <select v-model="formData.nationalite" required class="form-input">
                      <option value="" disabled selected hidden>Sélectionner une nationalité</option>
                      <option value="Togolaise">Togolaise</option>
                      <option value="Ivoirienne">Ivoirienne</option>
                      <option value="Béninoise">Béninoise</option>
                      <option value="Sénégalaise">Sénégalaise</option>
                      <option value="Malienne">Malienne</option>
                      <option value="Camerounaise">Camerounaise</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-8 mt-8">
                  <h3 class="text-sm font-bold text-[#1A2238] mb-6">Coordonnées de contact</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group sm:col-span-2">
                      <label>Adresse Email <span class="text-red-500">*</span></label>
                      <input v-model="formData.email" type="email" required class="form-input">
                    </div>
                    <div class="form-group">
                      <label>Téléphone principal <span class="text-red-500">*</span></label>
                      <input v-model="formData.tel" type="tel" required class="form-input">
                    </div>
                    <div class="form-group">
                      <label>Téléphone secondaire</label>
                      <input v-model="formData.tel2" type="tel" class="form-input">
                    </div>
                  </div>
                </div>

                <div class="flex justify-end pt-6">
                  <button type="submit" class="btn-primary">
                    Continuer
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </form>
            </Transition>

            <!-- ETAPE 1 : Parcours -->
            <Transition name="fade-slide" mode="out-in">
              <form v-if="etapeActive === 1" @submit.prevent="nextStep" class="space-y-8">
                
                <div class="grid grid-cols-1 gap-6">
                  <div class="form-group">
                    <label>Niveau visé <span class="text-red-500">*</span></label>
                    <select v-model="formData.niveau_id" @change="updatePrograms" required class="form-input">
                      <option value="" disabled selected hidden>Sélectionnez un niveau</option>
                      <option v-for="n in niveaux" :key="n.id" :value="n.id">{{ n.libelle || n.nom }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>
                      <span v-if="loadingFilieres">Chargement...</span>
                      <span v-else>Filière souhaitée <span class="text-red-500">*</span></span>
                    </label>
                    <select v-model="formData.filiere_id" required :disabled="!formData.niveau_id || loadingFilieres" class="form-input disabled:bg-gray-50">
                      <option value="" disabled selected hidden>Sélectionnez une filière</option>
                      <option v-for="f in filieres" :key="f.id" :value="f.id">{{ f.nom }}</option>
                    </select>
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-8 mt-8">
                  <h3 class="text-sm font-bold text-[#1A2238] mb-6">Dernier diplôme obtenu</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label>Type de diplôme</label>
                      <select v-model="formData.type_diplome" class="form-input">
                        <option value="" disabled selected hidden>Sélectionner</option>
                        <option value="Bac 2">Bac 2</option>
                        <option value="BTS">BTS</option>
                        <option value="Licence">Licence</option>
                        <option value="Master">Master</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Série</label>
                      <input v-model="formData.serie" type="text" class="form-input">
                    </div>
                    <div class="form-group">
                      <label>Année d'obtention</label>
                      <input v-model="formData.annee_bac" type="number" class="form-input">
                    </div>
                    <div class="form-group">
                      <label>Numéro de table</label>
                      <input v-model="formData.numero_table" type="text" class="form-input">
                    </div>
                  </div>
                </div>

                <div class="flex justify-between items-center pt-6">
                  <button type="button" @click="prevStep" class="btn-text">Retour</button>
                  <button type="submit" class="btn-primary">
                    Continuer
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </form>
            </Transition>

            <!-- ETAPE 2 : Responsable -->
            <Transition name="fade-slide" mode="out-in">
              <form v-if="etapeActive === 2" @submit.prevent="nextStep" class="space-y-8">
                
                <div class="flex items-center justify-between mb-6">
                   <h3 class="text-sm font-bold text-[#1A2238]">Contact Financier</h3>
                   <span class="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">Optionnel</span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="form-group"><label>Nom</label><input v-model="formData.nom_resp" type="text" class="form-input"></div>
                  <div class="form-group"><label>Prénom</label><input v-model="formData.prenom_resp" type="text" class="form-input"></div>
                  <div class="form-group"><label>Profession</label><input v-model="formData.profession_resp" type="text" class="form-input"></div>
                  <div class="form-group"><label>Téléphone</label><input v-model="formData.tel_resp" type="tel" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Email</label><input v-model="formData.email_resp" type="email" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Adresse géographique</label><input v-model="formData.adresse_resp" type="text" class="form-input"></div>
                </div>

                <div class="flex justify-between items-center pt-6 mt-8 border-t border-gray-100">
                  <button type="button" @click="prevStep" class="btn-text">Retour</button>
                  <button type="submit" class="btn-primary">
                    Continuer
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </form>
            </Transition>

            <!-- ETAPE 3 : Tuteur -->
            <Transition name="fade-slide" mode="out-in">
              <form v-if="etapeActive === 3" @submit.prevent="nextStep" class="space-y-8">
                
                <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                   <div class="flex items-center gap-3">
                     <h3 class="text-sm font-bold text-[#1A2238]">Contact Pédagogique</h3>
                     <span class="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">Optionnel</span>
                   </div>
                   <button type="button" @click="copyResponsableToTuteur" class="text-xs font-bold text-[#01b4d5] hover:text-[#1A2238] transition-colors flex items-center gap-1">
                     <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                     Copier le financier
                   </button>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="form-group"><label>Nom</label><input v-model="formData.nom_tuteur" type="text" class="form-input"></div>
                  <div class="form-group"><label>Prénom</label><input v-model="formData.prenom_tuteur" type="text" class="form-input"></div>
                  <div class="form-group"><label>Profession</label><input v-model="formData.profession_tuteur" type="text" class="form-input"></div>
                  <div class="form-group"><label>Téléphone</label><input v-model="formData.tel_tuteur" type="tel" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Email</label><input v-model="formData.email_tuteur" type="email" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Adresse géographique</label><input v-model="formData.adresse_tuteur" type="text" class="form-input"></div>
                </div>

                <div class="flex justify-between items-center pt-6 mt-8 border-t border-gray-100">
                  <button type="button" @click="prevStep" class="btn-text">Retour</button>
                  <button type="submit" class="btn-primary">
                    Continuer
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </form>
            </Transition>

            <!-- ETAPE 4 : Documents -->
            <Transition name="fade-slide" mode="out-in">
              <form v-if="etapeActive === 4" @submit.prevent="soumettreFormulaire" class="space-y-8">
                
                <div class="flex items-center justify-between mb-6">
                   <h3 class="text-sm font-bold text-[#1A2238]">Pièces jointes</h3>
                   <span class="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">Optionnel</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="doc in fileInputs" :key="doc.key" class="relative group">
                    <div class="border border-gray-200 rounded-xl p-4 hover:border-[#01b4d5] transition-colors bg-gray-50/50">
                      <label class="block text-sm font-bold text-[#1A2238] mb-1">{{ doc.label }}</label>
                      <input type="file" @change="handleFile(doc.key, $event, doc.multiple)" :multiple="doc.multiple" 
                             class="block w-full text-xs text-gray-500 
                                    file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 
                                    file:text-xs file:font-semibold file:bg-white file:text-[#1A2238] file:border file:border-gray-200 file:shadow-sm
                                    hover:file:bg-gray-50 cursor-pointer outline-none">
                      
                      <div v-if="files[doc.key] && (Array.isArray(files[doc.key]) ? files[doc.key].length > 0 : files[doc.key])" 
                           class="absolute top-4 right-4 text-emerald-500 bg-emerald-50 rounded-full p-1 shadow-sm">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-center pt-6 mt-8 border-t border-gray-100 gap-4">
                  <button type="button" @click="prevStep" class="btn-text w-full sm:w-auto">Retour</button>
                  <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="flex items-center">
                       <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                       Traitement en cours...
                    </span>
                    <span v-else class="flex items-center">
                       Soumettre ma candidature
                       <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </span>
                  </button>
                </div>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

import { ref, reactive, onMounted } from 'vue'
import swal from 'sweetalert'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { useNiveauStore } from '~/stores/niveau'
import { useFiliereStore } from '~/stores/filiere'
import { useCandidatureStore } from '~/stores/candidature'

const niveauStore = useNiveauStore()
const filiereStore = useFiliereStore()
const candidatureStore = useCandidatureStore()

const niveaux = ref([])
const filieres = ref([])
const loadingFilieres = ref(false)
const isSubmitting = ref(false)
const etapeActive = ref(0)

const today = new Date()
const maxDateString = `${today.getFullYear() - 15}-12-31`
const minDateString = `${today.getFullYear() - 60}-01-01`

const etapes = ['Identité', 'Parcours', 'Responsable', 'Tuteur', 'Documents']

const formData = reactive({
  nom: '', prenom: '', nom_jeune_fille: '', genre: '', date_naissance: '', lieu_naissance: '', nationalite: '', email: '', tel: '', tel2: '', tel3: '', bp: '', fax: '', hobbit: '',
  niveau_id: '', filiere_id: '', numero_table: '', annee_bac: '', serie: '', type_diplome: '', lettre_motivation: '',
  nom_resp: '', prenom_resp: '', profession_resp: '', employeur_resp: '', email_resp: '', tel_resp: '', adresse_resp: '', bp_resp: '', fax_resp: '',
  nom_tuteur: '', prenom_tuteur: '', profession_tuteur: '', employeur_tuteur: '', email_tuteur: '', tel_tuteur: '', adresse_tuteur: '', bp_tuteur: '', fax_tuteur: ''
})

const files = reactive({
  lettre_file: null, naissance_file: null, diplome_file: null, nationalite_file: null, photo_identite_file: null, certificat_medical_file: null, cv_file: null,
  bulletins_seconde: [], bulletins_premiere: [], bulletins_terminale: [], releve_bac1: [], releve_bac2: []
})

const fileInputs = [
  { key: 'photo_identite_file', label: 'Photo d\'identité', multiple: false },
  { key: 'nationalite_file', label: 'Pièce d\'identité', multiple: false },
  { key: 'naissance_file', label: 'Acte de naissance', multiple: false },
  { key: 'certificat_medical_file', label: 'Certificat médical', multiple: false },
  { key: 'diplome_file', label: 'Dernier Diplôme', multiple: false },
  { key: 'cv_file', label: 'Curriculum Vitae', multiple: false },
  { key: 'releve_bac1', label: 'Relevés Année 1', multiple: true },
  { key: 'releve_bac2', label: 'Relevés Année 2', multiple: true },
]

onMounted(async () => {
  niveaux.value = await niveauStore.fetchNiveaux()
})

const updatePrograms = async () => {
  formData.filiere_id = ''
  if(formData.niveau_id) {
    loadingFilieres.value = true
    filieres.value = await filiereStore.fetchFilieresByNiveau(formData.niveau_id)
    loadingFilieres.value = false
  } else {
    filieres.value = []
  }
}

const nextStep = () => {
  if (etapeActive.value < etapes.length - 1) {
    etapeActive.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (etapeActive.value > 0) {
    etapeActive.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const copyResponsableToTuteur = () => {
  formData.nom_tuteur = formData.nom_resp;
  formData.prenom_tuteur = formData.prenom_resp;
  formData.profession_tuteur = formData.profession_resp;
  formData.employeur_tuteur = formData.employeur_resp;
  formData.email_tuteur = formData.email_resp;
  formData.tel_tuteur = formData.tel_resp;
  formData.bp_tuteur = formData.bp_resp;
  formData.fax_tuteur = formData.fax_resp;
  formData.adresse_tuteur = formData.adresse_resp;
}

const handleFile = (key, event, multiple) => {
  if (multiple) {
    files[key] = Array.from(event.target.files)
  } else {
    files[key] = event.target.files[0] || null
  }
}

const soumettreFormulaire = async () => {
  const isConfirmed = await swal({
    title: "Confirmer la soumission",
    text: "Voulez-vous vraiment soumettre votre candidature ? Veuillez vous assurer que toutes les informations sont correctes.",
    icon: "warning",
    buttons: ["Annuler", "Oui, soumettre"],
    dangerMode: false,
  });

  if (!isConfirmed) {
    return;
  }

  isSubmitting.value = true
  try {
    const data = new FormData()
    Object.keys(formData).forEach(k => {
      if (formData[k]) data.append(k, formData[k])
    })
    
    const singleFiles = ['lettre_file', 'naissance_file', 'diplome_file', 'nationalite_file', 'photo_identite_file', 'certificat_medical_file', 'cv_file'];
    singleFiles.forEach(k => {
      if (files[k]) data.append(k, files[k])
    })
    
    if (files.releve_bac1 && files.releve_bac1.length) files.releve_bac1.forEach((f, i) => data.append(`releve_bac1[${i}]`, f))
    if (files.releve_bac2 && files.releve_bac2.length) files.releve_bac2.forEach((f, i) => data.append(`releve_bac2[${i}]`, f))
    if (files.bulletins_seconde && files.bulletins_seconde.length) files.bulletins_seconde.forEach((f, i) => data.append(`bulletins_seconde[${i}]`, f))
    if (files.bulletins_premiere && files.bulletins_premiere.length) files.bulletins_premiere.forEach((f, i) => data.append(`bulletins_premiere[${i}]`, f))
    if (files.bulletins_terminale && files.bulletins_terminale.length) files.bulletins_terminale.forEach((f, i) => data.append(`bulletins_terminale[${i}]`, f))
    
    await candidatureStore.soumettreCandidature(data)
    
    toastr.success("Votre dossier a été envoyé avec succès.", "Félicitations !")
    etapeActive.value = 0
    Object.keys(formData).forEach(k => formData[k] = '')
    Object.keys(files).forEach(k => {
      if (Array.isArray(files[k])) files[k] = []
      else files[k] = null
    })
  } catch(e) {
    console.error(e)
    let errorMessage = "Une erreur est survenue lors de l'envoi."
    if (e.response?.data?.errors) {
       errorMessage = Object.values(e.response.data.errors).flat().join('\n')
    } else if (e.response?.data?.message) {
       errorMessage = e.response.data.message
    }
    toastr.error(errorMessage, "Erreur de soumission")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@reference "tailwindcss";

/* Premium Form Elements */
.form-group {
  @apply flex flex-col gap-1.5;
}

.form-group label {
  @apply text-sm font-semibold text-gray-700;
}

.form-input {
  @apply w-full h-[3.5rem] px-5 bg-white border-2 border-gray-100 text-[#1A2238] font-medium rounded-2xl outline-none transition-all duration-300 placeholder-gray-400 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)];
}

.form-input:hover {
  @apply border-gray-200 shadow-[0_4px_12px_-3px_rgba(0,0,0,0.05)];
}

.form-input:focus {
  @apply bg-white border-[#01b4d5] shadow-[0_0_0_4px_rgba(1,180,213,0.15)] ring-0;
}

.form-input:disabled {
  @apply bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100 shadow-none;
}

/* Elegant Buttons */
.btn-primary {
  @apply inline-flex items-center justify-center h-[3.5rem] px-10 bg-gradient-to-r from-[#01b4d5] to-[#009ab5] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:shadow-[0_10px_30px_-10px_rgba(1,180,213,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none;
}

.btn-text {
  @apply text-sm font-bold text-gray-500 hover:text-[#1A2238] transition-colors;
}

/* Animations */
.fade-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2em;
  padding-right: 2.5rem;
}
</style>