<template>
 <header>
  <nav class="navbar navbar-expand-lg bg-dark shadow-sm fixed-top p-0" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand" href="/"><img :src="logo" class="header__logo"/> {{ brand }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(ruta, index) in rutas_generales" :key="index">
            <router-link class="nav-link" activeClass="active disabled" :to="ruta.path">{{ ruta.name }}</router-link>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 text-white">
          <router-link class="nav-link" activeClass="active disabled" to="/login" v-if="!isAuthenticated">Inicio de Sesión</router-link>
          <router-link class="nav-link" activeClass="active disabled" to="/registro" v-if="!isAuthenticated">Registro</router-link>
          <router-link class="nav-link btn-outline-secondary" activeClass="active disabled" to="/admin/usuarios" v-if="isAuthenticated && adminStatus">Ver Usuarios</router-link>
          <router-link class="nav-link btn-outline-secondary" activeClass="active disabled" to="/admin/reservas" v-if="isAuthenticated && adminStatus">Ver Reservas</router-link>
          <div class="bg-primary rounded-bottom-4 header__reservar" v-if="isAuthenticated && !adminStatus">
            <router-link class="nav-link" activeClass="active" to="/reservas"><i class="bi bi-calendar3 me-1"></i>Reservas</router-link>
          </div>
          <router-link class="nav-link" activeClass="active" to="/mis-reservas" v-if="isAuthenticated && !adminStatus">Mis Reservas</router-link>
          <button @click="handleLogout" class="nav-link" v-if="isAuthenticated">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "NavBar",
  data() {
    return {
      brand: "Jack Rabbit Slim's",
      logo: "/img/logo.png",
      rutas_generales: [
        {
          name: "Inicio",
          path: "/"
        },
        {
          name: "Menú",
          path: "/menu"
        },
        {
          name: "Contacto",
          path: "/contacto"
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'adminStatus'])
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.header__reservar{
  margin-top: -20px;
  padding: 1rem 2rem;
}
.header__logo {
  height:70px;
}
</style>
