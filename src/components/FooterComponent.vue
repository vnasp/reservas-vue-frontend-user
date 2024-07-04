<template>
  <footer class="footer footer--dark text-center py-2 mt-5">
    <p class="footer__year mb-1">© {{ currentYear }} - Jack Rabbit Slim's - Todos los derechos reservados</p>
    <p class="footer__text mb-0">
      Sitio creado con
      <a :href="framework1Link" target="_blank" rel="noopener noreferrer" class="footer__link">{{ framework1 }}</a>
      y
      <a :href="framework2Link" target="_blank" rel="noopener noreferrer" class="footer__link">{{ framework2 }}</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    framework1: {
      type: String,
      default: "Vue3",
    },
    framework1Link: {
      type: String,
      default: "https://v3.vuejs.org",
    },
    framework2: {
      type: String,
      default: "Bootstrap",
    },
    framework2Link: {
      type: String,
      default: "https://getbootstrap.com",
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped lang="scss">
.footer {
  &--dark {
    background-color: #343a40;
    color: #ffffff;
  }
  
  &__year {
    margin-bottom: 1rem;
  }

  &__link {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>