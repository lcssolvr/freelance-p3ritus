<template>
  <div class="services">
    <section class="bg-primary text-secondary py-20 text-center">
      <div class="container mx-auto px-4">
        <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
        <p class="text-xl max-w-2xl mx-auto">Soluções técnicas especializadas para demandas complexas.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div v-for="(service, index) in services" :key="index" class="bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
             <div class="h-1 w-12 bg-secondary mb-8 group-hover:w-full transition-all duration-500"></div>
             
             <div class="flex items-baseline justify-between mb-4">
               <h2 class="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">{{ service.title }}</h2>
               <span class="text-4xl text-gray-100 font-bold -mt-4 group-hover:text-primary/10 transition-colors">{{ String(index + 1).padStart(2, '0') }}</span>
             </div>
            
            <p class="text-gray-600 mb-8 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed">{{ service.description }}</p>
            
            <div v-if="service.benefits" class="mb-8 border-t border-gray-100 pt-6">
              <h4 class="font-bold text-xs uppercase text-gray-400 mb-4 tracking-widest">Principais Benefícios</h4>
              <ul class="space-y-3">
                <li v-for="(benefit, bIndex) in service.benefits.slice(0, 3)" :key="bIndex" class="flex items-start text-xs text-gray-600">
                  <span class="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <router-link :to="`/servicos/${service.slug}`" class="text-primary text-xs font-bold uppercase tracking-wider border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1 inline-block">
              Ver Detalhes
            </router-link>
          </div>
        </div>

        <div class="bg-primary text-secondary rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
           <div class="relative z-10">
             <h2 class="text-3xl font-serif font-bold mb-4">Precisa de uma avaliação técnica?</h2>
             <p class="max-w-2xl mx-auto text-lg mb-8 opacity-90">
               Entre em contato conosco para agendar uma reunião inicial ou solicitar uma proposta de honorários sem compromisso.
             </p>
             <router-link to="/localizacao" class="bg-secondary text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-white transition-transform hover:scale-105 inline-block shadow-lg">
               Fale com um Especialista
             </router-link>
           </div>
           <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-5 rounded-full pointer-events-none"></div>
           <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-secondary opacity-10 rounded-full pointer-events-none"></div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { services } from '../data/services'
</script>
