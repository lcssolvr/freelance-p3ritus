<template>
  <div class="location">
    <section class="bg-primary text-secondary py-24 text-center">
      <div class="container mx-auto px-4 animate-on-scroll">
         <h1 class="text-4xl md:text-5xl font-bold mb-6">Localização</h1>
         <p class="text-xl max-w-2xl mx-auto font-light opacity-90 delay-100 animate-on-scroll">Venha nos visitar ou entre em contato.</p>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="space-y-12 animate-on-scroll">
           <h2 class="text-4xl font-bold text-primary mb-8">Fale Conosco</h2>
           
           <div class="flex items-start space-x-6">
             <div class="bg-secondary/10 p-4 rounded-full text-primary flex-shrink-0">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <div>
               <h3 class="font-bold text-xl text-gray-800 mb-2">Endereço</h3>
               <p class="text-gray-600 leading-relaxed text-lg">Rua Exemplo, 123, Sala 405<br>Bairro Centro, Cidade - UF<br>CEP: 12345-000</p>
             </div>
           </div>

           <div class="flex items-start space-x-6">
             <div class="bg-secondary/10 p-4 rounded-full text-primary flex-shrink-0">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             <div>
               <h3 class="font-bold text-xl text-gray-800 mb-2">Email</h3>
               <p class="text-gray-600 text-lg">contato@peritus.com.br</p>
               <p class="text-gray-600 text-lg">administrativo@peritus.com.br</p>
             </div>
           </div>

           <div class="flex items-start space-x-6">
             <div class="bg-secondary/10 p-4 rounded-full text-primary flex-shrink-0">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             </div>
             <div>
               <h3 class="font-bold text-xl text-gray-800 mb-2">Telefone/WhatsApp</h3>
               <p class="text-gray-600 text-lg">(71) 99999-9999</p>
             </div>
           </div>

        </div> 

        <div class="h-[32rem] bg-gray-100 rounded-2xl overflow-hidden shadow-lg relative animate-on-scroll delay-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8851716269633!2d-38.46126332426091!3d-12.979195559963348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1bdca805a9%3A0x9b22180c942dbd89!2sAv.%20Tancredo%20Neves%2C%20Salvador%20-%20BA%2C%2040301-155!5e0!3m2!1spt-BR!2sbr!4v1769001326801!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="true" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>
