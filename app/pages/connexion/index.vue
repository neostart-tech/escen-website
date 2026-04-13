<template>
  <div class="min-h-screen bg-[#f4f8fb] flex flex-col">

    <!-- ===== TOP BAR ===== -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-10 w-auto">
        </NuxtLink>
        <NuxtLink to="/"
          class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#01b4d5]/10 hover:bg-[#01b4d5] text-[#01b4d5] hover:text-white font-semibold text-sm transition-all duration-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span class="hidden sm:inline">Retour à l'accueil</span>
          <span class="sm:hidden">Accueil</span>
        </NuxtLink>
      </div>
    </header>

    <!-- ===== CONTENU ===== -->
    <div class="flex-1 flex lg:flex-row">

    <!-- ===== PANNEAU GAUCHE — Formulaire ===== -->
    <div class="flex-1 flex flex-col">

      <!-- Form area -->
      <div class="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
        <div class="w-full max-w-md">

          <!-- Heading -->
          <div class="mb-8 text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#01b4d5]/10 mb-4">
              <svg class="w-7 h-7 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-[#202a50]">Bienvenue</h1>
            <p class="text-sm text-gray-400 mt-1">Connectez-vous à votre espace ESCEN</p>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
            <form @submit.prevent="handleLogin" novalidate class="space-y-5">

              <!-- Email -->
              <div>
                <label class="conn-label">Adresse email <span class="text-red-400">*</span></label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <input type="email" v-model="email" placeholder="vous@email.com" class="conn-input pl-10"/>
                </div>
              </div>

              <!-- Mot de passe -->
              <div>
                <label class="conn-label">Mot de passe <span class="text-red-400">*</span></label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                    <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <input :type="showPassword ? 'text' : 'password'" v-model="password"
                         placeholder="••••••••" class="conn-input pl-10 pr-11"/>
                  <button type="button" @click="showPassword = !showPassword"
                          class="absolute inset-y-0 right-3.5 flex items-center text-gray-300 hover:text-[#01b4d5] transition-colors">
                    <svg v-if="showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Se souvenir / Mot de passe oublié -->
              <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div class="w-4 h-4 rounded border-2 flex items-center justify-center transition-all"
                       :class="rememberMe ? 'bg-[#01b4d5] border-[#01b4d5]' : 'border-gray-300 group-hover:border-[#01b4d5]/50'">
                    <svg v-if="rememberMe" class="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <input type="checkbox" v-model="rememberMe" class="hidden">
                  <span class="text-sm text-gray-500">Se souvenir de moi</span>
                </label>
                <NuxtLink to="/mot-de-passe-oublie"
                          class="text-sm font-medium text-[#01b4d5] hover:text-[#202a50] transition-colors">
                  Mot de passe oublié ?
                </NuxtLink>
              </div>

              <!-- Erreur -->
              <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0">
                <div v-if="errorMessage" class="flex items-center gap-3 p-3.5 bg-red-50 border border-red-100 rounded-xl">
                  <svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                  <p class="text-sm text-red-600">{{ errorMessage }}</p>
                </div>
              </transition>

              <!-- Bouton connexion -->
              <button type="submit" :disabled="isLoading"
                      class="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
                      :class="isLoading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#01b4d5] hover:bg-[#019fbf] text-white shadow-md shadow-[#01b4d5]/25 hover:shadow-lg'">
                <svg v-if="isLoading" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                </svg>
                {{ isLoading ? 'Connexion en cours…' : 'Se connecter' }}
              </button>
            </form>
          </div>

          <!-- Inscription -->
          <p class="text-center text-sm text-gray-400 mt-6">
            Pas encore de compte ?
            <NuxtLink to="/inscription" class="text-[#01b4d5] hover:text-[#202a50] font-semibold ml-1 transition-colors">
              S'inscrire
            </NuxtLink>
          </p>

          <!-- Contact -->
          <p class="text-center text-xs text-gray-300 mt-3">
            Besoin d'aide ?
            <a href="tel:+22898012727" class="text-[#01b4d5]/70 hover:text-[#01b4d5]">+228 98 01 27 27</a>
          </p>
        </div>
      </div>
    </div><!-- fin .flex-1 panneau gauche -->

    <!-- ===== PANNEAU DROIT (desktop) ===== -->
    <div class="hidden lg:flex flex-col w-[400px] xl:w-[440px] flex-shrink-0 bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 flex flex-col h-full px-10 py-12">
         <!-- Logo + Titre -->
          <div class="mb-5">
            <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-12 w-auto brightness-0 invert mb-6">
            <h2 class="text-2xl font-bold text-white leading-snug">
              Votre espace<br>étudiant vous attend
            </h2>
            <p class="text-sm text-gray-400 leading-relaxed">
              Accédez à vos cours, ressources pédagogiques et suivez votre progression académique.
            </p>
          </div>

        <div class="space-y-4 flex-1">
          <div v-for="item in panelItems" :key="item.title"
               class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
            <div class="w-9 h-9 rounded-xl bg-[#01b4d5]/15 flex items-center justify-center flex-shrink-0">
              <svg class="w-4.5 h-4.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon"/>
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-white mb-0.5">{{ item.title }}</p>
              <p class="text-xs text-gray-400 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/8">
          <p class="text-xs text-gray-500 mb-3">Horaires du support</p>
          <p class="text-sm text-gray-300">Lun – Ven : 8h – 18h</p>
          <a href="mailto:hello@escen.university" class="text-sm text-[#01b4d5] hover:text-white transition-colors">hello@escen.university</a>
        </div>
      </div>
    </div>
    </div><!-- fin .flex-1 flex lg:flex-row -->

    <!-- ===== MODALE AIDE ===== -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-150" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="showHelp" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
          <div class="flex justify-between items-center mb-5">
            <h3 class="font-bold text-[#202a50]">Besoin d'aide ?</h3>
            <button @click="showHelp = false" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="space-y-3 text-sm">
            <div class="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-700 text-xs leading-relaxed">
              Vérifiez votre email et mot de passe. En cas d'oubli, utilisez le lien <strong>« Mot de passe oublié »</strong>.
            </div>
            <a href="mailto:hello@escen.university" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600">
              <div class="w-8 h-8 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              hello@escen.university
            </a>
            <a href="tel:+22898012727" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600">
              <div class="w-8 h-8 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
              </div>
              +228 98 01 27 27
            </a>
          </div>
          <button @click="showHelp = false"
                  class="mt-5 w-full py-2.5 rounded-xl bg-[#01b4d5] hover:bg-[#019fbf] text-white font-semibold text-sm transition-colors">
            Fermer
          </button>
        </div>
      </div>
    </transition>

    <!-- ===== TOAST SUCCÈS ===== -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
      <div v-if="showNotification"
           class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#202a50] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 min-w-[280px]">
        <div class="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div>
          <p class="font-semibold text-sm">Connexion réussie !</p>
          <p class="text-xs text-gray-400">Redirection en cours…</p>
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

// Panel items (right column)
const panelItems = [
  {
    title: 'Cours & supports de cours',
    desc: 'Retrouvez tous vos cours, TD et supports pédagogiques en un seul endroit.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Suivi de progression',
    desc: "Visualisez vos résultats, notes et l'avancement de vos formations.",
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Messagerie & annonces',
    desc: 'Communiquez avec vos enseignants et restez informé des dernières actualités.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Emploi du temps',
    desc: 'Consultez votre planning hebdomadaire et les salles de cours en temps réel.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
]

// Use layout without header/footer
definePageMeta({
  layout: false
})
</script>

<style scoped>
.conn-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.375rem;
}

.conn-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  color: #111827;
  background: #f9fafb;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}

.conn-input:focus {
  outline: none;
  border-color: #01b4d5;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(1, 180, 213, 0.1);
}

.conn-input::placeholder {
  color: #9ca3af;
}
</style>