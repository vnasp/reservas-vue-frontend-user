<template>
  <footer class="footer footer--dark text-center py-2 mt-5">
    <div class="container d-flex flex-row justify-content-between">
      <div class="footer__year mb-1">© {{ currentYear }} - Hostal Patagonia - Todos los derechos reservados</div>
      <div>Sitio creado con 
        <a :href="framework1Link" target="_blank" rel="noopener noreferrer" class="footer__link">{{ framework1 }}</a>
y
        <a :href="framework2Link" target="_blank" rel="noopener noreferrer" class="footer__link">{{ framework2 }}</a>
      </div>
    </div>
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
    background-color: var(--bs-dark);
    color: #ffffff;
    font-size:10px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
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