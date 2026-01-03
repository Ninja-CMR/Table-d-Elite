<script setup>
import { ChevronDown } from 'lucide-vue-next';
import heroImage from '../../assets/ImageElite/heroSection.jpg';


const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <section class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

    <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] scale-105"
        :style="{ backgroundImage: `url(${heroImage})` }"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-[#1D2B4F]/60 via-[#1D2B4F]/40 to-[#1D2B4F]/70" />

    <div class="relative z-10 container mx-auto px-6 md:px-12 text-center">
      <div class="max-w-4xl mx-auto">

        <div class="flex justify-center mb-8 animate-fade-in">
          <div class="w-12 h-12 rotate-45 border border-[#E67E22] flex items-center justify-center">
            <div class="w-2 h-2 bg-[#E67E22]" />
          </div>
        </div>

        <p class="font-sans text-sm uppercase tracking-[0.3em] text-white/80 mb-6 animate-fade-in">
          Restaurant Gastronomique • Douala
        </p>

        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in-up">
          La Table de l'Elite
        </h1>

        <p class="font-serif text-xl md:text-2xl italic text-white/90 mb-10 animate-fade-in-delay">
          L'Art de la Gastronomie Camerounaise Réinventée
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <router-link
              to="/reservation"
              class="bg-[#E67E22] hover:bg-[#1D2B4F] text-white px-8 py-4 transition-all duration-300 uppercase text-xs tracking-widest font-semibold"
          >
            Réserver une Table
          </router-link>

          <router-link
              to="/menu"
              class="border border-white text-white hover:bg-white hover:text-[#1D2B4F] px-8 py-4 transition-all duration-300 uppercase text-xs tracking-widest font-semibold"
          >
            Découvrir le Menu
          </router-link>
        </div>
      </div>
    </div>

    <button
        @click="scrollToContent"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        aria-label="Défiler vers le bas"
    >
      <ChevronDown :size="32" />
    </button>

    <div class="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
      <div class="w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
    <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
      <div class="w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
  </section>
</template>

<style scoped>
/* Animations personnalisées */
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1.5s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1.5s ease-out 0.5s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeInUp 1.5s ease-out 0.8s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>