<template>
  <div class="home">
    <section class="bg-primary text-secondary relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('/src/assets/escritorio.png')] bg-center bg-no-repeat bg-cover"></div>
      <div class="container mx-auto px-4 py-32 relative z-10 text-center">
        <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          Excelência e precisão em perícia judicial e extrajudicial.
        </p>
        <router-link to="/servicos" class="bg-secondary text-primary px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-white transition-all transform hover:scale-105 inline-block">
          Conheça Nossos Serviços
        </router-link>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-serif font-bold text-primary mb-8">Soluções Periciais com Credibilidade</h2>
        <p class="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-12">
          Somos especializados em oferecer suporte técnico em questões complexas que exigem conhecimento aprofundado em contabilidade, economia e finanças. Atuamos com rigor técnico e ética para fornecer laudos e pareceres que fundamentam decisões judiciais e estratégias empresariais.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="p-6 bg-gray-50 rounded-lg">
            <div class="text-4xl font-bold text-secondary mb-2">+3</div>
            <p class="text-sm font-bold text-primary uppercase tracking-wide">Anos de Experiência</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-lg">
            <div class="text-4xl font-bold text-secondary mb-2">+500</div>
            <p class="text-sm font-bold text-primary uppercase tracking-wide">Laudos Emitidos</p>
          </div>
           <div class="p-6 bg-gray-50 rounded-lg">
            <div class="text-4xl font-bold text-secondary mb-2">100%</div>
            <p class="text-sm font-bold text-primary uppercase tracking-wide">Compromisso Ético</p>
          </div>
           <div class="p-6 bg-gray-50 rounded-lg">
            <div class="text-4xl font-bold text-secondary mb-2">24h</div>
            <p class="text-sm font-bold text-primary uppercase tracking-wide">Atendimento Ágil</p>
          </div>
        </div>

        <div class="text-left max-w-5xl mx-auto">
          <h3 class="text-2xl font-serif font-bold text-primary mb-8 text-center">Como Trabalhamos</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div class="relative pl-8 md:pl-0">
               <div class="hidden md:block absolute top-0 right-0 -mr-4 text-6xl text-gray-100 font-bold z-0">01</div>
               <h4 class="text-xl font-bold text-primary mb-2 relatie z-10">Análise Preliminar</h4>
               <p class="text-gray-600 relative z-10">Recebimento da demanda e análise detalhada dos autos ou documentos para entender a complexidade e definir a estratégia técnica.</p>
             </div>
             <div class="relative pl-8 md:pl-0">
               <div class="hidden md:block absolute top-0 right-0 -mr-4 text-6xl text-gray-100 font-bold z-0">02</div>
               <h4 class="text-xl font-bold text-primary mb-2 relative z-10">Execução Técnica</h4>
               <p class="text-gray-600 relative z-10">Realização de diligências, cálculos, pesquisas e elaboração do laudo ou parecer com fundamentação robusta e clara.</p>
             </div>
             <div class="relative pl-8 md:pl-0">
               <div class="hidden md:block absolute top-0 right-0 -mr-4 text-6xl text-gray-100 font-bold z-0">03</div>
               <h4 class="text-xl font-bold text-primary mb-2 relative z-10">Entrega e Suporte</h4>
               <p class="text-gray-600 relative z-10">Entrega do trabalho final e disponibilidade para esclarecimentos, impugnações ou audiências judiciais.</p>
             </div>
          </div>
        </div>

      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-serif font-bold text-center text-primary mb-12">Áreas de Atuação</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
            <h3 class="text-xl font-bold mb-4 text-primary">Perícia Judicial e Extrajudicial</h3>
            <p class="text-gray-600">Assessoramento técnico em processos judiciais e extrajudiciais, elaborando laudos e pareceres fundamentados para resolução de disputas e arbitragens.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
            <h3 class="text-xl font-bold mb-4 text-primary">Perícia Econômica</h3>
            <p class="text-gray-600">Análise de contratos bancários, cálculos de juros e avaliação de impactos econômicos e financeiros.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary">
            <h3 class="text-xl font-bold mb-4 text-primary">Perícia Contábil</h3>
            <p class="text-gray-600">Análise minuciosa de registros contábeis para resolução de disputas financeiras e patrimoniais.</p>
          </div>
        </div>
        <div class="text-center mt-12">
           <router-link to="/servicos" class="text-primary font-bold hover:underline">Ver todos os serviços &rarr;</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
