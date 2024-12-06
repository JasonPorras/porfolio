<template>
  <div style="display: flex; flex-direction: column">
    <ProgressBar />
    <!-- <HeroProfile />
    <PortfolioSection />
    <BlogSection />
    <HireSection /> -->
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue' // Asegúrate de que la ruta sea correcta
import PortfolioSection from '@/components/Portfolio.vue'
import BlogSection from '@/components/Blog.vue'
import HireSection from '@/components/Hire.vue'

export default {
  name: 'HomePage',
  components: {
    ProgressBar,
    PortfolioSection,
    BlogSection,
    HireSection
  }
}
</script>
