<template>
  <main class="container pt-5 h-100">
    <p v-if="usuarioActual" class="text-primary text-center">¡Hola {{ usuarioActual.nombre }}!</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Mis Reservas</h3>
      <TableReservas :reservas="misReservas" :usuarios="usuarios" :adminStatus="false" @cancelar-reserva="cancelarReserva" />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableReservas from '@/components/TableReservas.vue';

export default {
  name: 'UsuarioReservasView',
  components: {
    TableReservas
  },
  computed: {
    ...mapGetters(['reservas', 'usuarios', 'usuarioActual']),
    misReservas() {
      if (!this.usuarioActual) {
        return [];
      }
      return this.reservas.filter(reserva => reserva.correo === this.usuarioActual.email);
    }
  },
  methods: {
    ...mapActions(['cargarReservas', 'cancelarReserva']),
  },
};
</script>

<style scoped lang="scss">
</style>