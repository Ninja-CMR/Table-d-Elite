import { createRouter, createWebHashHistory  } from 'vue-router';


import Home from '../views/Home/Home.vue';
import Menu from '../views/Menu.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';
import Reservation from '../views/Reservation.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Accueil - La Table de l’Elite' }
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu ,
        meta: { title: 'Notre Carte - La Table de l’Elite' }
    },
    {
        path: '/galerie',
        name: 'Galerie',
        component: Gallery ,
        meta: { title: 'Galerie - La Table de l’Elite' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: 'Contact - La Table de l’Elite' }
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation,
        meta: { title: 'Réserver une Table - La Table de l’Elite' }
    }
];

const router = createRouter({
    history: createWebHashHistory(), // Change ici
    routes,
});

export default router;