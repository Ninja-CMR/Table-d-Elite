<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-[#F9F9F9] font-sans antialiased text-[#2C3E50]">
    <Header />

    <main>
      <router-view v-slot="{ Component }">
        <transition
            name="fade"
            mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer v-if="$route.name !== 'Reservation'" />
  </div>
</template>

<style>
/* Transition douce entre les pages pour l'effet "Luxe" */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@300;400;600&display=swap');

body {
  margin: 0;
  padding: 0;
}
</style>