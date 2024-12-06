<template>
  <div :class="isLightTheme ? 'light-theme' : 'dark-theme'">
    <header-component
      @theme-changed="toggleTheme"
      :isLightTheme="isLightTheme"
      :scrollTo="scrollTo"
    />
    <router-view />
    <footer-component :scrollTo="scrollTo" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue' // Importa tu componente de Footer

export default {
  name: 'App',
  components: {
    HeaderComponent
    // FooterComponent,
  },
  data() {
    return {
      isLightTheme: true // El tema claro es el predeterminado
    }
  },
  methods: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme // Cambia el estado del tema
    },
    scrollTo(selector) {
      this.$scrollTo(selector, {
        duration: 800, // Cambia la duración a 800ms para un efecto más prolongado
        offset: -100, // Ajusta el desplazamiento según tu diseño
        easing: 'ease-in-out' // Cambia el easing para un efecto diferente
      })
    }
  }
}
</script>
