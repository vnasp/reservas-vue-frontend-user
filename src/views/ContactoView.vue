<template>
  <main class="container pt-5">
    <h1 class="my-5 text-center"><i class="bi bi-envelope-fill me-1"></i>Contáctanos</h1>
    <p class="mb-4">¿Estás buscando el lugar perfecto para celebrar tu cumpleaños o una ocasión especial? ¡No busques más! Deléitate con nuestros exquisitos platos y haz una reserva para esas fechas importantes. Nuestro restaurante ofrece el ambiente ideal para que tus celebraciones sean inolvidables. ¡Te esperamos para compartir momentos únicos y sabores inigualables!</p>
    <div class="row">
      <div class="col-md-6">
        <h2>Encuéntranos en</h2>
        <p><i class="bi bi-geo-alt-fill"></i> Dirección: Camino al Volcán 1234, Villarrica, Chile</p>
        <p><i class="bi bi-telephone-fill"></i> Teléfono: +56 223456789</p>
        <p><i class="bi bi-envelope-fill"></i> Correo Electrónico: contacto@jackrabbitslim.com</p>
        <p><i class="bi bi-clock-fill"></i> Horario: Lunes a Domingo de 09:00 a 22:00</p>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit" class="row g-3">
          <div class="col-12">
            <label for="correo" class="form-label">Correo de contacto</label>
            <input type="email" v-model="contacto.correo" class="form-control" id="correo" placeholder="Ingresa tu e-mail" required>
          </div>
          <div class="col-12">
            <label for="asunto" class="form-label">Asunto</label>
            <input type="text" v-model="contacto.asunto" class="form-control" id="asunto" placeholder="Ingresa el asunto" required>
          </div>
          <div class="col-12">
            <label for="mensaje" class="form-label">Mensaje</label>
            <textarea v-model="contacto.mensaje" class="form-control" id="mensaje" rows="5" placeholder="Ingresa tu mensaje" required></textarea>
          </div>
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      contacto: {
        correo: '',
        asunto: '',
        mensaje: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      alert('Tu formulario fue enviado con éxito.');
      this.contacto = {
        correo: '',
        asunto: '',
        mensaje: ''
      };
    }
  }
}
</script>

<style scoped lang="scss"></style>