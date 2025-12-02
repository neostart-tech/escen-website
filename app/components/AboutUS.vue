<template>
    <section id="a-propos" class="relative overflow-hidden bg-white">
        <!-- Background avec formes géométriques élégantes -->
        <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-1/3 h-1/3">
                <div class="absolute inset-0 bg-gradient-to-br from-[#01b4d5]/5 via-transparent to-transparent"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-1/2 h-1/2">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-transparent"></div>
            </div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <!-- En-tête minimaliste -->
            <div class="text-center mb-16 md:mb-20 lg:mb-28">
                <div class="inline-flex items-center gap-2 mb-4 md:mb-6">
                    <div class="h-px w-6 md:w-8 bg-[#01b4d5]"></div>
                    <span class="text-xs md:text-sm font-semibold text-[#01b4d5] tracking-wider uppercase">À PROPOS</span>
                    <div class="h-px w-6 md:w-8 bg-[#01b4d5]"></div>
                </div>
                
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                    <span class="block">Transformation Digitale</span>
                    <span class="font-bold text-[#01b4d5]">par l'Excellence</span>
                </h1>
                
                <p class="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                    Leader de l'enseignement supérieur numérique en Afrique francophone, 
                    ESCEN forme les talents qui transforment l'économie digitale.
                </p>
            </div>

            <!-- Section Image + Texte avec design élégant -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-20 md:mb-24 lg:mb-28">
                <!-- Image avec effet sophistiqué -->
                <div class="relative order-2 lg:order-1">
                    <div class="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src="/temoignage/Emeraude_Avoce.png" 
                            alt="Campus ESCEN - Excellence Académique"
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <!-- Overlay gradient subtil -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    </div>
                    
                    <!-- Badge repositionné pour mobile -->
                    <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-bottom-6 lg:-left-6 bg-white rounded-lg shadow-xl p-4 md:p-5 border border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 md:w-3 md:h-3 bg-[#01b4d5] rounded-full"></div>
                            <div>
                                <div class="text-xl md:text-2xl font-bold text-gray-900"></div>
                                <div class="text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                                    École Digitale
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contenu texte élégant -->
                <div class="order-1 lg:order-2">
                    <!-- Section Mission -->
                    <div class="mb-10 md:mb-12">
                        <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <div class="w-8 md:w-12 h-px bg-[#01b4d5]"></div>
                            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Notre Mission</h2>
                        </div>
                        
                        <p class="text-gray-700 leading-relaxed mb-6 md:mb-8 text-base text-justify md:text-lg">
                            Former et accompagner une nouvelle génération d'étudiants, tout en perfectionnant
                            l'expertise des cadres d'entreprise francophones dans les domaines stratégiques de
                            l'Économie Numérique, de l'Informatique, de l'Intelligence Artificielle et du Génie
                            Logiciel.
                        </p>
                        
                        <!-- Les deux éléments TOUJOURS sur la même ligne -->
                        <div class="flex flex-row gap-4 md:gap-6">
                            <!-- Expertise Internationale -->
                            <div class="flex-1 flex items-start gap-3">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Expertise Internationale</h3>
                                    <p class="text-gray-600 text-xs md:text-sm font-medium">Programmes alignés sur les standards mondiaux</p>
                                </div>
                            </div>
                            
                            <!-- Innovation Pédagogique -->
                            <div class="flex-1 flex items-start gap-3">
                                <div class="flex-shrink-0 mt-1">
                                    <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Innovation Pédagogique</h3>
                                    <p class="text-gray-600 text-xs md:text-sm font-medium">Méthodes d'apprentissage avant-gardistes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Nos Valeurs -->
                    <div>
                        <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <div class="w-8 md:w-12 h-px bg-[#01b4d5]"></div>
                            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Nos Valeurs</h2>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 md:gap-6">
                            <div class="border-l-2 border-[#01b4d5] pl-3 md:pl-4 py-2 md:py-3">
                                <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Excellence</h3>
                                <p class="text-gray-600 text-xs md:text-sm font-medium">Recherche constante de la qualité</p>
                            </div>
                            <div class="border-l-2 border-[#01b4d5] pl-3 md:pl-4 py-2 md:py-3">
                                <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Innovation</h3>
                                <p class="text-gray-600 text-xs md:text-sm font-medium">Culture de l'innovation permanente</p>
                            </div>
                            <div class="border-l-2 border-[#01b4d5] pl-3 md:pl-4 py-2 md:py-3">
                                <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Leadership</h3>
                                <p class="text-gray-600 text-xs md:text-sm font-medium">Développement de leaders éthiques</p>
                            </div>
                            <div class="border-l-2 border-[#01b4d5] pl-3 md:pl-4 py-2 md:py-3">
                                <h3 class="font-bold text-gray-900 mb-1 text-sm md:text-base">Impact</h3>
                                <p class="text-gray-600 text-xs md:text-sm font-medium">Contribution au développement économique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chiffres clés - Refonte complète -->
            <div class="mb-8 md:mb-12 lg:mb-16">
                <div class="text-center mb-8 md:mb-12">
                    <div class="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div class="w-8 md:w-12 h-px bg-[#01b4d5]"></div>
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Notre Impact</h2>
                        <div class="w-8 md:w-12 h-px bg-[#01b4d5]"></div>
                    </div>
                    <p class="text-gray-600 max-w-2xl mx-auto font-medium text-sm md:text-base px-4">
                        Des indicateurs qui témoignent de notre engagement et de notre croissance
                    </p>
                </div>
                
                <!-- Nouvelle grid des statistiques - Compacte -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <!-- Année de Fondation -->
                    <div 
                        class="relative bg-gradient-to-b from-white to-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                        @mouseenter="startCounter('foundation', 2018)"
                        @touchstart="startCounter('foundation', 2018)"
                    >
                        <div class="flex flex-col items-center text-center">
                            <!-- Icône centrée en haut -->
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-5 h-5 md:w-6 md:h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            
                            <!-- Nombre avec compteur -->
                            <div class="mb-2">
                                <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900" ref="foundationCounter">
                                    2018
                                </div>
                            </div>
                            
                            <!-- Ligne décorative courte -->
                            <div class="w-8 h-1 bg-gradient-to-r from-[#01b4d5] to-blue-400 rounded-full mb-2 transition-all duration-300 group-hover:w-12"></div>
                            
                            <!-- Label -->
                            <div class="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Année de Fondation
                            </div>
                        </div>
                    </div>

                    <!-- Étudiants -->
                    <div 
                        class="relative bg-gradient-to-b from-white to-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                        @mouseenter="startCounter('students', 1200)"
                        @touchstart="startCounter('students', 1200)"
                    >
                        <div class="flex flex-col items-center text-center">
                            <!-- Icône centrée en haut -->
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-5 h-5 md:w-6 md:h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a6 6 0 01-9 5.197"/>
                                </svg>
                            </div>
                            
                            <!-- Nombre avec compteur -->
                            <div class="mb-2">
                                <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900" ref="studentsCounter">
                                    1,200<span class="text-lg md:text-xl text-[#01b4d5]">+</span>
                                </div>
                            </div>
                            
                            <!-- Ligne décorative courte -->
                            <div class="w-8 h-1 bg-gradient-to-r from-[#01b4d5] to-blue-400 rounded-full mb-2 transition-all duration-300 group-hover:w-12"></div>
                            
                            <!-- Label -->
                            <div class="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Étudiants Formés
                            </div>
                        </div>
                    </div>

                    <!-- Insertion Professionnelle -->
                    <div 
                        class="relative bg-gradient-to-b from-white to-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                        @mouseenter="startCounter('employment', 85)"
                        @touchstart="startCounter('employment', 85)"
                    >
                        <div class="flex flex-col items-center text-center">
                            <!-- Icône centrée en haut -->
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-5 h-5 md:w-6 md:h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            
                            <!-- Nombre avec compteur -->
                            <div class="mb-2">
                                <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900" ref="employmentCounter">
                                    85<span class="text-lg md:text-xl text-[#01b4d5]">%</span>
                                </div>
                            </div>
                            
                            <!-- Ligne décorative courte -->
                            <div class="w-8 h-1 bg-gradient-to-r from-[#01b4d5] to-blue-400 rounded-full mb-2 transition-all duration-300 group-hover:w-12"></div>
                            
                            <!-- Label -->
                            <div class="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Insertion Professionnelle
                            </div>
                        </div>
                    </div>

                    <!-- Partenaires -->
                    <div 
                        class="relative bg-gradient-to-b from-white to-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                        @mouseenter="startCounter('partners', 50)"
                        @touchstart="startCounter('partners', 50)"
                    >
                        <div class="flex flex-col items-center text-center">
                            <!-- Icône centrée en haut -->
                            <div class="w-10 h-10 md:w-12 md:h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-5 h-5 md:w-6 md:h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            
                            <!-- Nombre avec compteur -->
                            <div class="mb-2">
                                <div class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900" ref="partnersCounter">
                                    50<span class="text-lg md:text-xl text-[#01b4d5]">+</span>
                                </div>
                            </div>
                            
                            <!-- Ligne décorative courte -->
                            <div class="w-8 h-1 bg-gradient-to-r from-[#01b4d5] to-blue-400 rounded-full mb-2 transition-all duration-300 group-hover:w-12"></div>
                            
                            <!-- Label -->
                            <div class="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Partenaires Entreprises
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Refs pour les compteurs
const foundationCounter = ref(null)
const studentsCounter = ref(null)
const partnersCounter = ref(null)
const employmentCounter = ref(null)

// États pour savoir si les compteurs ont déjà été déclenchés
const hasAnimated = ref({
    foundation: false,
    students: false,
    partners: false,
    employment: false
})

// Fonction pour animer un compteur
const startCounter = (type, targetValue) => {
    // Si l'animation a déjà été jouée pour ce type, on ne la rejoue pas
    if (hasAnimated.value[type]) return
    
    hasAnimated.value[type] = true
    
    let counterRef
    let suffix = ''
    
    // Déterminer quelle ref utiliser et quel suffixe
    switch(type) {
        case 'foundation':
            counterRef = foundationCounter
            break
        case 'students':
            counterRef = studentsCounter
            suffix = '+'
            break
        case 'employment':
            counterRef = employmentCounter
            suffix = '%'
            break
        case 'partners':
            counterRef = partnersCounter
            suffix = '+'
            break
    }
    
    if (!counterRef.value) return
    
    const duration = 1500 // 1.5 secondes (plus rapide)
    const startValue = 0
    const endValue = targetValue
    const increment = endValue / (duration / 16) // 60fps
    let current = startValue
    let animationFrame
    
    const animate = () => {
        current += increment
        
        if (current < endValue) {
            // Formater le nombre
            let displayValue
            if (type === 'students' || type === 'partners') {
                // Pour les étudiants et partenaires, on veut un format avec virgule
                displayValue = Math.floor(current).toLocaleString()
            } else {
                displayValue = Math.floor(current)
            }
            
            // Mettre à jour l'affichage
            if (counterRef.value) {
                counterRef.value.innerHTML = `${displayValue}<span class="text-lg md:text-xl text-[#01b4d5]">${suffix}</span>`
            }
            
            animationFrame = requestAnimationFrame(animate)
        } else {
            // Animation terminée, afficher la valeur finale
            let finalValue
            if (type === 'students' || type === 'partners') {
                finalValue = endValue.toLocaleString()
            } else {
                finalValue = endValue
            }
            
            if (counterRef.value) {
                counterRef.value.innerHTML = `${finalValue}<span class="text-lg md:text-xl text-[#01b4d5]">${suffix}</span>`
            }
            
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }
    
    // Démarrer l'animation
    animate()
}

// Fonction pour déclencher les compteurs quand la section est visible
const triggerCountersOnScroll = () => {
    const section = document.getElementById('a-propos')
    if (!section) return
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Déclencher tous les compteurs quand la section est visible
                startCounter('foundation', 2018)
                startCounter('students', 1200)
                startCounter('employment', 85)
                startCounter('partners', 50)
                
                // Arrêter d'observer après avoir déclenché
                observer.disconnect()
            }
        })
    }, {
        threshold: 0.3 // Déclenche quand 30% de la section est visible
    })
    
    observer.observe(section)
}

onMounted(() => {
    // Déclencher les compteurs au chargement de la page
    setTimeout(() => {
        triggerCountersOnScroll()
    }, 500)
})
</script>

<style scoped>
/* Animations subtiles */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

section {
    animation: fadeIn 0.8s ease-out;
}

/* Effets de hover élégants */
.hover\:scale-105 {
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive design optimisé */
@media (max-width: 640px) {
    .aspect-\[4\/3\] {
        aspect-ratio: 4/3;
        height: auto;
    }
    
    /* Badge mobile - position fixe en bas à droite */
    .absolute.-bottom-4.-right-4 {
        position: absolute;
        bottom: -1rem;
        right: -1rem;
        z-index: 10;
    }
    
    /* Ajustement du texte pour mobile */
    .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }
    
    .py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
    
    /* Statistiques responsive */
    .grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .p-4 {
        padding: 1rem;
    }
    
    /* Ajustement des compteurs sur mobile */
    .text-2xl {
        font-size: 1.5rem;
    }
    
    .text-lg {
        font-size: 1rem;
    }
    
    /* Les deux éléments TOUJOURS sur la même ligne même sur mobile */
    .flex.flex-row {
        flex-direction: row !important;
        gap: 0.75rem;
    }
    
    /* Ajustement pour très petits écrans */
    @media (max-width: 480px) {
        .flex.flex-row {
            flex-direction: column !important;
            gap: 1rem;
        }
    }
}

@media (max-width: 768px) {
    /* Sur mobile et tablette, le badge reste en bas à droite */
    .lg\:-left-6 {
        right: -1.5rem !important;
        left: auto !important;
    }
    
    .gap-12 {
        gap: 3rem;
    }
    
    .mb-20 {
        margin-bottom: 5rem;
    }
    
    /* Ajustement des deux éléments sur tablette */
    @media (min-width: 640px) and (max-width: 768px) {
        .flex.flex-row {
            gap: 1rem;
        }
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    /* Tablette - badge centré en bas */
    .absolute.-bottom-6.-right-6 {
        position: absolute;
        bottom: -1.5rem;
        right: -1.5rem;
    }
    
    /* Statistiques tablette */
    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Ajustement des deux éléments sur tablette */
    .flex.flex-row {
        gap: 1.5rem;
    }
}

@media (min-width: 1024px) {
    /* Desktop - badge en bas à gauche */
    .lg\:-bottom-6.lg\:-left-6 {
        position: absolute;
        bottom: -1.5rem;
        left: -1.5rem;
        right: auto;
    }
    
    .lg\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Statistiques desktop */
    .md\:grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }
    
    /* Ajustement des deux éléments sur desktop */
    .flex.flex-row {
        gap: 2rem;
    }
}

/* Correction pour les écrans très petits */
@media (max-width: 375px) {
    .absolute.-bottom-4.-right-4 {
        bottom: -0.5rem;
        right: -0.5rem;
    }
    
    .p-4 {
        padding: 0.75rem;
    }
    
    .text-xl {
        font-size: 1.25rem;
    }
    
    .text-xs {
        font-size: 0.625rem;
    }
    
    /* Sur très petits écrans, passer en colonne */
    .flex.flex-row {
        flex-direction: column !important;
        gap: 0.75rem;
    }
}

/* Assurer que le badge ne dépasse pas sur mobile */
@media (max-width: 480px) {
    .rounded-lg {
        border-radius: 0.5rem;
    }
    
    .shadow-xl {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    /* Statistiques sur très petit mobile */
    .p-4 {
        padding: 0.75rem;
    }
    
    .text-2xl {
        font-size: 1.25rem;
    }
}

/* Animation du compteur */
@keyframes countUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.counter-animation {
    animation: countUp 0.5s ease-out forwards;
}

/* Styles pour les statistiques au touch sur mobile */
@media (hover: none) and (pointer: coarse) {
    .group:active {
        transform: scale(0.98);
        transition: transform 0.2s ease;
    }
    
    .group:active .group-hover\:scale-110 {
        transform: scale(1.05);
    }
    
    .group:active .transition-all {
        transition: all 0.2s ease;
    }
}
</style>