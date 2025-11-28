<template>
    <section id="valeurs" class="relative py-16 lg:py-20 overflow-hidden">
        <!-- Background image avec overlay bleu foncé -->
        <div class="absolute inset-0">
            <img 
                src="/valeurs/bg.jpg" 
                alt="Background valeurs ESCEN"
                class="w-full h-full object-cover"
            />
            <!-- Overlay bleu foncé #202a50 -->
            <div class="absolute inset-0 bg-[#202a50]/75 backdrop-blur-[2px]"></div>
        </div>

        <!-- Éléments décoratifs géométriques plus discrets -->
        <div class="absolute top-8 right-8 w-24 h-24 border border-white/15 rounded-full animate-pulse-slow"></div>
        <div class="absolute bottom-12 left-8 w-20 h-20 border border-white/10 rounded-lg rotate-45 animate-float-medium"></div>
        <div class="absolute top-1/2 left-1/4 w-12 h-12 border border-white/5 rounded-full animate-float-slow"></div>

        <div class="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
            <!-- En-tête minimaliste -->
            <div class="text-center mb-12 lg:mb-16 animate-slide-up">
                <div class="inline-flex items-center gap-4 mb-4">
                    <div class="w-6 h-px bg-gradient-to-r from-transparent to-white/50"></div>
                    <span class="text-white/70 font-medium text-sm tracking-wider uppercase">
                        Notre ADN
                    </span>
                    <div class="w-6 h-px bg-gradient-to-l from-transparent to-white/50"></div>
                </div>

                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight">
                    Nos <span class="text-white">Valeurs</span>
                </h2>
                
                <p class="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Les piliers fondamentaux qui guident notre vision de l'éducation numérique
                </p>
            </div>

            <!-- Grille des valeurs redesign -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
                <!-- Excellence -->
                <div class="animate-card-1">
                    <div class="group relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/25 hover:bg-gradient-to-br hover:from-white/25 hover:to-white/20 transition-all duration-500 h-full hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        <!-- Icône moderne -->
                        <div class="relative z-10 text-center mb-4">
                            <div class="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md shadow-white/15 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 border border-white/35">
                                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-[#202a50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">Excellence</h3>
                        </div>

                        <!-- Contenu -->
                        <div class="relative z-10">
                            <p class="text-white/95 leading-6 text-center text-sm">
                                Nous cultivons l'excellence à travers la qualité de nos enseignements, 
                                l'expertise de nos intervenants et l'exigence de notre pédagogie.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Innovation -->
                <div class="animate-card-2">
                    <div class="group relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/25 hover:bg-gradient-to-br hover:from-white/25 hover:to-white/20 transition-all duration-500 h-full hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        <!-- Icône moderne -->
                        <div class="relative z-10 text-center mb-4">
                            <div class="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md shadow-white/15 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 border border-white/35">
                                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-[#202a50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">Innovation</h3>
                        </div>

                        <!-- Contenu -->
                        <div class="relative z-10">
                            <p class="text-white/95 leading-6 text-center text-sm">
                                Nous repoussons les limites grâce à des méthodologies innovantes 
                                et des filières adaptées aux enjeux technologiques contemporains.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Professionnalisme & Leadership -->
                <div class="animate-card-3">
                    <div class="group relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/25 hover:bg-gradient-to-br hover:from-white/25 hover:to-white/20 transition-all duration-500 h-full hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        <!-- Icône moderne -->
                        <div class="relative z-10 text-center mb-4">
                            <div class="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md shadow-white/15 mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 border border-white/35">
                                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    <svg class="w-5 h-5 text-[#202a50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">Leadership</h3>
                        </div>

                        <!-- Contenu -->
                        <div class="relative z-10">
                            <p class="text-white/95 leading-6 text-center text-sm">
                                Nous formons des leaders capables d'impacter leur environnement 
                                et de créer les entreprises de demain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Séparateur épuré -->
            <div class="text-center mt-12 animate-fade-in">
                <div class="inline-flex items-center gap-4 text-white/60">
                    <div class="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
                    <span class="text-xs font-medium tracking-wide">L'excellence au service du numérique</span>
                    <div class="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Aucune logique particulière nécessaire
</script>

<style scoped>
/* Animations de flottement raffinées */
@keyframes float-slow {
    0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg); 
    }
    33% { 
        transform: translateY(-15px) translateX(8px) rotate(120deg); 
    }
    66% { 
        transform: translateY(8px) translateX(-12px) rotate(240deg); 
    }
}

@keyframes float-medium {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
    }
    50% { 
        transform: translateY(-12px) rotate(180deg); 
    }
}

.animate-float-slow { 
    animation: float-slow 15s ease-in-out infinite; 
}

.animate-float-medium { 
    animation: float-medium 12s ease-in-out infinite; 
}

/* Animations d'apparition */
.animate-slide-up {
    animation: slideUp 1s ease-out;
}

.animate-card-1 {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-card-2 {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-card-3 {
    animation: slideUp 0.8s ease-out 0.6s both;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out 1s both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Pulse animation subtile */
.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 0.2;
        transform: scale(1);
    }
    50% {
        opacity: 0.4;
        transform: scale(1.05);
    }
}

/* Améliorations responsive */
@media (max-width: 1024px) {
    .grid.grid-cols-1.lg\:grid-cols-3 {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        max-width: 24rem;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .text-3xl {
        font-size: 1.875rem;
    }
    
    .text-5xl {
        font-size: 2.5rem;
    }
    
    .p-6 {
        padding: 1.25rem;
    }
    
    .mb-12 {
        margin-bottom: 3rem;
    }
}

@media (max-width: 640px) {
    .text-3xl {
        font-size: 1.75rem;
    }
    
    .text-5xl {
        font-size: 2.25rem;
    }
    
    .py-16 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    
    .mb-16 {
        margin-bottom: 4rem;
    }
    
    .p-6 {
        padding: 1rem;
    }
    
    .gap-6 {
        gap: 1rem;
    }
}
</style>