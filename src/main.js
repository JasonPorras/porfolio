import { createApp } from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import './assets/scss/main.scss';
import router from './router'; // Importar el router
import i18n from './i18n'; // Importar i18n

const app = createApp(App);

app.use(VueScrollTo); // Usar VueScrollTo
app.use(router); // Usar el router
app.use(i18n); // Usar i18n
app.mount('#app'); // Montar la app
