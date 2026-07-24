import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'app',
  nitro: {
    preset: "static",
  },
  
  runtimeConfig: {
    public: {
      metaPixelId: process.env.META_PIXEL_ID || '',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      linkedInPixelId: process.env.LINKEDIN_PIXEL_ID || '',
      googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || ''
    }
  },
  
  app: {
    head: {
      title: "ESCEN - École Supérieure de Commerce et d'Économie Numérique",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logo/LOGO_ESCEN.png" }],
    },
  },

  css: ["./main/index.css", "intl-tel-input/build/css/intlTelInput.css"],
  plugins: [{ src: "~/plugins/intl-tel-input.client.js", mode: "client" }],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@nuxtjs/sitemap"
  ],

  site: {
    url: 'https://www.escen.university',
    name: 'ESCEN University'
  },

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  primevue: {
    components: {
      prefix: 'Prime',
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        }
      }
    }
  },

  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
    optimizeDeps: {
      include: ["intl-tel-input"],
    },
  },
});
