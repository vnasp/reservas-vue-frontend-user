<template>
  <main class="container pt-5 h-100">
    <p class="text-primary text-center">Sistema de Reservas</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Reserva una habitación</h3>
      <form @submit.prevent="handleReservas" class="row g-3">
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre del cliente</label>
        <input type="text" v-model="reserva.nombre" class="form-control" id="nombre" placeholder="Ingresa tu nombre" required>
      </div>
      <div class="col-md-6">
        <label for="personas" class="form-label">Número de personas</label>
        <input type="number" v-model="reserva.personas" class="form-control" id="personas" placeholder="Número de personas" required min="1">
      </div>
      <div class="col-md-6">
        <label for="fecha" class="form-label">Fecha de la reserva</label>
        <input type="date" v-model="reserva.fecha" class="form-control" id="fecha" required>
      </div>
      <div class="col-md-3">
        <label for="hora" class="form-label">Hora de la reserva</label>
        <select v-model="reserva.hora" class="form-control" id="hora" required>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="tipo" class="form-label">Servicio reservado</label>
        <select v-model="reserva.tipo" class="form-control" id="tipo" required>
          <option value="Alojamiento">Alojamiento</option>
          <option value="Actividad">Actividad</option>
          <option value="Servicio">Servicio</option>
        </select>
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
        personas: 1,
        fecha: '',
        hora: '',
        telefono: '',
        correo: '',
        tipo: ''
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
        this.$swal({
        title:'Reserva realizada con éxito.',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "#FFA500",
        });
        this.$router.push('/mis-reservas');
      } catch (error) {
        this.$swal('Hubo un error al reservar. Contáctanos para ayudarte.');
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
