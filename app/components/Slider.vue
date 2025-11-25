<template>
  <section class="relative h-[60vh] min-h-[500px] overflow-hidden">
    <!-- Slides Container -->
    <div class="relative h-full w-full">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="[
          'absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform',
          currentSlide === index ? 'opacity-100 translate-x-0' : 
          currentSlide > index ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
        ]"
      >
        <!-- Image de fond -->
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="`background-image: url('${slide.image}')`"
        >
          <!-- Overlay sombre -->
          <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- Contenu du slide -->
        <div class="relative h-full flex items-center">
          <div class="container mx-auto px-4 lg:px-8">
            <div class="max-w-2xl space-y-6">
              <!-- Badge -->
              <div 
                v-if="slide.badge"
                class="inline-block bg-[#01b4d5] text-white px-4 py-2 rounded-full text-sm font-bold animate-fade-in-up shadow-lg"
              >
                {{ slide.badge }}
              </div>

              <!-- Titre principal -->
              <h1 class="text-3xl md:text-4xl lg:text-4xl font-black text-white leading-snug animate-fade-in-up tracking-tight">
                {{ slide.title }}
              </h1>

              <!-- Sous-titre -->
              <p class="text-xl md:text-xl lg:text-xl text-white leading-relaxed animate-fade-in-up delay-200 font-bold">
                {{ slide.subtitle }}
              </p>

              <!-- Description -->
              <p 
                v-if="slide.description"
                class="text-lg md:text-lg text-gray-100 max-w-xl leading-7 animate-fade-in-up delay-400 font-medium"
              >
                {{ slide.description }}
              </p>

              <!-- Boutons d'action - Version compacte -->
              <div class="flex flex-row flex-wrap gap-3 animate-fade-in-up delay-600 pt-4">
                <NuxtLink 
                  v-if="slide.primaryButton"
                  :to="slide.primaryButton.link"
                  class="bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white whitespace-nowrap flex-1 min-w-[130px] max-w-[180px] text-center"
                >
                  {{ slide.primaryButton.text }}
                </NuxtLink>
                
                <NuxtLink 
                  v-if="slide.secondaryButton"
                  :to="slide.secondaryButton.link"
                  class="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap flex-1 min-w-[130px] max-w-[180px] text-center"
                >
                  {{ slide.secondaryButton.text }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contrôles de navigation -->
    <!-- Flèches -->
    <button 
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
      aria-label="Slide précédent"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
      aria-label="Slide suivant"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicateurs de slide -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300 shadow-lg border border-white',
          currentSlide === index ? 'bg-white scale-125' : 'bg-transparent hover:bg-white hover:bg-opacity-50'
        ]"
        :aria-label="`Aller au slide ${index + 1}`"
      ></button>
    </div>

    <!-- Défilement automatique -->
    <div class="absolute bottom-6 right-6 flex items-center space-x-2 text-white text-sm z-10">
      <button 
        @click="toggleAutoplay"
        class="bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-2 rounded-full transition-all duration-300 shadow-lg"
        :aria-label="autoplay ? 'Arrêter le défilement automatique' : 'Démarrer le défilement automatique'"
      >
        <svg 
          v-if="autoplay" 
          class="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg 
          v-else 
          class="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
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
    image: '/slider/slide1.jpg',
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
    image: '/slider/slide2.jpg',
    badge: 'Innovation Pédagogique',
    title: 'Une Pédagogie Tournée vers l\'Avenir',
    subtitle: 'Apprenez avec les méthodes les plus modernes',
    description: 'Notre approche pédagogique unique combine théorie et pratique pour une insertion professionnelle réussie.',
    primaryButton: {
      text: 'En savoir plus',
      link: '/a-propos'
    },
    secondaryButton: {
      text: 'Brochure',
      link: '/brochure'
    }
  },
  {
    image: '/slider/slide3.jpg',
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

/* Amélioration de la lisibilité sur mobile */
@media (max-width: 768px) {
  .h-\[60vh\] {
    height: 70vh;
  }
  
  .min-h-\[500px\] {
    min-height: 400px;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .space-y-6 {
    space-y: 1.5rem;
  }
  
  .min-w-\[130px\] {
    min-width: 120px;
  }
  
  .max-w-\[180px\] {
    max-width: 160px;
  }
}

@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.5rem;
  }
  
  .text-xl {
    font-size: 1rem;
  }
  
  .text-lg {
    font-size: 0.9rem;
  }
  
  .space-y-6 {
    space-y: 1rem;
  }
  
  .px-5 {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .min-w-\[130px\] {
    min-width: 110px;
  }
  
  .max-w-\[180px\] {
    max-width: 140px;
  }
  
  .gap-3 {
    gap: 0.75rem;
  }
}

/* Pour les très petits écrans */
@media (max-width: 380px) {
  .min-w-\[130px\] {
    min-width: 100px;
  }
  
  .max-w-\[180px\] {
    max-width: 120px;
  }
  
  .px-5 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .text-sm {
    font-size: 0.8rem;
  }
}

/* Version desktop spécifique */
@media (min-width: 1024px) {
  .max-w-2xl {
    max-width: 42rem;
  }
  
  .max-w-xl {
    max-width: 36rem;
  }
}
</style>