import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import GalleryView from '../views/GalleryView.vue';
import ContactView from '../views/ContactView.vue';
import ManagementView from '../views/ManagementView.vue';
import ProductsAndServices from '../views/ProductsAndServices.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/management',
    name: 'management',
    component: ManagementView
  },
  {
    path: '/products-services',
    name: 'products',
    component: ProductsAndServices
  },

  //    redirect to home page if route not found
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  }

})



export default router
