<template>
  <main class="container pt-5 h-100">
    <p v-if="usuarioActual" class="text-primary text-center">¡Hola {{ usuarioActual.nombre }}!</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Mis Reservas</h3>
    
    <div v-if="misReservas.length === 0" class="text-center">
      <h4>No tienes reservas activas</h4>
      <p>Prepara tus vacaciones y reserva servicios, alojamiento y tour con Hostal Patagonia.</p>
      <HomeButton to="reservas" text="Reservar" class="card-button-text"/>
    </div> 
    <div v-else class="overflow-auto">
      <TableReservas :reservas="misReservas" :usuarios="usuarios" :adminStatus="false" @cancelar-reserva="cancelarReserva" />
    </div>
  </main>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import TableReservas from '@/components/TableReservas.vue';
import HomeButton from '@/components/HomeButton.vue';

export default {
  name: 'UsuarioReservasView',
  components: {
    TableReservas,
    HomeButton
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