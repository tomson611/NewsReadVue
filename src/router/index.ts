import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: HomeView
    },
    {
      path: '/read',
      name: 'read',
      component: HomeView
    },
    {
      path: '/sources',
      name: 'sources',
      component: HomeView
    }
  ]
})

export default router
