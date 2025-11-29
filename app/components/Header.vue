<template>
  <div>
    <!-- Header Component FIXE (toujours visible) -->
    <header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <!-- Barre supérieure avec informations de contact - RESPONSIVE -->
      <div class="bg-[#202a50] text-white py-2 px-4 hidden md:block">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <!-- Informations de contact gauche -->
            <div class="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
              <div class="flex items-center space-x-1">
                <svg class="w-3 h-3 md:w-4 md:h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="whitespace-nowrap">contact@ecole-exemple.fr</span>
              </div>
              <div class="hidden sm:flex items-center space-x-1">
                <svg class="w-3 h-3 md:w-4 md:h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
                <span class="whitespace-nowrap">+33 1 23 45 67 89</span>
              </div>
            </div>
            
            <!-- Informations de droite -->
            <div class="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
              <div class="flex items-center space-x-1">
                <svg class="w-3 h-3 md:w-4 md:h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span class="whitespace-nowrap">Lun-Ven: 8h-18h</span>
              </div>
              <div class="hidden md:flex items-center space-x-2">
                <button class="hover:text-[#01b4d5] transition-colors text-xs md:text-sm whitespace-nowrap">Espace Parent</button>
                <span class="text-gray-400">|</span>
                <button class="hover:text-[#01b4d5] transition-colors text-xs md:text-sm whitespace-nowrap">Espace Élève</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation principale - RESPONSIVE -->
      <nav class="bg-white py-2 md:py-3 lg:py-4 px-4">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <!-- Logo RESPONSIVE -->
            <div class="flex items-center">
              <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src="/logo/LOGO_ESCEN.png" 
                  alt="ESCEN - École Supérieure de Commerce et d'Economie Numérique"
                  class="h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
                >
              </NuxtLink>
            </div>

            <!-- Navigation desktop -->
            <div class="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <!-- Liens de navigation principaux -->
              <template v-for="item in navigation" :key="item.name">
                <!-- Élément avec sous-menu -->
                <div v-if="item.submenu" class="relative group">
                  <button class="text-[#202a50] font-medium hover:text-[#01b4d5] transition-colors flex items-center space-x-1 text-sm xl:text-base">
                    <span>{{ item.name }}</span>
                    <svg class="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </button>
                  
                  <!-- Sous-menu -->
                  <div class="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                    <div class="py-1">
                      <NuxtLink 
                        v-for="subItem in item.submenu"
                        :key="subItem.name"
                        :to="subItem.href"
                        class="block px-3 py-2 text-xs xl:text-sm text-[#202a50] hover:bg-[#01b4d5] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {{ subItem.name }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Élément simple -->
                <NuxtLink 
                  v-else
                  :to="item.href"
                  class="text-[#202a50] font-medium hover:text-[#01b4d5] transition-colors relative group text-sm xl:text-base"
                >
                  {{ item.name }}
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01b4d5] transition-all group-hover:w-full"></span>
                </NuxtLink>
              </template>
              
              <!-- Bouton CTA S'inscrire -->
              <NuxtLink 
                to="/inscription" 
                class="bg-gradient-to-r from-[#01b4d5] to-[#0199b8] text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center space-x-1 xl:space-x-2 group text-sm xl:text-base" 
                style="color: white !important;"
              >
                <svg class="w-4 h-4 xl:w-5 xl:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="whitespace-nowrap">S'inscrire</span>
              </NuxtLink>
            </div>

            <!-- Menu mobile -->
            <div class="lg:hidden">
              <button 
                @click="isMobileMenuOpen = !isMobileMenuOpen"
                class="p-1 md:p-2 rounded-lg text-[#202a50] hover:bg-gray-100 transition-colors"
              >
                <svg 
                  v-if="!isMobileMenuOpen"
                  class="w-5 h-5 md:w-6 md:h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                <svg 
                  v-else
                  class="w-5 h-5 md:w-6 md:h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Espace réservé pour compenser la hauteur du header fixe - RESPONSIVE -->
    <div class="h-[88px] md:h-[120px] lg:h-[132px] xl:h-[140px]"></div>

    <!-- Menu Mobile Sidebar - CACHÉ PAR DÉFAUT -->
    <div 
      v-show="isMobileMenuOpen"
      class="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-4 md:p-6 h-full overflow-y-auto">
        <!-- Header du menu mobile avec logo AGRANDI -->
        <div class="flex items-center justify-between mb-6 md:mb-8">
          <NuxtLink to="/" class="flex items-center" @click="isMobileMenuOpen = false">
            <img 
              src="/logo/LOGO_ESCEN.png" 
              alt="ESCEN"
              class="h-16 md:h-20 w-auto object-contain"
            >
          </NuxtLink>
          <button @click="isMobileMenuOpen = false" class="p-1 md:p-2">
            <svg class="w-5 h-5 md:w-6 md:h-6 text-[#202a50]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <!-- Navigation mobile -->
        <nav class="space-y-1 md:space-y-2">
          <template v-for="item in navigation" :key="item.name">
            <!-- Élément avec sous-menu mobile -->
            <div v-if="item.submenu" class="space-y-1 md:space-y-2">
              <button 
                @click="toggleSubmenu(item.name)"
                class="w-full flex items-center justify-between py-2 md:py-3 px-3 md:px-4 text-[#202a50] font-medium hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors text-sm md:text-base"
              >
                <span>{{ item.name }}</span>
                <svg 
                  :class="['w-3 h-3 md:w-4 md:h-4 transition-transform', openSubmenus[item.name] ? 'rotate-180' : '']" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              <!-- Sous-menu mobile -->
              <div v-if="openSubmenus[item.name]" class="ml-3 md:ml-4 space-y-1 border-l-2 border-[#01b4d5] pl-3 md:pl-4">
                <NuxtLink
                  v-for="subItem in item.submenu"
                  :key="subItem.name"
                  :to="subItem.href"
                  @click="isMobileMenuOpen = false"
                  class="block py-1 md:py-2 px-3 md:px-4 text-xs md:text-sm text-[#202a50] hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors"
                >
                  {{ subItem.name }}
                </NuxtLink>
              </div>
            </div>

            <!-- Élément simple mobile -->
            <NuxtLink
              v-else
              :to="item.href"
              @click="isMobileMenuOpen = false"
              class="block py-2 md:py-3 px-3 md:px-4 text-[#202a50] font-medium hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors text-sm md:text-base"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
        </nav>

        <!-- Bouton CTA mobile -->
        <div class="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <NuxtLink
            to="https://escen.neostart.tech/candidatures/faire-mon-depot"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-center space-x-1 md:space-x-2 w-full bg-gradient-to-r from-[#01b4d5] to-[#0199b8] text-white text-center py-2 md:py-3 px-3 md:px-4 rounded-lg font-semibold hover:shadow-lg transition-all text-sm md:text-base"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>S'inscrire</span>
          </NuxtLink>
        </div>

        <!-- Informations de contact mobile DANS LE SIDEBAR -->
        <div class="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
          <div class="space-y-3 md:space-y-4 text-sm">
            <!-- Informations de contact -->
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="text-[#202a50] font-medium">contact@ecole-exemple.fr</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
                <span class="text-[#202a50] font-medium">+33 1 23 45 67 89</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span class="text-[#202a50] font-medium">Lun-Ven: 8h-18h</span>
              </div>
            </div>

            <!-- Espaces Parent/Élève -->
            <div class="flex items-center justify-center space-x-3 pt-2">
              <button class="text-[#01b4d5] hover:text-[#202a50] transition-colors text-sm font-medium">
                Espace Parent
              </button>
              <span class="text-gray-400">|</span>
              <button class="text-[#01b4d5] hover:text-[#202a50] transition-colors text-sm font-medium">
                Espace Élève
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// État pour le menu mobile - FERMÉ PAR DÉFAUT
const isMobileMenuOpen = ref(false)
const openSubmenus = ref({})

// Navigation items organisés dans un tableau
const navigation = [
  { 
    name: 'Acceuil', 
    href: '/' 
  },
  { 
    name: 'Formations', 
    submenu: [
      { name: 'Licence Professionnelle', href: '/formations/licence-professionelle' },
      { name: 'Master Professionnel', href: '/formations/master-professionnel' },
      { name: 'Executive Education', href: '/formations/executive-education' },
      { name: 'Certificats', href: '/formations/certificats' }
    ]
  },
 
  { 
    name: 'Actualités', 
    href: '/actualites' 
  },
  { 
    name: 'Nous contacter', 
    href: '/contact' 
  },
  { 
    name: 'Espace étudiants', 
    href: '/espace-etudiants' 
  }
]

// Fonction pour toggle les sous-menus en mobile
const toggleSubmenu = (menuName) => {
  openSubmenus.value[menuName] = !openSubmenus.value[menuName]
}

// Fermer le menu mobile quand la route change
watch(() => isMobileMenuOpen.value, (newVal) => {
  if (newVal) {
    // Réinitialiser tous les sous-menus ouverts
    Object.keys(openSubmenus.value).forEach(key => {
      openSubmenus.value[key] = false
    })
  }
})
</script>

<style scoped>
/* Styles supplémentaires pour une meilleure expérience mobile */
@media (max-width: 1024px) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: transform 0.3s ease;
  }
  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    transform: translateX(100%);
  }
}

/* Animation pour les sous-menus */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:visible {
  visibility: visible;
}

/* Style pour le header fixe */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

/* Ombre pour le header */
header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>