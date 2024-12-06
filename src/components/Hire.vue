<template>
  <section id="hire" class="hire">
    <h2>Contrátame</h2>
    <p>Si estás interesado en trabajar conmigo, no dudes en contactarme.</p>
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="Tu Nombre" v-model="name" required />
      <input type="email" placeholder="Tu Correo" v-model="email" required />
      <textarea placeholder="Tu Mensaje" v-model="message" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'HireSection',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado:', this.name, this.email, this.message);
      // Restablecer el formulario
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>