<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const { observeElements } = useScrollAnimation()
const route = useRoute()

watch(route, () => {
  // Small delay to allow DOM to update
  setTimeout(() => {
    observeElements()
  }, 100)
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <WhatsAppButton />
    <Footer />
  </div>
</template>
