<template>
  <div class="min-h-screen flex font-sans text-gray-900 bg-[#FAFAFA] selection:bg-[#01b4d5] selection:text-white">
    
    <!-- LEFT PANEL: Luxury Branding -->
    <div class="hidden lg:flex lg:w-5/12 bg-[#1A2238] flex-col justify-between p-16 relative overflow-hidden text-white shadow-2xl z-10">
      <!-- Decorative Lighting -->
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01b4d5]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#01b4d5]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div class="relative z-10">
        <NuxtLink to="/">
          <img src="/logo/ESECN_LOGO.png" alt="ESCEN" class="h-40 w-auto mb-16 object-contain object-left -ml-8 -mt-8 opacity-90 hover:opacity-100 transition-opacity">
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
          <img src="/logo/ESECN_LOGO.png" alt="ESCEN" class="h-24 w-auto object-contain object-left -ml-4 -my-8">
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
                    <input v-model="formData.nom" @input="formData.nom = formData.nom.replace(/\d/g, '')" type="text" required class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Prénom(s) <span class="text-red-500">*</span></label>
                    <input v-model="formData.prenom" @input="formData.prenom = formData.prenom.replace(/\d/g, '')" type="text" required class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Nom de jeune fille</label>
                    <input v-model="formData.nom_jeune_fille" @input="formData.nom_jeune_fille = formData.nom_jeune_fille.replace(/\d/g, '')" type="text" class="form-input">
                  </div>
                  <div class="form-group">
                    <label>Genre <span class="text-red-500">*</span></label>
                    <Select v-model="formData.genre" :options="['Masculin', 'Féminin']" placeholder="Sélectionner" class="w-full" />
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
                    <div class="relative" ref="dropdownRef">
                        <button type="button" @click="isDropdownOpen = !isDropdownOpen" class="form-input flex items-center justify-between text-left w-full cursor-pointer">
                            <div v-if="formData.nationalite" class="flex items-center gap-3">
                                <img :src="`https://flagcdn.com/w20/${nationalitesList.find(n => n.value === formData.nationalite)?.code}.png`" class="w-6 shadow-sm rounded-[2px]" />
                                <span class="text-[#1A2238] font-medium">{{ formData.nationalite }}</span>
                            </div>
                            <div v-else class="text-gray-400 font-medium">Sélectionner une nationalité</div>
                            <svg class="w-4 h-4 text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        
                        <div v-if="isDropdownOpen" class="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] max-h-64 overflow-hidden flex flex-col">
                            <div class="p-2 border-b border-gray-50 bg-gray-50/50">
                                 <input type="text" v-model="searchNat" placeholder="Rechercher un pays..." class="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#01b4d5] focus:ring-1 focus:ring-[#01b4d5] transition-all shadow-sm">
                            </div>
                            <div class="overflow-y-auto p-1">
                                <div v-if="filteredNationalites.length === 0" class="p-4 text-center text-sm text-gray-500">
                                    Aucun résultat trouvé.
                                </div>
                                <button type="button" v-for="nat in filteredNationalites" :key="nat.value" @click="selectNat(nat.value)" class="w-full text-left px-4 py-2.5 hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors">
                                    <img :src="`https://flagcdn.com/w20/${nat.code}.png`" class="w-5 shadow-sm rounded-[1px]" />
                                    <span class="text-sm font-medium" :class="formData.nationalite === nat.value ? 'text-[#01b4d5]' : 'text-gray-700'">{{ nat.label }}</span>
                                    <svg v-if="formData.nationalite === nat.value" class="w-4 h-4 text-[#01b4d5] ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
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
                      <div class="w-full"><input type="tel" ref="phoneInput" @input="$event.target.value = $event.target.value.replace(/[^\d+\s-]/g, '')" required class="form-input"></div>
                    </div>
                    <div class="form-group">
                      <label>Téléphone whatsapp</label>
                      <div class="w-full"><input type="tel" ref="phone2Input" @input="$event.target.value = $event.target.value.replace(/[^\d+\s-]/g, '')" class="form-input"></div>
                    </div>
                    <div class="form-group sm:col-span-2">
                      <label>Adresse géographique (lieu de résidence) <span class="text-red-500">*</span></label>
                      <textarea v-model="formData.adresse" rows="3" required class="form-input !h-auto py-3 resize-none"></textarea>
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
                    <Select v-model="formData.niveau_id" :options="niveaux" optionValue="id" :optionLabel="n => n.libelle || n.nom" @change="updatePrograms" placeholder="Sélectionnez un niveau" class="w-full" />
                  </div>
                  <div class="form-group">
                    <label>
                      <span v-if="loadingFilieres">Chargement...</span>
                      <span v-else>Filière souhaitée <span class="text-red-500">*</span></span>
                    </label>
                    <Select v-model="formData.filiere_id" :options="filieres" optionValue="id" optionLabel="nom" :disabled="!formData.niveau_id || loadingFilieres" placeholder="Sélectionnez une filière" class="w-full" />
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-8 mt-8">
                  <h3 class="text-sm font-bold text-[#1A2238] mb-6">Dernier diplôme obtenu</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label>Type de diplôme</label>
                      <Select v-model="formData.type_diplome" :options="['Bac 2', 'BTS', 'Licence', 'Master']" placeholder="Sélectionner" class="w-full" />
                    </div>
                    <div class="form-group">
                      <label>Série</label>
                      <Select v-model="formData.serie" :options="['A', 'C', 'D', 'E', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'Autre']" placeholder="Sélectionner" class="w-full" />
                    </div>
                    <div class="form-group">
                      <label>Année d'obtention</label>
                      <input v-model="formData.annee_bac" @input="formData.annee_bac = (formData.annee_bac > today.getFullYear() ? today.getFullYear() : formData.annee_bac)" :max="today.getFullYear()" type="number" class="form-input">
                    </div>
                    <div class="form-group">
                      <label>Numéro de table</label>
                      <input v-model="formData.numero_table" @input="formData.numero_table = formData.numero_table.replace(/\D/g, '')" type="text" class="form-input">
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
                  <div class="form-group"><label>Nom</label><input v-model="formData.nom_resp" @input="formData.nom_resp = formData.nom_resp.replace(/\d/g, '')" type="text" class="form-input"></div>
                  <div class="form-group"><label>Prénom</label><input v-model="formData.prenom_resp" @input="formData.prenom_resp = formData.prenom_resp.replace(/\d/g, '')" type="text" class="form-input"></div>
                  <div class="form-group"><label>Profession</label><input v-model="formData.profession_resp" type="text" class="form-input"></div>
                  <div class="form-group"><label>Téléphone</label><div class="w-full"><input type="tel" ref="phoneRespInput" @input="$event.target.value = $event.target.value.replace(/[^\d+\s-]/g, '')" class="form-input"></div></div>
                  <div class="form-group sm:col-span-2"><label>Email</label><input v-model="formData.email_resp" type="email" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Adresse géographique</label><textarea v-model="formData.adresse_resp" rows="3" class="form-input !h-auto py-3 resize-none"></textarea></div>
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
                  <div class="form-group"><label>Nom</label><input v-model="formData.nom_tuteur" @input="formData.nom_tuteur = formData.nom_tuteur.replace(/\d/g, '')" type="text" class="form-input"></div>
                  <div class="form-group"><label>Prénom</label><input v-model="formData.prenom_tuteur" @input="formData.prenom_tuteur = formData.prenom_tuteur.replace(/\d/g, '')" type="text" class="form-input"></div>
                  <div class="form-group"><label>Profession</label><input v-model="formData.profession_tuteur" type="text" class="form-input"></div>
                  <div class="form-group"><label>Téléphone</label><div class="w-full"><input type="tel" ref="phoneTuteurInput" @input="$event.target.value = $event.target.value.replace(/[^\d+\s-]/g, '')" class="form-input"></div></div>
                  <div class="form-group sm:col-span-2"><label>Email</label><input v-model="formData.email_tuteur" type="email" class="form-input"></div>
                  <div class="form-group sm:col-span-2"><label>Adresse géographique</label><textarea v-model="formData.adresse_tuteur" rows="3" class="form-input !h-auto py-3 resize-none"></textarea></div>
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

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div v-for="doc in fileInputs" :key="doc.key" class="relative group h-32 w-full rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#01b4d5] transition-all duration-300 bg-gray-50/30 hover:bg-[#01b4d5]/5 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
                       :class="{ 'border-[#01b4d5] bg-[#01b4d5]/5 ring-4 ring-[#01b4d5]/10': isFileSelected(doc.key) }">
                    
                    <input type="file" @change="handleFile(doc.key, $event, doc.multiple)" :multiple="doc.multiple" 
                           class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                           :title="doc.label">
                    
                    <div v-if="isFileSelected(doc.key)" class="flex flex-col items-center justify-center text-center p-4 z-0 pointer-events-none">
                      <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-2 shadow-sm transform group-hover:scale-110 transition-transform">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <p class="text-sm font-bold text-gray-800 truncate px-2 max-w-full">{{ getFileName(doc.key) }}</p>
                      <p class="text-[10px] uppercase tracking-wider text-emerald-600 font-bold mt-1">Fichier prêt</p>
                    </div>

                    <div v-else class="flex flex-col items-center justify-center text-center p-4 z-0 pointer-events-none">
                      <div class="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 text-[#01b4d5] flex items-center justify-center mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                      </div>
                      <p class="text-sm font-bold text-gray-700 mb-0.5">{{ doc.label }}</p>
                      <p class="text-xs text-gray-400">Cliquez ou glissez ici</p>
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

import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'
import swal from 'sweetalert'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { useNuxtApp } from '#app'
import { useNiveauStore } from '~/stores/niveau'
import { useFiliereStore } from '~/stores/filiere'
import { useCandidatureStore } from '~/stores/candidature'

const { $intlTelInput } = useNuxtApp()
const niveauStore = useNiveauStore()
const filiereStore = useFiliereStore()
const candidatureStore = useCandidatureStore()

const phoneInput = ref(null)
const phone2Input = ref(null)
const phoneRespInput = ref(null)
const phoneTuteurInput = ref(null)

let itiTel = null
let itiTel2 = null
let itiTelResp = null
let itiTelTuteur = null

const nationalitesList = [
    { label: "Afghane", value: "Afghane", code: "af" },
    { label: "Sud-africaine", value: "Sud-africaine", code: "za" },
    { label: "Albanaise", value: "Albanaise", code: "al" },
    { label: "Algérienne", value: "Algérienne", code: "dz" },
    { label: "Allemande", value: "Allemande", code: "de" },
    { label: "Américaine", value: "Américaine", code: "us" },
    { label: "Andorrane", value: "Andorrane", code: "ad" },
    { label: "Angolaise", value: "Angolaise", code: "ao" },
    { label: "Argentine", value: "Argentine", code: "ar" },
    { label: "Arménienne", value: "Arménienne", code: "am" },
    { label: "Australienne", value: "Australienne", code: "au" },
    { label: "Autrichienne", value: "Autrichienne", code: "at" },
    { label: "Azerbaïdjanaise", value: "Azerbaïdjanaise", code: "az" },
    { label: "Bahamienne", value: "Bahamienne", code: "bs" },
    { label: "Bangladaise", value: "Bangladaise", code: "bd" },
    { label: "Belge", value: "Belge", code: "be" },
    { label: "Béninoise", value: "Béninoise", code: "bj" },
    { label: "Biélorusse", value: "Biélorusse", code: "by" },
    { label: "Bolivienne", value: "Bolivienne", code: "bo" },
    { label: "Bosnienne", value: "Bosnienne", code: "ba" },
    { label: "Botswanaise", value: "Botswanaise", code: "bw" },
    { label: "Brésilienne", value: "Brésilienne", code: "br" },
    { label: "Britannique", value: "Britannique", code: "gb" },
    { label: "Bulgare", value: "Bulgare", code: "bg" },
    { label: "Burkinabée", value: "Burkinabée", code: "bf" },
    { label: "Burundaise", value: "Burundaise", code: "bi" },
    { label: "Camerounaise", value: "Camerounaise", code: "cm" },
    { label: "Canadienne", value: "Canadienne", code: "ca" },
    { label: "Cap-Verdienne", value: "Cap-Verdienne", code: "cv" },
    { label: "Centrafricaine", value: "Centrafricaine", code: "cf" },
    { label: "Chilienne", value: "Chilienne", code: "cl" },
    { label: "Chinoise", value: "Chinoise", code: "cn" },
    { label: "Colombienne", value: "Colombienne", code: "co" },
    { label: "Comorienne", value: "Comorienne", code: "km" },
    { label: "Congolaise (RDC)", value: "Congolaise (RDC)", code: "cd" },
    { label: "Congolaise (Rép)", value: "Congolaise (Rép)", code: "cg" },
    { label: "Costaricaine", value: "Costaricaine", code: "cr" },
    { label: "Croate", value: "Croate", code: "hr" },
    { label: "Cubaine", value: "Cubaine", code: "cu" },
    { label: "Danoise", value: "Danoise", code: "dk" },
    { label: "Djiboutienne", value: "Djiboutienne", code: "dj" },
    { label: "Dominicaine", value: "Dominicaine", code: "do" },
    { label: "Égyptienne", value: "Égyptienne", code: "eg" },
    { label: "Émirienne", value: "Émirienne", code: "ae" },
    { label: "Équatorienne", value: "Équatorienne", code: "ec" },
    { label: "Espagnole", value: "Espagnole", code: "es" },
    { label: "Éthiopienne", value: "Éthiopienne", code: "et" },
    { label: "Finlandaise", value: "Finlandaise", code: "fi" },
    { label: "Française", value: "Française", code: "fr" },
    { label: "Gabonaise", value: "Gabonaise", code: "ga" },
    { label: "Gambienne", value: "Gambienne", code: "gm" },
    { label: "Géorgienne", value: "Géorgienne", code: "ge" },
    { label: "Ghanéenne", value: "Ghanéenne", code: "gh" },
    { label: "Grecque", value: "Grecque", code: "gr" },
    { label: "Guinéenne", value: "Guinéenne", code: "gn" },
    { label: "Équato-guinéenne", value: "Équato-guinéenne", code: "gq" },
    { label: "Bissau-guinéenne", value: "Bissau-guinéenne", code: "gw" },
    { label: "Haïtienne", value: "Haïtienne", code: "ht" },
    { label: "Hongroise", value: "Hongroise", code: "hu" },
    { label: "Indienne", value: "Indienne", code: "in" },
    { label: "Indonésienne", value: "Indonésienne", code: "id" },
    { label: "Irakienne", value: "Irakienne", code: "iq" },
    { label: "Iranienne", value: "Iranienne", code: "ir" },
    { label: "Irlandaise", value: "Irlandaise", code: "ie" },
    { label: "Israélienne", value: "Israélienne", code: "il" },
    { label: "Italienne", value: "Italienne", code: "it" },
    { label: "Ivoirienne", value: "Ivoirienne", code: "ci" },
    { label: "Jamaïcaine", value: "Jamaïcaine", code: "jm" },
    { label: "Japonaise", value: "Japonaise", code: "jp" },
    { label: "Jordanienne", value: "Jordanienne", code: "jo" },
    { label: "Kényane", value: "Kényane", code: "ke" },
    { label: "Koweïtienne", value: "Koweïtienne", code: "kw" },
    { label: "Libanaise", value: "Libanaise", code: "lb" },
    { label: "Libérienne", value: "Libérienne", code: "lr" },
    { label: "Libyenne", value: "Libyenne", code: "ly" },
    { label: "Malgache", value: "Malgache", code: "mg" },
    { label: "Malaisienne", value: "Malaisienne", code: "my" },
    { label: "Malienne", value: "Malienne", code: "ml" },
    { label: "Marocaine", value: "Marocaine", code: "ma" },
    { label: "Mauricienne", value: "Mauricienne", code: "mu" },
    { label: "Mauritanienne", value: "Mauritanienne", code: "mr" },
    { label: "Mexicaine", value: "Mexicaine", code: "mx" },
    { label: "Monégasque", value: "Monégasque", code: "mc" },
    { label: "Mozambicaine", value: "Mozambicaine", code: "mz" },
    { label: "Namibienne", value: "Namibienne", code: "na" },
    { label: "Nigérienne", value: "Nigérienne", code: "ne" },
    { label: "Nigériane", value: "Nigériane", code: "ng" },
    { label: "Norvégienne", value: "Norvégienne", code: "no" },
    { label: "Néo-zélandaise", value: "Néo-zélandaise", code: "nz" },
    { label: "Ougandaise", value: "Ougandaise", code: "ug" },
    { label: "Pakistanaise", value: "Pakistanaise", code: "pk" },
    { label: "Palestinienne", value: "Palestinienne", code: "ps" },
    { label: "Panaméenne", value: "Panaméenne", code: "pa" },
    { label: "Paraguayenne", value: "Paraguayenne", code: "py" },
    { label: "Néerlandaise", value: "Néerlandaise", code: "nl" },
    { label: "Péruvienne", value: "Péruvienne", code: "pe" },
    { label: "Philippine", value: "Philippine", code: "ph" },
    { label: "Polonaise", value: "Polonaise", code: "pl" },
    { label: "Portugaise", value: "Portugaise", code: "pt" },
    { label: "Qatarienne", value: "Qatarienne", code: "qa" },
    { label: "Roumaine", value: "Roumaine", code: "ro" },
    { label: "Russe", value: "Russe", code: "ru" },
    { label: "Rwandaise", value: "Rwandaise", code: "rw" },
    { label: "Saoudienne", value: "Saoudienne", code: "sa" },
    { label: "Sénégalaise", value: "Sénégalaise", code: "sn" },
    { label: "Serbe", value: "Serbe", code: "rs" },
    { label: "Somalienne", value: "Somalienne", code: "so" },
    { label: "Soudanaise", value: "Soudanaise", code: "sd" },
    { label: "Suédoise", value: "Suédoise", code: "se" },
    { label: "Suisse", value: "Suisse", code: "ch" },
    { label: "Syrienne", value: "Syrienne", code: "sy" },
    { label: "Tanzanienne", value: "Tanzanienne", code: "tz" },
    { label: "Tchadienne", value: "Tchadienne", code: "td" },
    { label: "Tchèque", value: "Tchèque", code: "cz" },
    { label: "Thaïlandaise", value: "Thaïlandaise", code: "th" },
    { label: "Togolaise", value: "Togolaise", code: "tg" },
    { label: "Tunisienne", value: "Tunisienne", code: "tn" },
    { label: "Turque", value: "Turque", code: "tr" },
    { label: "Ukrainienne", value: "Ukrainienne", code: "ua" },
    { label: "Uruguayenne", value: "Uruguayenne", code: "uy" },
    { label: "Vénézuélienne", value: "Vénézuélienne", code: "ve" },
    { label: "Vietnamienne", value: "Vietnamienne", code: "vn" },
    { label: "Zambienne", value: "Zambienne", code: "zm" },
    { label: "Zimbabwéenne", value: "Zimbabwéenne", code: "zw" }
];

const searchNat = ref('');
const isDropdownOpen = ref(false);
const dropdownRef = ref(null);

const filteredNationalites = computed(() => {
    if (!searchNat.value) return nationalitesList;
    const q = searchNat.value.toLowerCase();
    return nationalitesList.filter(n => n.label.toLowerCase().includes(q));
});

const selectNat = (val) => {
    formData.nationalite = val;
    isDropdownOpen.value = false;
    searchNat.value = '';
};

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
  nom: '', prenom: '', nom_jeune_fille: '', genre: '', date_naissance: '', lieu_naissance: '', nationalite: '', email: '', tel: '', tel2: '', tel3: '', bp: '', fax: '', hobbit: '', adresse: '',
  niveau_id: '', filiere_id: '', numero_table: '', annee_bac: '', serie: '', type_diplome: '', lettre_motivation: '',
  nom_resp: '', prenom_resp: '', profession_resp: '', employeur_resp: '', email_resp: '', tel_resp: '', adresse_resp: '', bp_resp: '', fax_resp: '',
  nom_tuteur: '', prenom_tuteur: '', profession_tuteur: '', employeur_tuteur: '', email_tuteur: '', tel_tuteur: '', adresse_tuteur: '', bp_tuteur: '', fax_tuteur: ''
})

const files = ref({})

const fileInputs = ref([
  { key: 'photo_identite_file', label: 'Photo d\'identité', multiple: false },
  { key: 'nationalite_file', label: 'Pièce d\'identité', multiple: false },
  { key: 'naissance_file', label: 'Acte de naissance', multiple: false },
  { key: 'certificat_medical_file', label: 'Certificat médical', multiple: false },
  { key: 'diplome_file', label: 'Dernier Diplôme', multiple: false },
  { key: 'cv_file', label: 'Curriculum Vitae', multiple: false },
  { key: 'releve_bac1', label: 'Relevés Année 1', multiple: true },
  { key: 'releve_bac2', label: 'Relevés Année 2', multiple: true },
])

const isFileSelected = (key) => {
    const f = files.value[key];
    if (Array.isArray(f)) return f.length > 0;
    return !!f;
}

const getFileName = (key) => {
    const f = files.value[key];
    if (Array.isArray(f)) {
        if (f.length === 0) return '';
        if (f.length === 1) return f[0].name;
        return `${f.length} fichiers sélectionnés`;
    }
    return f ? f.name : '';
}

const fetchDynamicDocuments = async () => {
    if (!formData.niveau_id) return;
    try {
        const { $axios } = useNuxtApp()
        let url = `/public/niveau/${formData.niveau_id}/document-requirements`
        if (formData.filiere_id) url += `?filiere_id=${formData.filiere_id}`
        const res = await $axios.get(url)
        const reqs = res.data || []
        
        if (reqs.length > 0) {
            fileInputs.value = reqs.map(r => ({
                key: r.document_key,
                label: r.nom_affichage,
                multiple: r.is_multiple == 1 || r.is_multiple === true
            }))
        } else {
            fileInputs.value = [
              { key: 'photo_identite_file', label: 'Photo d\'identité', multiple: false },
              { key: 'nationalite_file', label: 'Pièce d\'identité', multiple: false },
              { key: 'naissance_file', label: 'Acte de naissance', multiple: false },
              { key: 'certificat_medical_file', label: 'Certificat médical', multiple: false },
              { key: 'diplome_file', label: 'Dernier Diplôme', multiple: false },
              { key: 'cv_file', label: 'Curriculum Vitae', multiple: false },
              { key: 'releve_bac1', label: 'Relevés Année 1', multiple: true },
              { key: 'releve_bac2', label: 'Relevés Année 2', multiple: true },
            ]
        }
    } catch(e) {
        console.error("Erreur doc requis", e)
    }
}

watch(() => [formData.niveau_id, formData.filiere_id], () => {
    fetchDynamicDocuments()
}, { deep: true })

onMounted(async () => {
  niveaux.value = await niveauStore.fetchNiveaux()
  
  getCountryCode().then(code => {
      if (!formData.nationalite) {
          const detectedNat = nationalitesList.find(n => n.code === code);
          formData.nationalite = detectedNat ? detectedNat.value : 'Togolaise';
      }
  });

  document.addEventListener('click', (e) => {
      if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
          isDropdownOpen.value = false;
      }
  });
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

let countryCodePromise = null;
const getCountryCode = () => {
    if (!countryCodePromise) {
        countryCodePromise = fetch("https://api.country.is/")
            .then(res => res.json())
            .then(data => data.country ? data.country.toLowerCase() : 'tg')
            .catch(() => 'tg');
    }
    return countryCodePromise;
};

const initIti = (inputRef) => {
    if (inputRef.value && $intlTelInput) {
        const iti = $intlTelInput(inputRef.value, {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                getCountryCode().then(code => callback(code));
            },
            separateDialCode: true,
            useFullscreenPopup: false,
            utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.15.0/build/js/utils.js'
        });
        return iti;
    }
    return null;
}

watch(etapeActive, async (newVal) => {
    await nextTick()
    if (newVal === 0) {
        if (itiTel) itiTel.destroy();
        if (itiTel2) itiTel2.destroy();
        itiTel = initIti(phoneInput);
        itiTel2 = initIti(phone2Input);
        if (itiTel && formData.tel) itiTel.setNumber(formData.tel);
        if (itiTel2 && formData.tel2) itiTel2.setNumber(formData.tel2);
    } else if (newVal === 2) {
        if (itiTelResp) itiTelResp.destroy();
        itiTelResp = initIti(phoneRespInput);
        if (itiTelResp && formData.tel_resp) itiTelResp.setNumber(formData.tel_resp);
    } else if (newVal === 3) {
        if (itiTelTuteur) itiTelTuteur.destroy();
        itiTelTuteur = initIti(phoneTuteurInput);
        if (itiTelTuteur && formData.tel_tuteur) itiTelTuteur.setNumber(formData.tel_tuteur);
    }
}, { immediate: true })

const applyFallbackPhone = () => {
    if (etapeActive.value === 0) {
       if (itiTel) {
           const num = itiTel.getNumber();
           if (num) formData.tel = num;
           else if (phoneInput.value && phoneInput.value.value) {
               const cd = itiTel.getSelectedCountryData();
               formData.tel = (cd ? '+' + cd.dialCode : '') + ' ' + phoneInput.value.value;
           }
       }
       if (itiTel2) {
           const num = itiTel2.getNumber();
           if (num) formData.tel2 = num;
           else if (phone2Input.value && phone2Input.value.value) {
               const cd = itiTel2.getSelectedCountryData();
               formData.tel2 = (cd ? '+' + cd.dialCode : '') + ' ' + phone2Input.value.value;
           }
       }
    } else if (etapeActive.value === 2) {
       if (itiTelResp) {
           const num = itiTelResp.getNumber();
           if (num) formData.tel_resp = num;
           else if (phoneRespInput.value && phoneRespInput.value.value) {
               const cd = itiTelResp.getSelectedCountryData();
               formData.tel_resp = (cd ? '+' + cd.dialCode : '') + ' ' + phoneRespInput.value.value;
           }
       }
    } else if (etapeActive.value === 3) {
       if (itiTelTuteur) {
           const num = itiTelTuteur.getNumber();
           if (num) formData.tel_tuteur = num;
           else if (phoneTuteurInput.value && phoneTuteurInput.value.value) {
               const cd = itiTelTuteur.getSelectedCountryData();
               formData.tel_tuteur = (cd ? '+' + cd.dialCode : '') + ' ' + phoneTuteurInput.value.value;
           }
       }
    }
}

const nextStep = () => {
  applyFallbackPhone();

  // Validation step 1 (Parcours) : niveau et filière obligatoires
  if (etapeActive.value === 1) {
    if (!formData.niveau_id) {
      toastr.error('Veuillez sélectionner un niveau visé.')
      return
    }
    if (!formData.filiere_id) {
      toastr.error('Veuillez sélectionner une filière souhaitée.')
      return
    }
  }

  if (etapeActive.value < etapes.length - 1) {
    etapeActive.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  applyFallbackPhone();
  if (etapeActive.value > 0) {
    etapeActive.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const copyResponsableToTuteur = async () => {
  applyFallbackPhone();
  formData.nom_tuteur = formData.nom_resp;
  formData.prenom_tuteur = formData.prenom_resp;
  formData.profession_tuteur = formData.profession_resp;
  formData.employeur_tuteur = formData.employeur_resp;
  formData.email_tuteur = formData.email_resp;
  formData.adresse_tuteur = formData.adresse_resp;

  // Récupérer le numéro depuis l'instance ITI du responsable
  const telResp = itiTelResp ? itiTelResp.getNumber() : formData.tel_resp;
  formData.tel_tuteur = telResp;

  // Appliquer le numéro sur l'input ITI du tuteur (il est déjà monté à l'étape 3)
  await nextTick();
  if (itiTelTuteur && telResp) {
    itiTelTuteur.setNumber(telResp);
  } else if (phoneTuteurInput.value && telResp) {
    // Fallback : si l'instance n'est pas encore prête, on initialise
    if (itiTelTuteur) itiTelTuteur.destroy();
    itiTelTuteur = initIti(phoneTuteurInput);
    await nextTick();
    if (itiTelTuteur) itiTelTuteur.setNumber(telResp);
  }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB

const handleFile = (key, event, multiple) => {
  const label = fileInputs.value.find(f => f.key === key)?.label || key;
  const MAX = MAX_FILE_SIZE;

  if (multiple) {
    const selectedFiles = Array.from(event.target.files);
    const oversized = selectedFiles.find(f => f.size > MAX);
    if (oversized) {
      toastr.error(`Le fichier "${oversized.name}" est trop volumineux (max 5 Mo) pour le champ : <strong>${label}</strong>.`, 'Fichier trop lourd', { escapeHtml: false });
      event.target.value = '';
      return;
    }
    files.value[key] = selectedFiles;
  } else {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > MAX) {
      toastr.error(`Le fichier "<strong>${file.name}</strong>" est trop volumineux (max 5 Mo) pour le champ : <strong>${label}</strong>.`, 'Fichier trop lourd', { escapeHtml: false });
      event.target.value = '';
      return;
    }
    files.value[key] = file;
  }
}


const soumettreFormulaire = async () => {
  applyFallbackPhone();
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
    
    fileInputs.value.forEach(doc => {
       let k = doc.key;
       if (k in formData) {
           k = k + '_file';
       }
       if (doc.multiple) {
           if (files.value[doc.key] && files.value[doc.key].length) {
               files.value[doc.key].forEach((f, i) => data.append(`${k}[${i}]`, f))
           }
       } else {
           if (files.value[doc.key]) {
               data.append(k, files.value[doc.key])
           }
       }
    })
    
    await candidatureStore.soumettreCandidature(data)
    
    toastr.success("Votre dossier a été envoyé avec succès.", "Félicitations !")
    etapeActive.value = 0
    Object.keys(formData).forEach(k => formData[k] = '')
    files.value = {}
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

.iti {
  width: 100%;
}

/* Premium Form Elements */
.form-group {
  @apply flex flex-col gap-1.5 relative;
}

.form-group label {
  @apply text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1 transition-colors duration-300;
}

.form-group:focus-within label {
  @apply text-[#01b4d5];
}

.form-input {
  @apply w-full h-[3.5rem] px-5 bg-gray-50/60 backdrop-blur-sm border-2 border-transparent text-[#1A2238] text-[15px] font-medium rounded-xl outline-none transition-all duration-300 placeholder-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] ring-1 ring-gray-200/80;
}

.form-input:hover {
  @apply bg-white ring-gray-300 shadow-[0_4px_12px_-3px_rgba(0,0,0,0.05)];
}

.form-input:focus {
  @apply bg-white border-[#01b4d5] ring-[#01b4d5] shadow-[0_10px_25px_-5px_rgba(1,180,213,0.25)] transform -translate-y-[2px];
}

.form-input:disabled {
  @apply bg-gray-100 text-gray-400 cursor-not-allowed ring-gray-100 shadow-none transform-none;
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

<style>
/* SweetAlert Premium Overrides */
.swal-modal {
  border-radius: 1.5rem !important;
  padding: 2rem !important;
}
.swal-button {
  border-radius: 9999px !important;
  font-weight: 700 !important;
  padding: 0.8rem 2.5rem !important;
  transition: all 0.3s ease !important;
}
.swal-button--confirm {
  background: linear-gradient(to right, #01b4d5, #009ab5) !important;
  box-shadow: 0 10px 30px -10px rgba(1, 180, 213, 0.6) !important;
  color: white !important;
}
.swal-button--confirm:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 15px 35px -10px rgba(1, 180, 213, 0.8) !important;
}
.swal-button--cancel {
  background: transparent !important;
  color: #9ca3af !important;
  box-shadow: none !important;
}
.swal-button--cancel:hover {
  background: #f3f4f6 !important;
  color: #1f2937 !important;
}
</style>