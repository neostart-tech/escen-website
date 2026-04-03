<template>
  <section id="a-propos" class="relative overflow-hidden bg-white -mt-16 md:-mt-20 lg:-mt-24 pt-0">
    <!-- ===== BACKGROUND SVG ANIMÉS (THÈME ÉCOLE/UNIVERSITÉ) ===== -->
    <div class="absolute inset-0 pointer-events-none opacity-10 md:opacity-15">
      
      <!-- Diplômes flottants -->
      <div class="absolute top-[15%] left-[5%] animate-float-svg" style="animation-delay: 0s;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 8H16V12H8V8Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Toques universitaires -->
      <div class="absolute bottom-[20%] right-[8%] animate-float-svg" style="animation-delay: 2s;">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]">
          <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12.5V16.5C8 18.5 12 20 12 20C12 20 16 18.5 16 16.5V12.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Livres ouverts -->
      <div class="absolute top-[40%] right-[12%] animate-float-svg" style="animation-delay: 4s;">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]">
          <path d="M4 5H9C10.5 5 12 6.5 12 8V19C12 19 9 17 4 19V5Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 5H15C13.5 5 12 6.5 12 8V19C12 19 15 17 20 19V5Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Crayons/Stylos -->
      <div class="absolute bottom-[30%] left-[10%] animate-float-svg" style="animation-delay: 1s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]">
          <path d="M16 4L20 8L8 20H4V16L16 4Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Globes (international) -->
      <div class="absolute top-[60%] left-[15%] animate-float-slow" style="animation-delay: 5s;">
        <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]">
          <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.2"/>
          <path d="M4 12H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M12 4C14 6 15 9 15 12C15 15 14 18 12 20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
      
      <!-- Microscope (science) -->
      <div class="absolute bottom-[15%] right-[20%] animate-float-svg" style="animation-delay: 3s;">
        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]">
          <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.2"/>
          <path d="M12 11V16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M8 16H16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
      
      <!-- Bâtiment universitaire -->
      <div class="absolute top-[25%] right-[25%] animate-float-slow" style="animation-delay: 6s;">
        <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]">
          <path d="M4 20H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M6 20V10L12 5L18 10V20" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M10 20V15H14V20" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Équerre (mathématiques) -->
      <div class="absolute bottom-[40%] left-[20%] animate-float-svg" style="animation-delay: 2.5s;">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]">
          <path d="M6 18L18 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L6 18L18 18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Horloge (temps/planning) -->
      <div class="absolute top-[70%] right-[5%] animate-float-slow" style="animation-delay: 4.5s;">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]">
          <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.2"/>
          <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
      
      <!-- Étoile (excellence) -->
      <div class="absolute top-[10%] right-[40%] animate-pulse-slow-svg" style="animation-delay: 1.5s;">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]">
          <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Molécule (sciences) -->
      <div class="absolute bottom-[10%] left-[30%] animate-float-svg" style="animation-delay: 5.5s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]">
          <circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="1.2"/>
          <circle cx="6" cy="16" r="2" stroke="currentColor" stroke-width="1.2"/>
          <circle cx="18" cy="16" r="2" stroke="currentColor" stroke-width="1.2"/>
          <path d="M12 8L8 14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M12 8L16 14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <!-- Éléments de fond minimalistes -->
    <div class="absolute inset-0">
      <div class="absolute left-0 top-0 w-full h-full opacity-[0.02]">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #01b4d5 0px, #01b4d5 1px, transparent 1px, transparent 30px);"></div>
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      
      <!-- HEADER AVEC ANIMATION -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20">
        <!-- Indicateur de section avec animation -->
        <div class="inline-flex items-center justify-center gap-3 mb-4 opacity-0 animate-slide-down" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
          <span class="w-8 h-px bg-[#01b4d5]/60"></span>
          <span class="text-xs font-medium tracking-[0.3em] text-[#01b4d5] uppercase">Présentation</span>
          <span class="w-8 h-px bg-[#01b4d5]/60"></span>
        </div>
        
        <!-- Titre avec animation de lettres -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 overflow-hidden">
          <span class="block">
            <span class="inline-block opacity-0 animate-slide-up" style="animation-delay: 0.3s; animation-fill-mode: forwards;">L'excellence</span>
            <span class="inline-block opacity-0 animate-slide-up" style="animation-delay: 0.4s; animation-fill-mode: forwards;"> du</span>
          </span>
          <span class="block font-semibold text-[#01b4d5] mt-1 md:mt-2">
            <span class="inline-block opacity-0 animate-slide-up" style="animation-delay: 0.5s; animation-fill-mode: forwards;">digital</span>
            <span class="inline-block opacity-0 animate-slide-up" style="animation-delay: 0.6s; animation-fill-mode: forwards;"> en</span>
            <span class="inline-block opacity-0 animate-slide-up" style="animation-delay: 0.7s; animation-fill-mode: forwards;"> Afrique</span>
          </span>
        </h2>
        
        <!-- Accroche avec animation -->
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 animate-fade-in" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
          Depuis 2018, l'ESCEN forme les talents qui façonnent l'économie numérique 
          francophone avec des programmes d'excellence et une vision tournée vers l'avenir.
        </p>
      </div>

      <!-- BLOC PRINCIPAL IMAGE + TEXTE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-16 lg:mb-20">
        
        <!-- Colonne image avec animation -->
        <div class="lg:col-span-7 order-2 lg:order-1 opacity-0 animate-slide-right" style="animation-delay: 0.9s; animation-fill-mode: forwards;">
          <div class="relative">
            <div class="relative overflow-hidden rounded-xl md:rounded-2xl bg-gray-100">
              <img 
                src="/temoignage/apropos.jpg" 
                alt="Campus ESCEN - Formation digitale"
                class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                style="aspect-ratio: 4/3;"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-[#01b4d5]/10 via-transparent to-transparent"></div>
            </div>
            
            <!-- Élément décoratif flottant avec animation -->
            <div class="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-white rounded-lg md:rounded-xl shadow-lg p-3 md:p-4 border border-gray-100 hidden sm:block animate-float-card">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-[#01b4d5]/10 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 md:w-5 md:h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14v6" />
                  </svg>
                </div>
                <div>
                  <div class="text-xl md:text-2xl font-bold text-gray-900">+1200</div>
                  <div class="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">Diplômés</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne texte avec animations -->
        <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
          <!-- Mission -->
          <div class="mb-6 md:mb-8 opacity-0 animate-slide-left" style="animation-delay: 1s; animation-fill-mode: forwards;">
            <div class="flex items-center gap-3 mb-3 md:mb-4">
              <div class="w-8 md:w-10 h-px bg-[#01b4d5]"></div>
              <h3 class="text-base md:text-lg font-semibold text-gray-900 tracking-wide">NOTRE MISSION</h3>
            </div>
            
            <p class="text-gray-700 leading-relaxed mb-4 text-sm md:text-base lg:text-lg">
              <span class="font-medium text-[#01b4d5]">Former la prochaine génération</span> de leaders 
              du numérique en Afrique francophone. Nous combinons excellence académique et 
              innovation pédagogique.
            </p>
            
            <!-- Points clés -->
            <div class="space-y-3">
              <div class="flex items-start gap-2 md:gap-3 transform hover:translate-x-1 transition-transform duration-300">
                <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#01b4d5] flex-shrink-0"></div>
                <p class="text-gray-600 text-xs md:text-sm"><span class="font-medium text-gray-900">Expertise pointue :</span> Programmes alignés sur les standards internationaux</p>
              </div>
              <div class="flex items-start gap-2 md:gap-3 transform hover:translate-x-1 transition-transform duration-300">
                <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#01b4d5] flex-shrink-0"></div>
                <p class="text-gray-600 text-xs md:text-sm"><span class="font-medium text-gray-900">Pédagogie active :</span> Apprentissage par projets et cas concrets</p>
              </div>
            </div>
          </div>

          <!-- Valeurs avec animations -->
          <div class="opacity-0 animate-slide-left" style="animation-delay: 1.1s; animation-fill-mode: forwards;">
            <div class="flex items-center gap-3 mb-3 md:mb-4">
              <div class="w-8 md:w-10 h-px bg-[#01b4d5]"></div>
              <h3 class="text-base md:text-lg font-semibold text-gray-900 tracking-wide">NOS VALEURS</h3>
            </div>
            
            <div class="grid grid-cols-2 gap-3 md:gap-4">
              <div class="group">
                <div class="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#01b4d5] transition-colors">Excellence</div>
                <p class="text-[10px] md:text-xs text-gray-500">Exigence et qualité</p>
              </div>
              <div class="group">
                <div class="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#01b4d5] transition-colors">Innovation</div>
                <p class="text-[10px] md:text-xs text-gray-500">Veille et adaptation</p>
              </div>
              <div class="group">
                <div class="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#01b4d5] transition-colors">Ouverture</div>
                <p class="text-[10px] md:text-xs text-gray-500">International et diversité</p>
              </div>
              <div class="group">
                <div class="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#01b4d5] transition-colors">Impact</div>
                <p class="text-[10px] md:text-xs text-gray-500">Contribution économique</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Refs pour les compteurs
const foundationCounter = ref(null)
const studentsCounter = ref(null)
const partnersCounter = ref(null)
const employmentCounter = ref(null)

// États pour savoir si les compteurs ont déjà été déclenchés
const hasAnimated = ref({
    foundation: false,
    students: false,
    partners: false,
    employment: false
})

// Fonction pour animer un compteur
const startCounter = (type, targetValue) => {
    if (hasAnimated.value[type]) return
    
    hasAnimated.value[type] = true
    
    let counterRef
    let suffix = ''
    let formatNumber = false
    
    switch(type) {
        case 'foundation':
            counterRef = foundationCounter
            break
        case 'students':
            counterRef = studentsCounter
            suffix = '+'
            formatNumber = true
            break
        case 'employment':
            counterRef = employmentCounter
            suffix = '%'
            break
        case 'partners':
            counterRef = partnersCounter
            suffix = '+'
            break
    }
    
    if (!counterRef.value) return
    
    const duration = 1500
    const startValue = 0
    const endValue = targetValue
    const increment = endValue / (duration / 16)
    let current = startValue
    let animationFrame
    
    const animate = () => {
        current += increment
        
        if (current < endValue) {
            let displayValue
            
            if (formatNumber) {
                displayValue = Math.floor(current).toLocaleString('fr-FR')
            } else {
                displayValue = Math.floor(current)
            }
            
            if (counterRef.value) {
                counterRef.value.innerHTML = `${displayValue}<span class="text-lg md:text-xl lg:text-2xl text-[#01b4d5]">${suffix}</span>`
            }
            
            animationFrame = requestAnimationFrame(animate)
        } else {
            let finalValue
            
            if (formatNumber) {
                finalValue = endValue.toLocaleString('fr-FR')
            } else {
                finalValue = endValue
            }
            
            if (counterRef.value) {
                counterRef.value.innerHTML = `${finalValue}<span class="text-lg md:text-xl lg:text-2xl text-[#01b4d5]">${suffix}</span>`
            }
            
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }
    
    animate()
}

// Observer pour déclencher les compteurs au scroll
const triggerCountersOnScroll = () => {
    const section = document.getElementById('a-propos')
    if (!section) return
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter('foundation', 2018)
                startCounter('students', 1200)
                startCounter('employment', 85)
                startCounter('partners', 50)
                observer.disconnect()
            }
        })
    }, { threshold: 0.3 })
    
    observer.observe(section)
}

onMounted(() => {
    setTimeout(() => {
        triggerCountersOnScroll()
    }, 500)
})
</script>

<style scoped>
/* Animations existantes pour les SVG */
@keyframes float-svg {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(0, -25px) rotate(0deg);
  }
  75% {
    transform: translate(-10px, -15px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-15px, -15px) rotate(3deg);
  }
}

@keyframes pulse-slow-svg {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.animate-float-svg {
  animation: float-svg 20s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 25s ease-in-out infinite;
}

.animate-pulse-slow-svg {
  animation: pulse-slow-svg 4s ease-in-out infinite;
}

/* ===== NOUVELLES ANIMATIONS D'ENTRÉE TRÈS PROPRES ===== */

/* Animation slide down (pour l'indicateur) */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
}

/* Animation slide up (pour le titre) */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
}

/* Animation fade in (pour le paragraphe) */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Animation slide right (pour l'image) */
@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-right {
  animation: slideRight 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
}

/* Animation slide left (pour le texte) */
@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-left {
  animation: slideLeft 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
}

/* Animation scale in (pour les statistiques) */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 1s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
}

/* Animation flottante pour la carte diplôme */
@keyframes floatCard {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-float-card {
  animation: floatCard 3s ease-in-out infinite;
}

/* Transitions douces */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .grid-cols-2 {
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .grid-cols-1.sm\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
}

/* Animation d'entrée globale de la section */
section {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet de parallaxe subtil sur l'image */
.hover\:scale-105 {
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>