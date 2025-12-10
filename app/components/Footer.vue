<template>
    <footer class="bg-gray-900 text-white">
        <!-- Section principale -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

                <!-- Colonne 1: Logo et description -->
                <div class="lg:col-span-1 space-y-6 pl-2 md:pl-3 lg:pl-4">
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
import { defineComponent, h } from "vue"

const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/escenofficiel?mibextid=ZbWKwL',
        icon: defineComponent({
            render() {
                return h("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, [
                    h("path", {
                        d: "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a4 4 0 0 1 4.3-4.4c1 0 2 .1 2.2.1v2.6h-1.5c-1.2 0-1.5.8-1.5 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z"
                    })
                ])
            }
        })
    },

    {
        name: 'Tiktok',
        url: 'https://www.tiktok.com/@escen_university?_t=8eGTTPTZMgg&_r=1',
        icon: defineComponent({
            render() {
                return h("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, [
                    h("path", {
                        d: "M12 2h3a5 5 0 0 0 4 4v3c-1.5 0-3-.5-4-1.2V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z"
                    })
                ])
            }
        })
    },

    {
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=22898012727',
        icon: defineComponent({
            render() {
                return h("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, [
                    h("path", {
                        d: "M12 2a10 10 0 0 0-9 14.5L2 22l5.7-1.8A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.3-1.2l-.3-.2-2.8 1 .9-2.6-.2-.3A8 8 0 1 1 12 20zm4-6.3c-.1-.1-1-.5-1.3-.6s-.4 0-.6.2l-.7.8c-.1.1-.2.1-.4 0a6 6 0 0 1-3-2.5c-.1-.2 0-.3 0-.4l.5-.6c.1-.2.1-.3 0-.4l-.6-1a.6.6 0 0 0-.5-.3H9a1.5 1.5 0 0 0-1 .5c-.2.4-1 1.3-1 2.6s1 2.4 1.2 2.6c.1.2 2 3 4.7 4.2.7.3 1.3.5 1.9.6.8.2 1.6.1 2.2 0s1.1-1 1.3-1.5.2-1 .2-1.2 0-.3-.3-.4z"
                    })
                ])
            }
        })
    },

    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/escenofficiel/',
        icon: defineComponent({
            render() {
                return h("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, [
                    h("path", {
                        d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.8V21H10z"
                    })
                ])
            }
        })
    },

    {
        name: 'Instagram',
        url: 'https://www.instagram.com/escenofficiel/?igshid=MzRlODBiNWFlZA%3D%3D',
        icon: defineComponent({
            render() {
                return h("svg", { class: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24" }, [
                    h("path", {
                        d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.5-2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 18.5 5z"
                    })
                ])
            }
        })
    }
]



// Liens rapides
const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Nous contacter', href: '/contact' },
    { name: 'Espace étudiants', href: '/espace-etudiants' }
]

// Formations comme liste simple
const formations = [
    { name: 'Licence Professionnelle', href: 'formations/licence-professionnelle' },
    { name: 'Master Professionnel', href: '/formations/master-professionnel' },
    { name: 'Executive Education', href: '/formations/executive-education' },
    { name: 'Certificats', href: '/formations/certificats' }
]

// Informations de contact avec icônes
const contactInfo = [
    {
        type: 'email',
        value: 'hello@escen.university',
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
        value: '+228 98 01 27 27',
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
        value: 'Hountigomé, Rue en face Eglise Notre Dame du Liban, à 5 mn de l’aéroport de Lomé',
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
    { name: 'Cookies', href: '/politique-cookies' }
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