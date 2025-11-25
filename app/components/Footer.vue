<template>
    <footer class="bg-gray-900 text-white">
        <!-- Section principale -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

                <!-- Colonne 1: Logo et description -->
                <div class="lg:col-span-1 space-y-6">
                    <!-- Logo très agrandi sur fond blanc -->
                    <div class="bg-white p-6 rounded-2xl shadow-lg inline-block">
                        <NuxtLink to="/" class="inline-block">
                            <img src="/logo/LOGO_ESCEN.png"
                                alt="ESCEN - École Supérieure de Commerce et d'Economie Numérique"
                                class="h-32 w-auto object-contain hover:opacity-90 transition-opacity">
                        </NuxtLink>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-300 text-lg leading-relaxed">
                        L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique.
                        Une école d'excellence tournée vers l'innovation et le digital.
                    </p>
                </div>

                <!-- Colonne 2: Navigation -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-white border-l-4 border-[#01b4d5] pl-3">
                        Navigation
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.name">
                            <NuxtLink :to="link.href"
                                class="text-gray-300 hover:text-[#01b4d5] transition-all duration-200 flex items-center group">
                                <svg class="w-4 h-4 mr-2 text-[#01b4d5] group-hover:translate-x-1 transition-transform"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                                {{ link.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Colonne 3: Formations -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-white border-l-4 border-[#01b4d5] pl-3">
                        Formations
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="formation in formations" :key="formation.name">
                            <NuxtLink :to="formation.href"
                                class="text-gray-300 hover:text-[#01b4d5] transition-all duration-200 flex items-center group">
                                <svg class="w-4 h-4 mr-2 text-[#01b4d5] group-hover:translate-x-1 transition-transform"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                {{ formation.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Colonne 4: Contact -->
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-white border-l-4 border-[#01b4d5] pl-3">
                        Contact
                    </h3>
                    <div class="space-y-3">
                        <div v-for="contact in contactInfo" :key="contact.type"
                            class="flex items-start space-x-3 group">
                            <div class="mt-1 text-[#01b4d5] group-hover:scale-110 transition-transform">
                                <component :is="contact.icon" class="w-5 h-5" />
                            </div>
                            <div>
                                <p class="text-gray-300 font-medium text-sm">{{ contact.value }}</p>
                                <p class="text-gray-400 text-xs">{{ contact.label }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bouton contact -->
                    <NuxtLink to="/contact"
                        class="inline-flex items-center space-x-2 bg-[#01b4d5] hover:bg-white text-white hover:text-[#01b4d5] px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Nous contacter</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Section réseaux sociaux centrée -->
            <div class="mt-8 pt-6 border-t border-gray-700 text-center">
                <h4 class="text-lg font-semibold mb-4 text-white">Suivez-nous</h4>
                <div class="flex justify-center space-x-4">
                    <a 
                        v-for="social in socialLinks" 
                        :key="social.name"
                        :href="social.url" 
                        :aria-label="social.name"
                        class="bg-[#01b4d5] hover:bg-white text-white hover:text-[#01b4d5] p-3 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                        <component :is="social.icon" class="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Section inférieure -->
        <div class="bg-gray-800 py-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

                    <!-- Copyright et développement -->
                    <div class="text-center lg:text-left">
                        <p class="text-gray-400 text-sm">
                            &copy; {{ new Date().getFullYear() }} ESCEN. Tous droits réservés.
                        </p>
                        <a href="https://neostart.technology" target="_blank" rel="noopener noreferrer"
                            class="text-[#01b4d5] hover:text-white transition-colors text-sm font-semibold inline-flex items-center space-x-1 mt-1">
                            <span>Développé par Neostart Technology</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <!-- Liens légaux -->
                    <div class="flex flex-wrap justify-center space-x-6">
                        <NuxtLink v-for="legal in legalLinks" :key="legal.name" :to="legal.href"
                            class="text-gray-400 hover:text-[#01b4d5] transition-colors text-sm">
                            {{ legal.name }}
                        </NuxtLink>
                    </div>

                    <!-- Retour en haut -->
                    <button @click="scrollToTop"
                        class="bg-[#01b4d5] hover:bg-white hover:text-[#01b4d5] text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
                        aria-label="Retour en haut">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Import des icônes
import { defineComponent } from 'vue'

// Liens sociaux avec composants définis
const socialLinks = [
    {
        name: 'Facebook',
        url: '#',
        icon: defineComponent({
            template: `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            `
        })
    },
    {
        name: 'Twitter',
        url: '#',
        icon: defineComponent({
            template: `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                </svg>
            `
        })
    },
    {
        name: 'LinkedIn',
        url: '#',
        icon: defineComponent({
            template: `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            `
        })
    },
    {
        name: 'Instagram',
        url: '#',
        icon: defineComponent({
            template: `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.987.012 6.756.06 2.767.227.228 2.763.06 6.756.012 7.987 0 8.396 0 12.017c0 3.62.012 4.029.06 5.26.167 3.989 2.703 6.527 6.696 6.695 1.231.048 1.64.06 5.26.06 3.62 0 4.029-.012 5.26-.06 3.989-.167 6.527-2.703 6.695-6.696.048-1.231.06-1.64.06-5.26 0-3.62-.012-4.029-.06-5.26-.167-3.989-2.703-6.527-6.696-6.695C16.046.012 15.637 0 12.017 0zm0 2.16c3.203 0 3.585.012 4.804.07 3.252.149 4.771 1.691 4.919 4.919.058 1.219.07 1.601.07 4.804 0 3.203-.012 3.585-.07 4.804-.149 3.227-1.664 4.771-4.919 4.919-1.219.058-1.601.07-4.804.07-3.203 0-3.585-.012-4.804-.07-3.255-.148-4.771-1.664-4.919-4.919-.058-1.219-.07-1.601-.07-4.804 0-3.203.012-3.585.07-4.804.149-3.227 1.664-4.771 4.919-4.919 1.219-.058 1.601-.07 4.804-.07zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.882 1.44 1.44 0 000-2.882z"/>
                </svg>
            `
        })
    }
]

// Liens rapides
const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Formations', href: '/formations' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Nous contacter', href: '/contact' },
    { name: 'Espace étudiants', href: '/espace-etudiants' }
]

// Formations comme liste simple
const formations = [
    { name: 'Licence Professionnelle', href: '/formations/licence-professionnelle' },
    { name: 'Master Professionnel', href: '/formations/master-professionnel' },
    { name: 'Executive Education', href: '/formations/executive-education' },
    { name: 'Certificats', href: '/formations/certificats' }
]

// Informations de contact avec icônes
const contactInfo = [
    {
        type: 'email',
        value: 'contact@escen.fr',
        label: 'Email',
        icon: defineComponent({
            template: `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            `
        })
    },
    {
        type: 'phone',
        value: '+33 1 23 45 67 89',
        label: 'Téléphone',
        icon: defineComponent({
            template: `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                </svg>
            `
        })
    },
    {
        type: 'address',
        value: '123 Avenue du Digital, 75000 Paris',
        label: 'Adresse',
        icon: defineComponent({
            template: `
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
            `
        })
    }
]

// Liens légaux
const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Cookies', href: '/cookies' }
]

// Fonction pour remonter en haut de page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped>
/* Styles supplémentaires pour le footer */
footer {
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
}
</style>