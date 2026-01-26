<template>
  <footer class="bg-primary text-secondary py-10 mt-auto">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h3 class="text-2xl font-serif font-light mb-1">PΣRITUS</h3>
        <p class="text-sm opacity-80">
          Excelência em Perícia Judicial e Extrajudicial.
        </p>
      </div>

      <div>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-white transition-colors">Início</router-link></li>
          <li><router-link to="/sobre" class="hover:text-white transition-colors">Sobre Nós</router-link></li>
          <li><router-link to="/servicos" class="hover:text-white transition-colors">Serviços</router-link></li>
          <li><router-link to="/localizacao" class="hover:text-white transition-colors">Localização</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="font-sans font-bold mb-1 uppercase tracking-wider text-sm">Contato</h4>
        <p class="mb-2">Rua Exemplo, 123, Sala 405
            Bairro Centro, Cidade - UF
            CEP: 12345-000
        </p>
        <p class="mb-2">contato@peritus.com.br</p>
        <p>(71) 9999-99999</p>
      </div>
    </div>
    <div class="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-60">
      &copy; {{ new Date().getFullYear() }} PΣRITUS. Todos os direitos reservados.
    </div>
  </footer>
</template>