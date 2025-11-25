<template>
    <section id="a-propos" class="relative py-24 overflow-hidden">
        <!-- Background animé avec effet courant d'eau -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80">
            <!-- Courants d'eau animés -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="water-current current-1"></div>
                <div class="water-current current-2"></div>
                <div class="water-current current-3"></div>
                <div class="water-current current-4"></div>
            </div>
        </div>
        
        <!-- Éléments de fond décoratifs animés -->
        <div class="absolute top-10 right-10 w-72 h-72 bg-[#01b4d5]/10 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-float-medium"></div>
        <div class="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-200/15 rounded-full blur-2xl animate-float-slow"></div>

        <div class="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">

            <!-- En-tête parfaitement centré -->
            <div class="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
                <!-- Ligne décorative centrée -->
                <div class="flex items-center justify-center space-x-4 mb-4 lg:mb-6">
                    <div class="w-12 lg:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
                    <span class="text-[#01b4d5] font-medium tracking-widest text-xs lg:text-sm uppercase whitespace-nowrap">
                        L'Excellence Numérique
                    </span>
                    <div class="w-12 lg:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
                </div>

                <!-- Titre principal parfaitement centré -->
                <div class="w-full flex flex-col items-center justify-center">
                    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 tracking-tight leading-tight text-center">
                        QUI <span class="text-[#01b4d5]">SOMMES-NOUS</span> ?
                    </h1>
                </div>

                <!-- Sous-titre centré -->
                <div class="w-full flex justify-center">
                    <p class="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl lg:max-w-3xl font-light leading-relaxed text-center">
                        Précurseurs de l'éducation digitale en Afrique francophone
                    </p>
                </div>
            </div>

            <!-- Contenu principal avec ordre inversé sur mobile -->
            <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
                
                <!-- Colonne image - Premier sur mobile -->
                <div class="relative order-1 lg:order-2 w-full">
                    <!-- Image principale - Pleine largeur sur mobile -->
                    <div class="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl w-full">
                        <img 
                            src="" 
                            alt="Campus ESCEN Lomé"
                            class="w-full h-[350px] lg:h-[500px] object-cover"
                        />
                        <!-- Overlay subtil -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>

                    <!-- Carte statistique superposée -->
                    <div class="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-2xl border border-white/20">
                        <div class="text-center">
                            <div class="text-xl lg:text-2xl font-black text-[#01b4d5] mb-1">1ère</div>
                            <div class="text-xs lg:text-sm font-bold text-gray-700 uppercase tracking-wide">École en Digital</div>
                        </div>
                    </div>

                    <!-- Points forts superposés -->
                    <div class="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-6 shadow-xl border border-white/20">
                        <div class="space-y-1 lg:space-y-3">
                            <div class="flex items-center space-x-1 lg:space-x-3">
                                <div class="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#01b4d5] rounded-full"></div>
                                <span class="text-xs lg:text-sm font-semibold text-gray-900">Formation innovante</span>
                            </div>
                            <div class="flex items-center space-x-1 lg:space-x-3">
                                <div class="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#01b4d5] rounded-full"></div>
                                <span class="text-xs lg:text-sm font-semibold text-gray-900">Expertise digitale</span>
                            </div>
                            <div class="flex items-center space-x-1 lg:space-x-3">
                                <div class="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#01b4d5] rounded-full"></div>
                                <span class="text-xs lg:text-sm font-semibold text-gray-900">Réseau international</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Colonne texte à droite - Deuxième sur mobile -->
                <div class="space-y-6 lg:space-y-8 order-2 lg:order-1 w-full">
                    <!-- Mission avec design carte premium -->
                    <div class="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 shadow-lg">
                        <div class="text-center mb-4 lg:mb-6">
                            <div class="w-10 h-10 lg:w-14 lg:h-14 bg-[#01b4d5] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-3 lg:mb-4">
                                <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-lg lg:text-2xl font-bold text-gray-900">Notre Mission Fondatrice</h3>
                        </div>
                        <p class="text-sm lg:text-base leading-6 lg:leading-7 text-gray-700 text-justify">
                            Former et accompagner une nouvelle génération d'étudiants, tout en perfectionnant
                            l'expertise des cadres d'entreprise francophones dans les domaines stratégiques de
                            l'Économie Numérique, de l'Informatique, de l'Intelligence Artificielle et du Génie
                            Logiciel.
                        </p>
                    </div>

                    <!-- Engagement avec icônes alignées sur la même ligne -->
                    <div class="grid grid-cols-2 gap-4 lg:gap-6 items-start">
                        <!-- Siège Stratégique -->
                        <div class="space-y-3 lg:space-y-4">
                            <div class="flex justify-center lg:justify-center">
                                <div class="w-10 h-10 lg:w-14 lg:h-14 bg-gray-800 rounded-lg lg:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 class="text-sm lg:text-xl font-bold text-gray-900 text-center">Siège Stratégique</h4>
                            <p class="text-xs lg:text-base leading-5 lg:leading-6 text-gray-700 text-justify">
                                Université privée établie à <span class="font-semibold text-[#01b4d5]">Lomé, Togo</span>,
                                positionnée comme hub numérique régional.
                            </p>
                        </div>

                        <!-- Excellence Académique -->
                        <div class="space-y-3 lg:space-y-4">
                            <div class="flex justify-center lg:justify-center">
                                <div class="w-10 h-10 lg:w-14 lg:h-14 bg-gray-800 rounded-lg lg:rounded-xl flex items-center justify-center">
                                    <svg class="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 class="text-sm lg:text-xl font-bold text-gray-900 text-center">Excellence Académique</h4>
                            <p class="text-xs lg:text-base leading-5 lg:leading-6 text-gray-700 text-justify">
                                Éducation premium adaptée aux exigences du marché du travail numérique globalisé.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chiffres clés avec animation au scroll -->
            <div ref="statsSection" class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-16">
                <div 
                    v-for="(stat, index) in stats" 
                    :key="index"
                    class="text-center bg-white/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/20 shadow-sm transition-all duration-1000 transform"
                    :class="{'animate-counter': isStatsVisible}"
                >
                    <div class="text-xl lg:text-3xl font-black text-[#01b4d5] mb-1 lg:mb-2">
                        <span :data-target="stat.value" class="counter-value">
                            {{ isStatsVisible ? 0 : stat.value }}
                        </span>
                        <span v-if="stat.suffix">{{ stat.suffix }}</span>
                    </div>
                    <div class="text-xs lg:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        {{ stat.label }}
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const statsSection = ref(null)
const isStatsVisible = ref(false)

const stats = [
    { value: 2018, label: 'Fondation' },
    { value: 1000, suffix: '+', label: 'Étudiants' },
    { value: 50, suffix: '+', label: 'Partenaires' },
    { value: 2, label: 'Formats' }
]

// Observer pour détecter quand la section statistiques est visible
const observer = ref(null)

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isStatsVisible.value) {
                    isStatsVisible.value = true
                    startCounters()
                }
            })
        },
        { 
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    if (statsSection.value) {
        observer.value.observe(statsSection.value)
    }
})

onUnmounted(() => {
    if (observer.value) {
        observer.value.disconnect()
    }
})

// Fonction pour animer les compteurs
const startCounters = () => {
    const counters = document.querySelectorAll('.counter-value')
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'))
        const suffix = counter.nextElementSibling?.textContent || ''
        const duration = 2000 // 2 secondes
        const step = target / (duration / 16) // 60fps
        let current = 0
        
        const updateCounter = () => {
            current += step
            if (current < target) {
                counter.textContent = Math.floor(current)
                requestAnimationFrame(updateCounter)
            } else {
                counter.textContent = target + suffix
            }
        }
        
        updateCounter()
    })
}
</script>

<style scoped>
/* Animations sophistiquées */
section {
    animation: elegantReveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes elegantReveal {
    0% {
        opacity: 0;
        transform: translateY(80px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Animations de flottement */
@keyframes float-slow {
    0%, 100% {
        transform: translateY(0px) translateX(0px);
    }
    25% {
        transform: translateY(-15px) translateX(10px);
    }
    50% {
        transform: translateY(-5px) translateX(-5px);
    }
    75% {
        transform: translateY(-10px) translateX(5px);
    }
}

@keyframes float-medium {
    0%, 100% {
        transform: translateY(0px) translateX(0px);
    }
    33% {
        transform: translateY(-20px) translateX(-8px);
    }
    66% {
        transform: translateY(-10px) translateX(12px);
    }
}

.animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
}

/* Animation des compteurs */
.animate-counter {
    animation: counterReveal 1s ease-out forwards;
}

@keyframes counterReveal {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.counter-value {
    display: inline-block;
}

/* Courants d'eau animés */
.water-current {
    position: absolute;
    background: linear-gradient(90deg, transparent, rgba(1, 180, 213, 0.1), transparent);
    height: 2px;
    border-radius: 50%;
    filter: blur(1px);
}

.current-1 {
    top: 20%;
    width: 100%;
    animation: waterFlow 15s linear infinite;
    opacity: 0.6;
}

.current-2 {
    top: 45%;
    width: 120%;
    animation: waterFlow 12s linear infinite reverse;
    opacity: 0.4;
}

.current-3 {
    top: 70%;
    width: 80%;
    animation: waterFlow 18s linear infinite;
    opacity: 0.3;
}

.current-4 {
    top: 85%;
    width: 150%;
    animation: waterFlow 20s linear infinite reverse;
    opacity: 0.2;
}

@keyframes waterFlow {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Responsive design amélioré */
@media (max-width: 1024px) {
    .lg\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
    
    .gap-16 {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .text-2xl {
        font-size: 1.75rem;
    }

    .text-5xl {
        font-size: 2.5rem;
    }

    .grid.grid-cols-2.lg\:grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }
    
    /* Texte justifié sur mobile */
    .text-justify {
        text-align: justify;
    }
    
    /* Ajustements pour mobile */
    .order-1 {
        order: 1;
    }
    
    .order-2 {
        order: 2;
    }
}

@media (max-width: 640px) {
    .text-2xl {
        font-size: 1.5rem;
    }

    .text-5xl {
        font-size: 2rem;
    }

    .grid.grid-cols-2.lg\:grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }

    .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    /* Optimisation mobile */
    .space-y-6 {
        space-y: 1rem;
    }
    
    .p-6 {
        padding: 1rem;
    }
    
    .gap-4 {
        gap: 0.5rem;
    }
}
</style>