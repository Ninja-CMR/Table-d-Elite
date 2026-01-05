<script setup lang="ts">
import { ref } from 'vue'

import imgEntrees from "../assets/ImageElite/dishesImage.jpg";
import imgPoissons from "../assets/ImageElite/Dishe2.jpeg";
import imgViandes from "../assets/ImageElite/Dishe3.jpg";
import imgDesserts from "../assets/ImageElite/Dishe4.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  preference?: 'Végétarien' | 'Signature' | 'Nouveau' | 'Pimenté';
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'entrees',
    title: "Les Entrées",
    subtitle: "L'éveil des sens et la finesse du terroir",
    image: imgEntrees,
    items: [
      { name: "Salade de Cœur de Palmier", description: "Cœur de palmier frais de la Sanaga, émulsion d'agrumes et pignons de pin.", price: "12 000 FCFA", preference: "Végétarien" },
      { name: "Escalope de Foie Gras", description: "Poêlée minute, mangue caramélisée au poivre de Penja et réduction de vin de palme.", price: "25 000 FCFA", preference: "Signature" },
      { name: "Tartare de Thon Rouge", description: "Thon de Kribi, avocat de Buéa, gingembre et citron vert.", price: "18 000 FCFA" },
      { name: "Velouté de Pistache", description: "Crème onctueuse, huile de truffe blanche et éclats de noisettes.", price: "14 000 FCFA", preference: "Végétarien" }
    ]
  },
  {
    id: 'poissons',
    title: "Les Poissons",
    subtitle: "Trésors de l'Océan Atlantique",
    image: imgPoissons,
    items: [
      { name: "Queue de Langouste de Kribi", description: "Beurre d'ail noir, risotto de fonio aux petits légumes du jardin.", price: "45 000 FCFA", preference: "Signature" },
      { name: "Dos de Capitaine", description: "En croûte de pistache, purée de macabo onctueuse et beurre blanc.", price: "28 000 FCFA" },
      { name: "Bar de Ligne Grillé", description: "Légumes de saison, émulsion au ndolé et huile de palme clarifiée.", price: "32 000 FCFA" },
      { name: "Gambas Royales au Cognac", description: "Flambées minute, bisque légère et riz parfumé de Ndop.", price: "38 000 FCFA" }
    ]
  },
  {
    id: 'viandes',
    title: "Les Viandes",
    subtitle: "La noblesse des pâturages de l'Adamaoua",
    image: imgViandes,
    items: [
      { name: "Filet de Bœuf Rossini", description: "Filet d'Adamaoua, foie gras poêlé, sauce truffée et plantain mûr rôti.", price: "35 000 FCFA", preference: "Signature" },
      { name: "Souris d'Agneau de 12h", description: "Miel de l'Adamaoua, romarin et couscous de petit mil.", price: "32 000 FCFA" },
      { name: "Magret de Canard au Chocolat", description: "Sauce au cacao 70% de la Sanaga, gratin dauphinois.", price: "30 000 FCFA", preference: "Nouveau" },
      { name: "Pintade Fermière aux Champignons", description: "Farcie aux bolets des forêts de l'Est, crème au curcuma.", price: "26 000 FCFA" }
    ]
  },
  {
    id: 'desserts',
    title: "Les Desserts",
    subtitle: "Douceurs finales et gourmandises",
    image: imgDesserts,
    items: [
      { name: "Dôme Chocolat-Passion", description: "Cacao camerounais, cœur fondant passion et éclat de meringue.", price: "12 000 FCFA", preference: "Signature" },
      { name: "Carpaccio d'Ananas de Penja", description: "Infusion citronnelle, sorbet coco maison et menthe fraîche.", price: "10 000 FCFA", preference: "Végétarien" },
      { name: "Fondant Baobab & Vanille", description: "Saveurs uniques du Nord, crème anglaise à la vanille bourbon.", price: "11 000 FCFA" },
      { name: "Assiette de Fromages Affinés", description: "Sélection premium, confiture de figues et pain aux noix.", price: "15 000 FCFA" }
    ]
  }
];

const activeTab = ref('entrees');
</script>

<template>
  <div class="min-h-screen bg-white">

    <section class="relative pt-40 pb-20 bg-[#1D2B4F] text-center border-b border-[#E67E22]/20">
      <div class="container mx-auto px-6">
        <p class="font-sans text-xs uppercase tracking-[0.4em] text-[#E67E22] mb-4">Expérience Gastronomique</p>
        <h1 class="font-serif text-5xl md:text-7xl text-white mb-6">La Carte</h1>
        <div class="flex justify-center items-center gap-4">
          <div class="w-16 h-px bg-white/20"></div>
          <div class="w-2 h-2 rotate-45 bg-[#E67E22]"></div>
          <div class="w-16 h-px bg-white/20"></div>
        </div>
      </div>
    </section>

    <nav class="sticky top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div class="container mx-auto px-6">
        <div class="flex justify-center items-center overflow-x-auto no-scrollbar py-4 gap-6 md:gap-12">
          <button
              v-for="cat in menuCategories"
              :key="cat.id"
              @click="activeTab = cat.id"
              :class="[
              'font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b-2 whitespace-nowrap',
              activeTab === cat.id ? 'border-[#E67E22] text-[#1D2B4F] font-bold' : 'border-transparent text-gray-400 hover:text-[#1D2B4F]'
            ]"
          >
            {{ cat.title }}
          </button>
        </div>
      </div>
    </nav>

    <main class="py-20 min-h-[700px]">
      <div class="container mx-auto px-6 max-w-6xl">

        <transition name="fade-up" mode="out-in">
          <div :key="activeTab" class="space-y-16">

            <div class="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-sm">
              <div class="w-full md:w-1/3">
                <div class="relative overflow-hidden aspect-square border-4 border-white shadow-xl">
                  <img
                      :src="menuCategories.find(c => c.id === activeTab)?.image"
                      class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-[#1D2B4F]/10"></div>
                </div>
              </div>
              <div class="w-full md:w-2/3 text-center md:text-left">
                <h2 class="font-serif text-4xl text-[#1D2B4F] mb-3">
                  {{ menuCategories.find(c => c.id === activeTab)?.title }}
                </h2>
                <p class="font-serif text-lg italic text-gray-500">
                  {{ menuCategories.find(c => c.id === activeTab)?.subtitle }}
                </p>
                <div class="w-12 h-1 bg-[#E67E22] mt-6 mx-auto md:mx-0"></div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-x-16 gap-y-12">
              <article
                  v-for="item in menuCategories.find(c => c.id === activeTab)?.items"
                  :key="item.name"
                  class="group"
              >
                <div class="flex justify-between items-baseline mb-2 gap-4">
                  <div class="flex items-center gap-3">
                    <h3 class="font-serif text-xl text-[#1D2B4F] group-hover:text-[#E67E22] transition-colors duration-300">
                      {{ item.name }}
                    </h3>
                    <span
                        v-if="item.preference"
                        class="text-[8px] px-2 py-0.5 border border-[#E67E22] text-[#E67E22] rounded-full uppercase font-bold tracking-tighter"
                    >
                      {{ item.preference }}
                    </span>
                  </div>
                  <div class="flex-grow border-b border-dotted border-gray-300 mx-2 mb-1 h-0"></div>
                  <span class="font-serif text-[#1D2B4F] font-bold">{{ item.price }}</span>
                </div>
                <p class="font-sans text-sm text-gray-400 leading-relaxed italic pr-12">
                  {{ item.description }}
                </p>
              </article>
            </div>

          </div>
        </transition>
      </div>
    </main>

    <section class="py-12 bg-[#F9F9F9] border-t border-gray-100">
      <div class="container mx-auto px-6 text-center max-w-2xl">
        <p class="font-sans text-[11px] text-gray-400 uppercase tracking-widest leading-loose">
          Service de Prestige • Ingrédients d'Exception • Origine Cameroun certifiée<br/>
          <span class="italic text-gray-300 lowercase text-[10px]">Prix nets en FCFA service compris.</span>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Suppression de la scrollbar pour les onglets sur mobile */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animation de transition entre catégories */
.fade-up-enter-active, .fade-up-leave-active {
  transition: all 0.5s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Effet de focus sur le menu */
article {
  transition: all 0.3s ease;
}
article:hover {
  transform: translateX(5px);
}
</style>