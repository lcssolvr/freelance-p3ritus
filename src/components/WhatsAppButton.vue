<template>
  <a 
    :href="whatsappLink" 
    target="_blank" 
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
    aria-label="Fale conosco no WhatsApp"
  >
    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-.1612-.916-2.207-.242-1.118-.487-1.354-.722-1.354-.199 0-.52-.297-.769-.371-1.118-.149 2.972 5.58 10.158 8.049 11.237 2.469 1.079 5.862.91 9.206-.05 1.066-.723 1.905-1.442 2.378-.719.474-.297.818-.049 1.117z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.125 1.527 5.862L0 24l6.32-1.644C7.995 23.407 9.944 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.801 0-3.515-.503-5.004-1.39l-.359-.214-3.719.968.996-3.626-.233-.372C2.793 15.65 2.182 13.882 2.182 12c0-5.414 4.404-9.818 9.818-9.818 5.414 0 9.818 4.404 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818z"/>
    </svg>
    <span class="absolute right-full mr-3 bg-white text-gray-800 text-sm py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-sans font-bold">
      Fale Conosco
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const phoneNumber = "5571999999999" // Replace with P3RITUS real number
const message = "Olá, gostaria de mais informações sobre os serviços da P3RITUS."

const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})
</script>
