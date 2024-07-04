<template>
  <main class="container pt-5 h-100 d-flex flex-column align-items-center">
    <h1 class="my-5 text-center"><i class="bi bi-bookmark-star-fill me-1"></i>Crea tu cuenta</h1>
    <p class="text-center w-75">Registrándote en Hostal Araucaria podrás reservar una habitación para ti y tus acompañantes, y disfrutar de una estadía inolvidable con servicios excepcionales y actividades emocionantes.</p>
    <form @submit.prevent="handleRegister" class="w-75">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" v-model="usuario.nombre" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" v-model="usuario.apellido" class="form-control" id="apellido" placeholder="Ingresa tu apellido" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input type="email" v-model="usuario.email" class="form-control" id="email" placeholder="Ingresa tu e-mail" required>
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" v-model="usuario.telefono" class="form-control" id="telefono" placeholder="Ingresa tu teléfono" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" v-model="usuario.password" class="form-control" id="password" placeholder="Ingresa tu Contraseña" required>
      </div>
      <input type="hidden" v-model="usuario.adminStatus" value="false">
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'RegisterView',
  data() {
    return {
      usuario: {
        id: uuidv4(),
        nombre: 'Usuario',
        apellido: 'Prueba',
        email: 'usuario@correo.com',
        telefono: '912345678',
        password: '1234',
        adminStatus: false
      }
    };
  },
  methods: {
    ...mapActions(['registrarUsuario']),
    handleRegister() {
      this.registrarUsuario(this.usuario);
      this.$router.push('/login');
    }
  },
}
</script>
