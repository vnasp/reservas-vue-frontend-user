<template>
  <main>
    <section id="servicios" class="text-center my-5">
      <p class="text-primary">Qué ofrecemos</p>
      <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Preparamos tu panorama</h3>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          <CardServicios
            v-for="(item, index) in secciones"
            :key="index"
            :title="item.title"
            :description="item.description"
            :iconClass="item.iconClass"
            :to="item.to"
            :buttonText="item.buttonText"
            :backgroundImage="item.backgroundImage"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CardServicios from "@/components/CardServicios.vue";

export default {
  name: "HomeView",
  components: {
    CardServicios,
  },
  data() {
    return {
      secciones: [
        {
          title: "Organización de Eventos",
          description:
            "Disfruta del entorno perfecto para tus eventos especiales. Desde bodas íntimas hasta reuniones corporativas.",
          iconClass: "bi bi-calendar-week",
          to: "/contacto",
          buttonText: "Contactar",
          backgroundImage: "./img/bg-servicios-1.jpg",
        },
        {
          title: "Reserva de Habitaciones",
          description:
            "Disfruta de una estadía confortable. Reserva ahora y garantiza tu lugar en el corazón de la Patagonia.",
          iconClass: "bi bi-journal-bookmark-fill",
          to: "/reservas",
          buttonText: "Reservar",
          backgroundImage: "./img/bg-servicios-2.jpg",
        },
        {
          title: "Variedad de Servicios y Tours",
          description:
            "Desde tours por la región, alquiler de bicicletas, hasta clases de esquí para que disfrutes al máximo de tu visita.",
          iconClass: "bi bi-binoculars",
          to: "/servicios",
          buttonText: "Servicios",
          backgroundImage: "./img/bg-servicios-3.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>
