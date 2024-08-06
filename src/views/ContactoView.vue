<template>
  <main id="main-content" class="container my-5">
    <div class="mb-4 pb-4">
      <p class="text-primary text-center">Contáctanos</p>
      <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Envíanos tu idea</h3>
      <p class="mb-4">¿Buscas el lugar perfecto para tus próximas vacaciones o una ocasión especial? Disfruta de la calidez y la belleza de la región en Hostal Patagonia: el lugar ideal para que tus momentos sean inolvidables. ¡Te esperamos para compartir experiencias únicas y la hospitalidad del sur de Chile!</p>
    </div>
    <div class="row g-5 d-flex">
      <div class="col-12 col-md-6">
        <div class="border rounded-2 p-4 bg-body-tertiary w-100 text-center">
          <h4 class="pb-4">Encuéntranos en</h4>
          <p><i class="bi bi-geo-alt"></i> Dirección: Camino al Sur 1234, Chile</p>
          <p><i class="bi bi-telephone"></i> Teléfono: +56 123456789</p>
          <p><i class="bi bi-envelope"></i> Correo Electrónico: contacto@hostal.cl</p>
          <p><i class="bi bi-clock"></i> Horario: Lunes a Domingo de 09:00 a 22:00</p>
        </div>
        <div class="encuentranos rounded-bottom-2"></div> 
      </div>
      <div class="col-12 col-md-6">
        <div class="border rounded-2 p-4 bg-body-tertiary w-100 text-center">
          <h4 class="pb-4">Escríbenos</h4>
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
              <textarea v-model="contacto.mensaje" class="form-control" id="mensaje" rows="3" placeholder="Ingresa tu mensaje" required></textarea>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary w-75">Enviar</button>
            </div>
          </form>
        </div>
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
      this.$swal({
        title:'Tu mensaje fue enviado con éxito',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "#FFA500",
      });
      this.contacto = {
        correo: '',
        asunto: '',
        mensaje: ''
      };
    }
  }
}
</script>

<style scoped lang="scss">
.encuentranos {
  background: url('/public/img/bg-contacto.webp');
  background-size: cover;
  background-position: center;
  height: 180px;
  border-top: 4px solid #FFA500;
}
</style>