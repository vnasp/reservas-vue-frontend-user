<template>
  <main class="container pt-5">
    <p class="text-primary text-center">Panel de Administración</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Listado de Usuarios</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.apellido }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.telefono }}</td>
          <td>{{ usuario.adminStatus ? 'Administrador' : 'Usuario' }}</td>
          <td>
            <button @click="handleUsuarioRol(usuario)" class="btn btn-sm" :class="{'btn-primary': !usuario.adminStatus, 'btn-dark': usuario.adminStatus}">
              {{ usuario.adminStatus ? 'Cambiar a Usuario' : 'Cambiar a Administrador' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AdminUsuariosView',
  computed: {
    ...mapGetters(['usuarios'])
  },
  methods: {
    ...mapActions(['cambiarRol']),
    handleUsuarioRol(usuario) {
      this.cambiarRol(usuario);
    }
  }
};
</script>