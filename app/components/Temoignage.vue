<template>
    <section id="testimonials" class="relative py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-10 left-5 w-40 h-40 bg-[#01b4d5]/5 rounded-full blur-2xl animate-pulse-slow"></div>
            <div class="absolute bottom-10 right-10 w-48 h-48 bg-[#0056b3]/10 rounded-full blur-2xl animate-float-slow"></div>
        </div>

        <div class="container mx-auto px-4 lg:px-6 max-w-6xl relative z-10">
            <div class="text-center mb-12 lg:mb-16">
                <div class="inline-flex items-center gap-3 mb-4">
                    <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
                    <span class="text-[#01b4d5] font-semibold text-xs tracking-widest uppercase">
                        Témoignages
                    </span>
                    <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
                </div>

                <h2 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Ils Nous <span class="text-[#01b4d5]">Font Confiance</span>
                </h2>

                <p class="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Découvrez les retours d'expérience de nos experts intervenants et étudiants passionnés
                </p>
            </div>

            <div class="relative">
                <div class="relative">
                    <div class="relative h-[500px] lg:h-[400px] overflow-hidden rounded-2xl">
                        <div class="flex transition-transform duration-700 ease-out" 
                             :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                             
                            <div v-for="(testimonial, index) in testimonials" :key="index" 
                                 class="w-full flex-shrink-0 px-3">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full items-center">
                                    <div class="lg:col-span-1">
                                        <div class="relative group">
                                            <!-- Image qui prend toute la largeur disponible -->
                                            <div class="relative rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-500 testimonial-image w-full">
                                                <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 w-full">
                                                    <img 
                                                        :src="testimonial.photo" 
                                                        :alt="testimonial.name"
                                                        class="w-full h-full object-cover"
                                                        @error="handleImageError"
                                                    >
                                                </div>
                                            </div>
                                            
                                            <!-- Info card responsive qui ne cache pas le visage -->
                                            <div class="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200 w-[calc(100%-1rem)] max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] transform group-hover:scale-105 transition-all duration-500 testimonial-info responsive-info-card">
                                                <h3 class="text-sm lg:text-base font-bold text-gray-900 mb-1 leading-tight line-clamp-2">{{ testimonial.name }}</h3>
                                                <p class="text-[#01b4d5] font-semibold text-xs mb-1">{{ testimonial.role }}</p>
                                                <p class="text-gray-600 text-xs leading-relaxed line-clamp-2">{{ testimonial.detail }}</p>
                                                <p class="text-gray-500 text-xs mt-1">{{ testimonial.country }}</p>
                                                
                                                <div class="inline-flex items-center gap-1 bg-[#01b4d5]/10 text-[#01b4d5] px-2 py-1 rounded-full text-xs font-medium mt-2">
                                                    <svg class="w-2 h-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                                    </svg>
                                                    {{ testimonial.type }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="lg:col-span-2">
                                        <div class="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg relative overflow-hidden">
                                            <div class="absolute top-0 right-0 w-20 h-20 bg-[#01b4d5]/5 rounded-full -translate-y-10 translate-x-10"></div>
                                            <div class="absolute bottom-0 left-0 w-16 h-16 bg-[#0056b3]/5 rounded-full translate-y-8 -translate-x-8"></div>
                                            
                                            <div class="relative z-10">
                                                <div class="text-4xl text-[#01b4d5]/20 font-serif mb-3">"</div>
                                                
                                                <p class="text-base lg:text-lg text-gray-800 leading-relaxed mb-6 font-light">
                                                    {{ testimonial.content }}
                                                </p>

                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center gap-2 text-gray-500">
                                                        <span class="text-xl font-bold text-[#01b4d5]">{{ String(index + 1).padStart(2, '0') }}</span>
                                                        <span class="text-gray-300">/</span>
                                                        <span class="text-base text-gray-400">{{ String(testimonials.length).padStart(2, '0') }}</span>
                                                    </div>
                                                    
                                                    <div class="flex gap-1">
                                                        <button @click="prevSlide" 
                                                                class="w-8 h-8 bg-gray-100 hover:bg-[#01b4d5] text-gray-600 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center">
                                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                                            </svg>
                                                        </button>
                                                        <button @click="nextSlide" 
                                                                class="w-8 h-8 bg-gray-100 hover:bg-[#01b4d5] text-gray-600 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center">
                                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation principale - TOUJOURS en ligne -->
                    <div class="flex justify-center items-center gap-4 mt-8">
                        <!-- Bouton précédent -->
                        <button @click="prevSlide" 
                                class="group bg-white hover:bg-[#01b4d5] border border-gray-300 hover:border-[#01b4d5] text-gray-600 hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>

                        <!-- Indicateurs -->
                        <div class="flex gap-2">
                            <button v-for="n in testimonials.length" :key="n"
                                    @click="goToSlide(n-1)"
                                    class="relative group flex flex-col items-center">
                                <div class="w-3 h-3 rounded-full border-2 transition-all duration-300 flex items-center justify-center"
                                     :class="currentSlide === n-1 ? 'border-[#01b4d5] bg-[#01b4d5]' : 'border-gray-300 group-hover:border-[#01b4d5]'">
                                    <div v-if="currentSlide === n-1" class="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                            </button>
                        </div>

                        <!-- Bouton suivant -->
                        <button @click="nextSlide" 
                                class="group bg-white hover:bg-[#01b4d5] border border-gray-300 hover:border-[#01b4d5] text-gray-600 hover:text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoPlay = ref(null)

const testimonials = [
    {
        name: "Ibrahim DAN KARAMI",
        role: "Directeur général ID Money",
        detail: "Chargé du cours transformation digitale",
        country: "",
        type: "Intervenant Expert",
        photo: "/temoignage/Ibrahim_Dan_Karami.png",
        content: "J'apprécie de former de futurs spécialistes en économie numérique. Je suis ravi de voir l'engagement des apprenants et leur enthousiasme. Je suis impatient de voir l'impact que cela induira dans l'industrie du numérique."
    },
    {
        name: "Mathias DEKADJEVI",
        role: "Spécialiste Transformation digitale",
        detail: "Chargé de cours finance digitale",
        country: "",
        type: "Intervenant Expert",
        photo: "/temoignage/Mathias_Dekadjevi.png",
        content: "L'économie numérique est une véritable chance pour notre continent et je suis persuadé que le vivier en cours de constitution grâce à l'initiative ESCEN, fera progresser les limites d'une véritable inclusion financière des populations africaines."
    },
    {
        name: "Bénédicte MUYISA MUTSHITSHI",
        role: "Étudiante Management de projets",
        detail: "Licence en Management numérique",
        country: "République Démocratique du Congo",
        type: "Étudiante",
        photo: "/temoignage/Benedicte.jpg",
        content: "Originaire du Congo, J'ai été impressionné par la qualité des cours dispensés par des experts du domaine qui ont fait leurs preuves. ESCEN a un réseau solide d'entreprises partenaires, ce qui m'a permis de trouver un stage enrichissant."
    },
    {
        name: "Akoèsso AKAKPO",
        role: "Étudiant Finance Digitale",
        detail: "Spécialisation technologies financières",
        country: "Togo",
        type: "Étudiant",
        photo: "/temoignage/Akoesso_Akakpo.png",
        content: "Mon expérience à ESCEN m'a permis d'acquérir une solide compréhension des concepts financiers appliqués aux technologies numériques. Grâce à des cours pratiques et des études de cas, un choix idéal pour se spécialiser dans le numérique."
    },
    {
        name: "Williams SANOU",
        role: "Responsable filière MSA",
        detail: "Master Pro Finance Digitale",
        country: "Côte d'Ivoire",
        type: "Étudiant & Professionnel",
        photo: "/temoignage/Williams_Sanou.jpg",
        content: "Mon expérience dans ce programme de Master Pro Finance digitale est assez satisfaisante. Le programme est bien fourni et chaque participant se retrouve facilement, quel que soit son background. Les intervenants étaient très expérimentés."
    },
    {
        name: "Emeraude AVOCE",
        role: "Étudiante Marketing Digital",
        detail: "Spécialisation stratégies digitales",
        country: "Bénin",
        type: "Étudiante",
        photo: "/temoignage/Emeraude_Avoce.png",
        content: "Ce qui fait d'ESCEN une école particulière est la combinaison parfaite entre théorie et pratique et les filières porteuses d'avenir. Quoi de mieux que d'être formés par des professionnels dans un cadre convivial et confortable."
    }
]

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index) => {
    currentSlide.value = index
}

const handleImageError = (event) => {
    const target = event.target
    const parent = target.parentElement
    const initials = target.alt.split(' ').map(n => n[0]).join('')
    
    parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-[#01b4d5] to-[#0056b3] flex items-center justify-center">
            <span class="text-white text-sm font-bold">${initials}</span>
        </div>
    `
}

onMounted(() => {
    autoPlay.value = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
    if (autoPlay.value) {
        clearInterval(autoPlay.value)
    }
})
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulseSlow 6s ease-in-out infinite;
}

.animate-float-slow {
    animation: floatSlow 8s ease-in-out infinite;
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 0.05;
        transform: scale(1);
    }
    50% {
        opacity: 0.1;
        transform: scale(1.05);
    }
}

@keyframes floatSlow {
    0%, 100% {
        transform: translateY(0px) translateX(0px);
    }
    33% {
        transform: translateY(-10px) translateX(5px);
    }
    66% {
        transform: translateY(5px) translateX(-8px);
    }
}

.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Styles pour la responsive info card */
.responsive-info-card {
    box-sizing: border-box;
}

/* Pour limiter le texte sur 2 lignes */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* MÊME TAILLE D'IMAGE POUR TOUS LES ÉCRANS */
.testimonial-image {
    max-width: 100%;
    margin: 0 auto;
}

/* Responsive adjustments */
@media (max-width: 1024px) and (min-width: 769px) {
    .grid.grid-cols-1.lg\:grid-cols-3 {
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
    }
    
    .lg\:col-span-1 {
        grid-column: span 1;
    }
    
    .lg\:col-span-2 {
        grid-column: span 1;
    }
    
    .relative.h-\[500px\].lg\:h-\[400px\] {
        height: 380px;
        min-height: 380px;
    }
    
    .responsive-info-card {
        max-width: 220px;
        padding: 0.75rem;
    }
}

@media (max-width: 768px) {
    .grid.grid-cols-1.lg\:grid-cols-3 {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .relative.h-\[500px\].lg\:h-\[400px\] {
        height: auto;
        min-height: 500px;
    }
    
    .responsive-info-card {
        max-width: 180px;
        padding: 0.75rem;
    }
    
    .testimonial-image {
        margin: 0 auto;
    }
    
    .text-2xl.lg\:text-3xl.xl\:text-4xl {
        font-size: 1.75rem;
    }
    
    .bg-white.rounded-2xl.p-6.lg\:p-8 {
        padding: 1rem;
    }
}

@media (max-width: 640px) {
    .responsive-info-card {
        max-width: 160px;
        padding: 0.5rem;
        bottom: 0.5rem;
        right: 0.5rem;
    }
    
    .responsive-info-card h3 {
        font-size: 0.8rem;
    }
    
    .responsive-info-card p {
        font-size: 0.7rem;
    }
    
    .flex.justify-center.mt-6.gap-3 {
        flex-wrap: wrap;
        gap: 0.75rem;
    }
}

@media (max-width: 480px) {
    .responsive-info-card {
        max-width: 140px;
        padding: 0.4rem;
    }
    
    .responsive-info-card h3 {
        font-size: 0.75rem;
    }
    
    .container.mx-auto.px-4.lg\:px-6 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
}

/* S'assurer que l'image prend bien toute la largeur sur mobile */
@media (max-width: 1024px) {
    .testimonial-image {
        width: 100%;
        max-width: 100%;
    }
}

/* Réduction des animations pour accessibilité */
@media (prefers-reduced-motion: reduce) {
    .animate-pulse-slow,
    .animate-float-slow,
    .transition-transform,
    .group-hover\:scale-105,
    .group-hover\:scale-110 {
        animation: none !important;
        transition: none !important;
    }
}
</style>