<template>
  <section id="main-section" class="main-section">
    <div class="main-section__content container">
      <div class="hero">
        <div class="hero__inner">
           <p class="hero__pretitle">
            <a href="/about/">Hello, my name is Jason</a>
          </p>
          <h1 class="hero__title">I make websites.</h1>
          <div class="hero__content">
            <p>
              I’m a front-end developer and co-founder of 
              <a href="https://www.codista.com" class="hero__link hero__link--codista">Codista</a>, 
              a software studio in Vienna.&nbsp;<br class="hero__br">
              I also write about the web on my 
              <a href="/blog" class="hero__link">blog</a> and 
              <a href="https://front-end.social/@mxbck" class="hero__link hero__link--mastodon">elsewhere</a>.
            </p>
          </div>
        </div>
      </div>
      <h3 class="main-section__subtitle">Habilidades</h3>
      <div class="skills-cards">
        <div class="skills-cards__item" v-for="skill in skills" :key="skill.name">
          <i :class="skill.icon" class="skills-cards__icon"></i>
          <h4>{{ skill.name }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainSection",
  data() {
    return {
      skills: [
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Sass", icon: "fab fa-sass" }
      ]
    };
  }
};
</script>

<style scoped>
.hero__inner {
  text-align: left;
}

.main-section {
  position: relative;
}

.main-section__content {
  text-align: center;
}

.main-section__subtitle {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.skills-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.skills-cards__item {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.skills-cards__item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.skills-cards__icon {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 15px;
}

.skills-cards__item h4 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 768px) {
  .skills-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .skills-cards {
    grid-template-columns: 1fr;
  }
}
</style>
