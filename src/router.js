import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/mainPage.vue';  
import NextPage from '@/components/nextPage.vue';  
import GiftPage from '@/components/giftPage.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;