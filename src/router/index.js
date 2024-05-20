import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecialityPage from '../views/SpecialityPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import ReviewPage from '@/private/reviews/ReviewPage.vue'
import testPage from '@/private/testPage.vue'
import ArticlePage from '@/views/ArticlePage.vue'
import ServiceTemplate from '@/private/services/ServiceTemplate.vue'
import ArticleTemplate from '@/private/articles/ArticleTemplate.vue'


const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition){
  //     return savedPosition;
  //   } else {
  //     return {x: 0, y:0 };
  //   }
  // },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/service',
      name: 'Service',
      component: SpecialityPage,
    },
    {
      path: '/contact',
      name: '/contact',
      component: () => import('../views/ContactPage.vue')
    },
    {
      name: '/NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFoundPage
    },
    {
      path: '/Card',
      name: '/Card',
      component: () => import('../private/services/ServicesAll.vue')
    },
    {
      path: '/reviews',
      name: '/reviews',
      component: ReviewPage
    },
    {
      name: '/test',
      path: '/test',
      component: testPage
    },
    {
      name: '/articles',
      path: '/article',
      component: ArticlePage
    },
    {
      name: 'ServiceTemplate',
      path: '/service/:name',
      component: ServiceTemplate,

    },
    {
      name:'ArticleTemplate',
      path:'/article/:name',
      component:ArticleTemplate
    }
  ]
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
