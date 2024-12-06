<template>
  <footer class="footer">
    <div class="footer__content container">
      <p>&copy; {{ currentYear }} Jason Porras. Todos los derechos reservados.</p>
      <nav class="footer__nav">
        <ul class="footer__list">
          <li class="footer__item"><a @click.prevent="scrollTo('#about')" class="footer__link">Sobre Mí</a></li>
          <li class="footer__item"><a @click.prevent="scrollTo('#portfolio')" class="footer__link">Portafolio</a></li>
          <li class="footer__item"><a @click.prevent="scrollTo('#blog')" class="footer__link">Blog</a></li>
          <li class="footer__item"><a @click.prevent="scrollTo('#hire')" class="footer__link">Contrátame</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    scrollTo: {
      type: Function,
      required: true, // Requiere que scrollTo se pase como prop
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), // Obtener el año actual
    };
  }
}
</script>