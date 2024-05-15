import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecialityPage from '../views/SpecialityPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import ReviewSection from '@/private/ReviewSection.vue'
import testPage from '@/private/testPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/specialities',
      name: 'specialities',
      component: SpecialityPage
    },
    {
      path:'/contact',
      name:'/contact',
      component: () => import('../views/ContactPage.vue')
    },
    {
      name:'/NotFound',
      path: '/:pathMatch(.*)*',
      component:NotFoundPage
    },
    {
      path:'/Card',
      name:'/Card',
      component: () => import('../private/ServicesAll.vue')
    },
    {
      path:'/reviews',
      name:'/reviews',
      component: ReviewSection
    },
    {
      name:'/test',
      path:'/test',
      component:testPage
    },
  ]
})

export default router
