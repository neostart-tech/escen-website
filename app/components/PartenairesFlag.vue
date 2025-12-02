<template>
    <section id="origins" class="relative py-16 lg:py-20 bg-white overflow-hidden">
        <!-- Éléments décoratifs subtils -->
        <div class="absolute top-10 left-10 w-16 h-16 bg-[#01b4d5]/5 rounded-full animate-pulse-slow"></div>
        <div class="absolute bottom-10 right-10 w-12 h-12 bg-[#0056b3]/5 rounded-lg rotate-45 animate-float-slow"></div>

        <div class="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
            <!-- En-tête -->
            <div class="text-center mb-12 lg:mb-16">
                <div class="inline-flex items-center gap-4 mb-6">
                    <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
                    <span class="text-[#01b4d5] font-semibold text-sm tracking-widest uppercase">
                        Diversité
                    </span>
                    <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
                </div>

                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    NOS ÉTUDIANTS VIENNENT DE
                </h2>

                <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Une communauté estudiantine riche et diversifiée venue de toute l'Afrique
                </p>
            </div>

            <!-- Carousel des drapeaux responsive -->
            <div class="relative">
                <!-- Conteneur du carousel -->
                <div class="relative overflow-hidden">
                    <div class="flex transition-transform duration-700 ease-out" 
                         :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                         
                        <!-- Slides dynamiques avec nombre variable selon l'écran -->
                        <div v-for="(slide, slideIndex) in slides" :key="slideIndex" 
                             class="w-full flex-shrink-0">
                            <div class="flex justify-center items-center gap-6 lg:gap-8 xl:gap-12 px-4">
                                <div v-for="country in slide" :key="country.name"
                                     class="flex flex-col items-center group">
                                    <!-- Drapeau - taille adaptative mais toujours visible -->
                                    <div class="w-24 h-18 sm:w-28 sm:h-21 lg:w-32 lg:h-24 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
                                        <img 
                                            :src="country.flag" 
                                            :alt="`Drapeau ${country.name}`"
                                            class="w-full h-full object-cover"
                                            @error="(event) => handleImageError(event, country.name)"
                                        >
                                    </div>
                                    <!-- Nom du pays -->
                                    <span class="text-sm sm:text-base font-medium text-gray-700 mt-3 sm:mt-4 group-hover:text-[#01b4d5] transition-colors duration-300">
                                        {{ country.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation -->
                <div class="flex justify-center items-center gap-4 mt-8 lg:mt-10">
                    <!-- Bouton précédent -->
                    <button @click="prevSlide" 
                            class="group bg-gray-100 hover:bg-[#01b4d5] text-gray-600 hover:text-white p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>

                    <!-- Indicateurs -->
                    <div class="flex gap-2 sm:gap-3">
                        <button v-for="n in totalSlides" :key="n"
                                @click="goToSlide(n-1)"
                                class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                                :class="currentSlide === n-1 ? 'bg-[#01b4d5] w-6 sm:w-8' : 'bg-gray-300'">
                        </button>
                    </div>

                    <!-- Bouton suivant -->
                    <button @click="nextSlide" 
                            class="group bg-gray-100 hover:bg-[#01b4d5] text-gray-600 hover:text-white p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, onBeforeUnmount } from 'vue'

const currentSlide = ref(0)
const autoPlay = ref(null)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

// Données centralisées des pays
const countries = [
    { name: "Sénégal", flag: "/payspartenaire/senegal.png" },
    { name: "Togo", flag: "/payspartenaire/togo.png" },
    { name: "Bénin", flag: "/payspartenaire/benin.png" },
    { name: "Burkina Faso", flag: "/payspartenaire/burkina.png" },
    { name: "Burundi", flag: "/payspartenaire/burundi.png" },
    { name: "Congo", flag: "/payspartenaire/congo.png" },
    { name: "Côte d'Ivoire", flag: "/payspartenaire/Cote_ivoire.png" },
    { name: "Guinée", flag: "/payspartenaire/guineeC.png" },
    { name: "Niger", flag: "/payspartenaire/Niger.png" },
    { name: "Tchad", flag: "/payspartenaire/tchad.png" }
]

// Calcul du nombre d'éléments par slide selon la largeur d'écran
const itemsPerSlide = computed(() => {
    if (windowWidth.value < 640) { // Mobile
        return 2
    } else if (windowWidth.value < 1024) { // Tablet
        return 3
    } else { // Desktop
        return 4
    }
})

// Organisation en slides avec nombre variable
const slides = computed(() => {
    const slides = []
    for (let i = 0; i < countries.length; i += itemsPerSlide.value) {
        slides.push(countries.slice(i, i + itemsPerSlide.value))
    }
    return slides
})

const totalSlides = computed(() => slides.value.length)

const nextSlide = () => {
    if (totalSlides.value > 0) {
        currentSlide.value = (currentSlide.value + 1) % totalSlides.value
    }
}

const prevSlide = () => {
    if (totalSlides.value > 0) {
        currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
    }
}

const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides.value) {
        currentSlide.value = index
        resetAutoPlay()
    }
}

const handleImageError = (event, countryName) => {
    const target = event.target
    const parent = target.parentElement
    
    // Fallback avec un placeholder coloré
    parent.innerHTML = `
        <div class="w-full h-full rounded-lg bg-gradient-to-r from-[#01b4d5] to-[#0056b3] flex items-center justify-center">
            <span class="text-white text-xs sm:text-sm font-bold">${countryName}</span>
        </div>
    `
}

const resetAutoPlay = () => {
    if (autoPlay.value) {
        clearInterval(autoPlay.value)
    }
    autoPlay.value = setInterval(nextSlide, 4000)
}

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
    // Réinitialiser au premier slide quand la taille change
    currentSlide.value = 0
}

// Auto-play et gestion du responsive
onMounted(() => {
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateWindowWidth)
        autoPlay.value = setInterval(nextSlide, 4000)
    }
})

onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWindowWidth)
    }
    if (autoPlay.value) {
        clearInterval(autoPlay.value)
    }
})
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

.animate-float-slow {
    animation: floatSlow 6s ease-in-out infinite;
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }
}

@keyframes floatSlow {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-8px) rotate(180deg);
    }
}

/* Transition fluide */
.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive pour les très petits écrans */
@media (max-width: 480px) {
    .flex.justify-center.items-center.gap-6.lg\:gap-8.xl\:gap-12 {
        gap: 0.5rem;
    }
    
    .w-24.h-18.sm\:w-28.sm\:h-21.lg\:w-32.lg\:h-24 {
        width: 5rem;
        height: 3.75rem;
    }
    
    .text-sm.sm\:text-base {
        font-size: 0.75rem;
    }
}
</style>