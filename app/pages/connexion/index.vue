<template>
  <div class="min-h-screen bg-[#f4f8fb] flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#01b4d5] mx-auto mb-4"></div>
      <p class="text-gray-500 font-medium">Redirection vers l'espace étudiant en cours...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Use layout without header/footer
definePageMeta({
  layout: false
})

onMounted(() => {
  window.location.href = "https://escendemo.neostart.tech/"
})
</script>