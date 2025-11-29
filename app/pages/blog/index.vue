<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Blog ESCEN" subtitle="Actualités & Insights"
            description="Découvrez les dernières tendances du numérique et insights d'experts" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Header avec Contrôles -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
        <!-- Barre de Contrôles - Layout horizontal -->
        <div class="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-sm">
            <!-- Zone de Recherche - Gauche -->
            <div class="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                <div class="relative">
                    <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                        type="text" 
                        v-model="searchQuery" 
                        placeholder="Rechercher un article..."
                        class="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-white border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    >
                </div>
            </div>

            <!-- Filtres et Sélecteur - Droite -->
            <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch sm:items-center w-full lg:w-auto">
                <!-- Filtre Catégories -->
                <select 
                    v-model="activeCategory"
                    class="w-full sm:w-48 px-3 lg:px-4 py-2 lg:py-3 bg-white border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                >
                    <option value="all">Toutes les catégories</option>
                    <option value="digital">Transformation Digital</option>
                    <option value="innovation">Innovation</option>
                    <option value="education">Éducation</option>
                    <option value="career">Carrière</option>
                </select>

                <!-- Sélecteur d'articles par page -->
                <div class="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                    <span class="text-xs lg:text-sm text-gray-600 whitespace-nowrap">Articles/page :</span>
                    <select 
                        v-model="articlesPerPage" 
                        @change="currentPage = 1"
                        class="w-20 px-3 lg:px-4 py-2 lg:py-3 bg-white border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                    >
                        <option :value="4">4</option>
                        <option :value="8">8</option>
                        <option :value="12">12</option>
                        <option :value="16">16</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-center mt-4 lg:mt-6">
            <div class="bg-gray-100 rounded-full px-4 lg:px-6 py-1 lg:py-2">
                <span class="text-xs lg:text-sm text-gray-600">
                    {{ filteredArticles.length }} article{{ filteredArticles.length > 1 ? 's' : '' }} trouvé{{ filteredArticles.length > 1 ? 's' : '' }}
                </span>
            </div>
        </div>
    </div>
</header>

        <!-- Contenu Principal -->
        <main class="container mx-auto px-4 sm:px-6 py-6 lg:py-12">
            <!-- Grille d'Articles -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article v-for="(article, index) in displayedArticles" :key="article.id"
                    class="group bg-white rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg lg:hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 overflow-hidden border border-gray-200">
                    <!-- Image Header -->
                    <div
                        class="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] overflow-hidden">
                        <!-- Badge Catégorie -->
                        <div class="absolute top-3 left-3 lg:top-4 lg:left-4">
                            <span
                                class="px-2 lg:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#01b4d5] capitalize shadow-sm border border-white/20">
                                {{ getCategoryName(article.category) }}
                            </span>
                        </div>

                        <!-- Badge Featured -->
                        <div v-if="article.featured" class="absolute top-3 right-3 lg:top-4 lg:right-4">
                            <span
                                class="px-2 lg:px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1 border border-yellow-600">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="hidden sm:inline">Featured</span>
                            </span>
                        </div>

                        <!-- Overlay au hover -->
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500">
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-4 lg:p-6">
                        <!-- Meta informations -->
                        <div class="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 lg:mb-4">
                            <div class="flex items-center gap-2 lg:gap-3">
                                <div class="flex items-center gap-1">
                                    <svg class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span class="text-xs">{{ article.author }}</span>
                                </div>
                                <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div class="flex items-center gap-1">
                                    <svg class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-xs">{{ article.readTime }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Titre -->
                        <h3
                            class="text-base lg:text-lg font-bold text-gray-900 mb-2 lg:mb-3 leading-tight group-hover:text-[#01b4d5] transition-colors duration-300 line-clamp-2">
                            {{ article.title }}
                        </h3>

                        <!-- Excerpt -->
                        <p
                            class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-2 lg:line-clamp-3">
                            {{ article.excerpt }}
                        </p>

                        <!-- Date et Actions -->
                        <div class="flex items-center justify-between pt-3 lg:pt-4 border-t border-gray-100">
                            <span
                                class="text-xs text-gray-500 bg-gray-100 px-2 lg:px-3 py-1 rounded-full border border-gray-200">
                                {{ article.date }}
                            </span>
                            <button
                                class="flex items-center gap-1 lg:gap-2 text-[#01b4d5] font-semibold text-xs lg:text-sm hover:gap-2 lg:hover:gap-3 transition-all duration-300 group/btn border border-[#01b4d5] rounded-lg px-3 py-1 hover:bg-[#01b4d5] hover:text-white">
                                Lire
                                <svg class="w-3 h-3 lg:w-4 lg:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1"
                class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
                <!-- Info de pagination -->
                <div class="text-xs lg:text-sm text-gray-600 text-center sm:text-left">
                    Affichage de <span class="font-semibold">{{ startIndex + 1 }}</span> à
                    <span class="font-semibold">{{ Math.min(endIndex, filteredArticles.length) }}</span> sur
                    <span class="font-semibold">{{ filteredArticles.length }}</span> articles
                </div>

                <!-- Contrôles de pagination -->
                <div class="flex items-center gap-1 lg:gap-2">
                    <!-- Bouton Précédent -->
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Page précédente">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <!-- Pages -->
                    <div class="flex items-center gap-1">
                        <button v-for="page in visiblePages" :key="page" @click="currentPage = page"
                            class="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl border border-gray-300 transition-all duration-300 font-medium text-xs lg:text-sm"
                            :class="currentPage === page
                                ? 'bg-[#01b4d5] border-[#01b4d5] text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5]'"
                            :aria-label="`Page ${page}`" :aria-current="currentPage === page ? 'page' : null">
                            {{ page }}
                        </button>
                        <span v-if="showEllipsis" class="px-1 lg:px-2 text-gray-400 text-sm">...</span>
                    </div>

                    <!-- Bouton Suivant -->
                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Page suivante">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="displayedArticles.length === 0" class="text-center py-12 lg:py-20">
                <div
                    class="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                    <svg class="w-6 h-6 lg:w-10 lg:h-10 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <h3 class="text-lg lg:text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
                <p class="text-sm lg:text-base text-gray-500 max-w-md mx-auto px-4">
                    Aucun article ne correspond à votre recherche. Essayez d'autres termes.
                </p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// State
const activeCategory = ref('all')
const searchQuery = ref('')
const articlesPerPage = ref(4)
const currentPage = ref(1)

// Données des articles
const articles = ref([
    {
        id: 1,
        title: "L'intelligence artificielle redéfinit le commerce digital",
        excerpt: "Exploration des dernières avancées en IA et leur impact sur les stratégies e-commerce et l'expérience client personnalisée.",
        category: "digital",
        author: "Dr. Sophie Martin",
        date: "15 Nov 2024",
        readTime: "5 min",
        featured: true
    },
    {
        id: 2,
        title: "Les compétences digitales indispensables en 2024",
        excerpt: "Analyse des compétences techniques et soft skills qui feront la différence sur le marché de l'emploi numérique cette année.",
        category: "career",
        author: "Pierre Dubois",
        date: "12 Nov 2024",
        readTime: "4 min",
        featured: false
    },
    {
        id: 3,
        title: "Blockchain : applications au-delà des cryptomonnaies",
        excerpt: "Découverte des use cases concrets de la blockchain dans la supply chain, la santé et l'éducation supérieure.",
        category: "innovation",
        author: "Marie Laurent",
        date: "8 Nov 2024",
        readTime: "6 min",
        featured: true
    },
    {
        id: 4,
        title: "Révolution immersive : Métavers et éducation",
        excerpt: "Comment les technologies immersives transforment fondamentalement les méthodes d'apprentissage et préparent les étudiants.",
        category: "education",
        author: "Thomas Leroy",
        date: "5 Nov 2024",
        readTime: "7 min",
        featured: false
    },
    {
        id: 5,
        title: "Cybersécurité à l'ère de l'entreprise digitale",
        excerpt: "Stratégies avancées pour sécuriser vos données et systèmes dans un paysage numérique en constante mutation.",
        category: "digital",
        author: "Sarah Cohen",
        date: "2 Nov 2024",
        readTime: "5 min",
        featured: true
    },
    {
        id: 6,
        title: "Green IT : l'avenir durable du digital",
        excerpt: "Comment concilier innovation technologique et responsabilité environnementale dans votre stratégie digitale.",
        category: "innovation",
        author: "David Moreau",
        date: "29 Oct 2024",
        readTime: "4 min",
        featured: false
    },
    {
        id: 7,
        title: "Data Science : les métiers de demain",
        excerpt: "Panorama complet des nouvelles carrières émergentes dans le domaine de la data science et de l'analyse de données.",
        category: "career",
        author: "Laura Petit",
        date: "25 Oct 2024",
        readTime: "6 min",
        featured: true
    },
    {
        id: 8,
        title: "Pédagogie inversée dans l'enseignement supérieur",
        excerpt: "Retour d'expérience sur l'implémentation des méthodes d'apprentissage actif dans les formations digitales modernes.",
        category: "education",
        author: "Prof. Alain Richard",
        date: "20 Oct 2024",
        readTime: "5 min",
        featured: false
    },
    {
        id: 9,
        title: "UX Design : créer des expériences mémorables",
        excerpt: "Principes fondamentaux et tendances actuelles pour concevoir des interfaces qui captivent et convertissent les utilisateurs.",
        category: "digital",
        author: "Emma Lopez",
        date: "18 Oct 2024",
        readTime: "4 min",
        featured: false
    },
    {
        id: 10,
        title: "Entrepreneuriat digital en Afrique : défis et opportunités",
        excerpt: "Analyse approfondie de l'écosystème startup africain et conseils pratiques pour lancer son projet dans le numérique.",
        category: "innovation",
        author: "Jean Koffi",
        date: "15 Oct 2024",
        readTime: "7 min",
        featured: true
    },
    {
        id: 11,
        title: "Soft Skills : le secret des leaders digitaux",
        excerpt: "Pourquoi l'intelligence émotionnelle et la communication sont devenues cruciales dans le management digital moderne.",
        category: "career",
        author: "Claire Bernard",
        date: "12 Oct 2024",
        readTime: "5 min",
        featured: false
    },
    {
        id: 12,
        title: "L'apprentissage continu à l'ère du numérique",
        excerpt: "Stratégies efficaces pour maintenir ses compétences à jour dans un environnement technologique en perpétuel changement.",
        category: "education",
        author: "Dr. Michel Durand",
        date: "8 Oct 2024",
        readTime: "6 min",
        featured: true
    }
])

// Computed
const filteredArticles = computed(() => {
    let filtered = articles.value

    // Filtre par catégorie
    if (activeCategory.value !== 'all') {
        filtered = filtered.filter(article => article.category === activeCategory.value)
    }

    // Filtre par recherche
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.author.toLowerCase().includes(query)
        )
    }

    return filtered
})

const totalPages = computed(() => {
    return Math.ceil(filteredArticles.value.length / articlesPerPage.value)
})

const startIndex = computed(() => {
    return (currentPage.value - 1) * articlesPerPage.value
})

const endIndex = computed(() => {
    return startIndex.value + articlesPerPage.value
})

const displayedArticles = computed(() => {
    return filteredArticles.value.slice(startIndex.value, endIndex.value)
})

const visiblePages = computed(() => {
    const pages = []
    const total = totalPages.value
    const current = currentPage.value

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, 4, 5)
        } else if (current >= total - 2) {
            pages.push(total - 4, total - 3, total - 2, total - 1, total)
        } else {
            pages.push(current - 2, current - 1, current, current + 1, current + 2)
        }
    }
    return pages
})

const showEllipsis = computed(() => {
    return totalPages.value > 5 && (currentPage.value <= 3 || currentPage.value >= totalPages.value - 2)
})

// Methods
const getCategoryName = (categoryId) => {
    const categories = {
        'digital': 'Digital',
        'innovation': 'Innovation',
        'education': 'Éducation',
        'career': 'Carrière'
    }
    return categories[categoryId] || categoryId
}

// Responsive articles per page
const updateArticlesPerPage = () => {
    const width = window.innerWidth

    if (width >= 1280) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 4)
    } else if (width >= 1024) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 3)
    } else if (width >= 768) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 2)
    } else {
        articlesPerPage.value = Math.max(articlesPerPage.value, 1)
    }

    currentPage.value = 1
}

const handleResize = () => {
    updateArticlesPerPage()
}

// Lifecycle
onMounted(() => {
    updateArticlesPerPage()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Responsive grid */
@media (max-width: 640px) {
    .sm\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 641px) and (max-width: 768px) {
    .sm\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .lg\:grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .xl\:grid-cols-4 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1281px) {
    .xl\:grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Amélioration du touch sur mobile */
@media (max-width: 768px) {

    button,
    select {
        -webkit-tap-highlight-color: transparent;
        min-height: 44px;
        min-width: 44px;
    }
}
</style>