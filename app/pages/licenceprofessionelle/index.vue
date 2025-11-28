<template>
    <div class="min-h-screen bg-white">
        <!-- Breadcrumb -->

        <section class="relative py-12 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
            style="background-image: url('/valeurs/bg.jpg');">
            <!-- Overlay en dégradé -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#019fbf] to-[#202a50] opacity-90"></div>

            <!-- Éléments décoratifs -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-10 left-10 w-72 h-72 bg-[#01b4d5]/10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#0056b3]/10 rounded-full blur-3xl"></div>
                <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-[#01b4d5]/5 rounded-full blur-3xl"></div>
            </div>

            <div class="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
                <!-- Breadcrumb Centré -->
                <nav class="flex items-center justify-center space-x-2 text-sm text-white/80 mb-6">
                    <a href="/" class="hover:text-white transition-colors duration-200 flex items-center gap-1">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Accueil
                    </a>
                    <span class="text-white/50">/</span>
                    <a href="/formations" class="hover:text-white transition-colors duration-200">Formations</a>
                    <span class="text-white/50">/</span>
                    <span class="text-white font-semibold">Licences Professionnelles</span>
                </nav>

                <div class="text-center text-white">
                    <div class="inline-flex items-center gap-4 mb-6">
                        <div class="w-12 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
                        <span class="text-[#01b4d5] font-semibold text-sm tracking-widest uppercase">
                            Formations Professionnelles
                        </span>
                        <div class="w-12 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
                    </div>

                    <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight">
                        LICENCES <span class="text-[#01b4d5]">PROFESSIONNELLES</span>
                    </h1>

                    <p class="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Formez-vous aux métiers d'avenir avec nos licences professionnelles en 3 ans
                    </p>

                    <div
                        class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                        <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-white font-semibold">Durée : 3 ans (6 semestres) - Système LMD</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- Formations Section -->
        <section class="py-20 lg:py-28 bg-white">
            <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
                <!-- Marketing Digital -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
                    <div class="relative group">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="" alt="Marketing Digital & e-commerce"
                                class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                @error="handleImageError">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                        </div>
                        <div
                            class="absolute -bottom-6 -right-6 w-24 h-24 bg-[#01b4d5] rounded-2xl flex items-center justify-center shadow-2xl">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                    </div>

                    <div class="lg:pl-8">
                        <div
                            class="inline-flex items-center gap-2 bg-[#01b4d5]/10 text-[#01b4d5] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Licence Professionnelle
                        </div>
                        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Marketing Digital & e-commerce
                        </h2>
                        <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                            La licence en Marketing Digital & e-commerce prépare les étudiants à devenir de véritables
                            professionnels
                            du Marketing Digital et du e-commerce en leur donnant les outils et les codes nécessaires.
                        </p>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>Stratégies digitales et réseaux sociaux</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>E-commerce et marketplace management</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>Analytics et performance marketing</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="bg-[#01b4d5] hover:bg-[#0056b3] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Télécharger la brochure
                            </button>
                            <button
                                class="border-2 border-[#01b4d5] text-[#01b4d5] hover:bg-[#01b4d5] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Finance Digitale -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
                    <div class="lg:order-2">
                        <div class="relative group">
                            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img src="" alt="Finance Digitale"
                                    class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    @error="handleImageError">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                            </div>
                            <div
                                class="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0056b3] rounded-2xl flex items-center justify-center shadow-2xl">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="lg:pr-8 lg:order-1">
                        <div
                            class="inline-flex items-center gap-2 bg-[#0056b3]/10 text-[#0056b3] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Licence Professionnelle
                        </div>
                        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Finance Digitale
                        </h2>
                        <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                            L'objectif de la licence professionnelle en Finance Digitale est de former de manière
                            opérationnelle
                            des professionnels capables de développer des compétences en services financiers digitaux et
                            en gestion
                            dans le domaine des Fintech et de l'inclusion financière.
                        </p>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Fintech et services financiers innovants</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Inclusion financière et bancarisation</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Gestion des risques digitaux</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="bg-[#0056b3] hover:bg-[#01b4d5] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Télécharger la brochure
                            </button>
                            <button
                                class="border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Management de Projets Numériques -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
                    <div class="relative group">
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="" alt="Management de Projets Numériques"
                                class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                @error="handleImageError">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                        </div>
                        <div
                            class="absolute -bottom-6 -right-6 w-24 h-24 bg-[#01b4d5] rounded-2xl flex items-center justify-center shadow-2xl">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>

                    <div class="lg:pl-8">
                        <div
                            class="inline-flex items-center gap-2 bg-[#01b4d5]/10 text-[#01b4d5] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Licence Professionnelle
                        </div>
                        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Management de Projets Numériques
                        </h2>
                        <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                            La licence professionnelle en Management de Projets Numériques forme des leaders de la
                            transformation
                            numérique capables de gérer et de mener à bien des projets dans le domaine numérique.
                        </p>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>Gestion de projets agiles et waterfall</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>Transformation digitale des organisations</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#01b4d5] rounded-full"></div>
                                <span>Management d'équipes pluridisciplinaires</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="bg-[#01b4d5] hover:bg-[#0056b3] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Télécharger la brochure
                            </button>
                            <button
                                class="border-2 border-[#01b4d5] text-[#01b4d5] hover:bg-[#01b4d5] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Intelligence Artificielle -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div class="lg:order-2">
                        <div class="relative group">
                            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img src="" alt="Intelligence Artificielle et Génie Logiciel"
                                    class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    @error="handleImageError">
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                            </div>
                            <div
                                class="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0056b3] rounded-2xl flex items-center justify-center shadow-2xl">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="lg:pr-8 lg:order-1">
                        <div
                            class="inline-flex items-center gap-2 bg-[#0056b3]/10 text-[#0056b3] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Licence Professionnelle
                        </div>
                        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                            Intelligence Artificielle & Génie Logiciel
                        </h2>
                        <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                            La licence professionnelle en Intelligence Artificielle forme des spécialistes capables de
                            concevoir,
                            développer et déployer des solutions intelligentes dans divers secteurs.
                        </p>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Machine Learning et Deep Learning</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Développement d'applications intelligentes</span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-700">
                                <div class="w-2 h-2 bg-[#0056b3] rounded-full"></div>
                                <span>Data Science et analyse prédictive</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button
                                class="bg-[#0056b3] hover:bg-[#01b4d5] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Télécharger la brochure
                            </button>
                            <button
                                class="border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-[#01b4d5] to-[#0056b3]">
            <div class="container mx-auto px-4 lg:px-6 max-w-4xl text-center text-white">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                    Prêt à transformer votre avenir ?
                </h2>
                <p class="text-xl lg:text-2xl mb-8 opacity-90">
                    Rejoignez l'ESCEN et bénéficiez d'une formation d'excellence aux métiers du numérique
                </p>
                <button
                    class="bg-white text-[#01b4d5] hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
                    S'inscrire maintenant
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue'
const handleImageError = (event) => {
    const target = event.target
    const parent = target.parentElement
    const altText = target.alt

    // Fallback avec un gradient coloré
    parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-gray-800 to-slate-700 flex items-center justify-center rounded-3xl">
            <div class="text-center text-white">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p class="text-sm font-medium">${altText}</p>
            </div>
        </div>
    `
}
</script>

<style scoped>
/* Styles pour le breadcrumb avec image de fond */
.bg-cover {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" fill="none"><path d="M0 0h1200v300H0z" fill="url(%23a)"/><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="%23202a50"/><stop offset="1" stop-color="%2301a0bf"/></linearGradient></defs></svg>');
    /* Vous pouvez remplacer cette URL SVG par une image réelle :
       background-image: url('/votre-image-breadcrumb.jpg');
    */
}

/* Alternative avec une image placeholder */
.bg-cover {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='300' viewBox='0 0 1200 300'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1200' height='300' fill='url(%23grid)'/%3E%3C/svg%3E");
}
</style>