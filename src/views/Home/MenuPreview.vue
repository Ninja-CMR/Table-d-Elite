<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import imagePrev1 from '../../assets/ImageElite/menuPre1.jpg'
import imagePrev2 from '../../assets/ImageElite/menuPrev2.jpg'
import imagePrev3 from '../../assets/ImageElite/menuPre3.jpg'

const dishes = [
  {
    id: 1,
    name: "Carpaccio de Capitaine",
    description: "Fines tranches de poisson du Littoral, zestes de combava et huile de pépins de courge.",
    price: "8.500 FCFA",
    category: "Entrée",
    image: imagePrev1
  },
  {
    id: 2,
    name: "Ndolé Royal de l'Elite",
    description: "Ndolé onctueux, crevettes de Kribi, noix de Saint-Jacques et plantain mûr rôti.",
    price: "18.000 FCFA",
    category: "Plat",
    image: imagePrev2
  },
  {
    id: 3,
    name: "Filet de Zébu au Poivre",
    description: "Viande de l'Adamaoua maturée 21 jours, sauce au poivre de Penja noir.",
    price: "22.500 FCFA",
    category: "Plat",
    image: imagePrev3
  }
];
</script>

<template>
  <section class="py-24 bg-[#F9F9F9]">
    <div class="container mx-auto px-6 md:px-12">

      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="font-sans text-sm uppercase tracking-[0.3em] text-[#E67E22] mb-4">
          Notre Sélection
        </p>
        <h2 class="font-serif text-4xl md:text-5xl text-[#1D2B4F] mb-6">
          Plats Signatures
        </h2>
        <div class="flex justify-center mb-6">
          <div class="w-3 h-3 rotate-45 bg-[#E67E22]" />
        </div>
        <p class="font-sans text-[#2C3E50]/70 leading-relaxed">
          Découvrez quelques-unes de nos créations emblématiques,
          où tradition et innovation se rencontrent dans chaque assiette.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
            v-for="dish in dishes"
            :key="dish.id"
            class="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
        >
          <div class="relative overflow-hidden aspect-[4/3]">
            <img
                :src="dish.image"
                :alt="dish.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#1D2B4F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span class="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-wider px-3 py-1 bg-[#E67E22] text-white">
              {{ dish.category }}
            </span>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-3">
              <h3 class="font-serif text-xl text-[#1D2B4F] group-hover:text-[#E67E22] transition-colors duration-300">
                {{ dish.name }}
              </h3>
              <span class="font-serif text-lg text-[#E67E22] whitespace-nowrap ml-4">
                {{ dish.price }}
              </span>
            </div>
            <p class="font-sans text-sm text-[#2C3E50]/60 leading-relaxed">
              {{ dish.description }}
            </p>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <router-link
            to="/menu"
            class="inline-flex items-center gap-2 bg-[#E67E22] text-white px-8 py-4 uppercase text-xs tracking-widest font-semibold hover:bg-[#1D2B4F] transition-colors duration-300"
        >
          Voir le Menu Complet
          <ArrowRight :size="18" />
        </router-link>
      </div>

    </div>
  </section>
</template>