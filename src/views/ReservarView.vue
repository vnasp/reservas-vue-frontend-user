<template>
  <main class="container pt-5 h-100">
    <p class="text-primary text-center">Sistema de Reservas</p>
    <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Reserva una habitación</h3>
    <form @submit.prevent="handleReservas" class="row g-3">
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre del cliente</label>
        <input
          type="text"
          v-model="reserva.nombre"
          class="form-control"
          id="nombre"
          disabled
        />
      </div>
      <div class="col-md-6">
        <label for="personas" class="form-label">Número de personas</label>
        <input
          type="number"
          v-model="reserva.personas"
          class="form-control"
          id="personas"
          placeholder="Número de personas"
          @input="validatePersonas"
        />
        <p v-if="errores.personas" class="text-danger">{{ errores.personas }}</p>
      </div>
      <div class="col-md-6">
        <label for="fecha" class="form-label">Fecha de la reserva</label>
        <input
          type="date"
          v-model="reserva.fecha"
          class="form-control"
          id="fecha"
          @input="validateFecha"
        />
        <p v-if="errores.fecha" class="text-danger">{{ errores.fecha }}</p>
      </div>
      <div class="col-md-3">
        <label for="hora" class="form-label">Hora de la reserva</label>
        <select
          v-model="reserva.hora"
          class="form-control"
          id="hora"
          @change="validateHora"
        >
          <option value="" disabled>Seleccione una hora</option>
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
        <p v-if="errores.hora" class="text-danger">{{ errores.hora }}</p>
      </div>
      <div class="col-md-3">
        <label for="tipo" class="form-label">Servicio reservado</label>
        <select
          v-model="reserva.tipo"
          class="form-control"
          id="tipo"
          @change="validateTipo"
        >
          <option value="" disabled>Seleccione un servicio</option>
          <option value="Alojamiento">Alojamiento</option>
          <option value="Actividad">Actividad</option>
          <option value="Servicio">Servicio</option>
        </select>
        <p v-if="errores.tipo" class="text-danger">{{ errores.tipo }}</p>
      </div>
      <div class="col-md-6">
        <label for="telefono" class="form-label">Número de contacto</label>
        <input
          type="tel"
          v-model="reserva.telefono"
          class="form-control"
          id="telefono"
          disabled
        />
      </div>
      <div class="col-md-6">
        <label for="correo" class="form-label">Correo de contacto</label>
        <input
          type="email"
          v-model="reserva.correo"
          class="form-control"
          id="correo"
          disabled
        />
      </div>
      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
          Reservar
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ReservarView",
  data() {
    return {
      reserva: {
        id: uuidv4(),
        user_id: "",
        nombre: "",
        personas: 1,
        fecha: "",
        hora: "",
        telefono: "",
        correo: "",
        tipo: "",
      },
      errores: {
        personas: null,
        fecha: null,
        hora: null,
        tipo: null,
      },
    };
  },
  computed: {
    ...mapGetters(["usuarioActual"]),
    isFormValid() {
      return (
        !this.errores.personas &&
        !this.errores.fecha &&
        !this.errores.hora &&
        !this.errores.tipo &&
        this.reserva.personas > 0
      );
    },
  },
  methods: {
    ...mapActions(["registrarReserva"]),
    validatePersonas() {
      if (this.reserva.personas < 1 || this.reserva.personas > 10) {
        this.errores.personas =
          "El número de personas debe estar entre 1 y 10.";
      } else {
        this.errores.personas = null;
      }
    },
    validateFecha() {
      const today = new Date().toISOString().split("T")[0];
      if (this.reserva.fecha && this.reserva.fecha < today) {
        this.errores.fecha = "La fecha de reserva debe ser futura.";
      } else {
        this.errores.fecha = null;
      }
    },
    validateHora() {
      this.errores.hora = this.reserva.hora ? null : "Debe seleccionar una hora.";
    },
    validateTipo() {
      this.errores.tipo = this.reserva.tipo ? null : "Debe seleccionar un tipo de servicio.";
    },
    async handleReservas() {
      if (this.isFormValid) {
        try {
          this.reserva.user_id = this.usuarioActual.id;
          await this.registrarReserva(this.reserva);
          this.$swal({
            title: "Reserva realizada con éxito.",
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#FFA500",
          });
          this.$router.push("/mis-reservas");
        } catch (error) {
          this.$swal("Hubo un error al reservar. Contáctanos para ayudarte.");
          console.error("Error al realizar la reserva:", error);
        }
      }
    },
  },
  mounted() {
    if (this.usuarioActual) {
      this.reserva.nombre = `${this.usuarioActual.nombre} ${this.usuarioActual.apellido}`;
      this.reserva.telefono = this.usuarioActual.telefono;
      this.reserva.correo = this.usuarioActual.email;
    }
  },
};
</script>

<style scoped lang="scss">
.text-danger {
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
