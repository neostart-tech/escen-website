<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page' }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "ESCEN - École Supérieure de Commerce et d'Économie Numérique",
  ogSiteName: "ESCEN University",
  ogTitle: "ESCEN - L'École Supérieure de Commerce et d'Économie Numérique",
  description: "L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique.",
  ogDescription: "L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique. Découvrez nos Licences et Masters.",
  ogImage: "https://escen.neostart.tech/valeurs/bg.jpg",
  twitterCard: "summary_large_image",
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ESCEN University",
        "url": "https://www.escen.university/"
      })
    }
  ]
})
</script>
