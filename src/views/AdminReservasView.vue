<template>
  <main class="container pt-5 h-100">
    <p class="text-primary text-center">Panel de Administración</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Listado de Reservas</h3>
    <div class="overflow-x-auto">
      <TableReservas :reservas="reservas" :usuarios="usuarios" :adminStatus="true" />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableReservas from '@/components/TableReservas.vue';

export default {
  name: 'AdminReservasView',
  components: {
    TableReservas
  },
  computed: {
    ...mapGetters(['reservas', 'usuarios']),
  },
  methods: {
    ...mapActions(['cargarReservas']),
  },
  mounted() {
    this.cargarReservas();
  }
};
</script>

<style scoped lang="scss">
</style>