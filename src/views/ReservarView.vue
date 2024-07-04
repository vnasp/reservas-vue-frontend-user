<template>
  <main class="container pt-5">
    <h1 class="my-5 text-center"><i class="bi bi-calendar-check-fill me-1"></i>Reserva una mesa</h1>
    <form @submit.prevent="handleReservas" class="row g-3">
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre del cliente</label>
        <input type="text" v-model="reserva.nombre" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
      </div>
      <div class="col-md-6">
        <label for="comensales" class="form-label">Número de comensales</label>
        <input type="number" v-model="reserva.comensales" class="form-control" id="comensales" placeholder="Número de personas" required min="1">
      </div>
      <div class="col-md-6">
        <label for="fecha" class="form-label">Fecha de la reserva</label>
        <input type="date" v-model="reserva.fecha" class="form-control" id="fecha" required>
      </div>
      <div class="col-md-6">
        <label for="hora" class="form-label">Hora de la reserva</label>
        <input type="time" v-model="reserva.hora" class="form-control" id="hora" required>
      </div>
      <div class="col-md-6">
        <label for="telefono" class="form-label">Número de contacto</label>
        <input type="tel" v-model="reserva.telefono" class="form-control" id="telefono" placeholder="Ingresa tu teléfono" required>
      </div>
      <div class="col-md-6">
        <label for="correo" class="form-label">Correo de contacto</label>
        <input type="email" v-model="reserva.correo" class="form-control" id="correo" placeholder="Ingresa tu e-mail" required>
      </div>
      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary">Reservar</button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'ReservarView',
  data() {
    return {
      reserva: {
        id: uuidv4(),
        user_id: '',
        comensales: 1,
        fecha: '',
        hora: '',
        telefono: '',
        correo: ''
      }
    };
  },
  computed: {
  ...mapGetters(['usuarioActual']),
  },
  methods: {
    ...mapActions(['registrarReserva', 'cargarReservas']),
    async handleReservas() {
      try {
        this.reserva.user_id = this.usuarioActual.id;
        this.reserva.telefono = this.usuarioActual.telefono;
        this.reserva.correo = this.usuarioActual.email;
        await this.registrarReserva(this.reserva);
        alert('Reserva realizada con éxito. ¡Te esperamos!');
        this.$router.push('/mis-reservas');
      } catch (error) {
        alert('Hubo un error al reservar. Contáctanos para ayudarte.');
        console.error('Error al realizar la reserva:', error);
      }
    }
  },
  mounted() {
    // Se cargan los datos del usuario actual (usabilidad)
    if (this.usuarioActual) {
      this.reserva.nombre = this.usuarioActual.nombre + " " + this.usuarioActual.apellido;
      this.reserva.telefono = this.usuarioActual.telefono;
      this.reserva.correo = this.usuarioActual.email;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
