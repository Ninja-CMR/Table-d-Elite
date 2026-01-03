<script setup lang="ts">
import bgImage from '../../assets/ImageElite/bgReservation.jpg';
</script>

<template>
  <section class="relative py-32 overflow-hidden">
    <div
        class="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
        :style="{ backgroundImage: `url(${bgImage})` }"
    />

    <div class="absolute inset-0 bg-[#1D2B4F]/80" />

    <div class="relative z-10 container mx-auto px-6 md:px-12 text-center">
      <div class="max-w-3xl mx-auto">

        <div class="flex justify-center mb-8">
          <div class="w-10 h-10 rotate-45 border border-[#E67E22] flex items-center justify-center">
            <div class="w-1.5 h-1.5 bg-[#E67E22]" />
          </div>
        </div>

        <p class="font-sans text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
          Réservation
        </p>

        <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Vivez une Expérience<br />
          <span class="italic text-[#E67E22]">Inoubliable</span>
        </h2>

        <p class="font-sans text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
          Réservez votre table et laissez-vous transporter dans un univers
          où chaque détail est pensé pour sublimer votre moment.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
              to="/reservation"
              class="bg-[#E67E22] text-white px-10 py-5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white hover:text-[#1D2B4F] transition-all duration-300"
          >
            Réserver Maintenant
          </router-link>

          <a
              href="tel:+237600000000"
              class="border border-white text-white px-10 py-5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-white hover:text-[#1D2B4F] transition-all duration-300"
          >
            Appeler le Restaurant
          </a>
        </div>
      </div>
    </div>

    <div class="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
    <div class="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
  </section>
</template>

<style scoped>
@media (max-width: 1024px) {
  .bg-fixed {
    background-attachment: scroll;
  }
}
</style>