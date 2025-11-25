<template>
    <section id="vision" ref="visionSection"
        class="relative py-16 lg:py-24 overflow-hidden bg-white mx-6 lg:mx-12 xl:mx-20 2xl:mx-32" :class="{
            'section-visible': isSectionVisible,
            'section-hidden': !isSectionVisible
        }">
        <!-- Éléments décoratifs géométriques subtils -->
        <div class="absolute top-20 left-10 w-24 h-24 border border-[#01b4d5]/20 rounded-full animate-pulse-slow"></div>
        <div
            class="absolute bottom-20 right-10 w-20 h-20 border border-[#01b4d5]/15 rounded-lg rotate-45 animate-float-medium">
        </div>
        <div class="absolute top-1/3 right-1/4 w-12 h-12 border border-[#01b4d5]/10 rounded-full animate-float-slow">
        </div>

        <!-- Particules animées -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div v-for="i in 15" :key="i" class="absolute w-2 h-2 bg-[#01b4d5]/20 rounded-full animate-particle"
                :style="particleStyle(i)"></div>
        </div>

        <div class="container mx-auto px-4 lg:px-6 max-w-[1600px] relative z-10">
            <!-- En-tête avec animations -->
            <div class="text-center mb-16 lg:mb-20" :class="{
                'animate-slide-up': isSectionVisible,
                'opacity-0 translate-y-10': !isSectionVisible
            }">
                <div class="inline-flex items-center gap-6 mb-8">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent to-[#01b4d5]/60 transition-all duration-1000"
                        :class="{ 'w-24': isSectionVisible }"></div>
                    <span
                        class="text-[#01b4d5] font-medium text-base tracking-wider uppercase transition-all duration-1000 delay-300"
                        :class="{
                            'scale-110': isSectionVisible,
                            'scale-100': !isSectionVisible
                        }">
                        Notre Ambition
                    </span>
                    <div class="w-16 h-px bg-gradient-to-l from-transparent to-[#01b4d5]/60 transition-all duration-1000"
                        :class="{ 'w-24': isSectionVisible }"></div>
                </div>

                <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 tracking-tight transition-all duration-1000 delay-500"
                    :class="{
                        'translate-y-0 opacity-100': isSectionVisible,
                        'translate-y-10 opacity-0': !isSectionVisible
                    }">
                    Notre <span class="text-[#01b4d5]">Vision</span>
                </h2>

                <p class="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700"
                    :class="{
                        'translate-y-0 opacity-100': isSectionVisible,
                        'translate-y-10 opacity-0': !isSectionVisible
                    }">
                    Une approche stratégique articulée autour de 4 piliers fondamentaux
                    pour façonner l'avenir de l'économie numérique
                </p>
            </div>

            <!-- Grille des visions avec animations au survol -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
                <!-- Vision 1 - Former -->
                <div class="group relative" :class="{
                    'animate-card-1': isSectionVisible,
                    'opacity-0 translate-y-10': !isSectionVisible
                }">
                    <div class="relative h-full transform-style-3d perspective-1000">
                        <div
                            class="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-[#01b4d5]/40 shadow-xl transition-all duration-500 h-full transform-gpu min-h-[360px] flex flex-col animate-glow-1 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-[#01b4d5]/60">
                            <!-- Effet de lumière 3D -->
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-[#01b4d5]/20 to-transparent rounded-2xl opacity-100 blur-md transition-all duration-500 group-hover:opacity-80 group-hover:-inset-2">
                            </div>

                            <!-- Numéro design -->
                            <div class="relative z-10 text-center mb-6">
                                <div class="relative inline-block">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl flex items-center justify-center shadow-xl shadow-[#01b4d5]/40 mx-auto mb-4 transform-gpu transition-all duration-500 relative overflow-hidden animate-bounce-gentle group-hover:scale-110 group-hover:rotate-6">
                                        <!-- Effet de brillance interne -->
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-shine">
                                        </div>
                                        <span
                                            class="text-xl font-black text-white relative z-10 drop-shadow-lg transition-all duration-500 group-hover:scale-110">01</span>
                                    </div>
                                    <!-- Effet d'ombre portée -->
                                    <div
                                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-t from-[#01b4d5]/30 to-transparent blur-md rounded-full opacity-80 animate-pulse-soft">
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-bold text-[#01b4d5] transition-all duration-500 mb-2 animate-text-glow group-hover:tracking-wider">
                                    FORMER
                                </h3>
                                <div
                                    class="w-16 h-1 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-full mx-auto opacity-100 transition-all duration-500 animate-line-pulse group-hover:w-20 group-hover:h-1.5">
                                </div>
                            </div>

                            <!-- Contenu -->
                            <div class="relative z-10 flex-grow flex items-center">
                                <p
                                    class="text-gray-700 leading-6 text-justify text-sm transition-all duration-500 animate-text-float group-hover:text-gray-900 group-hover:leading-7">
                                    Former des étudiants hautement qualifiés, aptes à intégrer immédiatement
                                    le marché de l'emploi ou à créer leur propre start-up innovante dans
                                    l'écosystème numérique mondial avec des compétences pratiques et théoriques solides.
                                </p>
                            </div>

                            <!-- Élément décoratif corner -->
                            <div
                                class="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#01b4d5]/50 rounded-tr-xl opacity-100 transition-all duration-500 animate-spin-slow group-hover:border-[#01b4d5]/80 group-hover:w-8 group-hover:h-8">
                            </div>
                            <div
                                class="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#0056b3]/50 rounded-bl-xl opacity-100 transition-all duration-500 animate-spin-slow-reverse group-hover:border-[#0056b3]/80 group-hover:w-8 group-hover:h-8">
                            </div>

                            <!-- Effet de particules au survol -->
                            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-[#01b4d5]/0 via-[#01b4d5]/0 to-[#01b4d5]/0 transition-all duration-500 group-hover:from-[#01b4d5]/5 group-hover:via-[#01b4d5]/10 group-hover:to-[#01b4d5]/5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 2 - Connecter -->
                <div class="group relative" :class="{
                    'animate-card-2': isSectionVisible,
                    'opacity-0 translate-y-10': !isSectionVisible
                }">
                    <div class="relative h-full transform-style-3d perspective-1000">
                        <div
                            class="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-[#01b4d5]/40 shadow-xl transition-all duration-500 h-full transform-gpu min-h-[360px] flex flex-col animate-glow-2 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-[#01b4d5]/60">
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-[#01b4d5]/20 to-transparent rounded-2xl opacity-100 blur-md transition-all duration-500 group-hover:opacity-80 group-hover:-inset-2">
                            </div>

                            <div class="relative z-10 text-center mb-6">
                                <div class="relative inline-block">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl flex items-center justify-center shadow-xl shadow-[#01b4d5]/40 mx-auto mb-4 transform-gpu transition-all duration-500 relative overflow-hidden animate-bounce-gentle-delay group-hover:scale-110 group-hover:-rotate-6">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-shine-delay">
                                        </div>
                                        <span
                                            class="text-xl font-black text-white relative z-10 drop-shadow-lg transition-all duration-500 group-hover:scale-110">02</span>
                                    </div>
                                    <div
                                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-t from-[#01b4d5]/30 to-transparent blur-md rounded-full opacity-80 animate-pulse-soft-delay">
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-bold text-[#01b4d5] transition-all duration-500 mb-2 animate-text-glow-delay group-hover:tracking-wider">
                                    CONNECTER
                                </h3>
                                <div
                                    class="w-16 h-1 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-full mx-auto opacity-100 transition-all duration-500 animate-line-pulse-delay group-hover:w-20 group-hover:h-1.5">
                                </div>
                            </div>

                            <div class="relative z-10 flex-grow flex items-center">
                                <p
                                    class="text-gray-700 leading-6 text-justify text-sm transition-all duration-500 animate-text-float-delay group-hover:text-gray-900 group-hover:leading-7">
                                    Connecter étroitement la formation universitaire avec les réalités dynamiques
                                    du marché de l'emploi et l'évolution constante de l'économie numérique moderne,
                                    créant ainsi un pont essentiel entre théorie académique et pratique professionnelle.
                                </p>
                            </div>

                            <div
                                class="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#01b4d5]/50 rounded-tl-xl opacity-100 transition-all duration-500 animate-spin-slow-delay group-hover:border-[#01b4d5]/80 group-hover:w-8 group-hover:h-8">
                            </div>
                            <div
                                class="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#0056b3]/50 rounded-br-xl opacity-100 transition-all duration-500 animate-spin-slow-reverse-delay group-hover:border-[#0056b3]/80 group-hover:w-8 group-hover:h-8">
                            </div>

                            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-[#01b4d5]/0 via-[#01b4d5]/0 to-[#01b4d5]/0 transition-all duration-500 group-hover:from-[#01b4d5]/5 group-hover:via-[#01b4d5]/10 group-hover:to-[#01b4d5]/5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 3 - Contribuer -->
                <div class="group relative" :class="{
                    'animate-card-3': isSectionVisible,
                    'opacity-0 translate-y-10': !isSectionVisible
                }">
                    <div class="relative h-full transform-style-3d perspective-1000">
                        <div
                            class="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-[#01b4d5]/40 shadow-xl transition-all duration-500 h-full transform-gpu min-h-[360px] flex flex-col animate-glow-3 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-[#01b4d5]/60">
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-[#01b4d5]/20 to-transparent rounded-2xl opacity-100 blur-md transition-all duration-500 group-hover:opacity-80 group-hover:-inset-2">
                            </div>

                            <div class="relative z-10 text-center mb-6">
                                <div class="relative inline-block">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl flex items-center justify-center shadow-xl shadow-[#01b4d5]/40 mx-auto mb-4 transform-gpu transition-all duration-500 relative overflow-hidden animate-bounce-gentle-delay-2 group-hover:scale-110 group-hover:rotate-12">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-shine-delay-2">
                                        </div>
                                        <span
                                            class="text-xl font-black text-white relative z-10 drop-shadow-lg transition-all duration-500 group-hover:scale-110">03</span>
                                    </div>
                                    <div
                                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-t from-[#01b4d5]/30 to-transparent blur-md rounded-full opacity-80 animate-pulse-soft-delay-2">
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-bold text-[#01b4d5] transition-all duration-500 mb-2 animate-text-glow-delay-2 group-hover:tracking-wider">
                                    CONTRIBUER
                                </h3>
                                <div
                                    class="w-16 h-1 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-full mx-auto opacity-100 transition-all duration-500 animate-line-pulse-delay-2 group-hover:w-20 group-hover:h-1.5">
                                </div>
                            </div>

                            <div class="relative z-10 flex-grow flex items-center">
                                <p
                                    class="text-gray-700 leading-6 text-justify text-sm transition-all duration-500 animate-text-float-delay-2 group-hover:text-gray-900 group-hover:leading-7">
                                    Contribuer activement au développement de l'écosystème économique et numérique
                                    grâce à l'émergence d'une nouvelle génération de spécialistes, d'experts et
                                    d'entrepreneurs formés aux technologies les plus avancées du secteur digital.
                                </p>
                            </div>

                            <div
                                class="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#01b4d5]/50 rounded-tr-xl opacity-100 transition-all duration-500 animate-spin-slow-delay-2 group-hover:border-[#01b4d5]/80 group-hover:w-8 group-hover:h-8">
                            </div>
                            <div
                                class="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#0056b3]/50 rounded-bl-xl opacity-100 transition-all duration-500 animate-spin-slow-reverse-delay-2 group-hover:border-[#0056b3]/80 group-hover:w-8 group-hover:h-8">
                            </div>

                            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-[#01b4d5]/0 via-[#01b4d5]/0 to-[#01b4d5]/0 transition-all duration-500 group-hover:from-[#01b4d5]/5 group-hover:via-[#01b4d5]/10 group-hover:to-[#01b4d5]/5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 4 - Plateforme -->
                <div class="group relative" :class="{
                    'animate-card-4': isSectionVisible,
                    'opacity-0 translate-y-10': !isSectionVisible
                }">
                    <div class="relative h-full transform-style-3d perspective-1000">
                        <div
                            class="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-[#01b4d5]/40 shadow-xl transition-all duration-500 h-full transform-gpu min-h-[360px] flex flex-col animate-glow-4 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:border-[#01b4d5]/60">
                            <div
                                class="absolute -inset-1 bg-gradient-to-r from-[#01b4d5]/20 to-transparent rounded-2xl opacity-100 blur-md transition-all duration-500 group-hover:opacity-80 group-hover:-inset-2">
                            </div>

                            <div class="relative z-10 text-center mb-6">
                                <div class="relative inline-block">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl flex items-center justify-center shadow-xl shadow-[#01b4d5]/40 mx-auto mb-4 transform-gpu transition-all duration-500 relative overflow-hidden animate-bounce-gentle-delay-3 group-hover:scale-110 group-hover:-rotate-12">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-shine-delay-3">
                                        </div>
                                        <span
                                            class="text-xl font-black text-white relative z-10 drop-shadow-lg transition-all duration-500 group-hover:scale-110">04</span>
                                    </div>
                                    <div
                                        class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-t from-[#01b4d5]/30 to-transparent blur-md rounded-full opacity-80 animate-pulse-soft-delay-3">
                                    </div>
                                </div>
                                <h3
                                    class="text-xl font-bold text-[#01b4d5] transition-all duration-500 mb-2 text-center animate-text-glow-delay-3 group-hover:tracking-wider">
                                    PLATEFORME<br>DE RÉFÉRENCE
                                </h3>
                                <div
                                    class="w-16 h-1 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-full mx-auto opacity-100 transition-all duration-500 animate-line-pulse-delay-3 group-hover:w-20 group-hover:h-1.5">
                                </div>
                            </div>

                            <div class="relative z-10 flex-grow flex items-center">
                                <p
                                    class="text-gray-700 leading-6 text-justify text-sm transition-all duration-500 animate-text-float-delay-3 group-hover:text-gray-900 group-hover:leading-7">
                                    Faire d'ESCEN une plateforme d'excellence et de référence internationale
                                    où se forment et s'épanouissent les futurs champions et leaders de
                                    l'Économie Numérique en Afrique et dans le monde entier.
                                </p>
                            </div>

                            <div
                                class="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#01b4d5]/50 rounded-tl-xl opacity-100 transition-all duration-500 animate-spin-slow-delay-3 group-hover:border-[#01b4d5]/80 group-hover:w-8 group-hover:h-8">
                            </div>
                            <div
                                class="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#0056b3]/50 rounded-br-xl opacity-100 transition-all duration-500 animate-spin-slow-reverse-delay-3 group-hover:border-[#0056b3]/80 group-hover:w-8 group-hover:h-8">
                            </div>

                            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div
                                    class="absolute inset-0 bg-gradient-to-br from-[#01b4d5]/0 via-[#01b4d5]/0 to-[#01b4d5]/0 transition-all duration-500 group-hover:from-[#01b4d5]/5 group-hover:via-[#01b4d5]/10 group-hover:to-[#01b4d5]/5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visionSection = ref(null)
const isSectionVisible = ref(false)

// Styles pour les particules
const particleStyle = (index) => {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 10 + Math.random() * 10

    return {
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
    }
}

// Observer pour détecter quand la section est visible
const observer = ref(null)

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isSectionVisible.value) {
                    isSectionVisible.value = true
                }
            })
        },
        {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    if (visionSection.value) {
        observer.value.observe(visionSection.value)
    }
})

onUnmounted(() => {
    if (observer.value) {
        observer.value.disconnect()
    }
})
</script>


<style scoped>
/* Transform 3D et perspectives */
.transform-style-3d {
    transform-style: preserve-3d;
}

.perspective-1000 {
    perspective: 1000px;
}

.transform-gpu {
    transform: translateZ(0);
}

/* Animation des particules */
@keyframes particle-float {

    0%,
    100% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.3;
    }

    50% {
        transform: translateY(-100px) translateX(20px) rotate(180deg);
        opacity: 0.1;
    }

    90% {
        opacity: 0.3;
    }
}

.animate-particle {
    animation: particle-float linear infinite;
}

/* Animations d'apparition principales */
@keyframes card-entrance {
    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-card-1 {
    animation: card-entrance 0.8s ease-out 0.1s both;
}

.animate-card-2 {
    animation: card-entrance 0.8s ease-out 0.2s both;
}

.animate-card-3 {
    animation: card-entrance 0.8s ease-out 0.3s both;
}

.animate-card-4 {
    animation: card-entrance 0.8s ease-out 0.4s both;
}

/* Nouvelles animations */
@keyframes glow {

    0%,
    100% {
        box-shadow: 0 25px 50px -12px rgba(1, 180, 213, 0.25);
    }

    50% {
        box-shadow: 0 35px 60px -10px rgba(1, 180, 213, 0.4);
    }
}

@keyframes pulse-glow {

    0%,
    100% {
        opacity: 0.8;
    }

    50% {
        opacity: 1;
    }
}

@keyframes bounce-gentle {

    0%,
    100% {
        transform: scale(1.05) translateY(0);
    }

    50% {
        transform: scale(1.08) translateY(-2px);
    }
}

@keyframes shine {
    0% {
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }

    50%,
    100% {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }
}

@keyframes text-glow {

    0%,
    100% {
        text-shadow: 0 0 5px rgba(1, 180, 213, 0.3);
    }

    50% {
        text-shadow: 0 0 15px rgba(1, 180, 213, 0.6);
    }
}

@keyframes line-pulse {

    0%,
    100% {
        transform: scaleX(1);
        opacity: 0.8;
    }

    50% {
        transform: scaleX(1.1);
        opacity: 1;
    }
}

@keyframes text-float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-2px);
    }
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-slow-reverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

/* Application des animations avec délais */
.animate-glow-1 {
    animation: glow 3s ease-in-out infinite;
}

.animate-glow-2 {
    animation: glow 3s ease-in-out infinite 0.5s;
}

.animate-glow-3 {
    animation: glow 3s ease-in-out infinite 1s;
}

.animate-glow-4 {
    animation: glow 3s ease-in-out infinite 1.5s;
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

.animate-pulse-glow-delay {
    animation: pulse-glow 2s ease-in-out infinite 0.3s;
}

.animate-pulse-glow-delay-2 {
    animation: pulse-glow 2s ease-in-out infinite 0.6s;
}

.animate-pulse-glow-delay-3 {
    animation: pulse-glow 2s ease-in-out infinite 0.9s;
}

.animate-bounce-gentle {
    animation: bounce-gentle 4s ease-in-out infinite;
}

.animate-bounce-gentle-delay {
    animation: bounce-gentle 4s ease-in-out infinite 0.5s;
}

.animate-bounce-gentle-delay-2 {
    animation: bounce-gentle 4s ease-in-out infinite 1s;
}

.animate-bounce-gentle-delay-3 {
    animation: bounce-gentle 4s ease-in-out infinite 1.5s;
}

.animate-shine {
    animation: shine 6s ease-in-out infinite;
}

.animate-shine-delay {
    animation: shine 6s ease-in-out infinite 1s;
}

.animate-shine-delay-2 {
    animation: shine 6s ease-in-out infinite 2s;
}

.animate-shine-delay-3 {
    animation: shine 6s ease-in-out infinite 3s;
}

.animate-pulse-soft {
    animation: pulse-glow 3s ease-in-out infinite;
}

.animate-pulse-soft-delay {
    animation: pulse-glow 3s ease-in-out infinite 0.4s;
}

.animate-pulse-soft-delay-2 {
    animation: pulse-glow 3s ease-in-out infinite 0.8s;
}

.animate-pulse-soft-delay-3 {
    animation: pulse-glow 3s ease-in-out infinite 1.2s;
}

.animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
}

.animate-text-glow-delay {
    animation: text-glow 3s ease-in-out infinite 0.2s;
}

.animate-text-glow-delay-2 {
    animation: text-glow 3s ease-in-out infinite 0.4s;
}

.animate-text-glow-delay-3 {
    animation: text-glow 3s ease-in-out infinite 0.6s;
}

.animate-line-pulse {
    animation: line-pulse 2s ease-in-out infinite;
}

.animate-line-pulse-delay {
    animation: line-pulse 2s ease-in-out infinite 0.25s;
}

.animate-line-pulse-delay-2 {
    animation: line-pulse 2s ease-in-out infinite 0.5s;
}

.animate-line-pulse-delay-3 {
    animation: line-pulse 2s ease-in-out infinite 0.75s;
}

.animate-text-float {
    animation: text-float 5s ease-in-out infinite;
}

.animate-text-float-delay {
    animation: text-float 5s ease-in-out infinite 0.5s;
}

.animate-text-float-delay-2 {
    animation: text-float 5s ease-in-out infinite 1s;
}

.animate-text-float-delay-3 {
    animation: text-float 5s ease-in-out infinite 1.5s;
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-delay {
    animation: spin-slow 20s linear infinite 2s;
}

.animate-spin-slow-delay-2 {
    animation: spin-slow 20s linear infinite 4s;
}

.animate-spin-slow-delay-3 {
    animation: spin-slow 20s linear infinite 6s;
}

.animate-spin-slow-reverse {
    animation: spin-slow-reverse 25s linear infinite;
}

.animate-spin-slow-reverse-delay {
    animation: spin-slow-reverse 25s linear infinite 3s;
}

.animate-spin-slow-reverse-delay-2 {
    animation: spin-slow-reverse 25s linear infinite 6s;
}

.animate-spin-slow-reverse-delay-3 {
    animation: spin-slow-reverse 25s linear infinite 9s;
}

/* Animations de flottement */
@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
    }

    33% {
        transform: translateY(-20px) translateX(10px) rotate(120deg);
    }

    66% {
        transform: translateY(10px) translateX(-15px) rotate(240deg);
    }
}

@keyframes float-medium {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-15px) rotate(180deg);
    }
}

.animate-float-slow {
    animation: float-slow 15s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 12s ease-in-out infinite;
}

.animate-slide-up {
    animation: slideUp 1s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {

    0%,
    100% {
        opacity: 0.3;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }
}

/* Optimisations pour les performances */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

/* Responsive */
@media (max-width: 1536px) {
    .max-w-\[1600px\] {
        max-width: 1400px;
    }
}

@media (max-width: 1280px) {
    .grid.xl\:grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }

    .max-w-\[1600px\] {
        max-width: 1200px;
    }
}

@media (max-width: 1024px) {
    .grid.lg\:grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .min-h-\[360px\] {
        min-height: 320px;
    }
}

@media (max-width: 768px) {
    .min-h-\[360px\] {
        min-height: 280px;
    }

    .gap-8 {
        gap: 1.5rem;
    }

    .mx-6 {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
}

@media (max-width: 640px) {
    .min-h-\[360px\] {
        min-height: 250px;
    }

    .py-16 {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .gap-8 {
        gap: 1rem;
    }

    .mx-6 {
        margin-left: 1rem;
        margin-right: 1rem;
    }
}
</style>