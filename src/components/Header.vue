<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

// État du scroll et du menu mobile
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Le Menu", href: "/menu" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Fermer le menu mobile lors d'un changement de route
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});
</script>

<template>
  <header
      :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        : 'bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-6 md:px-12">
      <nav class="flex items-center justify-between">

        <router-link to="/" class="flex items-center gap-3">
          <div class="relative">
            <div
                :class="[
                'w-10 h-10 rotate-45 border-2 flex items-center justify-center transition-colors duration-300',
                isScrolled ? 'border-[#1D2B4F]' : 'border-white'
              ]"
            >
              <div
                  :class="[
                  '-rotate-45 text-xs font-serif font-bold transition-colors duration-300',
                  isScrolled ? 'text-[#1D2B4F]' : 'text-white'
                ]"
              >
                TE
              </div>
            </div>
          </div>
          <div class="hidden sm:block">
            <span
                :class="[
                'font-serif text-xl tracking-wide transition-colors duration-300',
                isScrolled ? 'text-[#1D2B4F]' : 'text-white'
              ]"
            >
              La Table de l'Elite
            </span>
          </div>
        </router-link>

        <div class="hidden lg:flex items-center gap-10">
          <router-link
              v-for="link in navLinks"
              :key="link.name"
              :to="link.href"
              :class="[
              'relative font-sans text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#E67E22]',
              isScrolled
                ? (route.path === link.href ? 'text-[#E67E22]' : 'text-[#1D2B4F]')
                : (route.path === link.href ? 'text-[#E67E22]' : 'text-white/90')
            ]"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div class="hidden lg:block">
          <router-link
              to="/reservation"
              :class="[
              'px-6 py-2 transition-all duration-300 font-sans uppercase text-xs tracking-widest border',
              isScrolled
                ? 'bg-[#E67E22] text-white border-[#E67E22] hover:bg-[#1D2B4F]'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-[#1D2B4F]'
            ]"
          >
            Réserver une Table
          </router-link>
        </div>

        <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
            'lg:hidden p-2 transition-colors duration-300',
            isScrolled ? 'text-[#1D2B4F]' : 'text-white'
          ]"
        >
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </nav>

      <transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-500 ease-in"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[400px] opacity-100"
          leave-from-class="max-h-[400px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden mt-6">
          <div
              :class="[
              'flex flex-col gap-4 py-6 px-4 rounded-sm shadow-xl',
              isScrolled ? 'bg-white' : 'bg-[#1D2B4F]/95 backdrop-blur-md'
            ]"
          >
            <router-link
                v-for="link in navLinks"
                :key="link.name"
                :to="link.href"
                :class="[
                'font-sans text-sm uppercase tracking-[0.15em] py-2 transition-colors duration-300',
                route.path === link.href ? 'text-[#E67E22]' : (isScrolled ? 'text-[#1D2B4F]' : 'text-white')
              ]"
            >
              {{ link.name }}
            </router-link>
            <router-link
                to="/reservation"
                class="mt-4 bg-[#E67E22] text-white py-3 text-center uppercase text-xs tracking-[0.2em]"
            >
              Réserver une Table
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
/* Optionnel : Ajout d'un effet souligné personnalisé pour le menu */
.router-link-active {
  font-weight: 600;
}
</style>