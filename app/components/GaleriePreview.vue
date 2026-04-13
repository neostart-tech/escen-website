<template>
  <section ref="sectionEl" id="galerie-preview" class="relative py-20 lg:py-28 overflow-hidden bg-white">
    
    <!-- Éléments décoratifs géométriques -->
    <div class="absolute top-8 left-8 w-24 h-24 border border-[#01b4d5]/10 rounded-full animate-pulse-slow pointer-events-none"></div>
    <div class="absolute bottom-12 right-8 w-16 h-16 border border-[#202a50]/5 rounded-lg rotate-45 animate-float-medium pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
      <!-- En-tête -->
      <div class="text-center mb-14 lg:mb-18 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-semibold text-xs tracking-widest uppercase">Immersion</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>

        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#202a50] mb-4 tracking-tight">
          Notre <span class="text-[#01b4d5]">Galerie</span>
        </h2>

        <p class="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Revivez les meilleurs moments de la vie étudiante, de nos événements et de nos cérémonies au travers de notre galerie en images.
        </p>
      </div>

      <!-- Grille des albums -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div v-for="(album, index) in albums" :key="album.id"
             class="reveal"
             :class="['reveal-delay-' + (index + 1), { 'is-visible': isVisible }]">
          
          <NuxtLink :to="`/galerie/${album.id}`" class="block h-full cursor-pointer">
            <div class="group h-full relative bg-gray-50 rounded-2xl p-4 border border-gray-100
                        hover:bg-white hover:border-[#01b4d5]/30 transition-all duration-500 hover:-translate-y-2
                        hover:shadow-xl hover:shadow-[#01b4d5]/10 flex flex-col">
              
              <!-- Image de couverture -->
              <div class="relative w-full h-48 md:h-52 rounded-xl overflow-hidden mb-5">
                <img :src="album.coverImage" 
                     :alt="album.title"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-[#202a50]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                
                <!-- Badge photo count -->
                <div class="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded text-[#202a50] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm opacity-90 group-hover:opacity-100">
                  <svg class="w-3 h-3 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ album.photoCount }}
                </div>
              </div>

              <!-- Contenu texte -->
              <div class="flex-grow flex flex-col justify-center items-center">
                <!-- Titre -->
                <h3 class="text-base lg:text-lg font-bold text-[#202a50] text-center mb-3 group-hover:text-[#01b4d5] transition-colors duration-300 line-clamp-2 leading-tight">
                  {{ album.title }}
                </h3>

                <!-- Petit trait décoratif pour souligner l'interaction -->
                <div class="w-8 h-0.5 bg-gray-200 rounded-full group-hover:bg-[#01b4d5] transition-colors duration-400 mt-auto"></div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Séparateur bas / Bouton action -->
      <div class="text-center mt-14 lg:mt-18 reveal" :class="['reveal-delay-4', { 'is-visible': isVisible }]">
        <NuxtLink to="/galerie" class="inline-flex items-center gap-3 px-8 py-4 bg-[#202a50] hover:bg-[#01b4d5] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1 group">
          Explorer la galerie complète
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)

const albums = [
    {
        id: "1",
        title: "Cérémonie de remise des diplômes",
        coverImage: "/album/alb1.jpg",
        photoCount: 3
    },
    {
        id: "2",
        title: "Hackathon de la rentrée",
        coverImage: "/album/alb2.jpg",
        photoCount: 2
    },
    {
        id: "3",
        title: "Séminaire d'intégration",
        coverImage: "/album/alb3.jpg",
        photoCount: 3
    },
    {
        id: "4",
        title: "Conférence Tech",
        coverImage: "/album/alb4.jpg",
        photoCount: 6
    }
]

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.15 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulseSlow 5s ease-in-out infinite;
}

.animate-float-medium {
  animation: floatMedium 12s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes floatMedium {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-12px) rotate(45deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-medium { animation: none; }
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
