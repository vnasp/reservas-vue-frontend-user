<template>
  <NavBar />
  <router-view />
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
  },
  mounted() {
    this.$store.dispatch('cargarUsuarios');
    this.$store.dispatch('cargarReservas');
  }
}
</script>
<style lang="scss">
#app {
  height: 100vh;
}
</style>