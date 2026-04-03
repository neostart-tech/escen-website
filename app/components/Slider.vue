<template>
  <section class="relative h-[85vh] min-h-[650px] overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#141b2b]">
    <!-- ===== FOND STATIQUE ÉLÉGANT ===== -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #01b4d5 1px, transparent 0); background-size: 50px 50px;"></div>
      <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#019fbf]/10 to-transparent"></div>
      <div class="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#202a50]/20 to-transparent"></div>
    </div>

    <!-- ===== SVG THÉMATIQUES UNIVERSITÉ FLOTTANTS ===== -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      
      <!-- Diplôme / Parchemin -->
      <div class="absolute animate-float-university" style="top: 15%; left: 5%; animation-delay: 0s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30 hover:text-[#01b4d5]/50 transition-colors duration-1000">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 8H16V12H8V8Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 16H9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Mortier / Toque universitaire -->
      <div class="absolute animate-float-university" style="top: 25%; right: 8%; animation-delay: 1s;">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30 hover:text-[#019fbf]/50 transition-colors duration-1000">
          <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12.5V16.5C8 18.5 12 20 12 20C12 20 16 18.5 16 16.5V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 10V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Livre ouvert -->
      <div class="absolute animate-float-university" style="bottom: 20%; left: 10%; animation-delay: 2s;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30 hover:text-[#01b4d5]/50 transition-colors duration-1000">
          <path d="M4 5H9C10.5 5 12 6.5 12 8V19C12 19 9 17 4 19V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 5H15C13.5 5 12 6.5 12 8V19C12 19 15 17 20 19V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Microscope (science) -->
      <div class="absolute animate-float-university" style="top: 60%; right: 15%; animation-delay: 3s;">
        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]/40 hover:text-[#202a50]/60 transition-colors duration-1000">
          <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 11V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M8 16H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M10 20L12 16L14 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Globe / International -->
      <div class="absolute animate-float-university" style="bottom: 30%; right: 20%; animation-delay: 4s;">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30 hover:text-[#01b4d5]/50 transition-colors duration-1000">
          <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 4C14 6 15 9 15 12C15 15 14 18 12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 4C10 6 9 9 9 12C9 15 10 18 12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Crayon / Écriture -->
      <div class="absolute animate-float-university" style="top: 40%; left: 15%; animation-delay: 5s;">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30 hover:text-[#019fbf]/50 transition-colors duration-1000">
          <path d="M16 4L20 8L8 20H4V16L16 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 6L18 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Équerre / Géométrie -->
      <div class="absolute animate-float-university" style="bottom: 15%; left: 20%; animation-delay: 6s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]/40 hover:text-[#202a50]/60 transition-colors duration-1000">
          <path d="M6 18L18 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 15L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 12L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L6 18L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- Molécule / Science -->
      <div class="absolute animate-float-university" style="top: 75%; left: 5%; animation-delay: 7s;">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30 hover:text-[#01b4d5]/50 transition-colors duration-1000">
          <circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="6" cy="16" r="2" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="18" cy="16" r="2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 8L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 8L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M8 16H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Bâtiment universitaire -->
      <div class="absolute animate-float-university" style="top: 10%; right: 25%; animation-delay: 8s;">
        <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30 hover:text-[#019fbf]/50 transition-colors duration-1000">
          <path d="M4 20H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 20V10L12 5L18 10V20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M10 20V15H14V20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <rect x="9" y="8" width="6" height="2" stroke="currentColor" stroke-width="1"/>
        </svg>
      </div>

      <!-- Horloge / Temps -->
      <div class="absolute animate-float-university" style="bottom: 40%; right: 5%; animation-delay: 9s;">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]/40 hover:text-[#202a50]/60 transition-colors duration-1000">
          <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Étoile / Excellence -->
      <div class="absolute animate-float-university" style="top: 80%; right: 30%; animation-delay: 10s;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30 hover:text-[#01b4d5]/50 transition-colors duration-1000">
          <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- ===== CONTENEUR PRINCIPAL ===== -->
    <div class="relative z-20 h-full flex items-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto lg:mx-0 lg:ml-8 xl:ml-16">
          <!-- Slides -->
          <div v-for="(slide, index) in slides" :key="index" 
               class="transition-opacity duration-700"
               :class="currentSlide === index ? 'block' : 'hidden'">
            
            <!-- Titre -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-center lg:text-left mb-4">
              <span class="block overflow-hidden">
                <span class="inline-block animate-fade-in"
                      :style="{ animationDelay: '0.1s' }">
                  <span class="text-white">
                    {{ slide.title.split(' ')[0] }}
                  </span>
                </span>
              </span>
              <span class="block overflow-hidden">
                <span class="inline-block animate-fade-in text-[#01b4d5] font-semibold"
                      :style="{ animationDelay: '0.3s' }">
                  {{ slide.title.split(' ').slice(1).join(' ') }}
                </span>
              </span>
            </h1>

            <!-- Sous-titre -->
            <p class="text-base sm:text-lg lg:text-xl text-[#01b4d5]/70 text-center lg:text-left mb-3 animate-fade-in"
               :style="{ animationDelay: '0.5s' }">
              {{ slide.subtitle }}
            </p>

            <!-- Description -->
            <p class="text-sm sm:text-base text-gray-400 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in"
               :style="{ animationDelay: '0.7s' }">
              {{ slide.description }}
            </p>

            <!-- Boutons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink :to="slide.primaryButton.link"
                        class="px-6 py-3 bg-[#019fbf] hover:bg-[#01b4d5] text-white font-medium rounded-sm transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2 group">
                {{ slide.primaryButton.text }}
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>

              <NuxtLink :to="slide.secondaryButton.link"
                        class="px-6 py-3 border border-white/20 hover:border-[#01b4d5]/50 text-white/90 hover:text-white font-medium rounded-sm transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2 group">
                {{ slide.secondaryButton.text }}
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== NAVIGATION (UNIQUEMENT LES FLÈCHES) ===== -->
    <button @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 text-white/50 hover:text-white transition-colors duration-300 z-30">
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 text-white/50 hover:text-white transition-colors duration-300 z-30">
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- INDICATEURS SUPPRIMÉS - PLUS RIEN N'APPARAÎT EN BAS -->
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplay = ref(true)
let autoplayInterval

const slides = [
  {
    title: 'Formez-vous aux Métiers du Digital',
    subtitle: 'Devenez un expert en commerce et économie numérique',
    description: 'L\'ESCEN vous prépare aux carrières d\'avenir avec des formations innovantes et adaptées aux besoins du marché.',
    primaryButton: { text: 'Découvrir nos formations', link: '/formations' },
    secondaryButton: { text: 'Nous contacter', link: '/contact' }
  },
  {
    title: 'Une Pédagogie Tournée vers l\'Avenir',
    subtitle: 'Apprenez avec les méthodes les plus modernes',
    description: 'Notre approche pédagogique unique combine théorie et pratique pour une insertion professionnelle réussie.',
    primaryButton: { text: 'Notre pédagogie', link: '/pedagogie' },
    secondaryButton: { text: 'Candidater', link: '/inscription' }
  },
  {
    title: 'Ouvrez-vous sur le Monde',
    subtitle: 'Des opportunités à l\'international',
    description: 'Étudiez à l\'étranger et développez votre réseau professionnel international avec nos partenariats mondiaux.',
    primaryButton: { text: 'Programmes internationaux', link: '/international' },
    secondaryButton: { text: 'En savoir plus', link: '/contact' }
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  autoplayInterval = setInterval(() => {
    if (autoplay.value) {
      nextSlide()
    }
  }, 6000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
/* Animations pour les SVG universitaires */
@keyframes float-university {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(15px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(0, -25px) rotate(0deg);
  }
  75% {
    transform: translate(-15px, -10px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.animate-float-university {
  animation: float-university 18s ease-in-out infinite;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* Effet de brillance au survol des SVG */
.animate-float-university:hover {
  animation-play-state: paused;
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px rgba(1, 180, 213, 0.5));
  z-index: 40;
}

/* Ajustements responsifs */
@media (max-width: 768px) {
  .animate-float-university svg {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 640px) {
  .h-\[85vh\] {
    height: 90vh;
    min-height: 600px;
  }
  
  .animate-float-university {
    opacity: 0.6;
  }
  
  .animate-float-university svg {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  .h-\[85vh\] {
    min-height: 550px;
  }
}
</style>