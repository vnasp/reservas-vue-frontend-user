<template>
  <header :class="{ 'admin-usuarios': isAdminUsersRoute }" class="header d-flex flex-column justify-content-start align-items-center">
    <nav class="navbar navbar-expand-lg px-4" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand fw-bolder fs-2" href="./">HOSTAL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav ps-4 nav-underline">
            <li class="nav-item" v-for="(ruta, index) in rutas_generales" :key="index">
              <router-link @click="scrollTo('main-content')" class="nav-link" activeClass="active disabled"
                :to="ruta.path">{{ ruta.name }}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ps-4 nav-underline">
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link @click="scrollTo('main-content')" class="nav-link" activeClass="active disabled"
                to="/login"><i class="bi bi-person-fill"></i> Ingresar</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated && adminStatus">
              <router-link class="nav-link btn-outline-secondary" activeClass="active disabled" to="/admin/usuarios">Ver
                Usuarios</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated && adminStatus">
              <router-link class="nav-link btn-outline-secondary" activeClass="active disabled" to="/admin/reservas"
              >Ver Reservas</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated && !adminStatus">
              <div class="bg-primary rounded-bottom-4 header__reservar">
              <router-link class="nav-link" activeClass="active" to="/reservas"><i
                  class="bi bi-calendar3 me-1"></i>Reservar</router-link>
            </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" activeClass="active" to="/mis-reservas"
                v-if="isAuthenticated && !adminStatus">Mis Reservas</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <button @click="handleLogout" class="nav-link">Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div v-if="!isAdminUsersRoute" class="text-uppercase text-center header-content">
      <h1 class="fw-bolder mt-5">Hostal Patagonia</h1>
      <div class="d-inline-block">
        <h2 class="d-inline-block">Tu próxima aventura<span class="text-primary">.</span></h2>
        <div>
          <HomeButton to="/reservas" text="Reservar" @click="scrollTo('main-content')"
            class="fw-bold text-uppercase d-inline-block fs-5" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HomeButton from '@/components/HomeButton.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

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
  setup() {
    const route = useRoute();
    const isAdminUsersRoute = computed(() => {
      const adminRoutes = ['/admin/usuarios', '/admin/reservas', '/mis-reservas', '/reservas'];
      return adminRoutes.includes(route.path);
    });

    return {
      isAdminUsersRoute
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'adminStatus']),
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push('/');
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
  position: relative;
  overflow: hidden;
}

header.admin-usuarios {
  background: url('/public/img/bg-wood.jpg');
  height: 120px;
  border-bottom: 4px solid orange;
}

h2 {
  text-transform: uppercase;
  font-size: 3rem !important;
  font-weight: 900;
}

.header__reservar {
  margin-top: -20px;
  padding: 1rem 2rem;
}

.navbar {
  width: 80%;
  border-radius: 10px;
  background-color: #3c79cfbf;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.header-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

@media (min-width: 992px) {
  h2 {
    font-size: 5rem !important;
  }
}
</style>