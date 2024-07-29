<template>
  <main class="">
    <NavBar/>
    <section id="heroSection" class="d-flex flex-column justify-content-center align-items-center">
    <div>
      <h1 class="text-start text-uppercase fw-bolder">{{ marca }}</h1>
      <h2>Tu próxima aventura<span class="text-primary">.</span></h2>
      <div class="text-end text-uppercase"><HomeButton to="/reservas" text="Reservar" class="fw-bold"/></div>
    </div>
    </section>
    <section id="servicios" class="text-center my-5 p-5">
      <p class="text-primary">Nuestros Servicios</p>
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
import NavBar from "@/components/NavBar.vue"
import HomeButton from '@/components/HomeButton.vue';

export default {
  name: "HomeView",
  components: {
    NavBar,
    CardServicios,
    HomeButton
  },
  data() {
    return {
      marca: "Hostal Patagonia",
      logo: "./img/logo.png",
      secciones: [
        {
          title: "Organización de Eventos",
          description:
            "Disfruta del entorno perfecto para tus eventos especiales. Desde bodas íntimas hasta reuniones corporativas.",
          iconClass: "bi bi-calendar-event-fill",
          to: "/contacto",
          buttonText: "Contactar",
          backgroundImage: "/img/bg-servicios-1.jpg",
        },
        {
          title: "Reserva de Habitaciones",
          description:
            "Disfruta de una estadía confortable. Reserva ahora y garantiza tu lugar en el corazón de la Patagonia.",
          iconClass: "bi bi-journal-bookmark-fill",
          to: "/reservas",
          buttonText: "Reservar",
          backgroundImage: "/img/bg-servicios-2.jpg",
        },
        {
          title: "Variedad de Servicios y Tours",
          description:
            "Desde tours por la región, alquiler de bicicletas, hasta clases de esquí para que disfrutes al máximo de tu visita.",
          iconClass: "bi bi-binoculars",
          to: "/servicios",
          buttonText: "Servicios",
          backgroundImage: "/img/bg-servicios-3.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

#heroSection {
background: url('/public/img/background.jpg');
background-repeat: no-repeat;
background-position: center top 10%;
background-size: cover;
height: 700px;
}

h2 {
  text-transform: uppercase;
  font-size:5rem;
  font-weight: 900;
}
</style>
