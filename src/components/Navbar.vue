<template>
  <nav class="bg-primary text-secondary py-3 px-10 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="../assets/peritus_logo_nome_transparente.png" alt="P3RITUS Logo" class="h-24 w-auto object-contain" />
      </router-link>

      <div class="hidden md:flex items-center gap-8 font-serif text-xl">
        <router-link to="/" class="hover:text-white transition-colors">Início</router-link>
        <router-link to="/sobre" class="hover:text-white transition-colors">Sobre Nós</router-link>
        
        <div class="relative group">
          <router-link to="/servicos" class="hover:text-white transition-colors py-2 block">Serviços</router-link>
          <div class="absolute left-0 mt-0 w-64 bg-white text-gray-800 rounded shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
             <router-link 
                v-for="service in services" 
                :key="service.slug" 
                :to="`/servicos/${service.slug}`" 
                class="block px-4 py-2 hover:bg-primary hover:text-white transition-colors text-sm border-b border-gray-100 last:border-0"
             >
                {{ service.title }}
             </router-link>
          </div>
        </div>

        <router-link to="/localizacao" class="hover:text-white transition-colors">Localização</router-link>
      </div>

      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="md:hidden mt-4 space-y-2 pb-4">
      <router-link to="/" class="block px-4 py-2 hover:bg-opacity-10 hover:bg-white rounded" @click="isOpen = false">Início</router-link>
      <router-link to="/sobre" class="block px-4 py-2 hover:bg-opacity-10 hover:bg-white rounded" @click="isOpen = false">Sobre Nós</router-link>
      
      <div class="px-4 py-2">
         <router-link to="/servicos" class="block font-bold mb-2 text-white" @click="isOpen = false">Serviços</router-link>
         <div class="pl-4 space-y-2 border-l border-white/30">
            <router-link 
               v-for="service in services" 
               :key="service.slug" 
               :to="`/servicos/${service.slug}`" 
               class="block text-sm hover:text-white hover:underline opacity-90"
               @click="isOpen = false"
            >
               {{ service.title }}
            </router-link>
         </div>
      </div>
      
      <router-link to="/localizacao" class="block px-4 py-2 hover:bg-opacity-10 hover:bg-white rounded" @click="isOpen = false">Localização</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { services } from '../data/services'
const isOpen = ref(false)
</script>
