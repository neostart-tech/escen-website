<template>
  <footer class="bg-[#0a0e1a] text-white">

    <!-- ===== CORPS PRINCIPAL ===== -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- ===== COLONNE 1 : Identité ===== -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Logo -->
          <NuxtLink to="/" class="inline-block">
            <div class="bg-white rounded-2xl px-5 py-4 inline-block hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
              <img src="/logo/LOGO_ESCEN.png" alt="ESCEN" class="h-14 w-auto object-contain">
            </div>
          </NuxtLink>

          <!-- Nom complet -->
          <div>
            <h2 class="text-sm font-bold text-white leading-snug mb-3">
              École Supérieure de Commerce<br>et d'Économie Numérique
            </h2>
            <p class="text-gray-300 text-sm leading-relaxed">
              L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique.
              Une école d'excellence tournée vers l'innovation et le digital.
            </p>
          </div>

          <!-- Réseaux sociaux -->
          <div>
            <p class="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Suivez-nous</p>
            <div class="flex items-center gap-2">
              <a v-for="social in socialLinks" :key="social.name"
                 :href="social.url" :aria-label="social.name" target="_blank" rel="noopener noreferrer"
                 class="w-9 h-9 rounded-xl bg-white/8 border border-white/15 hover:bg-[#01b4d5] hover:border-[#01b4d5] flex items-center justify-center transition-all duration-300 group">
                <svg class="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.path"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- ===== COLONNE 2 : Navigation ===== -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.href"
                class="text-gray-300 hover:text-[#01b4d5] transition-colors duration-200 text-sm flex items-center gap-2 group">
                <svg class="w-3 h-3 text-[#01b4d5]/50 group-hover:text-[#01b4d5] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- ===== COLONNE 3 : Formations ===== -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Formations</h3>
          <ul class="space-y-3">
            <li v-for="f in formations" :key="f.name">
              <NuxtLink :to="f.href"
                class="text-gray-300 hover:text-[#01b4d5] transition-colors duration-200 text-sm flex items-center gap-2 group">
                <svg class="w-3 h-3 text-[#01b4d5]/50 group-hover:text-[#01b4d5] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
                {{ f.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- ===== COLONNE 4 : Contact ===== -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Contact</h3>
          <div class="space-y-4">
            <a href="mailto:hello@escen.university"
               class="flex items-start gap-3 group">
              <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] transition-all duration-200">
                <svg class="w-3.5 h-3.5 text-[#01b4d5] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                <p class="text-sm text-gray-200 group-hover:text-[#01b4d5] transition-colors">hello@escen.university</p>
              </div>
            </a>

            <a href="tel:+22898012727"
               class="flex items-start gap-3 group">
              <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] transition-all duration-200">
                <svg class="w-3.5 h-3.5 text-[#01b4d5] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Téléphone</p>
                <p class="text-sm text-gray-200 group-hover:text-[#01b4d5] transition-colors">+228 98 01 27 27</p>
              </div>
            </a>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </div>
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Adresse</p>
                <p class="text-sm text-gray-200 leading-relaxed">Hountigomé, Lomé — Togo</p>
              </div>
            </div>

            <NuxtLink to="/contact"
              class="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-xl bg-[#01b4d5] hover:bg-[#019fbf] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#01b4d5]/20">
              Nous contacter
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>

    <!-- ===== BARRE INFÉRIEURE ===== -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        <!-- Copyright -->
        <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <p class="text-gray-400 text-xs">© {{ new Date().getFullYear() }} ESCEN. Tous droits réservés.</p>
          <span class="hidden sm:block text-gray-600">·</span>
          <a href="https://neostart.technology" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-[#01b4d5] transition-colors text-xs">
            Développé par Neostart Technology
          </a>
        </div>

        <!-- Liens légaux -->
        <div class="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <NuxtLink v-for="legal in legalLinks" :key="legal.name" :to="legal.href"
            class="text-gray-400 hover:text-[#01b4d5] transition-colors text-xs">
            {{ legal.name }}
          </NuxtLink>
        </div>

      </div>
    </div>

  </footer>
</template>

<script setup>
const socialLinks = [
  { name: 'Facebook',  url: 'https://www.facebook.com/escenofficiel?mibextid=ZbWKwL', path: 'M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a4 4 0 0 1 4.3-4.4c1 0 2 .1 2.2.1v2.6h-1.5c-1.2 0-1.5.8-1.5 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z' },
  { name: 'Instagram', url: 'https://www.instagram.com/escenofficiel/', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.5-2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 18.5 5z' },
  { name: 'LinkedIn',  url: 'https://www.linkedin.com/company/escenofficiel/', path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.8V21H10z' },
  { name: 'TikTok',   url: 'https://www.tiktok.com/@escen_university', path: 'M12 2h3a5 5 0 0 0 4 4v3c-1.5 0-3-.5-4-1.2V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z' },
  { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=22898012727', path: 'M12 2a10 10 0 0 0-9 14.5L2 22l5.7-1.8A10 10 0 1 0 12 2zm4 13.7c-.1-.1-1-.5-1.3-.6s-.4 0-.6.2l-.7.8c-.1.1-.2.1-.4 0a6 6 0 0 1-3-2.5c-.1-.2 0-.3 0-.4l.5-.6c.1-.2.1-.3 0-.4l-.6-1a.6.6 0 0 0-.5-.3H9a1.5 1.5 0 0 0-1 .5c-.2.4-1 1.3-1 2.6s1 2.4 1.2 2.6c.1.2 2 3 4.7 4.2.7.3 1.3.5 1.9.6.8.2 1.6.1 2.2 0s1.1-1 1.3-1.5.2-1 .2-1.2 0-.3-.3-.4z' },
]

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Nous contacter', href: '/contact' },
  { name: 'Espace étudiants', href: '/connexion' },
]

const formations = [
  { name: 'Licence Professionnelle', href: '/formations/licence-professionnelle' },
  { name: 'Master Professionnel',    href: '/formations/master-professionnel' },
  { name: 'Executive Education',     href: '/formations/executive-education' },
  { name: 'Certificats',             href: '/formations/certificats' },
]

const legalLinks = [
  { name: 'Mentions légales',   href: '/mentions-legales' },
  { name: 'Confidentialité',    href: '/confidentialite' },
  { name: 'CGU',                href: '/cgu' },
  { name: 'Cookies',            href: '/politique-cookies' },
]

</script>
