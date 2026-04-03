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
                   
                    <!-- Documents List based on Level -->
                    <div class="bg-[#dbeff7]/30 p-4 rounded-xl mb-6">
                      <h4 class="text-sm font-semibold text-[#202a51] mb-3">
                        Documents requis pour {{ levelTitle.split(':')[0] }} :
                      </h4>
                      <ul class="text-xs text-gray-700 space-y-1">
                        <li v-for="doc in getRequiredDocuments" :key="doc.key"
                            class="flex items-center">
                          <svg class="w-4 h-4 text-[#00b3d4] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          {{ doc.label }} {{ doc.multiple ? `(max ${doc.maxFiles || 5} fichiers)` : '' }}
                        </li>
                      </ul>
                    </div>
                    
                    <!-- File Uploads -->
                    <div class="space-y-4">
                      <div v-for="doc in getRequiredDocuments" :key="doc.key">
                        <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                          {{ doc.index }}. {{ doc.label }}
                          <span v-if="doc.multiple" class="text-xs text-gray-500 font-normal">
                            ({{ form.documents[doc.key].length }}/{{ doc.maxFiles || 5 }} fichiers)
                          </span>
                        </label>
                        <div
                          class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#00b3d4] cursor-pointer"
                          :class="{
                            'border-green-500 bg-green-50': form.documents[doc.key].length > 0,
                            'border-[#00b3d4]': isDraggingOver === doc.key
                          }"
                          @click="triggerFileInput(doc.key)"
                          @dragover.prevent="handleDragOver(doc.key)"
                          @dragleave.prevent="handleDragLeave(doc.key)"
                          @drop.prevent="handleDrop(doc.key, $event)"
                        >
                          <div v-if="form.documents[doc.key].length === 0">
                            <svg class="w-8 h-8 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                            </svg>
                            <p class="text-gray-600 text-sm mb-2">
                              Cliquez pour télécharger ou glissez-déposez
                            </p>
                            <p class="text-xs text-gray-500">
                              {{ doc.accepted }} {{ doc.multiple ? '(Plusieurs fichiers autorisés)' : '' }}
                            </p>
                            <input :id="`fileInput-${doc.key}`" type="file"
                                   @change="handleFileUpload(doc.key, $event)"
                                   :accept="doc.accept"
                                   :multiple="doc.multiple"
                                   class="hidden">
                          </div>
                          
                          <!-- Affichage des fichiers téléchargés -->
                          <div v-else>
                            <div class="space-y-3">
                              <div v-for="(file, index) in form.documents[doc.key]" :key="index"
                                   class="flex items-center justify-between bg-white p-3 rounded-lg border">
                                <div class="flex items-center space-x-3">
                                  <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                  </svg>
                                  <div>
                                    <p class="text-sm font-medium text-gray-700 truncate max-w-xs">{{ file.name }}</p>
                                    <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                                  </div>
                                </div>
                                <button type="button"
                                        @click.stop="removeFile(doc.key, index)"
                                        class="text-red-500 hover:text-red-700">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            
                            <!-- Bouton pour ajouter plus de fichiers si multiple -->
                            <div v-if="doc.multiple" class="mt-4">
                              <button type="button"
                                      @click.stop="triggerFileInput(doc.key)"
                                      class="text-[#00b3d4] hover:text-[#202a51] text-sm font-medium">
                                + Ajouter d'autres fichiers
                              </button>
                            </div>
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
            <h4 class="font-semibold text-[#202a51] mb-2">Support technique</h4>
            <p class="text-gray-700 text-sm">
              Contactez notre équipe support :<br>
              <a href="mailto:support@escen.university" class="text-[#00b3d4] hover:text-[#202a51] transition-colors">support@escen.university</a><br>
              <a href="tel:+22898012727" class="text-[#00b3d4] hover:text-[#202a51] transition-colors">+228 98 01 27 27</a>
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
    alert(`Maximum ${docConfig.maxFiles} fichier(s) autorisé(s) pour ce document`)
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
      alert(`Le fichier "${file.name}" est trop volumineux. Taille maximum : ${maxSize === 10 * 1024 * 1024 ? '10MB' : '5MB'}`)
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
const submitForm = async () => {
  if (!canSubmit.value) {
    alert('Veuillez télécharger tous les documents requis et accepter la déclaration')
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 3000)
    
  } catch (error) {
    console.error('Error:', error)
    alert(`Une erreur est survenue: ${error.message}`)
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