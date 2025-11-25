<template>
    <section id="cta-candidature" class="relative py-16 lg:py-20 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] overflow-hidden">
        <!-- Éléments décoratifs animés -->
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-lg rotate-45 animate-float-medium"></div>
        <div class="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow"></div>
        
        <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
            <div class="text-center animate-slide-up">
                <!-- Titre simple -->
                <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Prêt à rejoindre l'ESCEN ?
                </h2>
                
                <!-- Description courte -->
                <p class="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Postulez dès maintenant et démarrez votre avenir dans le numérique
                </p>

                <!-- Bouton avec animation -->
                <div class="flex justify-center animate-pulse-gentle">
                    <a href="/candidature" class="bg-white text-[#01b4d5] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                        Candidater maintenant
                    </a>
                </div>

                <!-- Texte secondaire optionnel -->
                <p class="text-white/80 text-sm mt-6 animate-fade-in">
                    Rentrée 2024 - Inscriptions ouvertes
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
// Aucune logique particulière nécessaire
</script>

<style scoped>
/* Animations de flottement */
@keyframes float-slow {
    0%, 100% { 
        transform: translateY(0px) translateX(0px); 
    }
    50% { 
        transform: translateY(-20px) translateX(10px); 
    }
}

@keyframes float-medium {
    0%, 100% { 
        transform: translateY(0px); 
    }
    50% { 
        transform: translateY(-15px); 
    }
}

.animate-float-slow { 
    animation: float-slow 8s ease-in-out infinite; 
}

.animate-float-medium { 
    animation: float-medium 6s ease-in-out infinite; 
}

.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
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

/* Animation d'apparition */
.animate-slide-up {
    animation: slideUp 0.8s ease-out;
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

/* Animation pulse douce pour le bouton */
.animate-pulse-gentle {
    animation: pulseGentle 2s ease-in-out infinite;
}

@keyframes pulseGentle {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}

/* Animation fade in pour le texte secondaire */
.animate-fade-in {
    animation: fadeIn 1s ease-out 0.5s both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Optimisation pour reduced-motion */
@media (prefers-reduced-motion: reduce) {
    .animate-float-slow,
    .animate-float-medium,
    .animate-pulse-slow,
    .animate-pulse-gentle,
    .animate-slide-up,
    .animate-fade-in {
        animation: none;
    }
    
    .hover\:scale-105 {
        transform: none;
    }
}
</style>