<template>
  <div>
    <!-- Header Component FIXE -->
    <header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <!-- Barre supérieure avec informations de contact -->
        <div class="bg-[#202a50] text-white py-1.5 px-34 md:px-44 hidden md:block">

      <!-- augmentation du padding horizontal -->
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
      <!-- Informations de contact gauche -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs">
        <div class="flex items-center space-x-2"> <!-- espace entre icône et texte augmenté -->
          <svg class="w-3 h-3 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span class="whitespace-nowrap">hello@escen.university</span>
        </div>
        <div class="hidden sm:flex items-center space-x-2"> <!-- espacement plus large -->
          <svg class="w-3 h-3 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
          </svg>
          <span class="whitespace-nowrap">+228 98 01 27 27</span>
        </div>
      </div>

      <!-- Informations de droite -->
      <div class="flex flex-wrap items-center justify-center gap-4 text-xs"> <!-- plus d’espace entre les items -->
        <div class="flex items-center space-x-2">
          <svg class="w-3 h-3 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          <span class="whitespace-nowrap">Lun-Ven: 8h-18h</span>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <NuxtLink to="https://escen.neostart.tech/espace-enseignant/espace-professeur" target="_blank" class="hover:text-[#01b4d5] transition-colors text-xs whitespace-nowrap">Espace Enseignant</NuxtLink>
          <span class="text-gray-400">|</span>
          <NuxtLink to="https://escen.neostart.tech/espace-etudiant" target="_blank" class="hover:text-[#01b4d5] transition-colors text-xs whitespace-nowrap">Intranet</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</div>

      <!-- Navigation principale --> 
        <nav class="bg-white py-1.5 px-34 md:px-44">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <!-- Logo réduit -->
            <div class="flex items-center">
              <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
                <img 
                  src="/logo/LOGO_ESCEN.png" 
                  alt="ESCEN"
                  class="h-16 md:h-20 lg:h-22 w-auto object-contain"
                >
              </NuxtLink>
            </div>

            <!-- Navigation desktop -->
            <div class="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <!-- Liens de navigation -->
              <template v-for="item in navigation" :key="item.name">
                <!-- Élément avec sous-menu -->
                <div v-if="item.submenu" class="relative group">
                  <button class="text-[#202a50] font-medium hover:text-[#01b4d5] transition-colors flex items-center space-x-1 text-sm">
                    <span>{{ item.name }}</span>
                    <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 24 24">
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
                        class="block px-3 py-2 text-sm text-[#202a50] hover:bg-[#01b4d5] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
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
                  class="text-[#202a50] font-medium hover:text-[#01b4d5] transition-colors relative group text-sm"
                >
                  {{ item.name }}
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#01b4d5] transition-all group-hover:w-full"></span>
                </NuxtLink>
              </template>
              
              <!-- Bouton CTA réduit -->
              <NuxtLink 
                to="https://escen.neostart.tech/candidatures/faire-mon-depot" 
                class="bg-gradient-to-r from-[#01b4d5] to-[#0199b8] text-white px-3 py-2 rounded-lg font-semibold hover:shadow-md transition-all duration-300 shadow-sm flex items-center space-x-1 text-sm group" 
                style="color: white !important;"
                target="_blank"
              >
                <svg class="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="whitespace-nowrap">S'inscrire</span>
              </NuxtLink>
            </div>

            <!-- Menu mobile -->
            <div class="lg:hidden">
              <button 
                @click="isMobileMenuOpen = !isMobileMenuOpen"
                class="p-1 rounded-lg text-[#202a50] hover:bg-gray-100 transition-colors"
              >
                <svg 
                  v-if="!isMobileMenuOpen"
                  class="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                <svg 
                  v-else
                  class="w-6 h-6" 
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

    <!-- Espace réservé réduit -->
    <div class="h-[72px] md:h-[84px] lg:h-[92px]"></div>

    <!-- Menu Mobile Sidebar -->
    <div 
      v-show="isMobileMenuOpen"
      class="lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-5 h-full overflow-y-auto">
        <!-- Header du menu mobile -->
        <div class="flex items-center justify-between mb-6">
          <NuxtLink to="/" class="flex items-center" @click="isMobileMenuOpen = false">
            <img 
              src="/logo/LOGO_ESCEN.png" 
              alt="ESCEN"
              class="h-14 w-auto object-contain"
            >
          </NuxtLink>
          <button @click="isMobileMenuOpen = false" class="p-1">
            <svg class="w-6 h-6 text-[#202a50]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <!-- Navigation mobile -->
        <nav class="space-y-1">
          <template v-for="item in navigation" :key="item.name">
            <!-- Élément avec sous-menu mobile -->
            <div v-if="item.submenu" class="space-y-1">
              <button 
                @click="toggleSubmenu(item.name)"
                class="w-full flex items-center justify-between py-2 px-3 text-[#202a50] font-medium hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors text-sm"
              >
                <span>{{ item.name }}</span>
                <svg 
                  :class="['w-4 h-4 transition-transform', openSubmenus[item.name] ? 'rotate-180' : '']" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              <!-- Sous-menu mobile -->
              <div v-if="openSubmenus[item.name]" class="ml-4 space-y-1 border-l-2 border-[#01b4d5] pl-4">
                <NuxtLink
                  v-for="subItem in item.submenu"
                  :key="subItem.name"
                  :to="subItem.href"
                  @click="isMobileMenuOpen = false"
                  class="block py-1.5 px-3 text-sm text-[#202a50] hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors"
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
              class="block py-2 px-3 text-[#202a50] font-medium hover:bg-[#01b4d5] hover:text-white rounded-lg transition-colors text-sm"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
        </nav>

        <!-- Bouton CTA mobile -->
        <div class="mt-6 space-y-3">
          <NuxtLink
            to="https://escen.neostart.tech/candidatures/faire-mon-depot"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#01b4d5] to-[#0199b8] text-white text-center py-2.5 px-4 rounded-lg font-semibold hover:shadow-md transition-all text-sm"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>S'inscrire</span>
          </NuxtLink>
        </div>

        <!-- Informations de contact mobile -->
        <div class="mt-6 pt-4 border-t">
          <div class="space-y-3 text-sm">
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="text-[#202a50]">hello@escen.university</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
                <span class="text-[#202a50]">+228 98 01 27 27</span>
              </div>
            </div>

            <div class="flex items-center justify-center space-x-3 pt-2">
              <button class="text-[#01b4d5] hover:text-[#202a50] transition-colors text-xs font-medium">
                Espace Parent
              </button>
              <span class="text-gray-400">|</span>
              <button class="text-[#01b4d5] hover:text-[#202a50] transition-colors text-xs font-medium">
                Espace Élève
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay pour mobile -->
    <div 
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="isMobileMenuOpen = false"
    />
  </div>
</template>

<script setup>
// État pour le menu mobile
const isMobileMenuOpen = ref(false)
const openSubmenus = ref({})



// Navigation items
const navigation = [
  { 
    name: 'Accueil', 
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
]

// Fonction pour toggle les sous-menus
const toggleSubmenu = (menuName) => {
  openSubmenus.value[menuName] = !openSubmenus.value[menuName]
}

// Fermer le menu mobile quand la route change
watch(() => isMobileMenuOpen.value, (newVal) => {
  if (newVal) {
    Object.keys(openSubmenus.value).forEach(key => {
      openSubmenus.value[key] = false
    })
  }
})
</script>

<style scoped>
/* Style pour le header fixe */
header {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>