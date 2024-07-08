<template>
  <main class="container pt-5 h-100 d-flex justify-content-center">
    <div class="w-50">
      <h1 class="my-5 text-center"><i class="bi bi-box-arrow-in-right me-1"></i>Inicio de Sesión</h1>
      <form @submit.prevent="handleLogin" class="row g-3">
        <div class="col-12">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" v-model="datosLogin.email" class="form-control" id="email" placeholder="Ingresa tu e-mail" required>
        </div>
        <div class="col-12">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" v-model="datosLogin.password" class="form-control" id="password" placeholder="Ingresa tu contraseña" required>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',
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
