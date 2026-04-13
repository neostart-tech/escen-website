<template>
  <div class="min-h-screen bg-[#f4f8fb] flex flex-col">

    <!-- ===== HEADER ===== -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-10 w-auto">
        </NuxtLink>
        <NuxtLink to="/"
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#01b4d5]/10 hover:bg-[#01b4d5] text-[#01b4d5] hover:text-white font-semibold text-sm transition-all duration-200 group">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="hidden sm:inline">Retour à l'accueil</span>
          <span class="sm:hidden">Accueil</span>
        </NuxtLink>
      </div>
    </header>

    <!-- ===== BODY ===== -->
    <div class="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">

      <!-- ===== FORM SIDE ===== -->
      <div ref="formContainer" class="flex-1 overflow-y-auto lg:max-h-[calc(100vh-64px)]">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 py-8">

          <!-- Progress Stepper -->
          <div class="mb-8">
            <div class="flex items-center justify-between relative">
              <!-- Line background -->
              <div class="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
              <!-- Line progress -->
              <div class="absolute top-5 left-0 h-0.5 bg-[#01b4d5] z-0 transition-all duration-500"
                   :style="{ width: `${((currentStep - 1) / 3) * 100}%` }"></div>

              <button v-for="step in steps" :key="step.n"
                      @click="currentStep = step.n; scrollFormToTop()"
                      class="relative z-10 flex flex-col items-center gap-1.5 group cursor-pointer">
                <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2"
                     :class="currentStep > step.n
                       ? 'bg-[#01b4d5] border-[#01b4d5] text-white'
                       : currentStep === step.n
                         ? 'bg-white border-[#01b4d5] text-[#01b4d5] shadow-md shadow-[#01b4d5]/20'
                         : 'bg-white border-gray-200 text-gray-400 group-hover:border-[#01b4d5]/50 group-hover:text-[#01b4d5]/60'">
                  <svg v-if="currentStep > step.n" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span v-else>{{ step.n }}</span>
                </div>
                <span class="text-xs font-medium hidden sm:block transition-colors duration-200"
                      :class="currentStep === step.n ? 'text-[#01b4d5]' : currentStep > step.n ? 'text-[#01b4d5]' : 'text-gray-400'">
                  {{ step.label }}
                </span>
              </button>
            </div>
            <!-- Mobile step label -->
            <p class="sm:hidden text-center mt-3 text-sm font-semibold text-[#202a50]">
              {{ steps[currentStep - 1].label }}
            </p>
          </div>

          <!-- Form Card -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Card Header -->
            <div class="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-[#01b4d5]/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="steps[currentStep - 1].icon"/>
                </svg>
              </div>
              <div>
                <h2 class="text-base font-bold text-[#202a50]">{{ steps[currentStep - 1].title }}</h2>
                <p class="text-xs text-gray-400">{{ steps[currentStep - 1].subtitle }}</p>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-6 space-y-5">

              <!-- ======= ÉTAPE 1 ======= -->
              <form v-if="currentStep === 1" @submit.prevent="goToStep2" novalidate class="space-y-5">

                <!-- Identité -->
                <div class="space-y-4">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Identité</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Nom <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.lastName" class="field-input" placeholder="DUPONT">
                    </div>
                    <div>
                      <label class="field-label">Prénoms <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.firstName" class="field-input" placeholder="Jean Marie">
                    </div>
                  </div>

                  <!-- Sexe pills -->
                  <div>
                    <label class="field-label">Sexe <span class="text-red-400">*</span></label>
                    <div class="flex gap-3 mt-1">
                      <button type="button" @click="form.gender = 'Masculin'"
                              class="flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200"
                              :class="form.gender === 'Masculin' ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                        ♂ Masculin
                      </button>
                      <button type="button" @click="form.gender = 'Féminin'"
                              class="flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200"
                              :class="form.gender === 'Féminin' ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                        ♀ Féminin
                      </button>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Date de naissance <span class="text-red-400">*</span></label>
                      <input type="date" v-model="form.birthDate" class="field-input">
                    </div>
                    <div>
                      <label class="field-label">Lieu de naissance <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.birthPlace" class="field-input" placeholder="Lomé">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Nationalité <span class="text-red-400">*</span></label>
                      <select v-model="form.nationality" class="field-input">
                        <option value="">Sélectionner</option>
                        <option v-for="country in countries" :key="country.code" :value="country.name">{{ country.name }}</option>
                      </select>
                    </div>
                    <div>
                      <label class="field-label">Pays de résidence <span class="text-red-400">*</span></label>
                      <select v-model="form.residenceCountry" class="field-input">
                        <option value="">Sélectionner</option>
                        <option v-for="country in countries" :key="country.code" :value="country.name">{{ country.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-5 space-y-4">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Contact</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Téléphone <span class="text-red-400">*</span></label>
                      <input type="tel" v-model="form.phone" class="field-input" placeholder="+228 90 00 00 00">
                    </div>
                    <div>
                      <label class="field-label">WhatsApp <span class="text-red-400">*</span></label>
                      <input type="tel" v-model="form.whatsapp" class="field-input" placeholder="+228 90 00 00 00">
                    </div>
                  </div>
                  <div>
                    <label class="field-label">Adresse email <span class="text-red-400">*</span></label>
                    <input type="email" v-model="form.email" class="field-input" placeholder="vous@email.com">
                  </div>
                  <div>
                    <label class="field-label">Adresse postale <span class="text-red-400">*</span></label>
                    <textarea v-model="form.address" class="field-input" rows="2" placeholder="Rue, quartier, ville…"></textarea>
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-5 space-y-4">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Personne à contacter en cas d'urgence</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Nom complet <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.emergencyContact.name" class="field-input">
                    </div>
                    <div>
                      <label class="field-label">Lien de parenté <span class="text-red-400">*</span></label>
                      <select v-model="form.emergencyContact.relationship" class="field-input">
                        <option value="">Sélectionner</option>
                        <option value="Parent">Parent</option>
                        <option value="Conjoint(e)">Conjoint(e)</option>
                        <option value="Frère/Soeur">Frère / Sœur</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Téléphone <span class="text-red-400">*</span></label>
                      <input type="tel" v-model="form.emergencyContact.phone" class="field-input">
                    </div>
                    <div>
                      <label class="field-label">Email</label>
                      <input type="email" v-model="form.emergencyContact.email" class="field-input">
                    </div>
                  </div>
                </div>

                <div class="pt-2">
                  <button type="submit" class="btn-primary w-full">
                    Continuer
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- ======= ÉTAPE 2 ======= -->
              <form v-if="currentStep === 2" @submit.prevent="goToStep3" novalidate class="space-y-5">

                <!-- Niveau -->
                <div class="space-y-3">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Niveau de formation <span class="text-red-400">*</span></h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label v-for="lvl in [
                      { val: 'licence', label: 'Licence Professionnelle', badge: 'BAC+3' },
                      { val: 'master', label: 'Master Professionnel', badge: 'BAC+5' },
                      { val: 'executive', label: 'Executive Master', badge: 'Pro' },
                      { val: 'certificat', label: 'Certificat', badge: 'Court' }
                    ]" :key="lvl.val"
                      class="relative flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200"
                      :class="form.level === lvl.val ? 'border-[#01b4d5] bg-[#01b4d5]/5' : 'border-gray-200 hover:border-[#01b4d5]/40'">
                      <input type="radio" v-model="form.level" :value="lvl.val" @change="updatePrograms" class="hidden">
                      <div class="w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 flex items-center justify-center transition-all"
                           :class="form.level === lvl.val ? 'border-[#01b4d5]' : 'border-gray-300'">
                        <div v-if="form.level === lvl.val" class="w-2 h-2 rounded-full bg-[#01b4d5]"></div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-[#202a50] leading-tight">{{ lvl.label }}</p>
                        <span class="inline-block mt-1 px-2 py-0.5 bg-[#01b4d5]/10 text-[#01b4d5] text-xs font-bold rounded-full">{{ lvl.badge }}</span>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Programme -->
                <div v-if="form.level" class="space-y-2">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Programme <span class="text-red-400">*</span></h3>
                  <div class="space-y-2">
                    <label v-for="program in filteredPrograms" :key="program"
                           class="flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200"
                           :class="form.program === program ? 'border-[#01b4d5] bg-[#01b4d5]/5' : 'border-gray-100 hover:border-[#01b4d5]/30'">
                      <input type="radio" v-model="form.program" :value="program" class="hidden">
                      <div class="w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
                           :class="form.program === program ? 'border-[#01b4d5]' : 'border-gray-300'">
                        <div v-if="form.program === program" class="w-2 h-2 rounded-full bg-[#01b4d5]"></div>
                      </div>
                      <span class="text-sm font-medium text-gray-700">{{ program }}</span>
                    </label>
                  </div>
                </div>

                <!-- Parcours académique -->
                <div class="border-t border-gray-100 pt-5 space-y-4">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Parcours académique</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Dernier diplôme <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.diploma.name" class="field-input" placeholder="BAC+2, Licence…">
                    </div>
                    <div>
                      <label class="field-label">Filière / Spécialité <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.diploma.field" class="field-input" placeholder="Informatique, Commerce…">
                    </div>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="field-label">Année d'obtention <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.diploma.year" class="field-input" placeholder="2023">
                    </div>
                    <div>
                      <label class="field-label">Établissement <span class="text-red-400">*</span></label>
                      <input type="text" v-model="form.diploma.institution" class="field-input" placeholder="Université de…">
                    </div>
                  </div>
                  <div>
                    <label class="field-label">Expérience professionnelle</label>
                    <select v-model="form.experience" class="field-input">
                      <option value="">Sélectionner</option>
                      <option value="0-1">Moins d'1 an</option>
                      <option value="1-3">1 à 3 ans</option>
                      <option value="3-5">3 à 5 ans</option>
                      <option value="5+">Plus de 5 ans</option>
                    </select>
                  </div>
                </div>

                <!-- Financement -->
                <div class="border-t border-gray-100 pt-5 space-y-3">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Financement <span class="text-red-400">*</span></h3>
                  <div class="flex flex-wrap gap-2">
                    <button v-for="src in ['Vous-même', 'Parent/tuteur', 'Employeur', 'Bourse', 'Autre']" :key="src"
                            type="button" @click="form.financing.source = src"
                            class="px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all duration-200"
                            :class="form.financing.source === src ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                      {{ src }}
                    </button>
                  </div>
                  <div v-if="form.financing.source === 'Autre'">
                    <label class="field-label">Précisez <span class="text-red-400">*</span></label>
                    <input type="text" v-model="form.financing.otherSource" class="field-input">
                  </div>
                  <div v-if="form.financing.source && form.financing.source !== 'Vous-même'" class="bg-gray-50 rounded-xl p-4 space-y-3">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Coordonnées du sponsor</p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label class="field-label">Nom</label>
                        <input type="text" v-model="form.financing.sponsorName" class="field-input">
                      </div>
                      <div>
                        <label class="field-label">Téléphone</label>
                        <input type="tel" v-model="form.financing.sponsorPhone" class="field-input">
                      </div>
                      <div>
                        <label class="field-label">Email</label>
                        <input type="email" v-model="form.financing.sponsorEmail" class="field-input">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex gap-3 pt-2">
                  <button type="button" @click="currentStep = 1; scrollFormToTop()" class="btn-secondary flex-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Retour
                  </button>
                  <button type="submit" class="btn-primary flex-[2]">
                    Continuer
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- ======= ÉTAPE 3 ======= -->
              <form v-if="currentStep === 3" @submit.prevent="goToStep4" novalidate class="space-y-5">

                <!-- Découverte -->
                <div class="space-y-3">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Comment avez-vous connu ESCEN ? <span class="text-red-400">*</span></h3>
                  <div class="flex flex-wrap gap-2">
                    <button v-for="src in discoverySources" :key="src"
                            type="button" @click="form.discovery.source = src"
                            class="px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all duration-200"
                            :class="form.discovery.source === src ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                      {{ src }}
                    </button>
                  </div>
                  <div v-if="form.discovery.source === 'Autre'">
                    <label class="field-label">Précisez <span class="text-red-400">*</span></label>
                    <input type="text" v-model="form.discovery.otherSource" class="field-input">
                  </div>
                  <div v-if="form.discovery.source === 'Recommandation'" class="bg-gray-50 rounded-xl p-4 space-y-3">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Personne qui vous a recommandé</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label class="field-label">Nom</label>
                        <input type="text" v-model="form.discovery.referrerName" class="field-input">
                      </div>
                      <div>
                        <label class="field-label">Contact</label>
                        <input type="text" v-model="form.discovery.referrerContact" class="field-input">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Hébergement -->
                <div class="border-t border-gray-100 pt-5 space-y-3">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Hébergement <span class="text-red-400">*</span></h3>
                  <p class="text-sm text-gray-500">Auriez-vous besoin d'assistance pour votre hébergement ?</p>
                  <div class="flex gap-3">
                    <button type="button" @click="form.accommodation.needAssistance = 'Oui'"
                            class="flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200"
                            :class="form.accommodation.needAssistance === 'Oui' ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                      Oui
                    </button>
                    <button type="button" @click="form.accommodation.needAssistance = 'Non'"
                            class="flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200"
                            :class="form.accommodation.needAssistance === 'Non' ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                      Non
                    </button>
                  </div>
                  <div v-if="form.accommodation.needAssistance === 'Oui'" class="space-y-2">
                    <label class="field-label">Type d'hébergement souhaité</label>
                    <div class="flex flex-wrap gap-2">
                      <button v-for="type in accommodationTypes" :key="type"
                              type="button" @click="form.accommodation.type = type"
                              class="px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all duration-200"
                              :class="form.accommodation.type === type ? 'border-[#01b4d5] bg-[#01b4d5]/8 text-[#01b4d5]' : 'border-gray-200 text-gray-500 hover:border-[#01b4d5]/40'">
                        {{ type }}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex gap-3 pt-2">
                  <button type="button" @click="currentStep = 2; scrollFormToTop()" class="btn-secondary flex-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Retour
                  </button>
                  <button type="submit" class="btn-primary flex-[2]">
                    Continuer
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- ======= ÉTAPE 4 ======= -->
              <div v-if="currentStep === 4" class="space-y-5">

                <!-- Récap niveau choisi -->
                <div v-if="form.level" class="flex items-center gap-3 p-3 bg-[#01b4d5]/8 rounded-xl border border-[#01b4d5]/20">
                  <svg class="w-5 h-5 text-[#01b4d5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-sm font-medium text-[#202a50]">
                    Documents pour <span class="text-[#01b4d5]">{{ levelTitle.replace(' :', '') }}</span>
                    <span v-if="form.program"> — {{ form.program }}</span>
                  </p>
                </div>
                <div v-else class="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-sm text-amber-700">Aucun niveau sélectionné — revenez à l'étape 2.</p>
                </div>

                <!-- Uploads -->
                <div class="space-y-4">
                  <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Documents requis</h3>
                  <div v-for="doc in getRequiredDocuments" :key="doc.key" class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <label class="field-label mb-0">
                        {{ doc.index }}. {{ doc.label }}
                        <span v-if="doc.multiple" class="ml-1 text-xs text-gray-400 font-normal">({{ form.documents[doc.key].length }}/{{ doc.maxFiles || 5 }})</span>
                      </label>
                      <span v-if="form.documents[doc.key].length > 0"
                            class="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Ajouté
                      </span>
                    </div>

                    <div class="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all duration-200"
                         :class="{
                           'border-emerald-400 bg-emerald-50': form.documents[doc.key].length > 0,
                           'border-[#01b4d5] bg-[#01b4d5]/5': isDraggingOver === doc.key,
                           'border-gray-200 hover:border-[#01b4d5]/50 hover:bg-gray-50': form.documents[doc.key].length === 0 && isDraggingOver !== doc.key
                         }"
                         @click="triggerFileInput(doc.key)"
                         @dragover.prevent="handleDragOver(doc.key)"
                         @dragleave.prevent="handleDragLeave(doc.key)"
                         @drop.prevent="handleDrop(doc.key, $event)">

                      <input :id="`fileInput-${doc.key}`" type="file"
                             @change="handleFileUpload(doc.key, $event)"
                             :accept="doc.accept" :multiple="doc.multiple" class="hidden">

                      <div v-if="form.documents[doc.key].length === 0" class="py-2">
                        <svg class="w-7 h-7 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                        <p class="text-sm text-gray-400">Cliquer ou glisser-déposer</p>
                        <p class="text-xs text-gray-300 mt-0.5">{{ doc.accepted }}</p>
                      </div>

                      <div v-else class="space-y-2 text-left">
                        <div v-for="(file, idx) in form.documents[doc.key]" :key="idx"
                             class="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
                          <div class="flex items-center gap-2 min-w-0">
                            <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                            <div class="min-w-0">
                              <p class="text-xs font-medium text-gray-700 truncate">{{ file.name }}</p>
                              <p class="text-xs text-gray-400">{{ formatFileSize(file.size) }}</p>
                            </div>
                          </div>
                          <button type="button" @click.stop="removeFile(doc.key, idx)"
                                  class="ml-2 p-1 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors flex-shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                          </button>
                        </div>
                        <button v-if="doc.multiple" type="button" @click.stop="triggerFileInput(doc.key)"
                                class="text-xs font-medium text-[#01b4d5] hover:text-[#202a50] transition-colors">
                          + Ajouter un autre fichier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Déclaration -->
                <div class="border-t border-gray-100 pt-5">
                  <label class="flex items-start gap-3 cursor-pointer group">
                    <div class="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                         :class="form.declaration ? 'bg-[#01b4d5] border-[#01b4d5]' : 'border-gray-300 group-hover:border-[#01b4d5]/50'">
                      <svg v-if="form.declaration" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <input type="checkbox" v-model="form.declaration" class="hidden">
                    <span class="text-sm text-gray-600 leading-relaxed">
                      Je certifie sur l'honneur l'exactitude des informations fournies et j'accepte les
                      <span class="text-[#01b4d5] font-medium">conditions d'inscription</span>. <span class="text-red-400">*</span>
                    </span>
                  </label>
                </div>

                <div class="flex gap-3 pt-2">
                  <button type="button" @click="currentStep = 3; scrollFormToTop()" class="btn-secondary flex-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Retour
                  </button>
                  <button type="button" @click="submitForm"
                          class="flex-[2] flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
                          :class="canSubmit && !isSubmitting
                            ? 'bg-[#202a50] hover:bg-[#01b4d5] text-white shadow-lg shadow-[#202a50]/20 hover:shadow-[#01b4d5]/30'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'">
                    <svg v-if="isSubmitting" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ isSubmitting ? 'Envoi en cours…' : 'Valider l\'inscription' }}
                  </button>
                </div>
              </div>

            </div>
          </div>
          <!-- Bas de page form -->
          <p class="text-center text-xs text-gray-400 mt-6 pb-8">
            Besoin d'aide ?
            <a href="tel:+22898012727" class="text-[#01b4d5] hover:underline">+228 98 01 27 27</a>
            ·
            <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a>
          </p>
        </div>
      </div>

      <!-- ===== PANNEAU DROIT (desktop) ===== -->
      <div class="hidden lg:flex flex-col w-[380px] xl:w-[420px] flex-shrink-0 bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] sticky top-16 h-[calc(100vh-32px)] overflow-hidden">
        <!-- Déco -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -right-20 w-64 h-64 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 right-8 w-1 h-24 bg-[#01b4d5]/20 rounded-full"></div>
        </div>

        <div class="relative z-10 flex flex-col h-full px-8 py-10">
          <!-- Logo + Titre -->
          <div class="mb-5">
            <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-12 w-auto brightness-0 invert mb-6">
            <h2 class="text-2xl font-bold text-white leading-snug">
              Rejoignez l'excellence numérique
            </h2>
            <p class="text-sm text-gray-400 leading-relaxed">
              Formez-vous aux métiers de demain avec des experts du secteur digital.
            </p>
          </div>

          <!-- Avantages -->
          <div class="space-y-4 flex-1">
            <div v-for="item in sidebarItems" :key="item.title"
                 class="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors duration-200">
              <div class="w-10 h-10 rounded-xl bg-[#01b4d5]/15 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon"/>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-white mb-0.5">{{ item.title }}</p>
                <p class="text-xs text-gray-400 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="mt-8 grid grid-cols-3 gap-3">
            <div v-for="stat in sidebarStats" :key="stat.label" class="text-center">
              <p class="text-xl font-bold text-[#01b4d5]">{{ stat.value }}</p>
              <p class="text-xs text-gray-400 mt-0.5">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MODALE AIDE ===== -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="showHelp" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-[#202a50]">Besoin d'aide ?</h3>
            <button @click="showHelp = false" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="space-y-3 text-sm text-gray-600">
            <a href="mailto:hello@escen.university" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              hello@escen.university
            </a>
            <a href="tel:+22898012727" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div class="w-8 h-8 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
              </div>
              +228 98 01 27 27
            </a>
          </div>
          <button @click="showHelp = false" class="mt-5 w-full btn-primary">Fermer</button>
        </div>
      </div>
    </transition>

    <!-- ===== TOAST SUCCÈS ===== -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
      <div v-if="showNotification"
           class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#202a50] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 min-w-[300px]">
        <div class="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-semibold text-sm">Inscription envoyée !</p>
          <p class="text-xs text-gray-400">Vous recevrez un email de confirmation.</p>
        </div>
      </div>
    </transition>

    <!-- Bouton aide flottant -->
    <button @click="showHelp = true"
            class="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#202a50] hover:bg-[#01b4d5] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import swal from 'sweetalert'

// Current step
const currentStep = ref(1)
const formContainer = ref(null)

const steps = [
  { n: 1, label: 'Informations', title: 'Informations personnelles', subtitle: 'Identité, contact et personne d\'urgence', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { n: 2, label: 'Formation', title: 'Choix de formation', subtitle: 'Niveau, programme et parcours académique', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { n: 3, label: 'Profil', title: 'Informations complémentaires', subtitle: 'Découverte et hébergement', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { n: 4, label: 'Documents', title: 'Documents & Validation', subtitle: 'Téléchargement des pièces requises', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

const sidebarItems = [
  { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', title: 'Diplôme reconnu', desc: 'Diplômes accrédités et reconnus à l\'échelle nationale et internationale.' },
  { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Insertion professionnelle', desc: 'Réseau de partenaires et accompagnement à l\'emploi dès la 1ère année.' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Formateurs experts', desc: 'Corps enseignant composé de praticiens issus du secteur professionnel.' },
]

const sidebarStats = [
  { value: '500+', label: 'Étudiants' },
  { value: '95%', label: 'Insertion' },
  { value: '4', label: 'Filières' },
]

const scrollFormToTop = () => {
  if (formContainer.value) {
    formContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Liste complète des pays
const countries = [
  { code: 'AF', name: 'Afghanistan' },
  { code: 'ZA', name: 'Afrique du Sud' },
  { code: 'AL', name: 'Albanie' },
  { code: 'DZ', name: 'Algérie' },
  { code: 'DE', name: 'Allemagne' },
  { code: 'AD', name: 'Andorre' },
  { code: 'AO', name: 'Angola' },
  { code: 'AG', name: 'Antigua-et-Barbuda' },
  { code: 'SA', name: 'Arabie saoudite' },
  { code: 'AR', name: 'Argentine' },
  { code: 'AM', name: 'Arménie' },
  { code: 'AU', name: 'Australie' },
  { code: 'AT', name: 'Autriche' },
  { code: 'AZ', name: 'Azerbaïdjan' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BH', name: 'Bahreïn' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbade' },
  { code: 'BE', name: 'Belgique' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Bénin' },
  { code: 'BT', name: 'Bhoutan' },
  { code: 'BY', name: 'Biélorussie' },
  { code: 'MM', name: 'Birmanie' },
  { code: 'BO', name: 'Bolivie' },
  { code: 'BA', name: 'Bosnie-Herzégovine' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BR', name: 'Brésil' },
  { code: 'BN', name: 'Brunei' },
  { code: 'BG', name: 'Bulgarie' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'KH', name: 'Cambodge' },
  { code: 'CM', name: 'Cameroun' },
  { code: 'CA', name: 'Canada' },
  { code: 'CV', name: 'Cap-Vert' },
  { code: 'CL', name: 'Chili' },
  { code: 'CN', name: 'Chine' },
  { code: 'CY', name: 'Chypre' },
  { code: 'CO', name: 'Colombie' },
  { code: 'KM', name: 'Comores' },
  { code: 'CG', name: 'Congo' },
  { code: 'CD', name: 'Congo (RDC)' },
  { code: 'KP', name: 'Corée du Nord' },
  { code: 'KR', name: 'Corée du Sud' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'CI', name: 'Côte d\'Ivoire' },
  { code: 'HR', name: 'Croatie' },
  { code: 'CU', name: 'Cuba' },
  { code: 'DK', name: 'Danemark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominique' },
  { code: 'EG', name: 'Égypte' },
  { code: 'AE', name: 'Émirats arabes unis' },
  { code: 'EC', name: 'Équateur' },
  { code: 'ER', name: 'Érythrée' },
  { code: 'ES', name: 'Espagne' },
  { code: 'EE', name: 'Estonie' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'US', name: 'États-Unis' },
  { code: 'ET', name: 'Éthiopie' },
  { code: 'FJ', name: 'Fidji' },
  { code: 'FI', name: 'Finlande' },
  { code: 'FR', name: 'France' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambie' },
  { code: 'GE', name: 'Géorgie' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GR', name: 'Grèce' },
  { code: 'GD', name: 'Grenade' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GN', name: 'Guinée' },
  { code: 'GQ', name: 'Guinée équatoriale' },
  { code: 'GW', name: 'Guinée-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haïti' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HU', name: 'Hongrie' },
  { code: 'IN', name: 'Inde' },
  { code: 'ID', name: 'Indonésie' },
  { code: 'IQ', name: 'Irak' },
  { code: 'IR', name: 'Iran' },
  { code: 'IE', name: 'Irlande' },
  { code: 'IS', name: 'Islande' },
  { code: 'IL', name: 'Israël' },
  { code: 'IT', name: 'Italie' },
  { code: 'JM', name: 'Jamaïque' },
  { code: 'JP', name: 'Japon' },
  { code: 'JO', name: 'Jordanie' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KG', name: 'Kirghizistan' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KW', name: 'Koweït' },
  { code: 'LA', name: 'Laos' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LV', name: 'Lettonie' },
  { code: 'LB', name: 'Liban' },
  { code: 'LR', name: 'Libéria' },
  { code: 'LY', name: 'Libye' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lituanie' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MK', name: 'Macédoine du Nord' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MY', name: 'Malaisie' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malte' },
  { code: 'MA', name: 'Maroc' },
  { code: 'MH', name: 'Marshall' },
  { code: 'MU', name: 'Maurice' },
  { code: 'MR', name: 'Mauritanie' },
  { code: 'MX', name: 'Mexique' },
  { code: 'FM', name: 'Micronésie' },
  { code: 'MD', name: 'Moldavie' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolie' },
  { code: 'ME', name: 'Monténégro' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'NA', name: 'Namibie' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Népal' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigéria' },
  { code: 'NO', name: 'Norvège' },
  { code: 'NZ', name: 'Nouvelle-Zélande' },
  { code: 'OM', name: 'Oman' },
  { code: 'UG', name: 'Ouganda' },
  { code: 'UZ', name: 'Ouzbékistan' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PW', name: 'Palaos' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papouasie-Nouvelle-Guinée' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'NL', name: 'Pays-Bas' },
  { code: 'PE', name: 'Pérou' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PL', name: 'Pologne' },
  { code: 'PT', name: 'Portugal' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RO', name: 'Roumanie' },
  { code: 'GB', name: 'Royaume-Uni' },
  { code: 'RU', name: 'Russie' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'KN', name: 'Saint-Christophe-et-Niévès' },
  { code: 'SM', name: 'Saint-Marin' },
  { code: 'VC', name: 'Saint-Vincent-et-les-Grenadines' },
  { code: 'LC', name: 'Sainte-Lucie' },
  { code: 'SV', name: 'Salvador' },
  { code: 'WS', name: 'Samoa' },
  { code: 'ST', name: 'Sao Tomé-et-Principe' },
  { code: 'SN', name: 'Sénégal' },
  { code: 'RS', name: 'Serbie' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapour' },
  { code: 'SK', name: 'Slovaquie' },
  { code: 'SI', name: 'Slovénie' },
  { code: 'SO', name: 'Somalie' },
  { code: 'SD', name: 'Soudan' },
  { code: 'SS', name: 'Soudan du Sud' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SE', name: 'Suède' },
  { code: 'CH', name: 'Suisse' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SY', name: 'Syrie' },
  { code: 'TJ', name: 'Tadjikistan' },
  { code: 'TZ', name: 'Tanzanie' },
  { code: 'TD', name: 'Tchad' },
  { code: 'CZ', name: 'Tchéquie' },
  { code: 'TH', name: 'Thaïlande' },
  { code: 'TL', name: 'Timor oriental' },
  { code: 'TG', name: 'Togo' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinité-et-Tobago' },
  { code: 'TN', name: 'Tunisie' },
  { code: 'TM', name: 'Turkménistan' },
  { code: 'TR', name: 'Turquie' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VA', name: 'Vatican' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'YE', name: 'Yémen' },
  { code: 'ZM', name: 'Zambie' },
  { code: 'ZW', name: 'Zimbabwe' }
]

// Form state
const form = reactive({
  // Personal Information
  lastName: '',
  firstName: '',
  gender: '',
  birthDate: '',
  birthPlace: '',
  nationality: '',
  residenceCountry: '',
  phone: '',
  whatsapp: '',
  email: '',
  address: '',
 
  // Emergency Contact
  emergencyContact: {
    name: '',
    relationship: '',
    phone: '',
    email: ''
  },
 
  // Formation Choice
  level: '',
  program: '',
 
  // Education
  diploma: {
    name: '',
    field: '',
    year: '',
    institution: ''
  },
  experience: '',
 
  // Financing
  financing: {
    source: '',
    otherSource: '',
    sponsorName: '',
    sponsorPhone: '',
    sponsorEmail: ''
  },
 
  // Discovery
  discovery: {
    source: '',
    otherSource: '',
    referrerName: '',
    referrerContact: ''
  },
 
  // Accommodation
  accommodation: {
    needAssistance: '',
    type: ''
  },
 
  // Documents - Modifié pour gérer plusieurs fichiers
  documents: {
    // Licence
    bac2Transcript: [],
    motivationLetterLicence: [],
    passportPhotoLicence: [],
    
    // Master
    motivationLetterMaster: [],
    cvMaster: [],
    licenceTranscript: [],
    licenceAttestation: [],
    passportPhotoMaster: [],
    
    // Executive Master
    passportPhotoExecutive: [],
    nationalIdExecutive: [],
    licenceAttestationExecutive: [],
    master1Proof: [],
    cvExecutive: [],
    
    // Certificat
    passportPhotoCertificat: [],
    nationalIdCertificat: [],
    lastDiplomaCopy: [],
    cvCertificat: []
  },
 
  declaration: false
})

const isSubmitting = ref(false)
const isDraggingOver = ref(null)
const showNotification = ref(false)
const showHelp = ref(false)

// Data arrays
const discoverySources = [
  'Facebook',
  'LinkedIn',
  'Instagram',
  'Tik Tok',
  'Whatsapp',
  'Recherche en ligne',
  'Recommandation',
  'Autre'
]

const accommodationTypes = [
  'Résidence étudiante',
  'Appartement seul',
  'Colocation',
  'Famille d\'accueil'
]

// Documents par niveau (modifiés pour gérer plusieurs fichiers)
const licenceDocuments = [
  {
    key: 'bac2Transcript',
    label: 'Copie du relevé des notes du BAC+2',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 3
  },
  {
    key: 'motivationLetterLicence',
    label: 'Lettre de motivation',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX',
    multiple: false,
    maxFiles: 1
  },
  {
    key: 'passportPhotoLicence',
    label: 'Photo passeport',
    accept: '.jpg,.jpeg,.png',
    accepted: 'JPG, JPEG, PNG',
    multiple: false,
    maxFiles: 1
  }
]

const masterDocuments = [
  {
    key: 'motivationLetterMaster',
    label: 'Lettre de motivation',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX',
    multiple: false,
    maxFiles: 1
  },
  {
    key: 'cvMaster',
    label: 'Curriculum vitæ',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX',
    multiple: false,
    maxFiles: 1
  },
  {
    key: 'licenceTranscript',
    label: 'Copie du relevé de Licence',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 3
  },
  {
    key: 'licenceAttestation',
    label: 'Copie de l\'attestation de Licence',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 2
  },
  {
    key: 'passportPhotoMaster',
    label: 'Photo passeport',
    accept: '.jpg,.jpeg,.png',
    accepted: 'JPG, JPEG, PNG',
    multiple: false,
    maxFiles: 1
  }
]

const executiveDocuments = [
  {
    key: 'passportPhotoExecutive',
    label: 'Photo passeport',
    accept: '.jpg,.jpeg,.png',
    accepted: 'JPG, JPEG, PNG',
    multiple: false,
    maxFiles: 1
  },
  {
    key: 'nationalIdExecutive',
    label: 'Copie de la pièce nationale d\'identité ou du passeport',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 2
  },
  {
    key: 'licenceAttestationExecutive',
    label: 'Copie légalisée de l\'attestation de licence',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 2
  },
  {
    key: 'master1Proof',
    label: 'Preuve justificative du niveau Master 1',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 3
  },
  {
    key: 'cvExecutive',
    label: 'Curriculum vitæ',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX',
    multiple: false,
    maxFiles: 1
  }
]

const certificatDocuments = [
  {
    key: 'passportPhotoCertificat',
    label: 'Photo passeport',
    accept: '.jpg,.jpeg,.png',
    accepted: 'JPG, JPEG, PNG',
    multiple: false,
    maxFiles: 1
  },
  {
    key: 'nationalIdCertificat',
    label: 'Copie de la pièce nationale d\'identité ou du passeport',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 2
  },
  {
    key: 'lastDiplomaCopy',
    label: 'Copie légalisée du dernier diplôme obtenu',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG',
    multiple: true,
    maxFiles: 3
  },
  {
    key: 'cvCertificat',
    label: 'Curriculum vitae',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX',
    multiple: false,
    maxFiles: 1
  }
]

// Programs data
const programs = {
  licence: [
    'Marketing Digital & E-commerce',
    'Finance Digitale',
    'Management de Projets Numériques',
    'Intelligence Artificielle & Génie Logiciel'
  ],
  master: [
    'Marketing Digital',
    'Finance Digitale',
    'Management de Projets Numériques',
    'Intelligence Artificielle & Génie Logiciel'
  ],
  executive: [
    'Finance Digitale'
  ],
  certificat: [
    'Marketing Digital 101',
    'Marketing Digital 201',
    'Finance Digitale 101',
    'Finance Digitale 201',
    'Management de Projets Numériques 101',
    'Management de Projets Numériques 201',
    'Economie Numérique 101',
    'Economie Numérique 201'
  ]
}

// Computed properties
const filteredPrograms = computed(() => {
  return form.level ? programs[form.level] : []
})

const levelTitle = computed(() => {
  const titles = {
    licence: 'Choisissez la licence professionnelle :',
    master: 'Choisissez le Master professionnel :',
    executive: 'Choisissez l\'Executive Master :',
    certificat: 'Choisissez le Certificat :'
  }
  return titles[form.level] || ''
})

// Documents requis selon le niveau
const getRequiredDocuments = computed(() => {
  let documents = []
  
  switch (form.level) {
    case 'licence':
      documents = licenceDocuments
      break
    case 'master':
      documents = masterDocuments
      break
    case 'executive':
      documents = executiveDocuments
      break
    case 'certificat':
      documents = certificatDocuments
      break
  }
  
  // Ajouter un index pour l'affichage
  return documents.map((doc, index) => ({
    ...doc,
    index: index + 1
  }))
})

const canSubmit = computed(() => {
  if (!form.declaration) return false
  
  // Vérifier tous les documents requis pour le niveau sélectionné
  const requiredDocs = getRequiredDocuments.value
  return requiredDocs.every(doc => {
    // Pour les documents qui n'acceptent pas multiple, vérifier qu'il y a au moins 1 fichier
    // Pour les documents qui acceptent multiple, vérifier qu'il y a au moins 1 fichier
    return form.documents[doc.key].length > 0
  })
})

// Fonction utilitaire pour formater la taille des fichiers
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Navigation functions
const goToStep2 = () => {
  currentStep.value = 2
  scrollFormToTop()
}

const goToStep3 = () => {
  currentStep.value = 3
  scrollFormToTop()
}

const goToStep4 = () => {
  currentStep.value = 4
  scrollFormToTop()
}

// Update programs when level changes
const updatePrograms = () => {
  form.program = ''
}

// File handling
const triggerFileInput = (field) => {
  const input = document.getElementById(`fileInput-${field}`)
  if (input) {
    input.click()
  }
}

const handleDragOver = (field, event) => {
  isDraggingOver.value = field
  event.preventDefault()
}

const handleDragLeave = (field) => {
  if (isDraggingOver.value === field) {
    isDraggingOver.value = null
  }
}

const handleDrop = (field, event) => {
  event.preventDefault()
  isDraggingOver.value = null
 
  const files = Array.from(event.dataTransfer.files)
  if (files && files.length > 0) {
    handleFileUpload(field, { target: { files } })
  }
}

const handleFileUpload = (field, event) => {
  const files = Array.from(event.target.files)
  if (!files.length) return

  // Récupérer la configuration du document
  const docConfig = getDocumentConfig(field)
  
  // Vérifier la limite de fichiers
  if (docConfig.maxFiles && (form.documents[field].length + files.length) > docConfig.maxFiles) {
    swal({ title: 'Trop de fichiers', text: `Maximum ${docConfig.maxFiles} fichier(s) autorisé(s) pour ce document.`, icon: 'error', button: 'OK' })
    return
  }

  // Valider chaque fichier
  const validFiles = []
  
  files.forEach(file => {
    // Taille max selon le type de document
    let maxSize = 5 * 1024 * 1024 // 5MB par défaut
    
    // Documents qui peuvent être plus gros
    if (field.includes('Transcript') || field.includes('Diploma') || field.includes('Attestation')) {
      maxSize = 10 * 1024 * 1024 // 10MB
    }
    
    if (file.size > maxSize) {
      swal({ title: 'Fichier trop volumineux', text: `"${file.name}" dépasse la limite autorisée (${maxSize === 10 * 1024 * 1024 ? '10MB' : '5MB'}).`, icon: 'error', button: 'OK' })
      return
    }
    
    validFiles.push(file)
  })

  // Ajouter les fichiers valides
  if (validFiles.length > 0) {
    form.documents[field] = [...form.documents[field], ...validFiles]
  }
  
  // Réinitialiser l'input pour pouvoir sélectionner les mêmes fichiers
  event.target.value = ''
}

// Nouvelle fonction pour récupérer la configuration d'un document
const getDocumentConfig = (field) => {
  // Chercher dans tous les types de documents
  const allDocs = [...licenceDocuments, ...masterDocuments, ...executiveDocuments, ...certificatDocuments]
  return allDocs.find(doc => doc.key === field) || {}
}

const removeFile = (field, index) => {
  form.documents[field].splice(index, 1)
}

// Fonction pour préparer les données pour l'envoi
const prepareFormData = () => {
  const formData = new FormData()
  
  // Ajouter les données textuelles
  formData.append('lastName', form.lastName)
  formData.append('firstName', form.firstName)
  formData.append('gender', form.gender)
  formData.append('birthDate', form.birthDate)
  formData.append('birthPlace', form.birthPlace)
  formData.append('nationality', form.nationality)
  formData.append('residenceCountry', form.residenceCountry)
  formData.append('phone', form.phone)
  formData.append('whatsapp', form.whatsapp)
  formData.append('email', form.email)
  formData.append('address', form.address)
  
  // Contact d'urgence
  formData.append('emergencyContact[name]', form.emergencyContact.name)
  formData.append('emergencyContact[relationship]', form.emergencyContact.relationship)
  formData.append('emergencyContact[phone]', form.emergencyContact.phone)
  formData.append('emergencyContact[email]', form.emergencyContact.email || '')
  
  // Formation
  formData.append('level', form.level)
  formData.append('program', form.program)
  
  // Diplôme
  formData.append('diploma[name]', form.diploma.name)
  formData.append('diploma[field]', form.diploma.field)
  formData.append('diploma[year]', form.diploma.year)
  formData.append('diploma[institution]', form.diploma.institution)
  formData.append('experience', form.experience || '')
  
  // Financement
  formData.append('financing[source]', form.financing.source)
  formData.append('financing[otherSource]', form.financing.otherSource || '')
  formData.append('financing[sponsorName]', form.financing.sponsorName || '')
  formData.append('financing[sponsorPhone]', form.financing.sponsorPhone || '')
  formData.append('financing[sponsorEmail]', form.financing.sponsorEmail || '')
  
  // Découverte
  formData.append('discovery[source]', form.discovery.source)
  formData.append('discovery[otherSource]', form.discovery.otherSource || '')
  formData.append('discovery[referrerName]', form.discovery.referrerName || '')
  formData.append('discovery[referrerContact]', form.discovery.referrerContact || '')
  
  // Hébergement
  formData.append('accommodation[needAssistance]', form.accommodation.needAssistance)
  formData.append('accommodation[type]', form.accommodation.type || '')
  
  // Déclaration
  formData.append('declaration', form.declaration)
  
  // Ajouter les fichiers
  const requiredDocs = getRequiredDocuments.value
  requiredDocs.forEach(doc => {
    const files = form.documents[doc.key]
    files.forEach((file, index) => {
      formData.append(`${doc.key}[${index}]`, file)
    })
  })
  
  return formData
}

// Fonction pour préparer les données JSON (alternative)
const prepareJSONData = () => {
  const data = {
    personalInfo: {
      lastName: form.lastName,
      firstName: form.firstName,
      gender: form.gender,
      birthDate: form.birthDate,
      birthPlace: form.birthPlace,
      nationality: form.nationality,
      residenceCountry: form.residenceCountry,
      phone: form.phone,
      whatsapp: form.whatsapp,
      email: form.email,
      address: form.address
    },
    emergencyContact: form.emergencyContact,
    formation: {
      level: form.level,
      program: form.program
    },
    education: {
      ...form.diploma,
      experience: form.experience
    },
    financing: form.financing,
    discovery: form.discovery,
    accommodation: form.accommodation,
    declaration: form.declaration,
    // Note: Les fichiers doivent être envoyés séparément via FormData
    documentsInfo: getRequiredDocuments.value.map(doc => ({
      type: doc.key,
      label: doc.label,
      fileCount: form.documents[doc.key].length
    }))
  }
  
  return data
}

// Submit form amélioré
const validateAllSteps = () => {
  // Étape 1
  const step1Fields = ['lastName', 'firstName', 'gender', 'birthDate', 'birthPlace', 'nationality', 'residenceCountry', 'phone', 'whatsapp', 'email', 'address']
  const step1Invalid = step1Fields.some(f => !form[f])
  const emergencyInvalid = !form.emergencyContact.name || !form.emergencyContact.relationship || !form.emergencyContact.phone
  if (step1Invalid || emergencyInvalid) {
    currentStep.value = 1
    scrollFormToTop()
    return { title: 'Étape 1 incomplète', text: 'Veuillez compléter toutes les informations personnelles.' }
  }

  // Étape 2
  if (!form.level || !form.program) {
    currentStep.value = 2
    scrollFormToTop()
    return { title: 'Étape 2 incomplète', text: 'Veuillez sélectionner votre niveau et programme.' }
  }
  if (!form.diploma.name || !form.diploma.field || !form.diploma.year || !form.diploma.institution) {
    currentStep.value = 2
    scrollFormToTop()
    return { title: 'Étape 2 incomplète', text: 'Veuillez remplir les informations de votre dernier diplôme.' }
  }
  if (!form.financing.source) {
    currentStep.value = 2
    scrollFormToTop()
    return { title: 'Étape 2 incomplète', text: 'Veuillez indiquer la source de financement.' }
  }

  // Étape 3
  if (!form.discovery.source) {
    currentStep.value = 3
    scrollFormToTop()
    return { title: 'Étape 3 incomplète', text: 'Veuillez indiquer comment vous avez connu ESCEN.' }
  }
  if (!form.accommodation.needAssistance) {
    currentStep.value = 3
    scrollFormToTop()
    return { title: 'Étape 3 incomplète', text: 'Veuillez renseigner votre besoin d\'hébergement.' }
  }

  // Étape 4
  if (!canSubmit.value) {
    return { title: 'Étape 4 incomplète', text: 'Veuillez télécharger tous les documents requis et accepter la déclaration.' }
  }

  return null
}

const submitForm = async () => {
  const error = validateAllSteps()
  if (error) {
    swal({ title: error.title, text: error.text, icon: 'warning', button: 'Corriger' })
    return
  }
 
  isSubmitting.value = true
 
  try {
    // Préparer les données
    const formData = prepareFormData()
    const jsonData = prepareJSONData()
    
    // Afficher les données pour le débogage
    console.log('Données JSON:', jsonData)
    console.log('FormData prêt à être envoyé')
    
    // Simuler l'envoi vers une API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Exemple d'envoi réel (décommentez pour utiliser)
    /*
    const response = await fetch('https://votre-api.com/inscription', {
      method: 'POST',
      body: formData
      // headers: { 'Accept': 'application/json' } // Pas besoin pour FormData
    })
    
    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du formulaire')
    }
    
    const result = await response.json()
    */
    
    // Simulation de succès
    showNotification.value = true
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      resetForm()
      currentStep.value = 1
      showNotification.value = false
      scrollFormToTop()
    }, 3000)
    
  } catch (error) {
    console.error('Error:', error)
    swal({ title: 'Erreur', text: `Une erreur est survenue : ${error.message}`, icon: 'error', button: 'Fermer' })
  } finally {
    isSubmitting.value = false
  }
}

// Reset form function
const resetForm = () => {
  Object.keys(form).forEach(key => {
    if (key === 'documents') return // Géré séparément
    
    if (typeof form[key] === 'object' && form[key] !== null && !Array.isArray(form[key])) {
      Object.keys(form[key]).forEach(subKey => {
        form[key][subKey] = ''
      })
    } else if (key !== 'declaration') {
      form[key] = ''
    }
  })
 
  // Reset documents
  form.documents = {
    // Licence
    bac2Transcript: [],
    motivationLetterLicence: [],
    passportPhotoLicence: [],
    
    // Master
    motivationLetterMaster: [],
    cvMaster: [],
    licenceTranscript: [],
    licenceAttestation: [],
    passportPhotoMaster: [],
    
    // Executive Master
    passportPhotoExecutive: [],
    nationalIdExecutive: [],
    licenceAttestationExecutive: [],
    master1Proof: [],
    cvExecutive: [],
    
    // Certificat
    passportPhotoCertificat: [],
    nationalIdCertificat: [],
    lastDiplomaCopy: [],
    cvCertificat: []
  }
 
  form.declaration = false
}

// Use layout without header/footer
definePageMeta({
  layout: false
})
</script>

<style scoped>
.field-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.375rem;
}

.field-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background-color: #f9fafb;
  color: #1f2937;
  transition: all 0.2s;
}
.field-input:focus {
  outline: none;
  border-color: #01b4d5;
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(1, 180, 213, 0.15);
}
.field-input::placeholder { color: #d1d5db; }

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background-color: #01b4d5;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 4px 14px rgba(1, 180, 213, 0.25);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}
.btn-primary:hover { background-color: #019fbf; box-shadow: 0 6px 20px rgba(1, 180, 213, 0.3); }
.btn-primary:active { transform: scale(0.98); }

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  background-color: #f3f4f6;
  color: #4b5563;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}
.btn-secondary:hover { background-color: #e5e7eb; }
.btn-secondary:active { transform: scale(0.98); }

.overflow-y-auto::-webkit-scrollbar { width: 5px; }
.overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
.overflow-y-auto::-webkit-scrollbar-thumb { background: #01b4d5; border-radius: 10px; }
</style>