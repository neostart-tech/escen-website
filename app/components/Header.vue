<template>
  <div>
    <!-- Header avec design ultra-moderne et effet de profondeur -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      :class="[
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-1' 
          : 'bg-white py-2 sm:py-3'
      ]"
    >
      <!-- Barre supérieure avec effet de vague -->
      <div 
        class="relative overflow-visible"
        :class="scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'"
        style="transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <!-- Fond avec animation de vague -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0a1a3f] via-[#1e2f5e] to-[#2a3a6e]">
          <!-- Vagues animées -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute -top-1/2 -left-1/4 w-full h-full bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div class="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#01b4d5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
          </div>
          
          <!-- Particules flottantes -->
          <div class="absolute inset-0">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
          </div>
        </div>

        <!-- Contenu de la barre supérieure -->
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col sm:flex-row items-center justify-between py-2">
            <!-- Contact Info à gauche -->
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
              <!-- Email -->
              <a href="mailto:hello@escen.university" class="hidden xs:flex group items-center gap-2 text-white hover:text-white/90 transition-all duration-300">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span class="text-xs sm:text-sm font-light tracking-wide text-white">hello@escen.university</span>
              </a>
              
              <!-- Téléphone -->
              <a href="tel:+22898012727" class="group flex items-center gap-2 text-white hover:text-white/90 transition-all duration-300">
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
                <span class="text-xs sm:text-sm font-light tracking-wide text-white">+228 98 01 27 27</span>
              </a>

              <!-- Horaires -->
              <div class="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span class="text-xs font-medium text-white">Lun - Ven: 8h-18h</span>
              </div>
            </div>

            <!-- Intranet et Réseaux sociaux à droite -->
            <div class="flex items-center gap-3 sm:gap-4">
              <!-- Lien Intranet direct -->
              <NuxtLink
                to="/connexion"
                class="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span class="text-xs sm:text-sm font-medium text-white">Intranet</span>
                <svg 
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>

              <!-- Séparateur -->
              <div class="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              <!-- Réseaux sociaux -->
              <div class="flex items-center gap-1.5 sm:gap-2">
                <a href="#" class="relative group">
                  <div class="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div class="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#01b4d5] transition-all duration-300">
                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#01b4d5] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" class="hidden sm:flex relative group">
                  <div class="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div class="relative w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#01b4d5] transition-all duration-300">
                    <svg class="w-4 h-4 text-white group-hover:text-[#01b4d5] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.76-3.367 13.94 13.94 0 001.542-6.224c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" class="hidden sm:flex relative group">
                  <div class="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div class="relative w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#01b4d5] transition-all duration-300">
                    <svg class="w-4 h-4 text-white group-hover:text-[#01b4d5] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation principale -->
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="group relative">
            <div class="relative transition-all duration-500 group-hover:scale-105">
              <img 
                src="/logo/LOGO_ESCEN.png" 
                alt="ESCEN"
                class="relative h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              >
            </div>
          </NuxtLink>

          <!-- Navigation Desktop avec indicateurs actifs élégants -->
          <div class="hidden lg:flex items-center gap-2">
            <!-- Accueil avec indicateur élégant -->
            <NuxtLink 
              to="/"
              class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/' ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'"
            >
              <span class="relative z-10">Accueil</span>
              <!-- Cercle décoratif pour l'état actif -->
              <span 
                v-if="$route.path === '/'"
                class="absolute -top-1 -right-1 w-2 h-2"
              >
                <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
              </span>
              <!-- Fine ligne en bas -->
              <span class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/' }"></span>
            </NuxtLink>

            <!-- Formations avec dropdown -->
            <div class="relative group" @mouseenter="showFormationsDropdown = true" @mouseleave="showFormationsDropdown = false">
              <button 
                class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 flex items-center gap-1 group"
                :class="$route.path.startsWith('/formations') ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'"
              >
                <span>Formations</span>
                <svg 
                  class="w-4 h-4 transition-transform duration-500"
                  :class="showFormationsDropdown ? 'rotate-180' : ''"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
                <!-- Indicateur élégant -->
                <span 
                  v-if="$route.path.startsWith('/formations')"
                  class="absolute -top-1 -right-1 w-2 h-2"
                >
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                </span>
              </button>
              
              <!-- Dropdown Formations -->
              <transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 -translate-y-6 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-6 scale-95"
              >
                <div 
                  v-if="showFormationsDropdown"
                  class="absolute top-full left-0 mt-2 w-96"
                  style="z-index: 1000;"
                >
                  <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    <!-- Vagues SVG animées -->
                    <div class="absolute inset-0 overflow-hidden">
                      <svg class="absolute -bottom-10 left-0 w-full h-40 text-[#01b4d5] animate-wave-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fill-opacity="0.08" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                      </svg>
                      <svg class="absolute -bottom-5 left-0 w-full h-32 text-[#01b4d5] animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" style="animation-delay: -3s;">
                        <path fill="currentColor" fill-opacity="0.05" d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,112C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                      </svg>
                    </div>

                    <!-- Contenu du dropdown -->
                    <div class="relative z-10 p-6">
                      <!-- Grille des formations -->
                      <div class="space-y-2">
                        <!-- Licence Professionnelle -->
                        <NuxtLink 
                          to="/formations/licence-professionelle"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/licence-professionelle' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
                        >
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 3L1 9l11 6 11-6-11-6zM1 18l11 6 11-6M1 14l11 6 11-6"/>
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Licence Professionnelle</span>
                            <span class="text-xs text-gray-400">BAC+3 · Formation professionnalisante</span>
                          </div>
                          <!-- Indicateur de page active - flèche au lieu d'un point -->
                          <svg v-if="$route.path === '/formations/licence-professionelle'" class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <svg v-else class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </NuxtLink>

                        <!-- Master Professionnel -->
                        <NuxtLink 
                          to="/formations/master-professionnel"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/master-professionnel' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
                        >
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Master Professionnel</span>
                            <span class="text-xs text-gray-400">BAC+5 · Expertise et spécialisation</span>
                          </div>
                          <svg v-if="$route.path === '/formations/master-professionnel'" class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <svg v-else class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </NuxtLink>

                        <!-- Executive Education -->
                        <NuxtLink 
                          to="/formations/executive-education"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/executive-education' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
                        >
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Executive Education</span>
                            <span class="text-xs text-gray-400">Formation continue pour cadres</span>
                          </div>
                          <svg v-if="$route.path === '/formations/executive-education'" class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <svg v-else class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </NuxtLink>

                        <!-- Certificats -->
                        <NuxtLink 
                          to="/formations/certificats"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/certificats' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
                        >
                          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L1 7v9c0 5 11 8 11 8s11-3 11-8V7l-11-5zm0 4.2L18.5 9 12 11.8 5.5 9 12 6.2zM4 14.3V9.7l6 2.7v4.6l-6-2.7zm12 2.7v-4.6l6-2.7v4.6l-6 2.7z"/>
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Certificats</span>
                            <span class="text-xs text-gray-400">Certifications professionnelles</span>
                          </div>
                          <svg v-if="$route.path === '/formations/certificats'" class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <svg v-else class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Blogs -->
            <NuxtLink 
              to="/blogs"
              class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/blogs' || $route.path.startsWith('/blogs/') ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'"
            >
              <span class="relative z-10">Blogs</span>
              <span 
                v-if="$route.path === '/blogs' || $route.path.startsWith('/blogs/')"
                class="absolute -top-1 -right-1 w-2 h-2"
              >
                <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
              </span>
              <span class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/blogs' || $route.path.startsWith('/blogs/') }"></span>
            </NuxtLink>

            <!-- Nous contacter -->
            <NuxtLink 
              to="/contact"
              class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/contact' ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'"
            >
              <span class="relative z-10">Nous contacter</span>
              <span 
                v-if="$route.path === '/contact'"
                class="absolute -top-1 -right-1 w-2 h-2"
              >
                <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
              </span>
              <span class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/contact' }"></span>
            </NuxtLink>

            <!-- Bouton CTA -->
            <NuxtLink
              to="/inscription"
              class="ml-4 group relative px-6 py-2.5 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-[#01b4d5] to-[#0095b0]"></span>
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span class="relative z-10 flex items-center gap-2 text-white font-semibold">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Inscription</span>
              </span>
            </NuxtLink>
          </div>

          <!-- Bouton Menu Mobile -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 hover:from-[#01b4d5]/20 hover:to-[#0095b0]/20 transition-all duration-300 group"
          >
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-3 sm:w-5 sm:h-4">
              <span 
                class="absolute w-4 sm:w-5 h-0.5 bg-[#202a50] rounded-full transition-all duration-300"
                :class="isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'"
              ></span>
              <span 
                class="absolute w-4 sm:w-5 h-0.5 bg-[#202a50] rounded-full transition-all duration-300 top-1/2 -translate-y-1/2"
                :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
              ></span>
              <span 
                class="absolute w-4 sm:w-5 h-0.5 bg-[#202a50] rounded-full transition-all duration-300"
                :class="isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'"
              ></span>
            </div>
          </button>
        </div>
      </nav>
    </header>

    <!-- Espace réservé pour le header -->
    <div :class="scrolled ? 'h-14 sm:h-16' : 'h-24 sm:h-28'" class="transition-all duration-500"></div>

    <!-- Menu Mobile avec indicateurs élégants -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl z-50 overflow-hidden"
        style="z-index: 9999;"
      >
        <div class="relative h-full flex flex-col">
          <!-- Header du menu mobile -->
          <div class="relative bg-gradient-to-br from-[#0a1a3f] via-[#1a2a5e] to-[#2a3a7e] p-4 sm:p-6 overflow-hidden">
            <div class="absolute -top-20 -right-20 w-40 h-40 bg-[#01b4d5]/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div class="relative z-10 flex items-center justify-between">
              <NuxtLink to="/" @click="isMobileMenuOpen = false" class="block">
                <img 
                  src="/logo/LOGO_ESCEN.png" 
                  alt="ESCEN"
                  class="h-8 sm:h-10 w-auto brightness-0 invert"
                >
              </NuxtLink>
              <button 
                @click="isMobileMenuOpen = false"
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Navigation mobile avec indicateurs élégants -->
          <div class="flex-1 overflow-y-auto py-4">
            <div class="px-3 space-y-1">
              <!-- Accueil -->
              <NuxtLink
                to="/"
                @click="isMobileMenuOpen = false"
                class="flex items-center px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 relative group"
                :class="$route.path === '/' ? 'text-[#01b4d5] bg-gradient-to-r from-[#01b4d5]/5 to-transparent' : 'text-[#202a50] hover:text-[#01b4d5] hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
              >
                <span>Accueil</span>
                <span v-if="$route.path === '/'" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
              </NuxtLink>

              <!-- Formations -->
              <NuxtLink
                to="/formations"
                @click="isMobileMenuOpen = false"
                class="flex items-center px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 relative group"
                :class="$route.path.startsWith('/formations') ? 'text-[#01b4d5] bg-gradient-to-r from-[#01b4d5]/5 to-transparent' : 'text-[#202a50] hover:text-[#01b4d5] hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
              >
                <span>Formations</span>
                <span v-if="$route.path.startsWith('/formations')" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
              </NuxtLink>

              <!-- Blogs -->
              <NuxtLink
                to="/blogs"
                @click="isMobileMenuOpen = false"
                class="flex items-center px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 relative group"
                :class="$route.path === '/blogs' || $route.path.startsWith('/blogs/') ? 'text-[#01b4d5] bg-gradient-to-r from-[#01b4d5]/5 to-transparent' : 'text-[#202a50] hover:text-[#01b4d5] hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
              >
                <span>Blogs</span>
                <span v-if="$route.path === '/blogs' || $route.path.startsWith('/blogs/')" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
              </NuxtLink>

              <!-- Nous contacter -->
              <NuxtLink
                to="/contact"
                @click="isMobileMenuOpen = false"
                class="flex items-center px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 relative group"
                :class="$route.path === '/contact' ? 'text-[#01b4d5] bg-gradient-to-r from-[#01b4d5]/5 to-transparent' : 'text-[#202a50] hover:text-[#01b4d5] hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
              >
                <span>Nous contacter</span>
                <span v-if="$route.path === '/contact'" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
              </NuxtLink>

              <!-- Intranet -->
              <NuxtLink
                to="/connexion"
                @click="isMobileMenuOpen = false"
                class="flex items-center px-4 py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 relative group border-t border-gray-100 mt-2 pt-4"
                :class="$route.path === '/connexion' ? 'text-[#01b4d5] bg-gradient-to-r from-[#01b4d5]/5 to-transparent' : 'text-[#202a50] hover:text-[#01b4d5] hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'"
              >
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span>Intranet - Se connecter</span>
                </span>
                <span v-if="$route.path === '/connexion'" class="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
              </NuxtLink>
            </div>
          </div>

          <!-- Footer du menu mobile -->
          <div class="p-4 border-t border-gray-100 bg-gray-50">
            <div class="space-y-2">
              <a href="tel:+22898012727" class="flex items-center gap-3 text-xs sm:text-sm text-gray-600 hover:text-[#01b4d5] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
                <span>+228 98 01 27 27</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Overlay pour mobile -->
    <transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        style="z-index: 9998;"
        @click="isMobileMenuOpen = false"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// État pour le scroll
const scrolled = ref(false)
const isMobileMenuOpen = ref(false)
const showFormationsDropdown = ref(false)

// Détection du scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

// Fermer les menus au changement de route
watch(() => isMobileMenuOpen.value, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
})
</script>

<style scoped>
/* Animations pour les vagues */
@keyframes wave {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-15%) translateY(5px);
  }
  100% {
    transform: translateX(-30%) translateY(0);
  }
}

@keyframes wave-slow {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(10%) translateY(-5px);
  }
  100% {
    transform: translateX(20%) translateY(0);
  }
}

.animate-wave {
  animation: wave 12s ease-in-out infinite;
}

.animate-wave-slow {
  animation: wave-slow 15s ease-in-out infinite;
}

/* Autres animations existantes */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}

/* Particules flottantes */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 60%;
  right: 15%;
  width: 6px;
  height: 6px;
  animation-delay: 1s;
}

.particle-3 {
  bottom: 30%;
  left: 20%;
  width: 3px;
  height: 3px;
  animation-delay: 2s;
}

/* Scrollbar personnalisée */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #01b4d5, #0095b0);
  border-radius: 4px;
}

/* Transitions fluides */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effet de glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Empêcher le scroll quand le menu mobile est ouvert */
body:has(.fixed.inset-0.bg-black\/60) {
  overflow: hidden;
}

/* Assurer que le header n'a pas d'overflow caché */
header > div:first-child {
  overflow: visible !important;
}

/* Ajout pour les très petits écrans */
@media (min-width: 480px) {
  .xs\:flex {
    display: flex;
  }
}
</style>