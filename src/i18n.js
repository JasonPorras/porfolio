import { createI18n } from 'vue-i18n';

// Importa las traducciones
import en from './locales/en.json';
import es from './locales/es.json';

const messages = {
    en,
    es,
};

// Leer el idioma desde localStorage o usar 'es' como predeterminado
const savedLocale = localStorage.getItem('preferredLocale') || 'es';

// Configuración de vue-i18n
const i18n = createI18n({
    locale: savedLocale, // Idioma actual basado en localStorage
    fallbackLocale: 'en', // Idioma de respaldo
    messages, // Traducciones
});

export default i18n;
