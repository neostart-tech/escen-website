<template>
    <section id="cta-candidature" class="py-16 bg-gradient-to-r from-[#01b4d5] to-[#0056b3]">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4 animate-pulse-gentle">
                Postulez dès maintenant
            </h2>
            
            <p class="text-white/90 mb-8 text-lg">
                Rejoignez l'ESCEN pour votre formation en digital
            </p>

            <a 
                href="/inscription" 
                class="bg-white text-[#01b4d5] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center gap-2 animate-bounce-soft min-w-[160px] mx-auto"
            >
                <span>Candidater</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </a>
        </div>
    </section>
</template>


<style scoped>
@keyframes pulse-gentle {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}

@keyframes bounce-soft {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

.animate-pulse-gentle {
    animation: pulse-gentle 3s ease-in-out infinite;
}

.animate-bounce-soft {
    animation: bounce-soft 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
    .animate-pulse-gentle,
    .animate-bounce-soft {
        animation: none;
    }
}
</style>