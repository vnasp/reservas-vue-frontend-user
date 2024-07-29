<template>
  <main class="container pt-5">
    <h1 class="my-5 text-center"><i class="bi bi-envelope-fill me-1"></i>Contáctanos</h1>
    <p class="mb-4">¿Buscas el lugar perfecto para tus próximas vacaciones o una ocasión especial? ¡No busques más! Disfruta de la calidez y la belleza de la región de La Araucanía en Hostal Patagonia. Ofrecemos una variedad de servicios, desde cómodas habitaciones hasta actividades emocionantes como trekking y clases de esquí. Nuestro hostal es el lugar ideal para que tus momentos sean inolvidables. ¡Te esperamos para compartir experiencias únicas y la hospitalidad del sur de Chile!</p>
    <div class="row">
      <div class="col-md-6">
        <h2>Encuéntranos en</h2>
        <p><i class="bi bi-geo-alt-fill"></i> Dirección: Camino al Volcán 1234, Villarrica, Chile</p>
        <p><i class="bi bi-telephone-fill"></i> Teléfono: +56 223456789</p>
        <p><i class="bi bi-envelope-fill"></i> Correo Electrónico: contacto@hostalPatagonia.com</p>
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
      this.$swal('Tu mensaje fue enviado con éxito');
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