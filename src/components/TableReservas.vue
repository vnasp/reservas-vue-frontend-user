<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nombre y Apellido</th>
        <th>N° Personas</th>
        <th>Fecha</th>
        <th>Check-in</th>
        <th>Tipo</th>
        <th>Fono Contacto</th>
        <th>Correo Contacto</th>
        <th v-if="!adminStatus">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reserva in reservas" :key="reserva.id">
        <td>{{ getClienteNombre(reserva.user_id) }}</td>
        <td>{{ reserva.personas }}</td>
        <td>{{ reserva.fecha }}</td>
        <td>{{ reserva.hora }}</td>
        <td>{{ reserva.tipo }}</td>
        <td>{{ reserva.telefono }}</td>
        <td>{{ reserva.correo }}</td>
        <td v-if="!adminStatus">
          <button @click="handleCancelar(reserva.id)" class="btn btn-primary">Cancelar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TablaReservas',
  props: {
    reservas: {
      type: Array,
      required: true
    },
    usuarios: {
      type: Array,
      required: true
    },
    usuarioActual: {
      type: Object,
      required: true
    },
    adminStatus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClienteNombre(userId) {
      const usuario = this.usuarios.find(user => user.id === userId);
      return `${usuario.nombre} ${usuario.apellido}`;
    },
    handleCancelar(id) {
      this.$emit('cancelar-reserva', id);
    },
  }
}
</script>

<style scoped>
</style>