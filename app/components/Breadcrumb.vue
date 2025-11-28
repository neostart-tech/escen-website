<template>
  <nav class="flex items-center space-x-2 text-sm" :class="textColor">
    <template v-for="(item, index) in items" :key="index">
      
      <!-- Lien -->
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        class="hover:text-white transition-colors flex items-center gap-1"
      >
        <slot name="icon" v-if="index === 0"></slot>
        {{ item.label }}
      </NuxtLink>

      <!-- Texte final -->
      <span v-else class="font-semibold">
        {{ item.label }}
      </span>

      <!-- Séparateur -->
      <span v-if="index < items.length - 1" class="opacity-70">/</span>
    </template>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Exemple de structure :
    // [
    //   { label: "Accueil", to: "/" },
    //   { label: "Formations", to: "/formations" },
    //   { label: "Licences Professionnelles" }
    // ]
  },
  textColor: {
    type: String,
    default: "text-white/80"
  }
});
</script>

<style scoped>
/* tu peux ajouter du style ici si besoin */
</style>
