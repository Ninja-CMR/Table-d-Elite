<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { Calendar, Clock, Users, Check, MessageSquare } from 'lucide-vue-next';
import { useWhatsApp } from '../composables/useWhatsApp';

import diningRoom from "../assets/ImageElite/Reservation.jpg";

const { sendReservationToWhatsApp } = useWhatsApp();

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "Aucune occasion particulière",
  requests: "",
});

const isSubmitted = ref(false);

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

const occasions = [
  "Aucune occasion particulière",
  "Anniversaire",
  "Dîner romantique",
  "Repas d'affaires",
  "Célébration",
  "Autre",
];

const handleSubmit = () => {
  // 1. On envoie les données vers WhatsApp via le composable
  sendReservationToWhatsApp(formData.value);

  // 2. On affiche l'écran de succès sur le site
  isSubmitted.value = true;
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="relative pt-40 pb-20 bg-[#1D2B4F] text-center border-b border-[#E67E22]/20">
      <div class="container mx-auto px-6">
        <p class="font-sans text-xs uppercase tracking-[0.4em] text-[#E67E22] mb-4">Votre Table Vous Attend</p>
        <h1 class="font-serif text-5xl md:text-7xl text-white mb-6">Réservation</h1>
        <div class="w-16 h-px bg-[#E67E22] mx-auto opacity-50"></div>
      </div>
    </section>

    <main class="py-24">
      <div class="container mx-auto max-w-6xl px-6">

        <div v-if="isSubmitted" class="text-center max-w-2xl mx-auto animate-fade-in">
          <div class="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
            <Check class="w-10 h-10 text-green-600" />
          </div>
          <h2 class="font-serif text-4xl text-[#1D2B4F] mb-6">Demande Envoyée</h2>
          <p class="font-sans text-gray-500 mb-8 leading-relaxed">
            Merci {{ formData.firstName }}. Votre demande a été préparée pour WhatsApp.
            Si la fenêtre ne s'est pas ouverte, merci de nous contacter directement.
          </p>
          <router-link to="/" class="inline-block bg-[#1D2B4F] text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-[#E67E22] transition-colors">
            Retour à l'accueil
          </router-link>
        </div>

        <div v-else class="grid lg:grid-cols-2 gap-20">

          <div class="space-y-8">
            <div>
              <h2 class="font-serif text-3xl text-[#1D2B4F] mb-4">Réservez Votre Table</h2>
              <p class="font-sans text-gray-500 italic">
                Remplissez vos informations. Vous serez redirigé vers notre service de conciergerie WhatsApp pour la confirmation finale.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">Prénom *</label>
                  <input v-model="formData.firstName" type="text" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none transition-colors" placeholder="Jean">
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">Nom *</label>
                  <input v-model="formData.lastName" type="text" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none transition-colors" placeholder="Moudiki">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">Email *</label>
                  <input v-model="formData.email" type="email" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none transition-colors" placeholder="contact@email.com">
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">Téléphone *</label>
                  <input v-model="formData.phone" type="tel" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none transition-colors" placeholder="+237 ...">
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                  <label class="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">
                    <Calendar :size="14" class="text-[#E67E22]"/> Date
                  </label>
                  <input v-model="formData.date" type="date" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none">
                </div>
                <div class="space-y-2">
                  <label class="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">
                    <Clock :size="14" class="text-[#E67E22]"/> Heure
                  </label>
                  <select v-model="formData.time" required class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none bg-transparent">
                    <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
                <div class="space-y-2 col-span-2 md:col-span-1">
                  <label class="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">
                    <Users :size="14" class="text-[#E67E22]"/> Couverts
                  </label>
                  <select v-model="formData.guests" class="w-full border-b border-gray-200 py-3 focus:border-[#E67E22] outline-none bg-transparent">
                    <option v-for="n in 8" :key="n" :value="n">{{ n }} Personnes</option>
                    <option value="9+">Groupe 9+</option>
                  </select>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest font-bold text-[#1D2B4F]">Requêtes Spéciales</label>
                <textarea v-model="formData.requests" rows="3" class="w-full border border-gray-100 p-4 focus:border-[#E67E22] outline-none resize-none bg-gray-50" placeholder="Allergies, table préférée..."></textarea>
              </div>

              <button type="submit" class="w-full bg-[#1D2B4F] text-white py-5 flex items-center justify-center gap-3 uppercase text-xs tracking-[0.3em] hover:bg-[#E67E22] transition-all duration-500 shadow-xl group">
                <MessageSquare :size="18" class="group-hover:rotate-12 transition-transform" />
                Réserver via WhatsApp
              </button>
            </form>
          </div>

          <div class="hidden lg:block">
            <div class="sticky top-32 space-y-8">
              <div class="relative group overflow-hidden shadow-2xl">
                <img :src="diningRoom" class="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1D2B4F]/80 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8 text-white">
                  <p class="font-serif text-2xl italic">"Une expérience culinaire inoubliable au cœur de Bonanjo."</p>
                </div>
              </div>

              <div class="bg-gray-50 p-10 border-l-4 border-[#E67E22]">
                <h4 class="font-serif text-xl text-[#1D2B4F] mb-4">Informations Utiles</h4>
                <ul class="space-y-4 text-sm text-gray-500 font-sans">
                  <li class="flex justify-between"><span>Déjeuner</span> <strong>12:00 - 14:30</strong></li>
                  <li class="flex justify-between"><span>Dîner</span> <strong>19:00 - 22:30</strong></li>
                  <li class="flex justify-between border-t border-gray-200 pt-4"><span>Groupes (+8)</span> <span class="text-[#E67E22]">Contact Direct</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>