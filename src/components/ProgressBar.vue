<template>
  <div>
    <div class="flow-line" :style="{ height: flowLineHeight + 'px' }">
      <span class="flow-line__progress">{{ progressPercentage }}%</span>
    </div>
    <canvas ref="confettiCanvas" class="confetti-canvas" v-show="showConfetti"></canvas>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
  name: 'ProgressBar',
  data() {
    return {
      flowLineHeight: 0, // Altura de la línea de flujo
      progressPercentage: 0, // Porcentaje de progreso
      showConfetti: false // Controla la visibilidad del confeti
    }
  },
  methods: {
    updateFlowLine() {
      const scrollTop = window.scrollY // Desplazamiento desde la parte superior de la ventana
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight // Altura total del contenido visible

      if (windowHeight === 0) return // Prevenir división por cero

      this.flowLineHeight = (scrollTop / windowHeight) * window.innerHeight // Actualiza la altura según el desplazamiento
      this.progressPercentage = Math.round((scrollTop / windowHeight) * 100) // Calcula el porcentaje de progreso

      // Muestra el confeti solo una vez cuando el porcentaje es 100%
      if (this.progressPercentage === 100 && !this.showConfetti) {
        this.showConfetti = true // Activa el confeti
        this.launchConfetti() // Llama a la función de confeti
      } else if (this.progressPercentage < 100) {
        this.showConfetti = false // Desactiva el confeti si no estás en 100%
      }
    },
    launchConfetti() {
      const canvas = this.$refs.confettiCanvas
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Genera confeti verde
      confetti({
        particleCount: 100, // Ajusta el número de partículas
        spread: 70,
        origin: { x: 0, y: 1 }, // Esquina inferior izquierda
        colors: ['#28a745', '#ff004c', '#00b894'] // Colores de confeti verde
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateFlowLine)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateFlowLine)
  }
}
</script>