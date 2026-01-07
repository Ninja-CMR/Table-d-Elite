<script setup lang="ts">
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook
} from 'lucide-vue-next';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#1D2B4F] text-white">
    <div class="container mx-auto px-6 md:px-12 py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rotate-45 border-2 border-white flex items-center justify-center">
              <div class="-rotate-45 text-xs font-serif font-bold">TE</div>
            </div>
            <span class="font-serif text-xl tracking-wide">La Table de l'Elite</span>
          </div>
          <p class="font-sans text-sm text-white/70 leading-relaxed">
            Une expérience culinaire d'exception au cœur de Douala (Bonanjo).
            Gastronomie raffinée et service irréprochable pour l'élite camerounaise.
          </p>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6">Navigation</h4>
          <nav class="flex flex-col gap-3">
            <router-link to="/" class="font-sans text-sm text-white/70 hover:text-[#E67E22] transition-colors duration-300">
              Accueil
            </router-link>
            <router-link to="/menu" class="font-sans text-sm text-white/70 hover:text-[#E67E22] transition-colors duration-300">
              Le Menu
            </router-link>
            <router-link to="/galerie" class="font-sans text-sm text-white/70 hover:text-[#E67E22] transition-colors duration-300">
              Galerie
            </router-link>
            <router-link to="/reservation" class="font-sans text-sm text-white/70 hover:text-[#E67E22] transition-colors duration-300">
              Réservation
            </router-link>
          </nav>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6">Contact</h4>
          <div class="flex flex-col gap-4">
            <div class="flex items-start gap-3">
              <MapPin :size="18" class="text-[#E67E22] mt-1 flex-shrink-0" />
              <span class="font-sans text-sm text-white/70">
               Rez de chaussée immeuble Elite Office<br />
                Rue Dubois de Saligny
              </span>
            </div>
            <div class="flex items-center gap-3">
              <Phone :size="18" class="text-[#E67E22] flex-shrink-0" />
              <span class="font-sans text-sm text-white/70">
                +237 6 86 15 17 17
              </span>
            </div>
            <div class="flex items-center gap-3">
              <Mail :size="18" class="text-[#E67E22] flex-shrink-0" />
              <span class="font-sans text-sm text-white/70">
                restaurant@eliteofficescm.com
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6">Horaires</h4>
          <div class="flex flex-col gap-3 mb-6">
            <div class="flex items-start gap-3">
              <Clock :size="18" class="text-[#E67E22] mt-1 flex-shrink-0" />
              <div class="font-sans text-sm text-white/70">
                <p>Mardi - Dimanche</p>
                <p>12h00 - 14h30 | 19h00 - 22h30</p>
                <p class="mt-2 text-[#E67E22] font-semibold">Fermé le Lundi</p>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <a
                href="#"
                class="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-300"
                aria-label="Instagram"
            >
              <Instagram :size="18" />
            </a>
            <a
                href="#"
                class="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-300"
                aria-label="Facebook"
            >
              <Facebook :size="18" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-sans text-[10px] uppercase tracking-widest text-white/40">
            © {{ currentYear }} La Table de l'Elite. Prestige & Tradition.
          </p>
          <div class="flex gap-6">
            <router-link to="#" class="font-sans text-[10px] uppercase tracking-widest text-white/40 hover:text-[#E67E22] transition-colors">
              Mentions Légales
            </router-link>
            <router-link to="#" class="font-sans text-[10px] uppercase tracking-widest text-white/40 hover:text-[#E67E22] transition-colors">
              Confidentialité
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>