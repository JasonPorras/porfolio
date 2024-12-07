<template>
  <header>
    <div class="header--centered container">
      <div class="header__logo">
        <a href="/">
          <img :src="getLogo" alt="Logo principal" loading="lazy" />
        </a>
      </div>
      <nav class="header__nav--desktop">
        <ul class="header__list">
          <li v-for="link in links" :key="link.id" class="header__item">
            <a :href="link.href" class="header__link" @click.prevent="scrollTo(link.href)">
              {{ $t(link.label) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="settings">
        <button class="language-toggle" @click="toggleLanguage" aria-label="Cambiar idioma">
          <img :src="languageFlag" :alt="languageAlt" class="language-toggle__flag" />
        </button>
        <button class="theme-toggle" @click="toggleTheme" aria-label="Cambiar tema">
          <i :class="themeIcon"></i>
        </button>
      </div>
    </div>
    <nav class="header__nav--mobile">
      <button class="header__toggle" @click="toggleMenu" aria-label="Abrir menú">☰</button>
      <ul class="header__list" :class="{ 'header__list--open': isMenuOpen }">
        <li v-for="link in links" :key="link.id" class="header__item">
          <a :href="link.href" class="header__link" @click.prevent="scrollTo(link.href)">
            {{ $t(link.label) }}
          </a>
        </li>
        <li class="header__item settings--mobile">
          <button class="language-toggle" @click="toggleLanguage" aria-label="Cambiar idioma">
            <img :src="languageFlag" :alt="languageAlt" class="language-toggle__flag" />
          </button>
          <button class="theme-toggle" @click="toggleTheme" aria-label="Cambiar tema">
            <i :class="themeIcon"></i>
          </button>
        </li>
      </ul>
    </nav>
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
        { id: 1, label: 'header.portfolio', href: '#portfolio' },
        { id: 2, label: 'header.blog', href: '#blog' },
        { id: 3, label: 'header.hireMe', href: '#hire' }
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
    scrollTo(selector) {
      this.$scrollTo(selector, { duration: 800, offset: -100 })
    },
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'es' ? 'en' : 'es'
      this.$i18n.locale = newLocale
      localStorage.setItem('preferredLocale', newLocale)
    }
  }
}
</script>
