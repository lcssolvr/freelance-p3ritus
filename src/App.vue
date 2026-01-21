<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
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
