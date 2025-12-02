<template>
  <section class="relative h-[60vh] min-h-[525px] overflow-hidden">
    <!-- Slides Container -->
    <div class="relative h-full w-full">
      <div v-for="(slide, index) in slides" :key="index" :class="[
        'absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform',
        currentSlide === index ? 'opacity-100 translate-x-0' :
          currentSlide > index ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
      ]">
        <!-- Desktop Version -->
        <div class="hidden lg:flex relative h-full">
          <!-- Colonne texte à gauche avec dégradé coloré et bordure diagonale -->
          <div class="w-1/2 relative bg-gradient-to-br from-[#202a50] via-[#019fbf] to-[#01b4d5]">
            <!-- Effet de bordure diagonale -->
            <div
              class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#01b4d5] to-transparent clip-path-diagonal-right z-20">
            </div>

            <!-- Overlay texturé pour le texte -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            <!-- Contenu du slide - DÉCALÉ VERS LA DROITE AVEC PADDING LEFT AUGMENTÉ -->
            <div class="relative h-full flex items-center z-10">
              <div class="pl-[100px] lg:pl-[120px] xl:pl-[180px] pr-12 lg:pr-16 py-8 w-full">
                <div class="max-w-md space-y-4">
                  <!-- Badge -->
                  <div v-if="slide.badge"
                    class="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold animate-fade-in-up shadow-lg border border-white/30">
                    {{ slide.badge }}
                  </div>

                  <!-- Titre principal -->
                  <h1
                    class="text-3xl md:text-4xl lg:text-4xl font-black text-white leading-tight animate-fade-in-up tracking-tight">
                    {{ slide.title }}
                  </h1>

                  <!-- Sous-titre -->
                  <p
                    class="text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed animate-fade-in-up delay-200 font-bold">
                    {{ slide.subtitle }}
                  </p>

                  <!-- Description -->
                  <p v-if="slide.description"
                    class="text-base md:text-lg text-gray-100 max-w-sm leading-7 animate-fade-in-up delay-400 font-medium">
                    {{ slide.description }}
                  </p>

                  <!-- Boutons d'action -->
                  <div class="flex flex-row flex-wrap gap-3 animate-fade-in-up delay-600 pt-3">
                    <NuxtLink v-if="slide.primaryButton" :to="slide.primaryButton.link"
                      class="bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white whitespace-nowrap flex items-center justify-center gap-2 min-w-[130px]">
                      <span class="text-sm">{{ slide.primaryButton.text }}</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </NuxtLink>

                    <NuxtLink v-if="slide.secondaryButton" :to="slide.secondaryButton.link"
                      class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap flex items-center justify-center gap-2 min-w-[130px]">
                      <span class="text-sm">{{ slide.primaryButton.text === 'Formations' ? 'Contact' :
                        slide.secondaryButton.text }}</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne image à droite avec overlay complet -->
          <div class="w-1/2 relative">
            <!-- Effet de bordure diagonale -->
            <div
              class="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#01b4d5] to-transparent clip-path-diagonal-left z-20">
            </div>

            <!-- Image de fond avec overlay complet -->
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
              :style="`background-image: url('${slide.image}')`">
              <!-- Overlay complet pour remplir les vides -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#202a50] via-[#019fbf] to-[#01b4d5] mix-blend-overlay">
              </div>
              <div class="absolute inset-0 bg-[#202a50]/80"></div>
              <div class="absolute inset-0 bg-gradient-to-l from-[#01b4d5]/30 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Mobile Version (inchangée) -->
        <div class="lg:hidden relative h-full">
          <!-- Image en background avec overlay pour mobile -->
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="`background-image: url('${slide.image}')`">
            <!-- Overlay coloré pour mobile -->
            <div class="absolute inset-0 bg-gradient-to-b from-[#202a50] via-[#019fbf]/90 to-[#01b4d5]/80"></div>
            <div class="absolute inset-0 bg-black/40"></div>
          </div>

          <!-- Contenu superposé sur l'image pour mobile -->
          <div class="relative h-full flex items-center justify-center z-10">
            <div class="px-4 py-6 w-full max-w-sm mx-auto text-center">
              <div class="space-y-3">
                <!-- Badge -->
                <div v-if="slide.badge"
                  class="inline-block bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold animate-fade-in-up shadow-lg border border-white/30">
                  {{ slide.badge }}
                </div>

                <!-- Titre principal -->
                <h1 class="text-xl md:text-2xl font-black text-white leading-tight animate-fade-in-up tracking-tight">
                  {{ slide.title }}
                </h1>

                <!-- Sous-titre -->
                <p class="text-base md:text-lg text-white/90 leading-relaxed animate-fade-in-up delay-200 font-bold">
                  {{ slide.subtitle }}
                </p>

                <!-- Description -->
                <p v-if="slide.description"
                  class="text-sm md:text-base text-gray-100 leading-6 animate-fade-in-up delay-400 font-medium">
                  {{ slide.description }}
                </p>

                <!-- Boutons d'action CÔTE À CÔTE pour mobile -->
                <div class="flex flex-row gap-2 animate-fade-in-up delay-600 pt-3 justify-center">
                  <NuxtLink v-if="slide.primaryButton" :to="slide.primaryButton.link"
                    class="bg-white text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white whitespace-nowrap flex items-center justify-center gap-1 flex-1 min-w-[100px] max-w-[120px]">
                    <span class="text-xs">{{ slide.primaryButton.text }}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </NuxtLink>

                  <NuxtLink v-if="slide.secondaryButton" :to="slide.secondaryButton.link"
                    class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap flex items-center justify-center gap-1 flex-1 min-w-[100px] max-w-[120px]">
                    <span class="text-xs">{{ slide.primaryButton.text === 'Formations' ? 'Contact' :
                      slide.secondaryButton.text }}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contrôles de navigation -->
    <!-- Flèches -->
    <button @click="prevSlide"
      class="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 lg:p-3 rounded-full transition-all duration-300 z-30 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
      aria-label="Slide précédent">
      <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide"
      class="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 lg:p-3 rounded-full transition-all duration-300 z-30 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
      aria-label="Slide suivant">
      <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicateurs de slide -->
    <div class="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
      <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" :class="[
        'w-2 h-2 lg:w-2 lg:h-2 rounded-full transition-all duration-300 shadow-lg border border-white backdrop-blur-sm',
        currentSlide === index ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
      ]" :aria-label="`Aller au slide ${index + 1}`"></button>
    </div>

    <!-- Défilement automatique -->
    <div class="absolute bottom-4 lg:bottom-6 right-3 lg:right-4 flex items-center space-x-2 text-white z-30">
      <span class="text-xs font-medium backdrop-blur-sm bg-black/30 px-2 py-1 rounded-full">
        {{ currentSlide + 1 }}/{{ slides.length }}
      </span>
      <button @click="toggleAutoplay"
        class="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-300 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
        :aria-label="autoplay ? 'Arrêter le défilement automatique' : 'Démarrer le défilement automatique'">
        <svg v-if="autoplay" class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-else class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// État du slider
const currentSlide = ref(0)
const autoplay = ref(true)
let autoplayInterval

// Tableau des slides avec différentes images
const slides = [
  {
    image: '/valeurs/bg.jpg',
    badge: 'Excellence Académique',
    title: 'Formez-vous aux Métiers du Digital',
    subtitle: 'Devenez un expert en commerce et économie numérique',
    description: 'L\'ESCEN vous prépare aux carrières d\'avenir avec des formations innovantes et adaptées aux besoins du marché.',
    primaryButton: {
      text: 'Formations',
      link: '/formations'
    },
    secondaryButton: {
      text: 'Contact',
      link: '/contact'
    }
  },
  {
    image: '/valeurs/bg.jpg',
    badge: 'Innovation Pédagogique',
    title: 'Une Pédagogie Tournée vers l\'Avenir',
    subtitle: 'Apprenez avec les méthodes les plus modernes',
    description: 'Notre approche pédagogique unique combine théorie et pratique pour une insertion professionnelle réussie.',
    primaryButton: {
      text: 'Contact',
      link: '/contact'
    },
    secondaryButton: {
      text: 'Contact',
      link: '/contact'
    }
  },
  {
    image: '/valeurs/bg.jpg',
    badge: 'Carrière Internationale',
    title: 'Ouvrez-vous sur le Monde',
    subtitle: 'Des opportunités à l\'international',
    description: 'Étudiez à l\'étranger et développez votre réseau professionnel international avec nos partenariats mondiaux.',
    primaryButton: {
      text: 'Partenariats',
      link: '/international'
    },
    secondaryButton: {
      text: 'Candidater',
      link: '/admission'
    }
  }
]

// Navigation entre slides
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Défilement automatique
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (autoplay.value) {
      nextSlide()
    }
  }, 5000)
}

const toggleAutoplay = () => {
  autoplay.value = !autoplay.value
  if (autoplay.value && !autoplayInterval) {
    startAutoplay()
  }
}

// Gestion du cycle de vie
onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
/* Animations personnalisées */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effets de bordure diagonale */
.clip-path-diagonal-right {
  clip-path: polygon(0 0, 100% 0, 0 100%, 0% 100%);
}

.clip-path-diagonal-left {
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 100% 0);
}

/* Ajustements mobiles supplémentaires */
@media (max-width: 640px) {
  .h-\[60vh\] {
    height: 55vh;
  }

  .min-h-\[525px\] {
    min-height: 400px;
  }
}

@media (max-width: 480px) {
  .h-\[60vh\] {
    height: 50vh;
  }

  .min-h-\[525px\] {
    min-height: 350px;
  }
}
</style>