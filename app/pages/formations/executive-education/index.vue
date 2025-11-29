<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb 
            title="Contact" 
            subtitle="Échangeons ensemble"
            description="Une question, un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Contact' }
            ]" 
            backgroundImage="/valeurs/bg.jpg"
        />

        <!-- Section Contact Principale -->
        <section class="relative py-16 lg:py-20">
            <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <!-- Colonne Informations -->
                    <div class="space-y-8">
                        <!-- En-tête -->
                        <div>
                            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Prenons <span class="text-[#01b4d5]">contact</span>
                            </h2>
                            <p class="text-lg text-gray-600 leading-relaxed">
                                Notre équipe d'experts est disponible pour répondre à toutes vos questions 
                                et vous accompagner dans vos projets de formation digitale.
                            </p>
                        </div>

                        <!-- Informations de contact -->
                        <div class="space-y-6">
                            <div v-for="(info, index) in contactInfo" :key="index" 
                                 class="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <component :is="info.icon" class="w-6 h-6 text-white" />
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 text-lg mb-1">{{ info.title }}</h3>
                                    <p class="text-gray-500 text-sm mb-2">{{ info.description }}</p>
                                    <div v-if="info.link" class="text-[#01b4d5] font-medium hover:text-[#0056b3] transition-colors">
                                        {{ info.value }}
                                    </div>
                                    <div v-else class="text-gray-900 font-medium">{{ info.value }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Réseaux sociaux -->
                        <div class="pt-6">
                            <h4 class="font-semibold text-gray-900 text-lg mb-4">Suivez-nous</h4>
                            <div class="flex gap-3">
                                <a v-for="social in socialLinks" :key="social.name" 
                                   :href="social.url" 
                                   class="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#01b4d5] hover:border-[#01b4d5] hover:shadow-md transition-all duration-300">
                                    <component :is="social.icon" class="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Colonne Formulaire -->
                    <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                Envoyez-nous un <span class="text-[#01b4d5]">message</span>
                            </h3>
                            <p class="text-gray-600">
                                Remplissez le formulaire ci-dessous, nous vous recontacterons sous 24h.
                            </p>
                        </div>

                        <form @submit.prevent="submitForm" class="space-y-6">
                            <!-- Ligne 1 -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label for="firstName" class="block text-sm font-semibold text-gray-700">
                                        Prénom *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        v-model="form.firstName"
                                        required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                        placeholder="Votre prénom"
                                    >
                                </div>
                                <div class="space-y-2">
                                    <label for="lastName" class="block text-sm font-semibold text-gray-700">
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        v-model="form.lastName"
                                        required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                        placeholder="Votre nom"
                                    >
                                </div>
                            </div>

                            <!-- Ligne 2 -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label for="email" class="block text-sm font-semibold text-gray-700">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                        placeholder="votre@email.com"
                                    >
                                </div>
                                <div class="space-y-2">
                                    <label for="phone" class="block text-sm font-semibold text-gray-700">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        v-model="form.phone"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                        placeholder="+33 1 23 45 67 89"
                                    >
                                </div>
                            </div>

                            <!-- Sujet -->
                            <div class="space-y-2">
                                <label for="subject" class="block text-sm font-semibold text-gray-700">
                                    Sujet *
                                </label>
                                <select
                                    id="subject"
                                    v-model="form.subject"
                                    required
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 appearance-none"
                                >
                                    <option value="" disabled selected>Sélectionnez un sujet</option>
                                    <option value="information">Demande d'information</option>
                                    <option value="admission">Admission</option>
                                    <option value="partenariat">Partenariat</option>
                                    <option value="entreprise">Formation entreprise</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            <!-- Message -->
                            <div class="space-y-2">
                                <label for="message" class="block text-sm font-semibold text-gray-700">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    required
                                    rows="5"
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
                                    placeholder="Décrivez votre projet ou votre demande en détail..."
                                ></textarea>
                            </div>

                            <!-- Bouton -->
                            <button
                                type="submit"
                                :disabled="loading"
                                class="w-full bg-gradient-to-r from-[#01b4d5] to-[#0056b3] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#019fbf] hover:to-[#004494] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="!loading" class="flex items-center justify-center gap-2">
                                    Envoyer le message
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                                    </svg>
                                </span>
                                <span v-else class="flex items-center justify-center gap-2">
                                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Envoi en cours...
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Carte -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Notre <span class="text-[#01b4d5]">campus</span>
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Venez nous rencontrer sur notre campus parisien dédié à l'innovation et à la transformation digitale
                    </p>
                </div>
                
                <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.45134873572!2d1.1140994005716014!3d6.1832066557940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e36b2ec6d733%3A0x5000858675986a88!2sESCEN%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20Commerce%20et%20d&#39;%C3%89conomie%20Num%C3%A9rique!5e0!3m2!1sfr!2stg!4v1764450457999!5m2!1sfr!2stg" 
                        width="100%" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        class="w-full"
                    ></iframe>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Icônes
const PhoneIcon = {
  template: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>`
}

const MailIcon = {
  template: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`
}

const MapIcon = {
  template: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>`
}

const ClockIcon = {
  template: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`
}

const LinkedinIcon = {
  template: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>`
}

const TwitterIcon = {
  template: `<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>`
}

const FacebookIcon = {
  template: `<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>`
}

// State du formulaire
const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const loading = ref(false)

// Données de contact
const contactInfo = [
    {
        icon: PhoneIcon,
        title: "Téléphone",
        description: "Disponible du lundi au vendredi",
        value: "+33 1 23 45 67 89",
        link: "tel:+33123456789"
    },
    {
        icon: MailIcon,
        title: "Email",
        description: "Réponse sous 24h",
        value: "contact@escen.fr",
        link: "mailto:contact@escen.fr"
    },
    {
        icon: MapIcon,
        title: "Adresse",
        description: "Venez nous rencontrer",
        value: "123 Avenue du Digital, 75001 Paris",
        link: null
    },
    {
        icon: ClockIcon,
        title: "Horaires",
        description: "Lun-Ven: 9h-18h | Sam: 9h-13h",
        value: "Fermé le dimanche",
        link: null
    }
]

const socialLinks = [
    { name: 'LinkedIn', icon: LinkedinIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
    { name: 'Facebook', icon: FacebookIcon, url: '#' }
]

// Méthodes
const submitForm = async () => {
    loading.value = true
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Formulaire envoyé:', form)
    
    // Réinitialisation
    Object.keys(form).forEach(key => {
        form[key] = ''
    })
    
    loading.value = false
    alert('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.')
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
</style>