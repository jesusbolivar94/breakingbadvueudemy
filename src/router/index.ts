import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/shared/pages/HomePage.vue"
import AboutPage from "@/shared/pages/AboutPage.vue"
import {charactersRoute} from "@/characters/router";

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        // Public
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },

        // Characters
        //{ path: '/characters', name: 'characters', component: () => import('@/characters/layouts/CharacterLayout.vue') },
        //charactersRoute,
        {
            ...charactersRoute,
            path: '/characters'
        },

        // Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home'})}
    ],
})

//router.addRoute( charactersRoute )

export default router