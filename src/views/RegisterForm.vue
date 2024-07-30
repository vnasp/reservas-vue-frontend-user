<template>
    <h4 class="my-5 text-center"><i class="bi bi-bookmark-star-fill text-dark fs-2"></i><br/>Crea tu cuenta</h4>
    <form @submit.prevent="handleRegister">
     <div class="d-flex justify-content-between">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" v-model="usuario.nombre" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" v-model="usuario.apellido" class="form-control" id="apellido" placeholder="Ingresa tu apellido" required>
      </div>
     </div>
     <div class="d-flex justify-content-between">
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input type="email" v-model="usuario.email" class="form-control" id="email" placeholder="Ingresa tu e-mail" required>
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" v-model="usuario.telefono" class="form-control" id="telefono" placeholder="Ingresa tu teléfono" required>
      </div>
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
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
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
<style scoped lang="scss">
input::placeholder {
    color:#ccc;
}
</style>