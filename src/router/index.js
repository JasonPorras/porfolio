import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue'; // Asegúrate de que esta ruta sea correcta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Aquí puedes agregar más rutas
];

const router = createRouter({
  history: createWebHistory(), // No es necesario especificar BASE_URL si está configurado correctamente
  routes,
});

export default router;
