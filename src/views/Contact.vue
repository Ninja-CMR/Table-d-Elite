<script setup lang="ts">
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="relative pt-40 pb-20 bg-[#1D2B4F] text-center border-b border-[#E67E22]/20">
      <div class="container mx-auto px-6">
        <p class="font-sans text-xs uppercase tracking-[0.4em] text-[#E67E22] mb-4">
          Nous Trouver
        </p>
        <h1 class="font-serif text-5xl md:text-7xl text-white mb-6">Contact</h1>
        <div class="flex items-center justify-center gap-4">
          <div class="w-16 h-px bg-white/20" />
          <div class="w-3 h-3 rotate-45 bg-[#E67E22]" />
          <div class="w-16 h-px bg-white/20" />
        </div>
      </div>
    </section>

    <main class="py-24">
      <div class="container mx-auto max-w-6xl px-6">

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div class="bg-gray-50 p-10 text-center transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#E67E22]/30">
            <div class="w-16 h-16 bg-[#1D2B4F]/5 flex items-center justify-center mx-auto mb-6 rounded-full">
              <MapPin class="text-[#E67E22]" :size="28" />
            </div>
            <h3 class="font-serif text-xl text-[#1D2B4F] mb-3">Adresse</h3>
            <p class="font-sans text-sm text-gray-500 leading-relaxed">
              Rez de chaussée immeuble Elite Office<br />
              Rue Dubois de Saligny
            </p>
          </div>

          <div class="bg-gray-50 p-10 text-center transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#E67E22]/30">
            <div class="w-16 h-16 bg-[#1D2B4F]/5 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Phone class="text-[#E67E22]" :size="28" />
            </div>
            <h3 class="font-serif text-xl text-[#1D2B4F] mb-3">Téléphone</h3>
            <p class="font-sans text-sm text-gray-500 mb-4">+237 6 86 15 17 17</p>
            <a href="tel:+237686151717" class="font-sans text-xs uppercase tracking-widest text-[#E67E22] font-bold hover:opacity-70 transition-opacity">
              Appeler
            </a>
          </div>

          <div class="bg-gray-50 p-10 text-center transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#E67E22]/30">
            <div class="w-16 h-16 bg-[#1D2B4F]/5 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Mail class="text-[#E67E22]" :size="28" />
            </div>
            <h3 class="font-serif text-xl text-[#1D2B4F] mb-3">Email</h3>
            <p class="font-sans text-sm text-gray-500 mb-4">restaurant@eliteofficescm.com</p>
            <a href="restaurant@eliteofficescm.com" class="font-sans text-xs uppercase tracking-widest text-[#E67E22] font-bold hover:opacity-70 transition-opacity">
              Nous écrire
            </a>
          </div>

          <div class="bg-gray-50 p-10 text-center transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#E67E22]/30">
            <div class="w-16 h-16 bg-[#1D2B4F]/5 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Clock class="text-[#E67E22]" :size="28" />
            </div>
            <h3 class="font-serif text-xl text-[#1D2B4F] mb-3">Horaires</h3>
            <p class="font-sans text-sm text-gray-500 italic">
              Mar - Dim<br />
              12h00 - 14h30<br />
              19h00 - 22h30
            </p>
            <p class="text-[10px] text-[#E67E22] uppercase tracking-tighter mt-4 font-bold">Fermé le Lundi</p>
          </div>
        </div>

        <div class="relative w-full h-[500px] bg-gray-100 shadow-2xl overflow-hidden rounded-sm group">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8828236750014!2d9.6833!3d4.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be202875b%3A0x280e8e6006f1406c!2sBonanjo%2C%20Douala!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="filter grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>

          <div class="absolute bottom-8 left-8 bg-[#1D2B4F] p-8 text-white hidden md:block max-w-xs shadow-xl border-l-4 border-[#E67E22]">
            <h4 class="font-serif text-2xl mb-2">La Table de l'Elite</h4>
            <p class="text-sm text-white/70 font-sans italic leading-relaxed">
              Situé au cœur du quartier administratif, à deux pas du Port Autonome de Douala.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-16 mt-32">
          <div class="border-l border-gray-100 pl-8">
            <h3 class="font-serif text-3xl text-[#1D2B4F] mb-6">Événements Privés</h3>
            <p class="font-sans text-gray-500 leading-loose mb-6">
              La Table de l'Elite met à votre disposition un salon privé d'exception pouvant accueillir jusqu'à 20 convives pour vos moments les plus précieux.
            </p>
            <p class="font-sans text-gray-400 text-sm italic">
              Dîners d'affaires, anniversaires ou célébrations privées : notre équipe conçoit pour vous une expérience sur-mesure.
            </p>
          </div>

          <div class="border-l border-gray-100 pl-8">
            <h3 class="font-serif text-3xl text-[#1D2B4F] mb-6">Service Traiteur</h3>
            <p class="font-sans text-gray-500 leading-loose mb-6">
              Invitez l'excellence à votre table. Notre service traiteur haut de gamme se déplace dans toute la ville de Douala pour vos réceptions privées.
            </p>
            <p class="font-sans text-gray-400 text-sm italic">
              Maître d'hôtel, brigade de cuisine et dressage haute couture : nous recréons l'atmosphère de notre restaurant chez vous.
            </p>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Effet de zoom fluide sur les cartes au survol */
.hover-lift {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hover-lift:hover {
  transform: translateY(-8px);
}
</style>