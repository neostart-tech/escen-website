<template>
    <div class="min-h-screen bg-gray-50 relative overflow-hidden">
        <!-- Spinner de Chargement -->
        <transition leave-active-class="transition duration-700 ease-in-out" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isLoading" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
                <div class="relative w-20 h-20 mb-6">
                    <div class="absolute inset-0 rounded-full border-4 border-[#01b4d5]/10"></div>
                    <div class="absolute inset-0 rounded-full border-4 border-[#01b4d5] border-t-transparent animate-spin"></div>
                </div>
                <div class="text-[#202a50] text-xl font-bold tracking-widest uppercase animate-pulse">Chargement</div>
                <div class="text-gray-400 text-sm mt-2">Ouverture de l'album...</div>
            </div>
        </transition>

        <!-- Contenu -->
        <div v-show="!isLoading">
            <!-- Apparition du Hero (Titre) avec effet transform -->
            <div 
                class="transition-all duration-1000 ease-out transform origin-bottom"
                :class="showContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'"
            >
                <Breadcrumb v-if="album" :title="album.title" subtitle="Album Photo"
                    :description="`${album.photoCount} photos`" :breadcrumb="[
                        { label: 'Accueil', href: '/' },
                        { label: 'Galerie', href: '/galerie' },
                        { label: album.title }
                    ]" :backgroundImage="album.coverImage" :animateTitle="showContent" />
                <Breadcrumb v-else title="Album introuvable" subtitle="Erreur" description="Cet album n'existe pas."
                     :breadcrumb="[
                        { label: 'Accueil', href: '/' },
                        { label: 'Galerie', href: '/galerie' }
                    ]" backgroundImage="/valeurs/bg.jpg" />
            </div>

            <!-- Apparition de la grille avec un léger retard -->
            <div 
                class="transition-all duration-1000 delay-300 ease-out transform"
                :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
            >
                <main v-if="album" class="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
            <!-- Grille de photos -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="i in album.photoCount" :key="i" 
                     class="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                     @click="openLightbox(i)">
                    <img :src="`/album/img${album.id}-${i}.jpg`" 
                         :alt="`Photo ${i} de ${album.title}`"
                         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         @error="handleImageError" />
                    <!-- Survol subtil -->
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

                </main>
                <div v-else class="text-center py-20">
                    <NuxtLink to="/galerie" class="text-[#01b4d5] hover:underline font-semibold flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Retour à la galerie
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Lightbox Premium (Placée à la racine pour éviter le conflit avec transform) -->
        <transition 
            enter-active-class="transition duration-500 ease-out" 
            enter-from-class="opacity-0" 
            enter-to-class="opacity-100"
            leave-active-class="transition duration-300 ease-in" 
            leave-from-class="opacity-100" 
            leave-to-class="opacity-0"
        >
            <div v-if="lightboxOpen" class="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a1a3f]/98 backdrop-blur-xl" @click.self="closeLightbox">
                
                <!-- Lumière d'ambiance -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#01b4d5]/15 rounded-full blur-[120px]"></div>
                    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#01b4d5]/10 rounded-full blur-[120px]"></div>
                </div>

                <!-- Bouton Fermer stylisé -->
                <button @click="closeLightbox" class="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#01b4d5] hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-xl border border-white/20 z-50 group">
                    <svg class="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Navigation GAUCHE -->
                <button @click.stop="prevPhoto" v-if="album && album.photoCount > 1" class="absolute left-2 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-[#01b4d5] border border-white/10 text-white transition-all duration-300 shadow-xl flex items-center justify-center hover:scale-110 z-50">
                    <svg class="w-6 h-6 md:w-8 md:h-8 -ml-1 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <!-- Image affichée (Plein Écran Brut) -->
                <div class="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none z-10" @click.self="closeLightbox">
                    <transition name="fade-scale" mode="out-in">
                        <img v-if="album" :key="currentPhotoIndex" :src="`/album/img${album.id}-${currentPhotoIndex}.jpg`" 
                                class="w-full h-full object-contain pointer-events-auto" 
                                @click.stop />
                    </transition>
                </div>

                <!-- Navigation DROITE -->
                <button @click.stop="nextPhoto" v-if="album && album.photoCount > 1" class="absolute right-2 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-[#01b4d5] border border-white/10 text-white transition-all duration-300 shadow-xl flex items-center justify-center hover:scale-110 z-50">
                    <svg class="w-6 h-6 md:w-8 md:h-8 -mr-1 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                
                <!-- Informations en bas -->
                <div v-if="album" class="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-[#0a1a3f]/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl z-50 max-w-[90vw] overflow-hidden text-white">
                    <span class="text-[#01b4d5] font-semibold tracking-widest text-xs md:text-sm uppercase truncate">{{ album.title }}</span>
                    <div class="w-px h-4 bg-white/30 hidden md:block"></div>
                    <span class="font-medium tracking-widest text-xs md:text-sm whitespace-nowrap">{{ currentPhotoIndex }} / {{ album.photoCount }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/Breadcrumb.vue'

const route = useRoute()
const albumId = route.params.id

// Données des albums (Doivent correspondre à la page index)
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

const album = computed(() => albums.find(a => a.id === albumId))

// --- Loading & Animation State ---
const isLoading = ref(true)
const showContent = ref(false)

onMounted(() => {
    // Simule le chargement de l'album
    setTimeout(() => {
        isLoading.value = false
        // Délai subtil pour lancer l'animation d'entrée juste après que l'écran de chargement ait disparu
        setTimeout(() => {
            showContent.value = true
        }, 100)
    }, 800) // Temps de chargement simulé
})

// --- Lightbox state ---
const lightboxOpen = ref(false)
const currentPhotoIndex = ref(1)

const openLightbox = (index) => {
    currentPhotoIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = ''
}

const prevPhoto = () => {
    if (currentPhotoIndex.value > 1) {
        currentPhotoIndex.value--
    } else {
        currentPhotoIndex.value = album.value.photoCount
    }
}

const nextPhoto = () => {
    if (currentPhotoIndex.value < album.value.photoCount) {
        currentPhotoIndex.value++
    } else {
        currentPhotoIndex.value = 1
    }
}

const handleImageError = (event) => {
    const target = event.target
    const parent = target.parentElement
    // Remplacer l'image cassée par un placeholder élégant
    parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center border border-gray-200 rounded-xl">
            <svg class="w-10 h-10 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-xs text-gray-400 font-medium">Image non trouvée</span>
        </div>
    `
}
</script>

<style scoped>
/* Transition personnalisée pour le changement d'image dans la lightbox */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease-out;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>