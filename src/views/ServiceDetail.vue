<template>
  <div class="service-detail">
    <section class="bg-primary text-secondary py-24 text-center">
      <div class="container mx-auto px-4 animate-on-scroll">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ service?.title }}</h1>
        <router-link to="/servicos" class="text-white hover:text-secondary hover:underline mt-4 inline-block transition-colors animate-on-scroll delay-100">&larr; Voltar para Serviços</router-link>
      </div>
    </section>

    <section v-if="service" class="py-24 bg-white">
      <div class="container mx-auto px-4 max-w-4xl shadow-xl p-12 md:p-16 rounded-3xl animate-on-scroll">
        <div class="mb-12">
           <h2 class="text-2xl font-bold text-primary mb-6 border-b pb-4">O que é?</h2>
           <p class="text-gray-700 text-lg leading-relaxed">{{ service.description }}</p>
        </div>

        <div class="mb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary animate-on-scroll delay-100">
                <h3 class="text-xl font-bold text-primary mb-6">Benefícios</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-700">
                    <li v-for="(benefit, index) in service.benefits" :key="index">{{ benefit }}</li>
                </ul>
            </div>
            <div class="bg-gray-50 p-8 rounded-2xl border-l-4 border-secondary animate-on-scroll delay-200">
                <h3 class="text-xl font-bold text-primary mb-6">Aplicações Práticas</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-700">
                    <li v-for="(app, index) in service.applications" :key="index">{{ app }}</li>
                </ul>
            </div>
        </div>

        <div>
           <h2 class="text-2xl font-bold text-primary mb-6 border-b pb-4">Nossa Metodologia</h2>
           <p class="text-gray-700 text-lg leading-relaxed">{{ service.methodology }}</p>
        </div>
      </div>
    </section>

    <section v-else class="py-32 text-center animate-on-scroll">
      <p class="text-2xl text-gray-600 mb-6">Serviço não encontrado.</p>
      <router-link to="/servicos" class="text-primary font-bold hover:underline inline-block text-lg">Ver todos os serviços</router-link>
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
