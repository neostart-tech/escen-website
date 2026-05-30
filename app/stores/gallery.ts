import { defineStore } from 'pinia'
import axios from 'axios';

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    albums: [],
    currentAlbum: null,
    otherAlbums: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAlbums() {
      this.loading = true
      this.error = null
      
      try {
        const response = await axios.get('/public/galeries')
        if (response.data.success) {
          this.albums = response.data.data
        }
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur lors de la récupération des galeries'
        console.error('Erreur fetchAlbums:', err)
      } finally {
        this.loading = false
      }
    },

    async fetchAlbumById(id: string) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axios.get(`/public/galeries/${id}`)
        if (response.data.success) {
          this.currentAlbum = response.data.data.album
          this.otherAlbums = response.data.data.other_albums
        }
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur lors de la récupération de l\'album'
        console.error('Erreur fetchAlbumById:', err)
      } finally {
        this.loading = false
      }
    }
  }
})
