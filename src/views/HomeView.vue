<template>
  <main class="container pt-5">
    <section class="text-center">
      <img :src="logo" />
      <h1>Bienvenidos a {{ marca }}</h1>
    </section>
    <hr />
    <section>
      <h2 class="text-center py-4">En nuestro restaurante encontrarás</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <CardServicios
          v-for="(item, index) in secciones"
          :key="index"
          :title="item.title"
          :description="item.description"
          :iconClass="item.iconClass"
          :to="item.to"
          :buttonText="item.buttonText"
        />
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
      marca: "Hostal Araucaria",
      logo: "./img/logo.png",
      secciones: [
        {
          title: "Organización de Eventos",
          description:
            "En Hostal Araucaria, ofrecemos un entorno perfecto para tus eventos especiales. Desde bodas íntimas hasta reuniones corporativas, nuestro equipo se encargará de cada detalle para que tu evento sea un éxito.",
          iconClass: "bi bi-calendar-event-fill",
          to: "/contacto",
          buttonText: "Contactar",
        },
        {
          title: "Reserva de Habitaciones",
          description:
            "Disfruta de una estadía confortable en nuestras habitaciones diseñadas para tu comodidad. Reserva ahora y garantiza tu lugar en el corazón de la Araucanía. Ofrecemos habitaciones dobles, familiares y suites.",
          iconClass: "bi bi-journal-bookmark-fill",
          to: "/reservas",
          buttonText: "Reservar",
        },
        {
          title: "Variedad de Servicios",
          description:
            "Hostal Araucaria se enorgullece de ofrecer una amplia gama de servicios para hacer tu estancia lo más placentera posible. Desde tours por la región, alquiler de bicicletas, hasta clases de esquí para que disfrutes al máximo de tu visita.",
          iconClass: "bi bi-card-list",
          to: "/servicios",
          buttonText: "Ver Servicios",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
