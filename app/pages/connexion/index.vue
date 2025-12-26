<template>
  <div class="h-screen w-screen bg-gradient-to-br from-[#dbeff7] to-white overflow-hidden">
    <!-- Main Container - Prend toute la page -->
    <div class="h-full w-full flex">
      <div class="w-full h-full bg-white flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
          
          <!-- Left Side - Login Form -->
          <div class="flex flex-col justify-center p-8 md:p-10 lg:p-12 -mt-10">

            <div class="max-w-md mx-auto w-full">
              <!-- Logo -->
              <div class="mt-4 mb-4">
                <NuxtLink to="/" class="flex items-center space-x-3">
                  <img
                    src="https://www.escen.university/wa_res/icons/LOGO_ESCEN_(1).png"
                    alt="ESCEN Logo"
                    class="h-18 w-auto"
                  />
                </NuxtLink>
              </div>

              <!-- Welcome Message -->
              <div class="mb-8">
                <h1 class="text-xl md:text-2xl font-bold text-[#202a51] mb-3 leading-snug">

                  Accédez à votre<br>
                  <span class="bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] bg-clip-text text-transparent">
                    espace utilisateur
                  </span>
                </h1> 
                     <!--<p class="text-gray-600 text-sm md:text-base">
                           Connectez-vous pour accéder à votre tableau de bord, vos cours et vos ressources.
                     </p> --> 
              </div>

              <!-- Login Form -->
              <form @submit.prevent="handleLogin" class="space-y-6">
                <!-- Email Input -->
                <div>
                  <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                    Adresse email <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      v-model="email"
                      required
                      placeholder="exemple@email.com"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                    >
                  </div>
                </div>

                <!-- Password Input -->
                <div>
                  <label class="block text-[#202a51] font-semibold mb-2 text-sm">
                    Mot de passe <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <input 
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
                      required
                      placeholder="Votre mot de passe"
                      class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00b3d4] focus:border-transparent transition-all duration-300 bg-gray-50"
                    >
                    <button 
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#00b3d4] transition-colors"
                    >
                      <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                      </svg>
                      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Remember Me & Forgot Password -->
                <div class="flex items-center justify-between">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      v-model="rememberMe"
                      class="h-4 w-4 text-[#00b3d4] focus:ring-[#00b3d4] border-gray-300 rounded"
                    >
                    <span class="text-gray-700 text-sm">Se souvenir de moi</span>
                  </label>
                  
                  <NuxtLink 
                    to="/mot-de-passe-oublie" 
                    class="text-[#00b3d4] hover:text-[#202a51] text-sm font-medium transition-colors duration-200"
                  >
                    Mot de passe oublié ?
                  </NuxtLink>
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-red-700 text-sm">{{ errorMessage }}</p>
                  </div>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  :disabled="isLoading"
                  class="w-full bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] hover:from-[#202a51] hover:to-[#00b3d4] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <div class="flex items-center justify-center">
                    <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{{ isLoading ? 'Connexion en cours...' : 'Me connecter' }}</span>
                  </div>
                </button>


                <!-- Register Link -->
                <div class="text-center pt-1">
                  <p class="text-gray-600 text-sm">
                    Vous n'avez pas encore de compte ?
                    <NuxtLink 
                      to="/inscription" 
                      class="text-[#00b3d4] hover:text-[#202a51] font-semibold ml-1 transition-colors duration-200"
                    >
                      S'inscrire maintenant
                    </NuxtLink>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <!-- Right Side - Hero Image & Info -->
          <div class="hidden lg:flex flex-col relative bg-gradient-to-br from-[#202a51] to-[#374c9c]">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#00b3d4] rounded-full -translate-y-32 translate-x-32"></div>
              <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#6cc6e2] rounded-full translate-y-48 -translate-x-48"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 h-full flex flex-col justify-start p-8 md:p-10 lg:p-12">

              <!-- Hero Image -->
              <div class="flex-1 flex items-center items-start justify-start mb-8">
                <div class="w-full max-w-sm">
                  <!-- <img 
                    src="" 
                    alt="Étudiant ESCEN"
                    class="w-full h-auto object-contain"
                  /> -->
                </div>
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
      <span class="font-medium">Connexion réussie ! Redirection en cours...</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

// UI states
const isLoading = ref(false)
const errorMessage = ref('')
const showHelp = ref(false)
const showNotification = ref(false)

// Handle login
const handleLogin = async () => {
  // Reset error message
  errorMessage.value = ''
  
  // Basic validation
  if (!email.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    errorMessage.value = 'Veuillez entrer une adresse email valide.'
    return
  }
  
  isLoading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate successful login
    const isAuthenticated = true
    
    if (isAuthenticated) {
      // Store auth state
      if (rememberMe.value) {
        localStorage.setItem('rememberMe', 'true')
      }
      
      // Show success notification
      showNotification.value = true
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } else {
      errorMessage.value = 'Email ou mot de passe incorrect.'
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}

// Social login functions
const loginWithGoogle = () => {
  console.log('Login with Google')
  // Implement Google OAuth
}

const loginWithMicrosoft = () => {
  console.log('Login with Microsoft')
  // Implement Microsoft OAuth
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

/* Gradient text */
.gradient-text {
  background: linear-gradient(to right, #00b3d4, #6cc6e2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Custom focus styles */
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 179, 212, 0.1);
}

/* Ensure full height on all devices */
html, body, #__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .flex-col.justify-center {
    justify-content: flex-start;
    padding-top: 2rem;
  }
  
  .max-w-md {
    max-width: 100%;
  }
}
</style>