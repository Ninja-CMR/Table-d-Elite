<script setup lang="ts">
import chefImage from '../../assets/ImageElite/PhotoWelcome.jpg';
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="relative order-2 lg:order-1">
          <div class="relative overflow-hidden">
            <img
                :src="chefImage"
                alt="Chef préparant un plat signature"
                class="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div class="absolute inset-4 border border-[#E67E22]/30 pointer-events-none" />
          </div>

          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E67E22]/10 -z-10" />
          <div class="absolute -top-6 -left-6 w-24 h-24 border border-[#1D2B4F]/20 -z-10" />
        </div>

        <div class="order-1 lg:order-2">
          <p class="font-sans text-sm uppercase tracking-[0.3em] text-[#E67E22] mb-4">
            Bienvenue
          </p>

          <h2 class="font-serif text-4xl md:text-5xl text-[#1D2B4F] mb-6">
            Une Expérience<br />
            <span class="italic">Culinaire Unique</span>
          </h2>

          <div class="flex items-center gap-4 mb-8">
            <div class="w-8 h-px bg-[#E67E22]" />
            <div class="w-2 h-2 rotate-45 bg-[#E67E22]" />
            <div class="w-8 h-px bg-[#E67E22]" />
          </div>

          <p class="font-sans text-[#2C3E50]/80 leading-relaxed mb-6">
            Nichée au cœur de Douala, <strong class="text-[#1D2B4F]">La Table de l'Elite</strong> vous
            invite à découvrir une cuisine d'exception où les saveurs camerounaises
            rencontrent les techniques gastronomiques les plus raffinées.
          </p>

          <p class="font-sans text-[#2C3E50]/80 leading-relaxed mb-8">
            Notre Chef et son équipe sélectionnent chaque jour les meilleurs produits
            locaux pour créer des plats qui racontent l'histoire de notre terroir,
            sublimés par une créativité sans limite et un souci du détail absolu.
          </p>

          <div class="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-gray-100">
            <div class="text-center">
              <p class="font-serif text-3xl text-[#E67E22] mb-1">15+</p>
              <p class="font-sans text-[10px] uppercase tracking-wider text-gray-500">Années d'Excellence</p>
            </div>
            <div class="text-center">
              <p class="font-serif text-3xl text-[#E67E22] mb-1">5★</p>
              <p class="font-sans text-[10px] uppercase tracking-wider text-gray-500">Service Premium</p>
            </div>
            <div class="text-center">
              <p class="font-serif text-3xl text-[#E67E22] mb-1">100%</p>
              <p class="font-sans text-[10px] uppercase tracking-wider text-gray-500">Produits Locaux</p>
            </div>
          </div>

          <router-link
              to="/menu"
              class="inline-block bg-[#1D2B4F] text-white px-10 py-4 transition-all duration-300 uppercase text-xs tracking-widest font-semibold hover:bg-[#E67E22]"
          >
            Découvrir Notre Carte
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>