<template>
  <main id="main-content" class="container pt-5">
    <p class="text-primary text-center">Sistema de Reservas</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Olvídate del resto</h3>
    <p class="text-center">Registrándote en Hostal Patagonia podrás reservar una habitación para ti y tus acompañantes, y disfrutar de una estadía inolvidable con servicios excepcionales y actividades emocionantes.</p>
    <div class="row d-flex justify-content-evenly mt-5">
      <div class="col-12 col-lg-5 border rounded-2 p-4 bg-body-tertiary">
        <h4 class="my-5 text-center"><i class="bi bi-check-circle-fill text-dark fs-2"></i><br/>Inicio de Sesión</h4>
        <form @submit.prevent="handleLogin" class="row g-3 text-center">
          <div class="col-12">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" v-model="datosLogin.email" class="form-control" id="email" placeholder="Ingresa tu e-mail" required>
          </div>
          <div class="col-12">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" v-model="datosLogin.password" class="form-control" id="password" placeholder="Ingresa tu contraseña" required>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
          </div>
        </form>
        <div class="alert alert-info mt-5" role="alert">
          <i class="bi bi-info-circle-fill"></i> Para la vista administrador, utiliza admin@correo.com y 1234 para ingresar.
        </div>
      </div>
      <div class="col-12 col-lg-5 border rounded-2 p-4 bg-body-tertiary">
        <RegisterView/>
      </div>
  </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import RegisterView from './RegisterForm.vue';

export default {
  name: 'LoginView',
  components: {
    RegisterView,
  },
  data() {
    return {
      datosLogin: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        const user = await this.login(this.datosLogin);
        // Comprobamos si es administrador
        if (user.adminStatus) {
          this.$router.push('/admin/usuarios');
        } else {
          this.$router.push('/mis-reservas');
        }
      } catch (error) {
        this.$swal('Error al iniciar sesión. Por favor, intenta de nuevo.');
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
</script>

<style scoped lang="scss">
input::placeholder {
    color:#ccc;
}
.alert {
  font-size:11px;
}
</style>