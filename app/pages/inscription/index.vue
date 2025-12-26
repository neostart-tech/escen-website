<template>
  <div class="h-screen w-screen bg-gradient-to-br from-[#dbeff7] to-white overflow-hidden">
    <!-- Main Container -->

    <div class="h-full w-full flex">
      <div class="w-full h-full bg-white flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
         
          <!-- Left Side - Inscription Form (Scrollable) -->
          <div class="flex flex-col overflow-y-auto">
            <div class="p-8 md:p-10 lg:p-12 min-h-full">
              <div class="max-w-2xl mx-auto w-full">

                
                <!-- Logo + Indicateur d'étape sur la même ligne -->
                  <div class="mb-6 flex items-center justify-between">
                    <!-- Logo -->
                    <NuxtLink to="/" class="flex items-center space-x-3">
                      <img
                        src="https://www.escen.university/wa_res/icons/LOGO_ESCEN_(1).png"
                        alt="ESCEN Logo"
                        class="h-16 w-auto"
                      />
                    </NuxtLink>

                    <!-- Indicateur d'étape -->
                    <div class="text-sm md:text-lg font-bold text-[#202a51]">
                      Étape {{ currentStep }} sur 4
                    </div>
                  </div>


                <div class="mb-4">
                  <h1 class="text-2xl md:text-3xl font-bold text-[#202a51] mb-3 leading-snug">
                    FORMULAIRE D'INSCRIPTION<br>
                  </h1>
                </div>

                <!-- Form Container -->
                <div class="space-y-8 pb-8">
                  <!-- STEP 1: Personal Information -->
                  <form v-if="currentStep === 1" @submit.prevent="goToStep2" class="space-y-8">
                    <!-- Section 1: Personal Information -->
                    <div class="space-y-6">
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Nom (comme sur votre pièce d'identité) *
                          </label>
                          <input type="text" v-model="form.lastName" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Prénoms (comme sur votre pièce d'identité) *
                          </label>
                          <input type="text" v-model="form.firstName" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                      </div>
                      <div>
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">Sexe *</label>
                        <div class="flex space-x-6">
                          <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="form.gender" value="Masculin" required
                                   class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                            <span class="text-gray-700 text-sm">Masculin</span>
                          </label>
                          <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="form.gender" value="Féminin" required
                                   class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                            <span class="text-gray-700 text-sm">Féminin</span>
                          </label>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Date de naissance *
                          </label>
                          <input type="date" v-model="form.birthDate" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Lieu de naissance *
                          </label>
                          <input type="text" v-model="form.birthPlace" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Nationalité *</label>
                          <select v-model="form.nationality" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                            <option value="">Sélectionnez votre nationalité</option>
                            <option v-for="country in countries" :key="country.code"
                                    :value="country.name">
                              {{ country.name }}
                            </option>
                          </select>
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Pays de résidence *</label>
                          <select v-model="form.residenceCountry" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                            <option value="">Sélectionnez votre pays de résidence</option>
                            <option v-for="country in countries" :key="country.code"
                                    :value="country.name">
                              {{ country.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <!-- Contact Information -->
                      <h3 class="text-lg font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2 mt-8">
                        Informations de contact
                      </h3>
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Téléphone principal *
                          </label>
                          <input type="tel" v-model="form.phone" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="+228 98 01 27 27">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            WhatsApp *
                          </label>
                          <input type="tel" v-model="form.whatsapp" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="+228 98 01 27 27">
                        </div>
                      </div>
                      <div>
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">Adresse email *</label>
                        <input type="email" v-model="form.email" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                               placeholder="exemple@email.com">
                      </div>
                      <div>
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">Adresse postale *</label>
                        <textarea v-model="form.address" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                  rows="2"
                                  placeholder="Votre adresse complète"></textarea>
                      </div>
                      <!-- Emergency Contact -->
                      <h3 class="text-lg font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                        Personne à contacter en cas d'urgence
                      </h3>
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Nom complet *</label>
                          <input type="text" v-model="form.emergencyContact.name" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Lien de parenté *</label>
                          <select v-model="form.emergencyContact.relationship" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                            <option value="">Sélectionnez</option>
                            <option value="Parent">Parent</option>
                            <option value="Conjoint(e)">Conjoint(e)</option>
                            <option value="Frère/Soeur">Frère/Soeur</option>
                            <option value="Autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Téléphone *</label>
                          <input type="tel" v-model="form.emergencyContact.phone" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">Email</label>
                          <input type="email" v-model="form.emergencyContact.email"
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                        </div>
                      </div>
                    </div>
                    <!-- Navigation Button Step 1 -->
                    <button type="submit"
                            class="w-full bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                      Continuer vers l'étape suivante →
                    </button>
                  </form>
                  <!-- STEP 2: Formation Choice -->
                  <form v-if="currentStep === 2" @submit.prevent="goToStep3" class="space-y-8">
                   
                    <!-- Level Selection -->
                    <div>
                      <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                        Choisissez votre niveau de formation *
                      </label>
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center space-x-3 cursor-pointer border rounded-xl p-4 hover:border-[#00b3d4] transition-all duration-200"
                               :class="{ 'border-[#00b3d4] bg-[#dbeff7]/30': form.level === 'licence' }">
                          <input type="radio" v-model="form.level" value="licence"
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                                 @change="updatePrograms">
                          <div>
                            <span class="font-medium text-gray-700 text-sm">Licence Professionnelle</span>
                            <p class="text-xs text-gray-500 mt-1">Diplôme de niveau BAC+3</p>
                          </div>
                        </label>
                       
                        <label class="flex items-center space-x-3 cursor-pointer border rounded-xl p-4 hover:border-[#00b3d4] transition-all duration-200"
                               :class="{ 'border-[#00b3d4] bg-[#dbeff7]/30': form.level === 'master' }">
                          <input type="radio" v-model="form.level" value="master"
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                                 @change="updatePrograms">
                          <div>
                            <span class="font-medium text-gray-700 text-sm">Master Professionnel</span>
                            <p class="text-xs text-gray-500 mt-1">Diplôme de niveau BAC+5</p>
                          </div>
                        </label>
                       
                        <label class="flex items-center space-x-3 cursor-pointer border rounded-xl p-4 hover:border-[#00b3d4] transition-all duration-200"
                               :class="{ 'border-[#00b3d4] bg-[#dbeff7]/30': form.level === 'executive' }">
                          <input type="radio" v-model="form.level" value="executive"
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                                 @change="updatePrograms">
                          <div>
                            <span class="font-medium text-gray-700 text-sm">Executive Master</span>
                            <p class="text-xs text-gray-500 mt-1">Formation continue pour professionnels</p>
                          </div>
                        </label>
                       
                        <label class="flex items-center space-x-3 cursor-pointer border rounded-xl p-4 hover:border-[#00b3d4] transition-all duration-200"
                               :class="{ 'border-[#00b3d4] bg-[#dbeff7]/30': form.level === 'certificat' }">
                          <input type="radio" v-model="form.level" value="certificat"
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                                 @change="updatePrograms">
                          <div>
                            <span class="font-medium text-gray-700 text-sm">Certificat</span>
                            <p class="text-xs text-gray-500 mt-1">Formation courte et spécialisée</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <!-- Program Selection -->
                    <div v-if="form.level">
                      <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                        {{ levelTitle }} *
                      </label>
                     
                      <div class="space-y-2">
                        <label v-for="program in filteredPrograms" :key="program"
                               class="flex items-center space-x-3 cursor-pointer p-3 hover:bg-[#dbeff7]/30 rounded-xl transition-all duration-200">
                          <input type="radio" v-model="form.program" :value="program"
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                          <span class="text-gray-700 text-sm">{{ program }}</span>
                        </label>
                      </div>
                    </div>
                    <!-- Education Background -->
                    <div class="space-y-4">
                      <h3 class="text-lg font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                        Parcours académique
                      </h3>
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Dernier diplôme obtenu *
                          </label>
                          <input type="text" v-model="form.diploma.name" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="BAC +2, Licence, etc.">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Filière/Spécialité *
                          </label>
                          <input type="text" v-model="form.diploma.field" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="Informatique, Commerce, etc.">
                        </div>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Année d'obtention *
                          </label>
                          <input type="text" v-model="form.diploma.year" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="2023">
                        </div>
                       
                        <div>
                          <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                            Établissement *
                          </label>
                          <input type="text" v-model="form.diploma.institution" required
                                 class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                                 placeholder="Nom de l'école/université">
                        </div>
                      </div>
                      <div>
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                          Expérience professionnelle (années)
                        </label>
                        <select v-model="form.experience"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          <option value="">Sélectionnez</option>
                          <option value="0-1">0-1 an</option>
                          <option value="1-3">1-3 ans</option>
                          <option value="3-5">3-5 ans</option>
                          <option value="5+">Plus de 5 ans</option>
                        </select>
                      </div>
                    </div>
                    <!-- Financial Information -->
                    <div class="space-y-4">
                      <h3 class="text-lg font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                        Informations financières
                      </h3>
                     
                      <div>
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                          Qui prend en charge vos frais de scolarité ? *
                        </label>
                        <div class="space-y-2">
                          <label v-for="source in ['Vous-même', 'Parent/tuteur', 'Employeur', 'Bourse', 'Autre']" :key="source"
                                 class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="form.financing.source" :value="source" required
                                   class="text-[#00b3d4] focus:ring-[#00b3d4] h-4 w-4">
                            <span class="text-gray-700 text-sm">{{ source }}</span>
                          </label>
                        </div>
                      </div>
                      <div v-if="form.financing.source === 'Autre'">
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">Précisez *</label>
                        <input type="text" v-model="form.financing.otherSource" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                      </div>
                      <div v-if="form.financing.source !== 'Vous-même'" class="space-y-4">
                        <p class="text-gray-700 text-sm font-semibold">
                          Veuillez préciser les coordonnées du sponsor
                        </p>
                       
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label class="block text-gray-700 text-sm mb-2">Nom</label>
                            <input type="text" v-model="form.financing.sponsorName"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          </div>
                         
                          <div>
                            <label class="block text-gray-700 text-sm mb-2">Téléphone</label>
                            <input type="tel" v-model="form.financing.sponsorPhone"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          </div>
                         
                          <div>
                            <label class="block text-gray-700 text-sm mb-2">Email</label>
                            <input type="email" v-model="form.financing.sponsorEmail"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Navigation Buttons Step 2 -->
                    <div class="flex justify-between gap-4 pt-4">
                      <button type="button" @click="currentStep = 1"
                              class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300">
                        ← Retour
                      </button>
                     
                      <button type="submit"
                              class="flex-1 bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                        Continuer →
                      </button>
                    </div>
                  </form>
                  <!-- STEP 3: Additional Information -->
                  <form v-if="currentStep === 3" @submit.prevent="goToStep4" class="space-y-8">
                   
                    <!-- Discovery Information -->
                    <div>
                      <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                        Comment avez-vous connu ESCEN ? *
                      </label>
                     
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label v-for="source in discoverySources" :key="source"
                               class="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" v-model="form.discovery.source" :value="source" required
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-4 w-4">
                          <span class="text-gray-700 text-sm">{{ source }}</span>
                        </label>
                      </div>
                      <div v-if="form.discovery.source === 'Autre'" class="mt-4">
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">Précisez *</label>
                        <input type="text" v-model="form.discovery.otherSource" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                      </div>
                      <div v-if="form.discovery.source === 'Recommandation'" class="mt-4 space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label class="block text-gray-700 text-sm mb-2">Nom de la personne</label>
                            <input type="text" v-model="form.discovery.referrerName"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          </div>
                         
                          <div>
                            <label class="block text-gray-700 text-sm mb-2">Contact de la personne</label>
                            <input type="text" v-model="form.discovery.referrerContact"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50">
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Accommodation -->
                    <div>
                      <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                        Auriez-vous besoin d'assistance pour votre hébergement ? *
                      </label>
                     
                      <div class="flex space-x-6 mt-2">
                        <label class="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" v-model="form.accommodation.needAssistance" value="Oui" required
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                          <span class="text-gray-700 text-sm">Oui</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" v-model="form.accommodation.needAssistance" value="Non" required
                                 class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                          <span class="text-gray-700 text-sm">Non</span>
                        </label>
                      </div>
                      <div v-if="form.accommodation.needAssistance === 'Oui'" class="mt-4">
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                          Type d'hébergement préféré
                        </label>
                       
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <label v-for="type in accommodationTypes" :key="type"
                                 class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" v-model="form.accommodation.type" :value="type"
                                   class="text-[#00b3d4] focus:ring-[#00b3d4] h-4 w-4">
                            <span class="text-gray-700 text-sm">{{ type }}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- Navigation Buttons Step 3 -->
                    <div class="flex justify-between gap-4 pt-4">
                      <button type="button" @click="currentStep = 2"
                              class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300">
                        ← Retour
                      </button>
                     
                      <button type="submit"
                              class="flex-1 bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                        Continuer →
                      </button>
                    </div>
                  </form>
                  <!-- STEP 4: Documents Upload & Validation -->
                  <div v-if="currentStep === 4" class="space-y-8">
                   
                    <!-- Documents List -->
                    <div class="bg-[#dbeff7]/30 p-4 rounded-xl mb-6">
                      <h4 class="text-sm font-semibold text-[#202a51] mb-3">Documents requis :</h4>
                      <ul class="text-xs text-gray-700 space-y-1">
                        <li class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          Copie du relevé des notes du dernier diplôme
                        </li>
                        <li class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          Lettre de motivation
                        </li>
                        <li class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          Photo passeport
                        </li>
                        <li class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          Copie de la pièce d'identité
                        </li>
                        <li class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          Copie du diplôme le plus élevé
                        </li>
                      </ul>
                    </div>
                    <!-- File Uploads -->
                    <div class="space-y-4">
                      <div v-for="(doc, index) in documentTypes" :key="index">
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                          {{ index + 1 }}. {{ doc.label }}
                        </label>
                        <div
                          class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#00b3d4] cursor-pointer"
                          :class="{
                            'border-green-500 bg-green-50': form.documents[doc.key],
                            'border-[#00b3d4]': isDraggingOver === doc.key
                          }"
                          @click="triggerFileInput(doc.key)"
                          @dragover.prevent="handleDragOver(doc.key)"
                          @dragleave.prevent="handleDragLeave(doc.key)"
                          @drop.prevent="handleDrop(doc.key, $event)"
                        >
                          <div v-if="!form.documents[doc.key]">
                            <svg class="w-8 h-8 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                            </svg>
                            <p class="text-gray-600 text-sm mb-2">
                              Cliquez pour télécharger ou glissez-déposez
                            </p>
                            <p class="text-xs text-gray-500">{{ doc.accepted }}</p>
                            <input :id="`fileInput-${doc.key}`" type="file"
                                   @change="handleFileUpload(doc.key, $event)"
                                   :accept="doc.accept"
                                   class="hidden">
                          </div>
                          <div v-else class="text-green-600">
                            <svg class="w-8 h-8 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <p class="font-medium text-sm">Document téléchargé !</p>
                            <p class="text-xs text-gray-600 mt-1">{{ form.documents[doc.key].name }}</p>
                            <button type="button"
                                    @click.stop="removeFile(doc.key)"
                                    class="mt-3 text-red-500 hover:text-red-700 text-xs">
                              Supprimer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Declaration -->
                    <div class="bg-[#dbeff7]/30 p-6 rounded-xl mt-8">
                      <h4 class="text-sm font-bold text-[#202a51] mb-3">Déclaration sur l'honneur</h4>
                      <p class="text-gray-700 text-sm mb-4">
                        Je déclare que les renseignements fournis sont complets et conformes.
                        Je comprends que ces informations serviront à l'étude de ma candidature.
                      </p>
                     
                      <label class="flex items-start space-x-3 cursor-pointer">
                        <input type="checkbox" v-model="form.declaration" required
                               class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5 mt-0.5">
                        <span class="text-gray-700 text-sm">
                          Je certifie sur l'honneur l'exactitude des informations fournies et accepte les conditions *
                        </span>
                      </label>
                    </div>
                    <!-- Navigation Buttons Step 4 -->
                    <div class="flex justify-between gap-4 pt-4">
                      <button type="button" @click="currentStep = 3"
                              class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300">
                        ← Retour
                      </button>
                     
                      <button type="button"
                              @click="submitForm"
                              :disabled="!canSubmit || isSubmitting"
                              :class="[
                                'flex-1 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300',
                                canSubmit && !isSubmitting
                                  ? 'bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              ]">
                        <div class="flex items-center justify-center">
                          <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>{{ isSubmitting ? 'Envoi en cours...' : 'Valider l\'inscription' }}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right Side - Hero Image & Info (Fixed) -->
          <div class="hidden lg:flex flex-col relative bg-gradient-to-br from-[#202a51] to-[#374c9c] overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#00b3d4] rounded-full -translate-y-32 translate-x-32"></div>
              <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#6cc6e2] rounded-full translate-y-48 -translate-x-48"></div>
            </div>
            <!-- Content -->
            <div class="relative z-10 h-full flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <!-- Hero Image -->
              <div class="w-full max-w-sm mx-auto">
                <!-- <img
                  src="https://escen.neostart.tech/officiel-site/assets/images/authentication/Login-rafiki-yellow-simple.png"
                  alt="Étudiant ESCEN"
                  class="w-full h-auto object-contain"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <!-- Help Button -->
    <button
      @click="showHelp = true"
      class="fixed bottom-6 right-6 bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>
    <!-- Help Modal -->
    <div v-if="showHelp" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-2xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-[#202a51]">Besoin d'aide ?</h3>
          <button @click="showHelp = false" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
       
        <div class="space-y-4">
          <div class="p-4 bg-[#dbeff7]/30 rounded-xl border border-[#dbeff7]">
            <h4 class="font-semibold text-[#202a51] mb-2">Problèmes de connexion</h4>
            <p class="text-gray-700 text-sm">
              Vérifiez votre email et mot de passe. Si vous avez oublié votre mot de passe, utilisez le lien "Mot de passe oublié".
            </p>
          </div>
         
          <div class="p-4 bg-[#dbeff7]/30 rounded-xl border border-[#dbeff7]">
            <h4 class="font-semibold text-[#202a51] mb-2">Support technique</h4>
            <p class="text-gray-700 text-sm">
              Contactez notre équipe support :<br>
              <a href="mailto:support@escen.university" class="text-[#00b3d4] hover:text-[#202a51] transition-colors">support@escen.university</a><br>
              <a href="tel:+22898012727" class="text-[#00b3d4] hover:text-[#202a51] transition-colors">+228 98 01 27 27</a>
            </p>
          </div>
         
          <div class="p-4 bg-[#dbeff7]/30 rounded-xl border border-[#dbeff7]">
            <h4 class="font-semibold text-[#202a51] mb-2">Heures de support</h4>
            <p class="text-gray-700 text-sm">
              Lundi - Vendredi : 8h - 18h<br>
              Samedi : 9h - 13h<br>
              Support 24/7 pour les urgences
            </p>
          </div>
        </div>
       
        <div class="mt-6 flex justify-end">
          <button
            @click="showHelp = false"
            class="bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-semibold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
   
    <!-- Success Notification -->
    <div
      v-if="showNotification"
      class="fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-3 animate-slide-in z-50"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="font-medium text-sm">Inscription réussie ! Vous recevrez un email de confirmation.</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// Current step
const currentStep = ref(1)

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
 
  // Documents
  documents: {
    transcript: null,
    motivationLetter: null,
    passportPhoto: null,
    idDocument: null,
    diplomaCopy: null
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

const documentTypes = [
  {
    key: 'transcript',
    label: 'Relevé de notes (max 10MB)',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG'
  },
  {
    key: 'motivationLetter',
    label: 'Lettre de motivation (max 5MB)',
    accept: '.pdf,.doc,.docx',
    accepted: 'PDF, DOC, DOCX'
  },
  {
    key: 'passportPhoto',
    label: 'Photo passeport (max 5MB)',
    accept: '.jpg,.jpeg,.png',
    accepted: 'JPG, JPEG, PNG'
  },
  {
    key: 'idDocument',
    label: 'Pièce d\'identité (max 5MB)',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG'
  },
  {
    key: 'diplomaCopy',
    label: 'Copie du diplôme (max 10MB)',
    accept: '.pdf,.jpg,.jpeg,.png',
    accepted: 'PDF, JPG, PNG'
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

const canSubmit = computed(() => {
  return form.declaration &&
         form.documents.transcript &&
         form.documents.motivationLetter &&
         form.documents.passportPhoto &&
         form.documents.idDocument &&
         form.documents.diplomaCopy
})

// Navigation functions
const goToStep2 = () => {
  const requiredFields = [
    'lastName', 'firstName', 'gender', 'birthDate', 'birthPlace',
    'nationality', 'residenceCountry', 'phone', 'whatsapp', 'email', 'address'
  ]
 
  for (const field of requiredFields) {
    if (!form[field]) {
      alert(`Veuillez remplir le champ ${field}`)
      return
    }
  }
 
  if (!form.emergencyContact.name || !form.emergencyContact.relationship || !form.emergencyContact.phone) {
    alert('Veuillez remplir toutes les informations concernant la personne à contacter en cas d\'urgence')
    return
  }
 
  currentStep.value = 2
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToStep3 = () => {
  if (!form.level) {
    alert('Veuillez sélectionner votre niveau/grade')
    return
  }
 
  if (!form.program) {
    alert('Veuillez sélectionner votre programme')
    return
  }
 
  if (!form.diploma.name || !form.diploma.field || !form.diploma.year || !form.diploma.institution) {
    alert('Veuillez remplir toutes les informations concernant votre dernier diplôme')
    return
  }
 
  if (!form.financing.source) {
    alert('Veuillez indiquer qui prend en charge vos frais de scolarité')
    return
  }
 
  currentStep.value = 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToStep4 = () => {
  if (!form.discovery.source) {
    alert('Veuillez indiquer comment vous avez connu ESCEN')
    return
  }
 
  if (!form.accommodation.needAssistance) {
    alert('Veuillez indiquer si vous avez besoin d\'assistance pour l\'hébergement')
    return
  }
 
  currentStep.value = 4
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
 
  const files = event.dataTransfer.files
  if (files && files.length > 0) {
    handleFileUpload(field, { target: { files: [files[0]] } })
  }
}

const handleFileUpload = (field, event) => {
  const file = event.target.files[0]
  if (file) {
    const maxSize = (field === 'transcript' || field === 'diplomaCopy') ? 10 * 1024 * 1024 : 5 * 1024 * 1024
   
    if (file.size > maxSize) {
      alert(`Le fichier est trop volumineux. Taille maximum : ${field === 'transcript' || field === 'diplomaCopy' ? '10MB' : '5MB'}`)
      return
    }
   
    form.documents[field] = file
  }
}

const removeFile = (field) => {
  form.documents[field] = null
}

// Submit form
const submitForm = async () => {
  if (!canSubmit.value) {
    alert('Veuillez télécharger tous les documents requis et accepter la déclaration')
    return
  }
 
  isSubmitting.value = true
 
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
   
    showNotification.value = true
   
    // Reset form after 3 seconds
    setTimeout(() => {
      resetForm()
      currentStep.value = 1
      showNotification.value = false
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 3000)
   
  } catch (error) {
    console.error('Error:', error)
    alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
  } finally {
    isSubmitting.value = false
  }
}

// Reset form function
const resetForm = () => {
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'object' && form[key] !== null && !Array.isArray(form[key])) {
      Object.keys(form[key]).forEach(subKey => {
        form[key][subKey] = ''
      })
    } else {
      form[key] = ''
    }
  })
 
  // Reset documents
  form.documents = {
    transcript: null,
    motivationLetter: null,
    passportPhoto: null,
    idDocument: null,
    diplomaCopy: null
  }
 
  form.declaration = false
}

// Use layout without header/footer
definePageMeta({
  layout: false
})
</script>

<style scoped>
/* Custom animations */
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
/* Custom scrollbar for left side */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #00b3d4;
  border-radius: 3px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #009cba;
}
/* Ensure the right side doesn't scroll */
.overflow-hidden {
  overflow: hidden;
}

.h-full {
  height: 100%;
}
</style>