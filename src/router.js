import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/detail/:category/:feature',
    name: 'Detail',
    component: () => import('./views/Detail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
