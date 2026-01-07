import { createRouter, createWebHistory  } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/Home.vue'),
        meta: { title: 'Accueil - La Table de l’Elite' }
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue'),
        meta: { title: 'Notre Carte - La Table de l’Elite' }
    },
    {
        path: '/galerie',
        name: 'Galerie',
        component: () => import('../views/Gallery.vue'),
        meta: { title: 'Galerie - La Table de l’Elite' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: { title: 'Contact - La Table de l’Elite' }
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: () => import('../views/Reservation.vue'),
        meta: { title: 'Réserver une Table - La Table de l’Elite' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;