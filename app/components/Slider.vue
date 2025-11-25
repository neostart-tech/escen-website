<template>
  <section class="relative h-[70vh] min-h-[600px] overflow-hidden">
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
          <div class="container mx-auto px-6 lg:px-8">
            <div class="max-w-4xl space-y-10">
              <!-- Badge -->
              <div 
                v-if="slide.badge"
                class="inline-block bg-[#01b4d5] text-white px-8 py-4 rounded-full text-lg font-bold animate-fade-in-up shadow-2xl"
              >
                {{ slide.badge }}
              </div>

              <!-- Titre principal -->
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight animate-fade-in-up tracking-tight">
                {{ slide.title }}
              </h1>

              <!-- Sous-titre -->
              <p class="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed animate-fade-in-up delay-200 font-bold">
                {{ slide.subtitle }}
              </p>

              <!-- Description -->
              <p 
                v-if="slide.description"
                class="text-xl md:text-2xl text-gray-100 max-w-2xl leading-9 animate-fade-in-up delay-400 font-medium"
              >
                {{ slide.description }}
              </p>

              <!-- Boutons d'action -->
              <div class="flex flex-col sm:flex-row gap-8 animate-fade-in-up delay-600 pt-6">
                <NuxtLink 
                  v-if="slide.primaryButton"
                  :to="slide.primaryButton.link"
                  class="bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center min-w-[250px] border-4 border-white"
                >
                  {{ slide.primaryButton.text }}
                </NuxtLink>
                
                <NuxtLink 
                  v-if="slide.secondaryButton"
                  :to="slide.secondaryButton.link"
                  class="bg-transparent bg-hover text-white border-4 border-white hover:bg-white hover:text-red-900 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center min-w-[250px]"
                   style="border: 1px solid white !important;color: white !important;"
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
      class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-5 rounded-full transition-all duration-300 z-10 shadow-2xl"
      aria-label="Slide précédent"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-5 rounded-full transition-all duration-300 z-10 shadow-2xl"
      aria-label="Slide suivant"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicateurs de slide -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-5 z-10">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-5 h-5 rounded-full transition-all duration-300 shadow-2xl border-2 border-white',
          currentSlide === index ? 'bg-white scale-125' : 'bg-transparent hover:bg-white hover:bg-opacity-50'
        ]"
        :aria-label="`Aller au slide ${index + 1}`"
      ></button>
    </div>

    <!-- Défilement automatique -->
    <div class="absolute bottom-8 right-8 flex items-center space-x-3 text-white text-lg z-10">
      <button 
        @click="toggleAutoplay"
        class="bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-900 p-4 rounded-full transition-all duration-300 shadow-2xl"
        :aria-label="autoplay ? 'Arrêter le défilement automatique' : 'Démarrer le défilement automatique'"
      >
        <svg 
          v-if="autoplay" 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg 
          v-else 
          class="w-6 h-6" 
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
    image: '/valeurs/bg.jpg',
    badge: 'Excellence Académique',
    title: 'Formez-vous aux Métiers du Digital',
    subtitle: 'Devenez un expert en commerce et économie numérique',
    description: 'L\'ESCEN vous prépare aux carrières d\'avenir avec des formations innovantes et adaptées aux besoins du marché.',
    primaryButton: {
      text: 'Découvrir nos formations',
      link: '/formations'
    },
    secondaryButton: {
      text: 'Nous contacter',
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
      text: 'En savoir plus',
      link: '/a-propos'
    },
    secondaryButton: {
      text: 'Télécharger la brochure',
      link: '/brochure'
    }
  },
  {
    image: '/valeurs/bg.jpg',
    badge: 'Carrière Internationale',
    title: 'Ouvrez-vous sur le Monde',
    subtitle: 'Des opportunités à l\'international',
    description: 'Étudiez à l\'étranger et développez votre réseau professionnel international avec nos partenariats mondiaux.',
    primaryButton: {
      text: 'Voir les partenariats',
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

.bg-hover:hover{
    background-color: #01abcc;
    border: none;
}
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Amélioration de la lisibilité sur mobile */
@media (max-width: 768px) {
  .h-\[70vh\] {
    height: 80vh;
  }
  
  .min-h-\[600px\] {
    min-height: 500px;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .space-y-10 {
    space-y: 2rem;
  }
  
  .px-12 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  .min-w-\[250px\] {
    min-width: 220px;
  }
  
  .gap-8 {
    gap: 1.5rem;
  }
  
  .p-5 {
    padding: 1.25rem;
  }
}

@media (max-width: 640px) {
  .text-5xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .space-y-10 {
    space-y: 1.5rem;
  }
  
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .left-6 {
    left: 1rem;
  }
  
  .right-6 {
    right: 1rem;
  }
  
  .bottom-12 {
    bottom: 2.5rem;
  }
  
  .min-w-\[250px\] {
    min-width: 200px;
  }
}
</style>