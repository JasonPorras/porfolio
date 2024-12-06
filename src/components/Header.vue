<template>
  <header>
    <div class="header--centered container">
      <div class="header__logo">
        <img
          :src="
            isLightTheme ? '../src/assets/img/logo-dark.svg' : '../src/assets/img/logo-light.svg'
          "
          alt="Logo"
        />
      </div>
      <nav class="header__nav--desktop">
        <button class="header__toggle" @click="toggleMenu">☰</button>
        <ul class="header__list" :class="{ 'header__list--open': isMenuOpen }">
          <li class="header__item">
            <a href="#portfolio" class="header__link" @click.prevent="scrollTo('#portfolio')">{{
              $t('header.portfolio')
            }}</a>
          </li>
          <li class="header__item">
            <a href="#blog" class="header__link" @click.prevent="scrollTo('#blog')">{{
              $t('header.blog')
            }}</a>
          </li>
          <li class="header__item">
            <a href="#hire" class="header__link" @click.prevent="scrollTo('#hire')">{{
              $t('header.hireMe')
            }}</a>
          </li>
        </ul>
      </nav>
      <!-- Botón para cambiar idioma -->
      <div class="settings">
        <button class="language-toggle" @click="toggleLanguage">
          <img
            v-if="$i18n.locale === 'es'"
            src="../../src/assets/img/flags/united-states.png"
            alt="English"
            class="language-toggle__flag"
          />
          <img
            v-else
            src="../../src/assets/img/flags/flag.png"
            alt="Español"
            class="language-toggle__flag"
          />
        </button>
        <!-- Botón para cambiar el tema -->
        <button class="theme-toggle" @click="toggleTheme">
          <i :class="isLightTheme ? 'fas fa-moon' : 'fas fa-sun'"></i>
        </button>
      </div>
    </div>
    <nav class="header__nav--mobile">
      <button class="header__toggle" @click="toggleMenu">☰</button>
      <ul class="header__list" :class="{ 'header__list--open': isMenuOpen }">
        <li class="header__item">
          <a href="#portfolio" class="header__link" @click.prevent="scrollTo('#portfolio')">{{
            $t('header.portfolio')
          }}</a>
        </li>
        <li class="header__item">
          <a href="#blog" class="header__link" @click.prevent="scrollTo('#blog')">{{
            $t('header.blog')
          }}</a>
        </li>
        <li class="header__item">
          <a href="#hire" class="header__link" @click.prevent="scrollTo('#hire')">{{
            $t('header.hireMe')
          }}</a>
        </li>
        <li class="header__item">
          <button class="language-toggle" @click="toggleLanguage">
            <img
              v-if="$i18n.locale === 'es'"
              src="../../src/assets/img/flags/united-states.png"
              alt="English"
              class="language-toggle__flag"
            />
            <img
              v-else
              src="../../src/assets/img/flags/flag.png"
              alt="Español"
              class="language-toggle__flag"
            />
          </button>
        </li>
        <li class="header__item">
          <!-- Botón para cambiar el tema -->
          <button class="theme-toggle" @click="toggleTheme">
            <i :class="isLightTheme ? 'fas fa-moon' : 'fas fa-sun'"></i>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { scrollTo } from 'vue-scrollto'

export default {
  name: 'HeaderComponent',
  props: ['isLightTheme'],
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleTheme() {
      this.$emit('theme-changed') // Emitir el cambio de tema al componente padre
    },
    scrollTo(selector) {
      scrollTo(selector, {
        duration: 800, // Duración del desplazamiento en milisegundos
        offset: -100 // Desplazamiento adicional, puedes ajustarlo según sea necesario
      })
    },
    // Método para cambiar el idioma
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'es' ? 'en' : 'es'
      localStorage.setItem('preferredLocale', newLocale) // Guardar el idioma en localStorage
      window.location.reload() // Recargar la página
    },
    handleResize() {
      // Si el ancho de la ventana es mayor a 768px, cierra el menú
      if (window.innerWidth > 768) {
        this.isMenuOpen = false
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
