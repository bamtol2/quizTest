import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/mainPage.vue';  
import NextPage from '@/components/nextPage.vue';  
import GiftPage from '@/components/giftPage.vue';
import FinalPage from '@/components/finalPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/next-page',
    name: 'NextPage',
    component: NextPage
  },
  {
    path: '/gift-page',
    name: 'GiftPage',
    component: GiftPage
  },
  {
    path: '/final',
    name: 'FinalPage',
    component: FinalPage
  }
];

const router = createRouter({
  history: createWebHistory('/'),  
  routes
});

export default router;
