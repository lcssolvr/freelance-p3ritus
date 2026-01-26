<template>
  <div class="service-detail">
    <section class="bg-primary text-secondary py-20 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ service?.title }}</h1>
        <router-link to="/servicos" class="text-white hover:underline mt-4 inline-block">&larr; Voltar para Serviços</router-link>
      </div>
    </section>

    <section v-if="service" class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-4xl shadow-lg p-10 rounded-lg">
        <div class="mb-10">
           <h2 class="text-2xl font-bold text-primary mb-4 border-b pb-2">O que é?</h2>
           <p class="text-gray-700 text-lg leading-relaxed">{{ service.description }}</p>
        </div>

        <div class="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 class="text-xl font-bold text-primary mb-4">Benefícios</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li v-for="(benefit, index) in service.benefits" :key="index">{{ benefit }}</li>
                </ul>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <h3 class="text-xl font-bold text-primary mb-4">Aplicações Práticas</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li v-for="(app, index) in service.applications" :key="index">{{ app }}</li>
                </ul>
            </div>
        </div>

        <div>
           <h2 class="text-2xl font-bold text-primary mb-4 border-b pb-2">Nossa Metodologia</h2>
           <p class="text-gray-700 text-lg leading-relaxed">{{ service.methodology }}</p>
        </div>
      </div>
    </section>

    <section v-else class="py-20 text-center">
      <p class="text-xl text-gray-600">Serviço não encontrado.</p>
      <router-link to="/servicos" class="text-primary font-bold hover:underline mt-4 inline-block">Ver todos os serviços</router-link>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../data/services'

const route = useRoute()
const service = computed(() => {
  return services.find(s => s.slug === route.params.slug)
})
</script>
