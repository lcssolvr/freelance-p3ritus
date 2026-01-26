<template>
  <div class="home">
    <section class="bg-primary text-secondary relative overflow-hidden h-screen flex items-center">
      <div class="absolute inset-0 opacity-10 bg-[url('/src/assets/escritorio.png')] bg-center bg-no-repeat bg-cover"></div>
      <div class="container mx-auto px-4 relative z-10 text-center animate-on-scroll">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 font-sans">Exatidão Técnica & Justiça</h1>
        <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed opacity-90 delay-100 animate-on-scroll">
          Excelência e precisão em perícia judicial e extrajudicial.
        </p>
        <router-link to="/servicos" class="bg-secondary text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl delay-200 animate-on-scroll">
          Conheça Nossos Serviços
        </router-link>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-primary mb-12 animate-on-scroll">Soluções Periciais com Credibilidade</h2>
        <p class="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-20 animate-on-scroll delay-100">
          Somos especializados em oferecer suporte técnico em questões complexas que exigem conhecimento aprofundado em contabilidade, economia e finanças. Atuamos com rigor técnico e ética para fornecer laudos e pareceres que fundamentam decisões judiciais e estratégias empresariais.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div class="p-8 rounded-2xl hover:bg-gray-50 transition-colors animate-on-scroll delay-100">
            <div class="text-5xl font-bold text-secondary mb-3">+3</div>
            <p class="text-sm font-bold text-primary uppercase tracking-widest">Anos de Experiência</p>
          </div>
          <div class="p-8 rounded-2xl hover:bg-gray-50 transition-colors animate-on-scroll delay-200">
            <div class="text-5xl font-bold text-secondary mb-3">+500</div>
            <p class="text-sm font-bold text-primary uppercase tracking-widest">Laudos Emitidos</p>
          </div>
           <div class="p-8 rounded-2xl hover:bg-gray-50 transition-colors animate-on-scroll delay-300">
            <div class="text-5xl font-bold text-secondary mb-3">100%</div>
            <p class="text-sm font-bold text-primary uppercase tracking-widest">Compromisso Ético</p>
          </div>
           <div class="p-8 rounded-2xl hover:bg-gray-50 transition-colors animate-on-scroll delay-100">
            <div class="text-5xl font-bold text-secondary mb-3">24h</div>
            <p class="text-sm font-bold text-primary uppercase tracking-widest">Atendimento Ágil</p>
          </div>
        </div>

        <div class="text-left max-w-5xl mx-auto">
          <h3 class="text-3xl font-bold text-primary mb-16 text-center animate-on-scroll">Como Trabalhamos</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div class="relative pl-8 md:pl-0 animate-on-scroll delay-100">
               <div class="hidden md:block absolute top-0 right-0 -mr-6 text-8xl text-gray-50 font-bold z-0 pointer-events-none">01</div>
               <h4 class="text-xl font-bold text-primary mb-4 relative z-10">Análise Preliminar</h4>
               <p class="text-gray-600 relative z-10 leading-relaxed">Recebimento da demanda e análise detalhada dos autos ou documentos para entender a complexidade e definir a estratégia técnica.</p>
             </div>
             <div class="relative pl-8 md:pl-0 animate-on-scroll delay-200">
               <div class="hidden md:block absolute top-0 right-0 -mr-6 text-8xl text-gray-50 font-bold z-0 pointer-events-none">02</div>
               <h4 class="text-xl font-bold text-primary mb-4 relative z-10">Execução Técnica</h4>
               <p class="text-gray-600 relative z-10 leading-relaxed">Realização de diligências, cálculos, pesquisas e elaboração do laudo ou parecer com fundamentação robusta e clara.</p>
             </div>
             <div class="relative pl-8 md:pl-0 animate-on-scroll delay-300">
               <div class="hidden md:block absolute top-0 right-0 -mr-6 text-8xl text-gray-50 font-bold z-0 pointer-events-none">03</div>
               <h4 class="text-xl font-bold text-primary mb-4 relative z-10">Entrega e Suporte</h4>
               <p class="text-gray-600 relative z-10 leading-relaxed">Entrega do trabalho final e disponibilidade para esclarecimentos, impugnações ou audiências judiciais.</p>
             </div>
          </div>
        </div>

      </div>
    </section>

    <section class="py-24 bg-[#F9FAFB]">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary mb-16 animate-on-scroll">Áreas de Atuação</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-primary animate-on-scroll delay-100">
            <h3 class="text-2xl font-bold mb-6 text-primary">Perícia Judicial e Extrajudicial</h3>
            <p class="text-gray-600 leading-relaxed">Assessoramento técnico em processos judiciais e extrajudiciais, elaborando laudos e pareceres fundamentados para resolução de disputas e arbitragens.</p>
          </div>
          <div class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-primary animate-on-scroll delay-200">
            <h3 class="text-2xl font-bold mb-6 text-primary">Perícia Econômica</h3>
            <p class="text-gray-600 leading-relaxed">Análise de contratos bancários, cálculos de juros e avaliação de impactos econômicos e financeiros.</p>
          </div>
          <div class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-primary animate-on-scroll delay-300">
            <h3 class="text-2xl font-bold mb-6 text-primary">Perícia Contábil</h3>
            <p class="text-gray-600 leading-relaxed">Análise minuciosa de registros contábeis para resolução de disputas financeiras e patrimoniais.</p>
          </div>
        </div>
        <div class="text-center mt-16 animate-on-scroll">
           <router-link to="/servicos" class="text-primary font-bold hover:text-secondary transition-colors text-lg tracking-wide border-b-2 border-transparent hover:border-secondary">Ver todos os serviços &rarr;</router-link>
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
