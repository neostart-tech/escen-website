// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'app',
  nitro: {
    preset: "static",
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
  ],

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
