<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div v-if="isVisible" class="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-4 md:p-6">
      <div class="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
        <div class="flex-1">
          <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            Nous respectons votre vie privée
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Afin d'améliorer votre expérience sur notre site, d'analyser notre trafic et de vous proposer des formations pertinentes via des publicités ciblées, nous utilisons des cookies (comme Google Analytics et Meta Pixel).
            <NuxtLink to="/politique-cookies" class="text-[#01b4d5] font-medium hover:underline whitespace-nowrap ml-1">En savoir plus</NuxtLink>
          </p>
        </div>
        <div class="flex items-center gap-3 w-full lg:w-auto shrink-0">
          <button @click="declineCookies" class="flex-1 lg:flex-none px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 text-sm md:text-base font-bold transition-colors">
            Refuser
          </button>
          <button @click="acceptCookies" class="flex-1 lg:flex-none px-6 py-3 bg-[#01b4d5] hover:bg-[#0056b3] text-white rounded-xl text-sm md:text-base font-bold transition-colors shadow-md hover:shadow-lg">
            Accepter tout
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('escen_cookie_consent')
  if (!consent) {
    setTimeout(() => {
      isVisible.value = true
    }, 1500)
  }

  // Écoute de l'événement pour rouvrir la bannière manuellement
  window.addEventListener('open-cookie-banner', () => {
    isVisible.value = true
  })
})

const acceptCookies = () => {
  localStorage.setItem('escen_cookie_consent', 'accepted')
  isVisible.value = false
  window.dispatchEvent(new Event('cookies-accepted'))
}

const declineCookies = () => {
  localStorage.setItem('escen_cookie_consent', 'declined')
  isVisible.value = false
}
</script>
