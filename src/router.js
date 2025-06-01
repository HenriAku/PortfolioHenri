// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/projetVue/Home.vue'
import Projet1 from '@/projetVue/Projet1.vue'
import Projet2 from '@/projetVue/Projet2.vue'
import Projet3 from '@/projetVue/Projet3.vue'
import Projet4 from '@/projetVue/Projet4.vue'
import Projet5 from '@/projetVue/Projet5.vue'
import Projet6 from '@/projetVue/Projet6.vue'
import Projet7 from '@/projetVue/Projet7.vue'
import Projet8 from '@/projetVue/Projet8.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/projet1', component: Projet1 },
	{ path: '/projet2', component: Projet2 },
	{ path: '/projet3', component: Projet3 },
	{ path: '/projet4', component: Projet4 },
	{ path: '/projet5', component: Projet5 },
	{ path: '/projet6', component: Projet6 },
	{ path: '/projet7', component: Projet7 },
	{ path: '/projet8', component: Projet8 }

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})
