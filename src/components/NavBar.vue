<template>
 <header>
  <nav class="navbar navbar-expand-lg fixed-top px-4" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand fw-bolder fs-2" href="/">HOSTAL</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav ps-4 nav-underline">
          <li class="nav-item" v-for="(ruta, index) in rutas_generales" :key="index">
            <router-link class="nav-link" activeClass="active disabled" :to="ruta.path">{{ ruta.name }}</router-link>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 text-white">
          <router-link class="nav-link" activeClass="active disabled" to="/login" v-if="!isAuthenticated"><i class="bi bi-person-fill"></i> Ingresar</router-link>
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
      brand: "Hostal Patagonia",
      logo: "/img/logo2.png",
      rutas_generales: [
        {
          name: "Inicio",
          path: "/"
        },
        {
          name: "Servicios",
          path: "/servicios"
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
  height:50px;
}
.navbar {
  margin: 1rem auto;
  width: 80%;
  border-radius: 10px;
  background-color: #90909025; /* Color de fondo semi-transparente */
  backdrop-filter: blur(2px); /* Desenfoque para el efecto glaseado */
  -webkit-backdrop-filter: blur(2px); /* Compatibilidad con navegadores WebKit */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05); /* Borde semi-transparente */
}

</style>
