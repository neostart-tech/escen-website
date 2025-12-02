<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Contact" subtitle="Échangeons ensemble"
            description="Une question, un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Contact' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Section Contact Principale -->
        <section class="py-20">
            <div class="container mx-auto px-4 max-w-6xl">
                <!-- En-tête section -->
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Prenons <span class="text-[#01b4d5]">contact</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Notre équipe d'experts est disponible pour répondre à toutes vos questions
                        et vous accompagner dans vos projets de formation digitale.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <!-- Informations de contact - Premier sur mobile -->
                    <div class="lg:col-span-1 space-y-8 order-2 lg:order-1">
                        <!-- Bloc contact -->
                        <div class="space-y-6">
                            <!-- Téléphone -->
                            <div
                                class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-[#01b4d5] rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 text-lg mb-1">Téléphone</h3>
                                    <p class="text-gray-500 text-sm mb-2">Disponible du lundi au vendredi</p>
                                    <a href="tel:+33123456789"
                                        class="text-[#01b4d5] font-medium hover:text-[#0056b3] transition-colors">

                                    </a>
                                </div>
                            </div>

                            <!-- Email -->
                            <div
                                class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-[#01b4d5] rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                                    <p class="text-gray-500 text-sm mb-2">Réponse sous 24h</p>
                                    <a href="mailto:contact@escen.fr"
                                        class="text-[#01b4d5] font-medium hover:text-[#0056b3] transition-colors">
                                        hello@escen.university
                                    </a>
                                </div>
                            </div>

                            <!-- Adresse -->
                            <div
                                class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-[#01b4d5] rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 text-lg mb-1">Adresse</h3>
                                    <p class="text-gray-500 text-sm mb-2">Venez nous rencontrer</p>
                                    <div class="text-gray-900 font-medium">Hountigomé, Rue en face Eglise Notre Dame du
                                        Liban, à 5 mn de l’aéroport de Lomé</div>
                                </div>
                            </div>

                            <!-- Horaires -->
                            <div
                                class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                <div
                                    class="flex-shrink-0 w-12 h-12 bg-[#01b4d5] rounded-xl flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-semibold text-gray-900 text-lg mb-1">Horaires</h3>
                                    <p class="text-gray-500 text-sm mb-2">Lun-Ven: 9h-18h | Sam: 9h-13h</p>
                                    <div class="text-gray-900 font-medium">Fermé le dimanche</div>
                                </div>
                            </div>
                        </div>

                        <!-- Réseaux sociaux -->
                        <!-- Réseaux sociaux -->
                        <div class="pt-6 border-t border-gray-200">
                            <h4 class="font-semibold text-gray-900 text-lg mb-4">Suivez-nous</h4>
                            <div class="flex gap-3">
                                <NuxtLink href="https://www.linkedin.com/company/escenofficiel/" target="_blank"
                                    class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#01b4d5] hover:text-white transition-all duration-300 shadow-sm">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/escenofficiel/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"
                                    class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#01b4d5] hover:text-white transition-all duration-300 shadow-sm">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.2A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zm4.75-9.45a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                                    </svg>
                                </NuxtLink>

                                <NuxtLink to="https://www.facebook.com/escenofficiel?mibextid=ZbWKwL" target="_blank"
                                    class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#01b4d5] hover:text-white transition-all duration-300 shadow-sm">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink href="https://api.whatsapp.com/send?phone=22898012727" target="_blank"
                                    class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#01b4d5] hover:text-white transition-all duration-300 shadow-sm">
                                    <!-- WhatsApp -->
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.5 3.5A10 10 0 0 0 3.7 17.4L2 22l4.7-1.7A10 10 0 1 0 20.5 3.5Zm-2 14.8A8 8 0 0 1 6.5 19l-.5-.3-2.8 1 1-2.7-.3-.5a8 8 0 1 1 15.1 1.8ZM17 14.3c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1l-.7.8c-.1.1-.2.1-.4 0a6.3 6.3 0 0 1-3-2.6c-.1-.2 0-.3 0-.4l.5-.6.2-.3c.1-.2 0-.3 0-.4L11 9c-.1-.2-.2-.4-.4-.4h-.4a1.5 1.5 0 0 0-1 .5c-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 4.9 4.4.7.3 1.3.5 1.8.6.8.2 1.5.2 2.1.1.7-.1 1.2-.6 1.4-1.1s.2-1 .2-1.1-.2-.1-.4-.2Z" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.tiktok.com/@escen_university?_t=8eGTTPTZMgg&_r=1"
                                    target="_blank"
                                    class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#01b4d5] hover:text-white transition-all duration-300 shadow-sm">
                                    <!-- TikTok -->
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.302-.002.603.058.89.18V8.4a6.11 6.11 0 0 0-.9-.13A6.66 6.66 0 0 0 5 20.1a6.66 6.66 0 0 0 13.11-1.48v-6a9.19 9.19 0 0 0 4.11 1.52v-3.4a4.85 4.85 0 0 1-2.63-1.05z" />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Formulaire de contact - Deuxième sur mobile -->
                    <div class="lg:col-span-2 order-1 lg:order-2">
                        <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                            <div class="mb-8">
                                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                    Envoyez-nous un message
                                </h3>
                                <p class="text-gray-600">
                                    Remplissez le formulaire ci-dessous, nous vous recontacterons sous 24h.
                                </p>
                            </div>

                            <form @submit.prevent="submitForm" class="space-y-6">
                                <!-- Ligne 1 -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Prénom *
                                        </label>
                                        <input type="text" v-model="form.firstName" required
                                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300"
                                            placeholder="Votre prénom">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Nom *
                                        </label>
                                        <input type="text" v-model="form.lastName" required
                                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300"
                                            placeholder="Votre nom">
                                    </div>
                                </div>

                                <!-- Ligne 2 -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input type="email" v-model="form.email" required
                                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300"
                                            placeholder="votre@email.com">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone
                                        </label>
                                        <input type="tel" v-model="form.phone"
                                            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300"
                                            placeholder="+33 1 23 45 67 89">
                                    </div>
                                </div>

                                <!-- Sujet -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Sujet *
                                    </label>
                                    <select v-model="form.subject" required
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300">
                                        <option value="" disabled selected>Sélectionnez un sujet</option>
                                        <option value="information">Demande d'information</option>
                                        <option value="admission">Admission</option>
                                        <option value="partenariat">Partenariat</option>
                                        <option value="entreprise">Formation entreprise</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <!-- Message -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea v-model="form.message" required rows="6"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Décrivez votre projet ou votre demande en détail..."></textarea>
                                </div>

                                <!-- Bouton -->
                                <button type="submit" :disabled="loading"
                                    class="w-full bg-[#01b4d5] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#0056b3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span v-if="!loading" class="flex items-center justify-center gap-2">
                                        Envoyer le message
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                    <span v-else class="flex items-center justify-center gap-2">
                                        <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Envoi en cours...
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Carte -->
        <section class="py-20">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Notre campus
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Venez nous rencontrer sur notre campus parisien dédié à l'innovation digitale
                    </p>
                </div>

                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.45134873572!2d1.1140994005716014!3d6.1832066557940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e36b2ec6d733%3A0x5000858675986a88!2sESCEN%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20Commerce%20et%20d&#39;%C3%89conomie%20Num%C3%A9rique!5e0!3m2!1sfr!2stg!4v1764450457999!5m2!1sfr!2stg"
                        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

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