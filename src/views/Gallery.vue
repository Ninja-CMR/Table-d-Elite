<script setup lang="ts">
import { ref, computed } from 'vue';
import { X, Maximize2 } from 'lucide-vue-next';
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size: 'large' | 'tall' | 'normal';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    alt: "L'art du cocktail à l'Elite",
    category: "Ambiance",
    size: 'large'
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Dressage de précision par notre Chef",
    category: "Équipe",
    size: 'tall'
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    alt: "Notre sélection de vins prestigieux",
    category: "Ambiance",
    size: 'normal'
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Filet de bœuf et légumes croquants",
    category: "Cuisine",
    size: 'normal'
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1550966842-30c2768d583c?q=80&w=2070&auto=format&fit=crop",
    alt: "Cadre intimiste pour vos dîners d'affaires",
    category: "Ambiance",
    size: 'normal'
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    alt: "Homard bleu grillé",
    category: "Cuisine",
    size: 'normal'
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop",
    alt: "Douceur au chocolat et fruits rouges",
    category: "Cuisine",
    size: 'tall'
  }
];

const categories = ["Tous", "Cuisine", "Ambiance", "Équipe"];
const selectedCategory = ref("Tous");
const selectedImage = ref<GalleryImage | null>(null);

const filteredImages = computed(() => {
  if (selectedCategory.value === "Tous") return galleryImages;
  return galleryImages.filter((img) => img.category === selectedCategory.value);
});

const openLightbox = (image: GalleryImage) => {
  selectedImage.value = image;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedImage.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <section class="relative pt-40 pb-20 bg-[#1D2B4F] text-center">
      <div class="container mx-auto px-6">
        <p class="font-sans text-xs uppercase tracking-[0.4em] text-[#E67E22] mb-4">L'excellence en images</p>
        <h1 class="font-serif text-5xl md:text-7xl text-white mb-6">Notre Univers</h1>
        <div class="w-16 h-px bg-[#E67E22] mx-auto"></div>
      </div>
    </section>

    <nav class="bg-white border-b border-gray-100 sticky top-[80px] z-30 shadow-sm">
      <div class="container mx-auto px-6 py-4 flex justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar">
        <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
            'font-sans text-[11px] uppercase tracking-widest transition-all duration-500 pb-2 border-b-2',
            selectedCategory === cat ? 'border-[#E67E22] text-[#1D2B4F] font-bold' : 'border-transparent text-gray-400'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </nav>

    <main class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

          <article
              v-for="image in filteredImages"
              :key="image.id"
              @click="openLightbox(image)"
              :class="[
              'relative group cursor-pointer overflow-hidden rounded-sm',
              image.size === 'large' ? 'md:col-span-2 md:row-span-2' : '',
              image.size === 'tall' ? 'md:row-span-2' : ''
            ]"
          >
            <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
            />

            <div class="absolute inset-0 bg-[#1D2B4F]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span class="text-[#E67E22] text-[10px] uppercase tracking-[0.3em] font-bold">{{ image.category }}</span>
                <p class="text-white font-serif text-2xl mt-2 italic">{{ image.alt }}</p>
              </div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Maximize2 class="text-white/50" :size="48" />
              </div>
            </div>
          </article>

        </div>
      </div>
    </main>

    <teleport to="body">
      <transition name="fade">
        <div v-if="selectedImage" class="fixed inset-0 z-[100] bg-[#1D2B4F]/98 flex flex-col items-center justify-center p-4" @click="closeLightbox">
          <button class="absolute top-10 right-10 text-white hover:text-[#E67E22] transition-colors" @click="closeLightbox">
            <X :size="48" />
          </button>

          <div class="max-w-5xl w-full flex flex-col items-center" @click.stop>
            <img :src="selectedImage.src" class="max-h-[75vh] w-auto shadow-2xl border border-white/10" />
            <div class="mt-8 text-center">
              <span class="text-[#E67E22] uppercase tracking-[0.4em] text-xs font-bold">{{ selectedImage.category }}</span>
              <h3 class="text-white font-serif text-3xl mt-2 italic">{{ selectedImage.alt }}</h3>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>