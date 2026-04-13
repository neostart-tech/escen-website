<template>
  <section ref="sectionEl" id="testimonials" class="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Déco de fond -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/15 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/15 to-transparent"></div>
      <div class="absolute top-20 left-10 w-64 h-64 bg-[#01b4d5]/4 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-64 h-64 bg-[#202a50]/4 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- En-tête -->
      <div class="text-center mb-14 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-3 mb-4">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-semibold text-xs tracking-widest uppercase">Témoignages</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#202a50] mb-4 tracking-tight">
          Ils Nous <span class="text-[#01b4d5]">Font Confiance</span>
        </h2>
        <p class="text-base lg:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Retours d'expérience de nos experts intervenants et étudiants passionnés
        </p>
      </div>

      <!-- Carrousel -->
      <div class="reveal reveal-delay-1" :class="{ 'is-visible': isVisible }">
        <Transition name="temoignage" mode="out-in">
          <div :key="currentSlide" class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">

            <!-- ===== COLONNE GAUCHE : Photo + Infos ===== -->
            <div class="lg:col-span-2 flex flex-col gap-5">

              <!-- Photo -->
              <div class="relative mx-auto lg:mx-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-full lg:h-72 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <img
                  :src="testimonials[currentSlide].photo"
                  :alt="testimonials[currentSlide].name"
                  class="w-full h-full object-cover object-top"
                  @error="handleImageError"
                />
                <!-- Overlay dégradé bas -->
                <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#202a50]/40 to-transparent"></div>
                <!-- Badge type -->
                <div class="absolute top-3 left-3">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#01b4d5] text-xs font-bold shadow-sm">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></span>
                    {{ testimonials[currentSlide].type }}
                  </span>
                </div>
              </div>

              <!-- Infos identité -->
              <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                <!-- Nom -->
                <div>
                  <h3 class="text-lg font-bold text-[#202a50] leading-snug">
                    {{ testimonials[currentSlide].name }}
                  </h3>
                </div>

                <!-- Séparateur -->
                <div class="w-10 h-0.5 bg-[#01b4d5] rounded-full"></div>

                <!-- Rôle -->
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Rôle</p>
                    <p class="text-sm font-semibold text-[#01b4d5]">{{ testimonials[currentSlide].role }}</p>
                  </div>
                </div>

                <!-- Spécialisation -->
                <div class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Formation</p>
                    <p class="text-sm text-gray-700">{{ testimonials[currentSlide].detail }}</p>
                  </div>
                </div>

                <!-- Pays (si renseigné) -->
                <div v-if="testimonials[currentSlide].country" class="flex items-start gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Origine</p>
                    <p class="text-sm text-gray-700">{{ testimonials[currentSlide].country }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===== COLONNE DROITE : Citation ===== -->
            <div class="lg:col-span-3 flex flex-col justify-between">
              <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10 h-full flex flex-col justify-between relative overflow-hidden">
                <!-- Déco coin -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-[#01b4d5]/3 rounded-full -translate-y-16 translate-x-16"></div>
                <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#202a50]/3 rounded-full translate-y-12 -translate-x-12"></div>

                <div class="relative z-10">
                  <!-- Guillemet décoratif -->
                  <div class="text-8xl leading-none text-[#01b4d5]/10 font-serif select-none mb-2">"</div>

                  <!-- Contenu -->
                  <p class="text-lg lg:text-xl text-gray-700 leading-relaxed font-light -mt-4">
                    {{ testimonials[currentSlide].content }}
                  </p>
                </div>

                <!-- Bas : compteur + étoiles -->
                <div class="relative z-10 flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                  <!-- Étoiles -->
                  <div class="flex items-center gap-1">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  </div>
                  <!-- Compteur -->
                  <div class="flex items-center gap-2">
                    <span class="text-2xl font-black text-[#01b4d5]">{{ String(currentSlide + 1).padStart(2, '0') }}</span>
                    <span class="text-gray-300 text-lg">/</span>
                    <span class="text-gray-400">{{ String(testimonials.length).padStart(2, '0') }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Transition>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-5 mt-10">
          <!-- Précédent -->
          <button @click="prev"
                  class="group w-11 h-11 rounded-xl bg-white border border-gray-200 hover:bg-[#01b4d5] hover:border-[#01b4d5] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#01b4d5]/20 hover:-translate-x-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <!-- Indicateurs -->
          <div class="flex items-center gap-2">
            <button v-for="(_, i) in testimonials" :key="i"
                    @click="goTo(i)"
                    class="transition-all duration-300 rounded-full"
                    :class="currentSlide === i
                      ? 'w-7 h-2.5 bg-[#01b4d5]'
                      : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'">
            </button>
          </div>

          <!-- Suivant -->
          <button @click="next"
                  class="group w-11 h-11 rounded-xl bg-white border border-gray-200 hover:bg-[#01b4d5] hover:border-[#01b4d5] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#01b4d5]/20 hover:translate-x-0.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)
const currentSlide = ref(0)
let autoPlay = null
let revealObserver = null

const testimonials = [
  {
    name: "Ibrahim DAN KARAMI",
    role: "Directeur général ID Money",
    detail: "Chargé du cours transformation digitale",
    country: "",
    type: "Intervenant Expert",
    photo: "/temoignage/Ibrahim_Dan_Karami.png",
    content: "J'apprécie de former de futurs spécialistes en économie numérique. Je suis ravi de voir l'engagement des apprenants et leur enthousiasme. Je suis impatient de voir l'impact que cela induira dans l'industrie du numérique."
  },
  {
    name: "Mathias DEKADJEVI",
    role: "Spécialiste Transformation digitale",
    detail: "Chargé de cours finance digitale",
    country: "",
    type: "Intervenant Expert",
    photo: "/temoignage/Mathias_Dekadjevi.png",
    content: "L'économie numérique est une véritable chance pour notre continent et je suis persuadé que le vivier en cours de constitution grâce à l'initiative ESCEN, fera progresser les limites d'une véritable inclusion financière des populations africaines."
  },
  {
    name: "Bénédicte MUYISA MUTSHITSHI",
    role: "Étudiante Management de projets",
    detail: "Licence en Management numérique",
    country: "République Démocratique du Congo",
    type: "Étudiante",
    photo: "/temoignage/Benedicte.jpg",
    content: "Originaire du Congo, j'ai été impressionnée par la qualité des cours dispensés par des experts du domaine qui ont fait leurs preuves. ESCEN a un réseau solide d'entreprises partenaires, ce qui m'a permis de trouver un stage enrichissant."
  },
  {
    name: "Akoèsso AKAKPO",
    role: "Étudiant Finance Digitale",
    detail: "Spécialisation technologies financières",
    country: "Togo",
    type: "Étudiant",
    photo: "/temoignage/Akoesso_Akakpo.png",
    content: "Mon expérience à ESCEN m'a permis d'acquérir une solide compréhension des concepts financiers appliqués aux technologies numériques. Grâce à des cours pratiques et des études de cas, un choix idéal pour se spécialiser dans le numérique."
  },
  {
    name: "Williams SANOU",
    role: "Responsable filière MSA",
    detail: "Master Pro Finance Digitale",
    country: "Côte d'Ivoire",
    type: "Étudiant & Professionnel",
    photo: "/temoignage/Williams_Sanou.jpg",
    content: "Mon expérience dans ce programme de Master Pro Finance digitale est assez satisfaisante. Le programme est bien fourni et chaque participant se retrouve facilement, quel que soit son background. Les intervenants étaient très expérimentés."
  },
  {
    name: "Emeraude AVOCE",
    role: "Étudiante Marketing Digital",
    detail: "Spécialisation stratégies digitales",
    country: "Bénin",
    type: "Étudiante",
    photo: "/temoignage/Emeraude_Avoce.png",
    content: "Ce qui fait d'ESCEN une école particulière est la combinaison parfaite entre théorie et pratique et les filières porteuses d'avenir. Quoi de mieux que d'être formés par des professionnels dans un cadre convivial et confortable."
  }
]

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
  resetAutoplay()
}

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
  resetAutoplay()
}

const goTo = (i) => {
  currentSlide.value = i
  resetAutoplay()
}

const resetAutoplay = () => {
  if (autoPlay) clearInterval(autoPlay)
  autoPlay = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length
  }, 7000)
}

const handleImageError = (event) => {
  const parent = event.target.parentElement
  const initials = event.target.alt.split(' ').map(n => n[0]).join('').slice(0, 2)
  parent.innerHTML = `
    <div class="w-full h-full bg-gradient-to-br from-[#01b4d5] to-[#202a50] flex items-center justify-center">
      <span class="text-white text-3xl font-black">${initials}</span>
    </div>
  `
}

onMounted(() => {
  resetAutoplay()
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) isVisible.value = true })
    },
    { threshold: 0.1 }
  )
  if (sectionEl.value) revealObserver.observe(sectionEl.value)
})

onUnmounted(() => {
  if (autoPlay) clearInterval(autoPlay)
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>
/* Transition entre témoignages */
.temoignage-enter-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.temoignage-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.temoignage-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.temoignage-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media (prefers-reduced-motion: reduce) {
  .temoignage-enter-active,
  .temoignage-leave-active { transition: none; }
}
</style>
