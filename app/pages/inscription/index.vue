<template>
  <div class="min-h-screen bg-gray-50">
    
    <Breadcrumb title="Inscription" subtitle="Devenir étudiant(e)"
            description="Préparez votre avenir académique" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Inscription' }
            ]" backgroundImage="/valeurs/bg.jpg" />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Page Title -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-[#202a51] mb-4">
          FORMULAIRE D'INSCRIPTION À ESCEN
        </h1>
        <div class="w-24 h-1 bg-[#00b3d4] mx-auto"></div>
      </div>

      <!-- Progress Steps -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="flex items-center justify-between relative">
          <!-- Progress Line -->
          <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10"></div>
          <div class="absolute top-1/2 left-0 h-1 bg-[#00b3d4] -translate-y-1/2 -z-10 transition-all duration-300"
               :style="{ 
                 width: currentStep === 1 ? '0%' : 
                        currentStep === 2 ? '33%' : 
                        currentStep === 3 ? '66%' : 
                        '100%' 
               }"></div>
         
          <!-- Step 1 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                 :class="currentStep >= 1 ? 'bg-[#00b3d4]' : 'bg-gray-300'">
              1
            </div>
            <span class="mt-2 font-medium text-center" :class="currentStep >= 1 ? 'text-[#00b3d4]' : 'text-gray-500'">
              Informations<br>personnelles
            </span>
          </div>
         
          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                 :class="currentStep >= 2 ? 'bg-[#00b3d4]' : 'bg-gray-300'">
              2
            </div>
            <span class="mt-2 font-medium text-center" :class="currentStep >= 2 ? 'text-[#00b3d4]' : 'text-gray-500'">
              Choix de la<br>formation
            </span>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                 :class="currentStep >= 3 ? 'bg-[#00b3d4]' : 'bg-gray-300'">
              3
            </div>
            <span class="mt-2 font-medium text-center" :class="currentStep >= 3 ? 'text-[#00b3d4]' : 'text-gray-500'">
              Informations<br>complémentaires
            </span>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                 :class="currentStep >= 4 ? 'bg-[#00b3d4]' : 'bg-gray-300'">
              4
            </div>
            <span class="mt-2 font-medium text-center" :class="currentStep >= 4 ? 'text-[#00b3d4]' : 'text-gray-500'">
              Documents &<br>Validation
            </span>
          </div>
        </div>
      </div>

      <!-- Form Container -->
      <div class="max-w-4xl mx-auto">

        <!-- STEP 1: Personal Information -->
        <div v-if="currentStep === 1" class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-[#202a51] mb-6">
            Étape 1 : Informations personnelles
          </h2>
         
          <form @submit.prevent="goToStep2" class="space-y-8">
            <!-- Section 1: Personal Information -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Informations personnelles
              </h3>
             
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Nom (comme sur votre pièce d'identité) *
                  </label>
                  <input type="text" v-model="form.lastName" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Prénoms (comme sur votre pièce d'identité) *
                  </label>
                  <input type="text" v-model="form.firstName" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Sexe *</label>
                <div class="flex space-x-6">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="form.gender" value="Masculin" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Masculin</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="form.gender" value="Féminin" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Féminin</span>
                  </label>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Date de naissance (JJ/MM/AAAA) *
                  </label>
                  <input type="date" v-model="form.birthDate" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Lieu de naissance *
                  </label>
                  <input type="text" v-model="form.birthPlace" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Nationalité *</label>
                  <select v-model="form.nationality" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    <option value="">Sélectionnez votre nationalité</option>
                    <option v-for="country in countries" :key="country.code"
                            :value="country.name">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Pays de résidence *</label>
                  <select v-model="form.residenceCountry" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    <option value="">Sélectionnez votre pays de résidence</option>
                    <option v-for="country in countries" :key="country.code"
                            :value="country.name">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 2: Contact Information -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Informations de contact
              </h3>
             
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Numéro de téléphone principal (avec indicatif) *
                  </label>
                  <input type="tel" v-model="form.phone" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="+228 98 01 27 27">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Numéro WhatsApp (avec indicatif) *
                  </label>
                  <input type="tel" v-model="form.whatsapp" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="+228 98 01 27 27">
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Adresse email *</label>
                <input type="email" v-model="form.email" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                       placeholder="exemple@email.com">
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">Adresse postale *</label>
                <textarea v-model="form.address" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                          rows="3"
                          placeholder="Votre adresse complète"></textarea>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 3: Emergency Contact -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Personne à contacter en cas d'urgence
              </h3>
             
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Nom complet *</label>
                  <input type="text" v-model="form.emergencyContact.name" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Lien de parenté *</label>
                  <select v-model="form.emergencyContact.relationship" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    <option value="">Sélectionnez</option>
                    <option value="Parent">Parent</option>
                    <option value="Conjoint(e)">Conjoint(e)</option>
                    <option value="Frère/Soeur">Frère/Soeur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Téléphone *</label>
                  <input type="tel" v-model="form.emergencyContact.phone" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" v-model="form.emergencyContact.email"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>
              </div>
            </div>

            <!-- Navigation Buttons Step 1 -->
            <div class="flex justify-between pt-8">
              <div></div> <!-- Empty div for spacing -->
              <button type="submit"
                      class="bg-[#00b3d4] hover:bg-[#009cba] text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                Continuer vers l'étape 2 →
              </button>
            </div>
          </form>
        </div>

        <!-- STEP 2: Formation Choice -->
        <div v-if="currentStep === 2" class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-[#202a51] mb-6">
            Étape 2 : Choix de la formation
          </h2>
         
          <form @submit.prevent="goToStep3" class="space-y-8">
            <!-- Section 1: Level Selection -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Choisissez votre niveau de formation
              </h3>
             
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center space-x-3 cursor-pointer border rounded-lg p-4 hover:bg-[#dbeff7]"
                       :class="{ 'border-[#00b3d4] bg-[#dbeff7]': form.level === 'licence' }">
                  <input type="radio" v-model="form.level" value="licence"
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                         @change="updatePrograms">
                  <div>
                    <span class="font-medium text-gray-700">Licence Professionnelle</span>
                    <p class="text-sm text-gray-500 mt-1">Diplôme de niveau BAC+3</p>
                  </div>
                </label>
               
                <label class="flex items-center space-x-3 cursor-pointer border rounded-lg p-4 hover:bg-[#dbeff7]"
                       :class="{ 'border-[#00b3d4] bg-[#dbeff7]': form.level === 'master' }">
                  <input type="radio" v-model="form.level" value="master"
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                         @change="updatePrograms">
                  <div>
                    <span class="font-medium text-gray-700">Master Professionnel</span>
                    <p class="text-sm text-gray-500 mt-1">Diplôme de niveau BAC+5</p>
                  </div>
                </label>
               
                <label class="flex items-center space-x-3 cursor-pointer border rounded-lg p-4 hover:bg-[#dbeff7]"
                       :class="{ 'border-[#00b3d4] bg-[#dbeff7]': form.level === 'executive' }">
                  <input type="radio" v-model="form.level" value="executive"
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                         @change="updatePrograms">
                  <div>
                    <span class="font-medium text-gray-700">Executive Master</span>
                    <p class="text-sm text-gray-500 mt-1">Formation continue pour professionnels</p>
                  </div>
                </label>
               
                <label class="flex items-center space-x-3 cursor-pointer border rounded-lg p-4 hover:bg-[#dbeff7]"
                       :class="{ 'border-[#00b3d4] bg-[#dbeff7]': form.level === 'certificat' }">
                  <input type="radio" v-model="form.level" value="certificat"
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5"
                         @change="updatePrograms">
                  <div>
                    <span class="font-medium text-gray-700">Certificat</span>
                    <p class="text-sm text-gray-500 mt-1">Formation courte et spécialisée</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Section 2: Program Selection -->
            <div v-if="form.level" class="space-y-4">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                {{ levelTitle }}
              </h3>
             
              <div class="space-y-3">
                <label v-for="program in filteredPrograms" :key="program"
                       class="flex items-center space-x-3 cursor-pointer p-3 hover:bg-[#dbeff7] rounded-lg">
                  <input type="radio" v-model="form.program" :value="program"
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                  <span class="text-gray-700">{{ program }}</span>
                </label>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 3: Education Background -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Parcours académique
              </h3>
             
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Dernier diplôme obtenu *
                  </label>
                  <input type="text" v-model="form.diploma.name" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="BAC +2, Licence, etc.">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Filière/Spécialité *
                  </label>
                  <input type="text" v-model="form.diploma.field" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="Informatique, Commerce, etc.">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Année d'obtention *
                  </label>
                  <input type="text" v-model="form.diploma.year" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="2023">
                </div>
               
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Établissement *
                  </label>
                  <input type="text" v-model="form.diploma.institution" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent"
                         placeholder="Nom de l'école/université">
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2">
                  Expérience professionnelle (années)
                </label>
                <select v-model="form.experience"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                  <option value="">Sélectionnez</option>
                  <option value="0-1">0-1 an</option>
                  <option value="1-3">1-3 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="5+">Plus de 5 ans</option>
                </select>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 4: Financial Information -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Informations financières
              </h3>
             
              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    Qui prend en charge vos frais de scolarité ? *
                  </label>
                  <div class="space-y-3">
                    <label class="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" v-model="form.financing.source" value="Vous-même" required
                             class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                      <span class="text-gray-700">Vous-même</span>
                    </label>
                   
                    <label class="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" v-model="form.financing.source" value="Parent/tuteur" required
                             class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                      <span class="text-gray-700">Parent/tuteur</span>
                    </label>
                   
                    <label class="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" v-model="form.financing.source" value="Employeur" required
                             class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                      <span class="text-gray-700">Employeur</span>
                    </label>
                   
                    <label class="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" v-model="form.financing.source" value="Bourse" required
                             class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                      <span class="text-gray-700">Bourse</span>
                    </label>
                   
                    <label class="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" v-model="form.financing.source" value="Autre" required
                             class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                      <span class="text-gray-700">Autre</span>
                    </label>
                  </div>
                </div>

                <div v-if="form.financing.source === 'Autre'">
                  <label class="block text-gray-700 font-medium mb-2">Précisez *</label>
                  <input type="text" v-model="form.financing.otherSource" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>

                <div v-if="form.financing.source !== 'Vous-même'" class="space-y-4">
                  <p class="text-gray-700 font-medium">
                    Veuillez préciser les coordonnées du sponsor
                  </p>
                 
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label class="block text-gray-700 mb-2">Nom</label>
                      <input type="text" v-model="form.financing.sponsorName"
                             class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    </div>
                   
                    <div>
                      <label class="block text-gray-700 mb-2">Téléphone</label>
                      <input type="tel" v-model="form.financing.sponsorPhone"
                             class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    </div>
                   
                    <div>
                      <label class="block text-gray-700 mb-2">Email</label>
                      <input type="email" v-model="form.financing.sponsorEmail"
                             class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons Step 2 -->
            <div class="flex justify-between pt-8">
              <button type="button" @click="currentStep = 1"
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-lg font-medium transition duration-300">
                ← Retour à l'étape 1
              </button>
             
              <button type="submit"
                      class="bg-[#00b3d4] hover:bg-[#009cba] text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                Continuer vers l'étape 3 →
              </button>
            </div>
          </form>
        </div>

        <!-- STEP 3: Additional Information -->
        <div v-if="currentStep === 3" class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-[#202a51] mb-6">
            Étape 3 : Informations complémentaires
          </h2>
         
          <form @submit.prevent="goToStep4" class="space-y-8">
            <!-- Section 1: Discovery Information -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Comment avez-vous connu ESCEN ?
              </h3>

              <div class="space-y-4">
                <label class="block text-gray-700 font-medium mb-2">
                  Comment avez-vous connu ESCEN ? *
                </label>
               
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Facebook" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Facebook</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="LinkedIn" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">LinkedIn</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Instagram" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Instagram</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Tik Tok" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Tik Tok</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Whatsapp" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Whatsapp</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Recherche en ligne" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Recherche en ligne</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Recommandation" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Recommandation (ami, collègue...)</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.discovery.source" value="Autre" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Autre (à préciser)</span>
                  </label>
                </div>

                <div v-if="form.discovery.source === 'Autre'">
                  <label class="block text-gray-700 font-medium mb-2">Précisez *</label>
                  <input type="text" v-model="form.discovery.otherSource" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                </div>

                <div v-if="form.discovery.source === 'Recommandation'" class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-gray-700 mb-2">Nom de la personne</label>
                      <input type="text" v-model="form.discovery.referrerName"
                             class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    </div>
                   
                    <div>
                      <label class="block text-gray-700 mb-2">Contact de la personne</label>
                      <input type="text" v-model="form.discovery.referrerContact"
                             class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 2: Accommodation -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Hébergement
              </h3>

              <div>
                <label class="block text-gray-700 font-medium mb-2">
                  Étant donné que les cours se déroulent en présentiel, aurez-vous besoin de notre assistance pour votre hébergement ? *
                </label>
               
                <div class="flex space-x-6 mt-4">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.needAssistance" value="Oui" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Oui</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.needAssistance" value="Non" required
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Non</span>
                  </label>
                </div>
              </div>

              <div v-if="form.accommodation.needAssistance === 'Oui'" class="space-y-4">
                <label class="block text-gray-700 font-medium mb-2">
                  Type d'hébergement préféré
                </label>
               
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.type" value="Résidence étudiante"
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Résidence étudiante</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.type" value="Appartement seul"
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Appartement seul</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.type" value="Colocation"
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Colocation</span>
                  </label>
                 
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" v-model="form.accommodation.type" value="Famille d'accueil"
                           class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5">
                    <span class="text-gray-700">Famille d'accueil</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons Step 3 -->
            <div class="flex justify-between pt-8">
              <button type="button" @click="currentStep = 2"
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-lg font-medium transition duration-300">
                ← Retour à l'étape 2
              </button>
             
              <button type="submit"
                      class="bg-[#00b3d4] hover:bg-[#009cba] text-white px-8 py-3 rounded-lg font-medium transition duration-300">
                Continuer vers l'étape 4 →
              </button>
            </div>
          </form>
        </div>

        <!-- STEP 4: Documents Upload & Validation -->
        <div v-if="currentStep === 4" class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-[#202a51] mb-6">
            Étape 4 : Téléchargement des documents & Validation
          </h2>
         
          <div class="space-y-8">
            <!-- Section 1: Documents Upload -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-[#202a51] border-b-2 border-[#dbeff7] pb-2">
                Téléchargement des documents requis
              </h3>
             
              <ul class="list-disc pl-5 text-gray-700 space-y-2">
                <li>Une (01) copie du relevé des notes du dernier diplôme obtenu</li>
                <li>Lettre de motivation mentionnant la filière choisie</li>
                <li>Une (01) photo passeport</li>
                <li>Copie de la pièce d'identité</li>
                <li>Copie du diplôme le plus élevé</li>
              </ul>

              <!-- Drag & Drop Areas -->
              <div class="space-y-6">
                <!-- Transcript -->
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    1. Copie du relevé des notes (max 10MB) *
                  </label>
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-[#00b3d4] hover:bg-[#dbeff7]"
                    :class="{
                      'border-green-500 bg-green-50': form.documents.transcript,
                      'border-[#00b3d4] bg-[#dbeff7]': isDraggingOver === 'transcript'
                    }"
                    @dragover.prevent="handleDragOver('transcript')"
                    @dragleave.prevent="handleDragLeave('transcript')"
                    @drop.prevent="handleDrop('transcript', $event)"
                  >
                    <div v-if="!form.documents.transcript">
                      <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                      <p class="text-gray-600 mb-2">
                        Glissez-déposez votre fichier ici ou
                      </p>
                      <label class="inline-block bg-[#00b3d4] hover:bg-[#009cba] text-white px-6 py-2 rounded cursor-pointer">
                        <i class="fas fa-folder-open mr-2"></i>
                        Parcourir
                        <input type="file"
                               @change="handleFileUpload('transcript', $event)"
                               accept=".pdf,.jpg,.jpeg,.png"
                               class="hidden">
                      </label>
                      <p class="text-sm text-gray-500 mt-2">Formats acceptés : PDF, JPG, PNG</p>
                    </div>
                    <div v-else class="text-green-600">
                      <i class="fas fa-check-circle text-4xl mb-4"></i>
                      <p class="font-medium">Fichier téléchargé avec succès !</p>
                      <p class="text-sm">{{ form.documents.transcript.name }}</p>
                      <button type="button"
                              @click="removeFile('transcript')"
                              class="mt-4 text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash mr-1"></i> Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Motivation Letter -->
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    2. Lettre de motivation (max 5MB) *
                  </label>
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-[#00b3d4] hover:bg-[#dbeff7]"
                    :class="{
                      'border-green-500 bg-green-50': form.documents.motivationLetter,
                      'border-[#00b3d4] bg-[#dbeff7]': isDraggingOver === 'motivationLetter'
                    }"
                    @dragover.prevent="handleDragOver('motivationLetter')"
                    @dragleave.prevent="handleDragLeave('motivationLetter')"
                    @drop.prevent="handleDrop('motivationLetter', $event)"
                  >
                    <div v-if="!form.documents.motivationLetter">
                      <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                      <p class="text-gray-600 mb-2">
                        Glissez-déposez votre fichier ici ou
                      </p>
                      <label class="inline-block bg-[#00b3d4] hover:bg-[#009cba] text-white px-6 py-2 rounded cursor-pointer">
                        <i class="fas fa-folder-open mr-2"></i>
                        Parcourir
                        <input type="file"
                               @change="handleFileUpload('motivationLetter', $event)"
                               accept=".pdf,.doc,.docx"
                               class="hidden">
                      </label>
                      <p class="text-sm text-gray-500 mt-2">Formats acceptés : PDF, DOC, DOCX</p>
                    </div>
                    <div v-else class="text-green-600">
                      <i class="fas fa-check-circle text-4xl mb-4"></i>
                      <p class="font-medium">Fichier téléchargé avec succès !</p>
                      <p class="text-sm">{{ form.documents.motivationLetter.name }}</p>
                      <button type="button"
                              @click="removeFile('motivationLetter')"
                              class="mt-4 text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash mr-1"></i> Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Passport Photo -->
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    3. Photo passeport (max 5MB) *
                  </label>
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-[#00b3d4] hover:bg-[#dbeff7]"
                    :class="{
                      'border-green-500 bg-green-50': form.documents.passportPhoto,
                      'border-[#00b3d4] bg-[#dbeff7]': isDraggingOver === 'passportPhoto'
                    }"
                    @dragover.prevent="handleDragOver('passportPhoto')"
                    @dragleave.prevent="handleDragLeave('passportPhoto')"
                    @drop.prevent="handleDrop('passportPhoto', $event)"
                  >
                    <div v-if="!form.documents.passportPhoto">
                      <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                      <p class="text-gray-600 mb-2">
                        Glissez-déposez votre fichier ici ou
                      </p>
                      <label class="inline-block bg-[#00b3d4] hover:bg-[#009cba] text-white px-6 py-2 rounded cursor-pointer">
                        <i class="fas fa-folder-open mr-2"></i>
                        Parcourir
                        <input type="file"
                               @change="handleFileUpload('passportPhoto', $event)"
                               accept=".jpg,.jpeg,.png"
                               class="hidden">
                      </label>
                      <p class="text-sm text-gray-500 mt-2">Formats acceptés : JPG, JPEG, PNG</p>
                    </div>
                    <div v-else class="text-green-600">
                      <i class="fas fa-check-circle text-4xl mb-4"></i>
                      <p class="font-medium">Fichier téléchargé avec succès !</p>
                      <p class="text-sm">{{ form.documents.passportPhoto.name }}</p>
                      <button type="button"
                              @click="removeFile('passportPhoto')"
                              class="mt-4 text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash mr-1"></i> Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                <!-- ID Document -->
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    4. Copie de la pièce d'identité (max 5MB) *
                  </label>
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-[#00b3d4] hover:bg-[#dbeff7]"
                    :class="{
                      'border-green-500 bg-green-50': form.documents.idDocument,
                      'border-[#00b3d4] bg-[#dbeff7]': isDraggingOver === 'idDocument'
                    }"
                    @dragover.prevent="handleDragOver('idDocument')"
                    @dragleave.prevent="handleDragLeave('idDocument')"
                    @drop.prevent="handleDrop('idDocument', $event)"
                  >
                    <div v-if="!form.documents.idDocument">
                      <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                      <p class="text-gray-600 mb-2">
                        Glissez-déposez votre fichier ici ou
                      </p>
                      <label class="inline-block bg-[#00b3d4] hover:bg-[#009cba] text-white px-6 py-2 rounded cursor-pointer">
                        <i class="fas fa-folder-open mr-2"></i>
                        Parcourir
                        <input type="file"
                               @change="handleFileUpload('idDocument', $event)"
                               accept=".pdf,.jpg,.jpeg,.png"
                               class="hidden">
                      </label>
                      <p class="text-sm text-gray-500 mt-2">Formats acceptés : PDF, JPG, PNG</p>
                    </div>
                    <div v-else class="text-green-600">
                      <i class="fas fa-check-circle text-4xl mb-4"></i>
                      <p class="font-medium">Fichier téléchargé avec succès !</p>
                      <p class="text-sm">{{ form.documents.idDocument.name }}</p>
                      <button type="button"
                              @click="removeFile('idDocument')"
                              class="mt-4 text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash mr-1"></i> Supprimer
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Diploma -->
                <div>
                  <label class="block text-gray-700 font-medium mb-2">
                    5. Copie du diplôme le plus élevé (max 10MB) *
                  </label>
                  <div
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-[#00b3d4] hover:bg-[#dbeff7]"
                    :class="{
                      'border-green-500 bg-green-50': form.documents.diplomaCopy,
                      'border-[#00b3d4] bg-[#dbeff7]': isDraggingOver === 'diplomaCopy'
                    }"
                    @dragover.prevent="handleDragOver('diplomaCopy')"
                    @dragleave.prevent="handleDragLeave('diplomaCopy')"
                    @drop.prevent="handleDrop('diplomaCopy', $event)"
                  >
                    <div v-if="!form.documents.diplomaCopy">
                      <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                      <p class="text-gray-600 mb-2">
                        Glissez-déposez votre fichier ici ou
                      </p>
                      <label class="inline-block bg-[#00b3d4] hover:bg-[#009cba] text-white px-6 py-2 rounded cursor-pointer">
                        <i class="fas fa-folder-open mr-2"></i>
                        Parcourir
                        <input type="file"
                               @change="handleFileUpload('diplomaCopy', $event)"
                               accept=".pdf,.jpg,.jpeg,.png"
                               class="hidden">
                      </label>
                      <p class="text-sm text-gray-500 mt-2">Formats acceptés : PDF, JPG, PNG</p>
                    </div>
                    <div v-else class="text-green-600">
                      <i class="fas fa-check-circle text-4xl mb-4"></i>
                      <p class="font-medium">Fichier téléchargé avec succès !</p>
                      <p class="text-sm">{{ form.documents.diplomaCopy.name }}</p>
                      <button type="button"
                              @click="removeFile('diplomaCopy')"
                              class="mt-4 text-red-500 hover:text-red-700 text-sm">
                        <i class="fas fa-trash mr-1"></i> Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="border-gray-300">

            <!-- Section 2: Declaration and Submission -->
            <div class="space-y-6">
              <div class="bg-[#dbeff7] p-6 rounded-lg">
                <h3 class="text-xl font-bold text-[#202a51] mb-4">Déclaration sur l'honneur</h3>
                <p class="text-gray-700 mb-4">
                  Je déclare que les renseignements fournis dans ce formulaire sont complets et conformes.
                  Je comprends également que les informations fournies font partie de mon dossier de pré-inscription,
                  et qu'il servira à l'étude de ma candidature.
                </p>
               
                <label class="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" v-model="form.declaration" required
                         class="text-[#00b3d4] focus:ring-[#00b3d4] h-5 w-5 mt-1">
                  <span class="text-gray-700">
                    Je certifie sur l'honneur l'exactitude des informations fournies et accepte les conditions *
                  </span>
                </label>
              </div>

              <!-- Navigation Buttons Step 4 -->
              <div class="flex justify-between pt-8">
                <button type="button" @click="currentStep = 3"
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3 rounded-lg font-medium transition duration-300">
                  ← Retour à l'étape 3
                </button>
               
                <button type="button"
                        @click="submitForm"
                        :disabled="!canSubmit || isSubmitting"
                        :class="[
                          'px-8 py-3 rounded-lg font-medium transition duration-300',
                          canSubmit && !isSubmitting
                            ? 'bg-[#00b3d4] hover:bg-[#009cba] text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        ]">
                  <template v-if="isSubmitting">
                    <i class="fas fa-spinner fa-spin mr-2"></i>
                    Envoi en cours...
                  </template>
                  <template v-else>
                    Valider et soumettre l'inscription
                  </template>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// Current step
const currentStep = ref(1)

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

// Liste complète des pays
const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Afrique du Sud', code: 'ZA' },
  { name: 'Albanie', code: 'AL' },
  { name: 'Algérie', code: 'DZ' },
  { name: 'Allemagne', code: 'DE' },
  { name: 'Andorre', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Antigua-et-Barbuda', code: 'AG' },
  { name: 'Arabie saoudite', code: 'SA' },
  { name: 'Argentine', code: 'AR' },
  { name: 'Arménie', code: 'AM' },
  { name: 'Australie', code: 'AU' },
  { name: 'Autriche', code: 'AT' },
  { name: 'Azerbaïdjan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahreïn', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbade', code: 'BB' },
  { name: 'Bélarus', code: 'BY' },
  { name: 'Belgique', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Bénin', code: 'BJ' },
  { name: 'Bhoutan', code: 'BT' },
  { name: 'Bolivie', code: 'BO' },
  { name: 'Bosnie-Herzégovine', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Brésil', code: 'BR' },
  { name: 'Brunei', code: 'BN' },
  { name: 'Bulgarie', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodge', code: 'KH' },
  { name: 'Cameroun', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cap-Vert', code: 'CV' },
  { name: 'Centrafrique', code: 'CF' },
  { name: 'Chili', code: 'CL' },
  { name: 'Chine', code: 'CN' },
  { name: 'Chypre', code: 'CY' },
  { name: 'Colombie', code: 'CO' },
  { name: 'Comores', code: 'KM' },
  { name: 'Congo', code: 'CG' },
  { name: 'Corée du Nord', code: 'KP' },
  { name: 'Corée du Sud', code: 'KR' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Côte d\'Ivoire', code: 'CI' },
  { name: 'Croatie', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Danemark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominique', code: 'DM' },
  { name: 'Égypte', code: 'EG' },
  { name: 'Émirats arabes unis', code: 'AE' },
  { name: 'Équateur', code: 'EC' },
  { name: 'Érythrée', code: 'ER' },
  { name: 'Espagne', code: 'ES' },
  { name: 'Estonie', code: 'EE' },
  { name: 'Eswatini', code: 'SZ' },
  { name: 'États-Unis', code: 'US' },
  { name: 'Éthiopie', code: 'ET' },
  { name: 'Fidji', code: 'FJ' },
  { name: 'Finlande', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambie', code: 'GM' },
  { name: 'Géorgie', code: 'GE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Grèce', code: 'GR' },
  { name: 'Grenade', code: 'GD' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guinée', code: 'GN' },
  { name: 'Guinée équatoriale', code: 'GQ' },
  { name: 'Guinée-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haïti', code: 'HT' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hongrie', code: 'HU' },
  { name: 'Inde', code: 'IN' },
  { name: 'Indonésie', code: 'ID' },
  { name: 'Irak', code: 'IQ' },
  { name: 'Iran', code: 'IR' },
  { name: 'Irlande', code: 'IE' },
  { name: 'Islande', code: 'IS' },
  { name: 'Israël', code: 'IL' },
  { name: 'Italie', code: 'IT' },
  { name: 'Jamaïque', code: 'JM' },
  { name: 'Japon', code: 'JP' },
  { name: 'Jordanie', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kirghizistan', code: 'KG' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'Kosovo', code: 'XK' },
  { name: 'Koweït', code: 'KW' },
  { name: 'Laos', code: 'LA' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Lettonie', code: 'LV' },
  { name: 'Liban', code: 'LB' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libye', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lituanie', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macédoine du Nord', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malaisie', code: 'MY' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malte', code: 'MT' },
  { name: 'Maroc', code: 'MA' },
  { name: 'Marshall', code: 'MH' },
  { name: 'Maurice', code: 'MU' },
  { name: 'Mauritanie', code: 'MR' },
  { name: 'Mexique', code: 'MX' },
  { name: 'Micronésie', code: 'FM' },
  { name: 'Moldavie', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolie', code: 'MN' },
  { name: 'Monténégro', code: 'ME' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibie', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Népal', code: 'NP' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Norvège', code: 'NO' },
  { name: 'Nouvelle-Zélande', code: 'NZ' },
  { name: 'Oman', code: 'OM' },
  { name: 'Ouganda', code: 'UG' },
  { name: 'Ouzbékistan', code: 'UZ' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palaos', code: 'PW' },
  { name: 'Palestine', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papouasie-Nouvelle-Guinée', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Pays-Bas', code: 'NL' },
  { name: 'Pérou', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pologne', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Qatar', code: 'QA' },
  { name: 'République centrafricaine', code: 'CF' },
  { name: 'République démocratique du Congo', code: 'CD' },
  { name: 'République dominicaine', code: 'DO' },
  { name: 'République tchèque', code: 'CZ' },
  { name: 'Roumanie', code: 'RO' },
  { name: 'Royaume-Uni', code: 'GB' },
  { name: 'Russie', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Saint-Christophe-et-Niévès', code: 'KN' },
  { name: 'Sainte-Lucie', code: 'LC' },
  { name: 'Saint-Marin', code: 'SM' },
  { name: 'Saint-Vincent-et-les-Grenadines', code: 'VC' },
  { name: 'Salomon', code: 'SB' },
  { name: 'Salvador', code: 'SV' },
  { name: 'Samoa', code: 'WS' },
  { name: 'Sao Tomé-et-Principe', code: 'ST' },
  { name: 'Sénégal', code: 'SN' },
  { name: 'Serbie', code: 'RS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapour', code: 'SG' },
  { name: 'Slovaquie', code: 'SK' },
  { name: 'Slovénie', code: 'SI' },
  { name: 'Somalie', code: 'SO' },
  { name: 'Soudan', code: 'SD' },
  { name: 'Soudan du Sud', code: 'SS' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Suède', code: 'SE' },
  { name: 'Suisse', code: 'CH' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Syrie', code: 'SY' },
  { name: 'Tadjikistan', code: 'TJ' },
  { name: 'Tanzanie', code: 'TZ' },
  { name: 'Tchad', code: 'TD' },
  { name: 'Thaïlande', code: 'TH' },
  { name: 'Timor oriental', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinité-et-Tobago', code: 'TT' },
  { name: 'Tunisie', code: 'TN' },
  { name: 'Turkménistan', code: 'TM' },
  { name: 'Turquie', code: 'TR' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Vatican', code: 'VA' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Viêt Nam', code: 'VN' },
  { name: 'Yémen', code: 'YE' },
  { name: 'Zambie', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' }
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
    licence: 'Choisissez la licence professionnelle pour laquelle vous voulez vous inscrire :',
    master: 'Choisissez le Master professionnel pour lequel vous voulez vous inscrire :',
    executive: 'Choisissez l\'Executive Master pour lequel vous voulez vous inscrire :',
    certificat: 'Choisissez le Certificat pour lequel vous voulez vous inscrire :'
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
  // Validation for step 1
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
  // Validation for step 2
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
  // Validation for step 3
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

// Handle drag and drop
const handleDragOver = (field) => {
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

// Handle file uploads
const handleFileUpload = (field, event) => {
  const file = event.target.files[0]
  if (file) {
    // Check file size based on field
    const maxSize = (field === 'transcript' || field === 'diplomaCopy') ? 10 * 1024 * 1024 : 5 * 1024 * 1024
    
    if (file.size > maxSize) {
      alert(`Le fichier est trop volumineux. Taille maximum : ${field === 'transcript' || field === 'diplomaCopy' ? '10MB' : '5MB'}`)
      return
    }
    
    // Check file type
    const validExtensions = {
      transcript: ['.pdf', '.jpg', '.jpeg', '.png'],
      motivationLetter: ['.pdf', '.doc', '.docx'],
      passportPhoto: ['.jpg', '.jpeg', '.png'],
      idDocument: ['.pdf', '.jpg', '.jpeg', '.png'],
      diplomaCopy: ['.pdf', '.jpg', '.jpeg', '.png']
    }
    
    const fileName = file.name.toLowerCase()
    const isValidExtension = validExtensions[field].some(ext => fileName.endsWith(ext))
    
    if (!isValidExtension) {
      alert(`Format de fichier invalide. Formats acceptés : ${validExtensions[field].join(', ')}`)
      return
    }
    
    form.documents[field] = file
  }
}

// Remove file
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
    // Create FormData for file uploads
    const formData = new FormData()
    
    // Append form data
    Object.keys(form).forEach(key => {
      if (key === 'documents') {
        Object.keys(form.documents).forEach(docKey => {
          if (form.documents[docKey]) {
            formData.append(docKey, form.documents[docKey])
          }
        })
      } else if (typeof form[key] === 'object') {
        formData.append(key, JSON.stringify(form[key]))
      } else {
        formData.append(key, form[key])
      }
    })
    
    // Add timestamp and unique ID
    formData.append('submissionDate', new Date().toISOString())
    formData.append('applicationId', 'ESCEN-' + Date.now())
    
    // Send to API endpoint (replace with your actual API endpoint)
    const response = await fetch('/api/inscription', {
      method: 'POST',
      body: formData
    })
    
    if (response.ok) {
      alert('Merci pour votre inscription ! Nous vous contacterons bientôt pour la suite du processus.')
      // Reset form
      resetForm()
      currentStep.value = 1
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      throw new Error('Erreur lors de l\'envoi du formulaire')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
  } finally {
    isSubmitting.value = false
  }
}

// Reset form function
const resetForm = () => {
  // Personal Information
  form.lastName = ''
  form.firstName = ''
  form.gender = ''
  form.birthDate = ''
  form.birthPlace = ''
  form.nationality = ''
  form.residenceCountry = ''
  form.phone = ''
  form.whatsapp = ''
  form.email = ''
  form.address = ''
  
  // Emergency Contact
  form.emergencyContact = {
    name: '',
    relationship: '',
    phone: '',
    email: ''
  }
  
  // Formation Choice
  form.level = ''
  form.program = ''
  
  // Education
  form.diploma = {
    name: '',
    field: '',
    year: '',
    institution: ''
  }
  form.experience = ''
  
  // Financing
  form.financing = {
    source: '',
    otherSource: '',
    sponsorName: '',
    sponsorPhone: '',
    sponsorEmail: ''
  }
  
  // Discovery
  form.discovery = {
    source: '',
    otherSource: '',
    referrerName: '',
    referrerContact: ''
  }
  
  // Accommodation
  form.accommodation = { 
    needAssistance: '',
    type: ''
  }
  
  // Documents
  form.documents = {
    transcript: null,
    motivationLetter: null,
    passportPhoto: null,
    idDocument: null,
    diplomaCopy: null
  }
  
  form.declaration = false
}

// Add Font Awesome icons
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ]
})
</script>

<style scoped>
/* Custom styles */
.progress-step {
  transition: all 0.3s ease;
}

.progress-step.active {
  background-color: #00b3d4;
  color: white;
}

.progress-step.completed {
  background-color: #6cc6e2;
  color: white;
}

/* Custom scrollbar for country dropdown */
select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb {
  background: #00b3d4;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb:hover {
  background: #009cba;
}

/* Animation for file upload */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.border-\[#00b3d4\] {
  animation: pulse 2s infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom focus styles */
input:focus, select:focus, textarea:focus {
  outline: none;
  ring-width: 2px;
  ring-color: #00b3d4;
}

/* File upload button styling */
input[type="file"]::-webkit-file-upload-button {
  background-color: #00b3d4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
}

input[type="file"]::-webkit-file-upload-button:hover {
  background-color: #009cba;
}
</style>