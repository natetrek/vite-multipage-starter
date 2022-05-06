import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import BaseHome from './pages/BaseHome.vue';
import NotFound from './pages/NotFound.vue';

import './css/main.css'

const routes = [
  { path: '/', component: BaseHome },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
