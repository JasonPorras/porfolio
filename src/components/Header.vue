<template>
  <header class="header">
    <div class="header--centered container">
      <!-- Logo -->
      <div class="header__logo">
        <a href="/">
          <img :src="getLogo" alt="Logo principal" loading="lazy" />
        </a>
      </div>

      <!-- Botón de menú -->
      <button class="header__toggle" @click="toggleMenu" aria-label="Abrir menú">☰</button>

      <!-- Menú de navegación -->
      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <ul class="header__list">
          <li v-for="link in links" :key="link.id" class="header__item">
            <a :href="link.href" class="header__link">
              <i :class="link.icon" class="header__icon"></i>
              {{ $t(link.label) }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Configuración (idioma y tema) -->
      <div class="settings">
        <button class="language-toggle" @click="toggleLanguage" aria-label="Cambiar idioma">
          <img :src="languageFlag" :alt="languageAlt" class="language-toggle__flag" />
        </button>
        <button class="theme-toggle" @click="toggleTheme" aria-label="Cambiar tema">
          <i :class="themeIcon"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: ['isLightTheme'],
  data() {
    return {
      isMenuOpen: false,
      links: [
        { id: 1, label: 'header.portfolio', href: '#portfolio', icon: 'fas fa-briefcase' },
        { id: 2, label: 'header.blog', href: '#blog', icon: 'fas fa-blog' },
        { id: 3, label: 'header.hireMe', href: '#hire', icon: 'fas fa-envelope' }
      ]
    }
  },
  computed: {
    getLogo() {
      return this.isLightTheme
        ? new URL('@/assets/img/logo-dark.svg', import.meta.url).href
        : new URL('@/assets/img/logo-light.svg', import.meta.url).href
    },
    languageFlag() {
      return this.$i18n.locale === 'es'
        ? new URL('@/assets/img/flags/united-states.png', import.meta.url).href
        : new URL('@/assets/img/flags/flag.png', import.meta.url).href
    },
    languageAlt() {
      return this.$i18n.locale === 'es' ? 'English' : 'Español'
    },
    themeIcon() {
      return this.isLightTheme ? 'fas fa-moon' : 'fas fa-sun'
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleTheme() {
      this.$emit('theme-changed')
    },
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'es' ? 'en' : 'es'
      this.$i18n.locale = newLocale
      localStorage.setItem('preferredLocale', newLocale)
    }
  }
}
</script>
