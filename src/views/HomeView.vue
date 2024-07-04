<template>
  <main class="container pt-5">
    <section class="text-center">
      <img :src="logo" />
      <h1>Bienvenidos a {{ marca }}</h1>
    </section>
    <hr/>
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
import CardServicios from '@/components/CardServicios.vue';

export default {
  name: "HomeView",
  components: {
    CardServicios
  },
  data(){
    return {
      marca: "Jack Rabbit Slim's",
      logo: "./img/logo.png",
      secciones: [
        {
          title: 'Celebración de Eventos',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa mollitia beatae blanditiis autem minima ad quibusdam et rem exercitationem quis quidem impedit expedita commodi, delectus soluta corporis pariatur quia.',
          iconClass: 'bi bi-calendar-event-fill',
          to: '/contacto',
          buttonText: 'Contactar'
        },
        {
          title: 'Reserva de Comidas',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa mollitia beatae blanditiis autem minima ad quibusdam et rem exercitationem quis quidem impedit expedita commodi, delectus soluta corporis pariatur quia.',
          iconClass: 'bi bi-journal-bookmark-fill',
          to: '/reservas',
          buttonText: 'Reservar'
        },
        {
          title: 'Variedad de Menú',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa mollitia beatae blanditiis autem minima ad quibusdam et rem exercitationem quis quidem impedit expedita commodi, delectus soluta corporis pariatur quia.',
          iconClass: 'bi bi-card-list',
          to: '/menu',
          buttonText: 'Ver Menú'
        }
      ],
    }
  },
};
</script>

<style scoped lang="scss"></style>
