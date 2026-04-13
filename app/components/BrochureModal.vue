<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl transition-all" @click.stop>
      <div class="flex justify-between items-center p-6 border-b border-gray-100">
        <h3 class="text-xl font-bold text-gray-900">Télécharger la brochure</h3>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form @submit.prevent="submitForm" class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
          <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="Votre nom complet" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="votre@email.com" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
          <input v-model="form.phone" type="tel" required class="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20" placeholder="Votre numéro" />
        </div>
        <div class="pt-4">
          <button type="submit" class="w-full bg-[#01b4d5] hover:bg-[#0056b3] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Confirmer et télécharger
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close', 'submit'])

const form = ref({
  name: '',
  email: '',
  phone: ''
})

const submitForm = () => {
  emit('submit', { ...form.value })
  // Optionally reset
  form.value.name = ''
  form.value.email = ''
  form.value.phone = ''
}
</script>
