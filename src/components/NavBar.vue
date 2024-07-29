<template>
  <header class="d-flex flex-column justify-content-start align-items-center">
    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand fw-bolder fs-2" href="./">HOSTAL</a>
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
    <div class="mt-5 pt-5">
      <h1 class="text-start text-uppercase fw-bolder mt-5">Hostal Patagonia</h1>
      <div class="d-inline-block">
        <h2 class="d-inline-block">Tu próxima aventura<span class="text-primary">.</span></h2>
        <div class="text-end">
          <HomeButton to="/reservas" text="Reservar" class="fw-bold text-uppercase d-inline-block fs-5"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HomeButton from '@/components/HomeButton.vue';

export default {
  name: "NavBar",
  components: {
    HomeButton,
  },
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
    },
  }
}
</script>

<style scoped lang="scss">
header {
  background: url('/public/img/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;
  margin-top: 0;
  padding-top: 1rem;
}

h2 {
  text-transform: uppercase;
  font-size:5rem !important;
  font-weight: 900;
}

.header__reservar{
  margin-top: -20px;
  padding: 1rem 2rem;
}

.navbar {
  width: 80%;
  border-radius: 10px;
  background-color: #90909025;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

</style>