import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useCandidatureStore = defineStore('candidature', {
  state: () => ({
    isLoading: false,
    error: null,
  }),
  actions: {
    async soumettreCandidature(formData: FormData) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        
        const response = await $axios.post('/public/candidature/soumettre', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        return response.data
      } catch (error: any) {
        console.error('Erreur soumission candidature:', error)
        if (error.response?.data?.errors) {
            this.error = error.response.data.errors
        } else {
            this.error = error.response?.data?.message || 'Erreur lors de la soumission de la candidature'
        }
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
