<template>
  <main class="container pt-5 h-100">
    <h1 class="my-5 text-center"><i class="bi bi-calendar-check-fill me-1"></i>Administrar Reservas</h1>
    <TableReservas :reservas="reservas" :usuarios="usuarios" :adminStatus="true" />
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