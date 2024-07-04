<template>
  <main class="container pt-5 h-100">
    <h1 class="my-5 text-center"><i class="bi bi-calendar3 me-1"></i>Mis Reservas</h1>
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