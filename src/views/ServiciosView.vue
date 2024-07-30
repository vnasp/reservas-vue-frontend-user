<template>
  <main id="main-content" class="container my-5">
      <p class="text-primary text-center">Nuestros Servicios</p>
      <h3 class="text-center mb-5 text-uppercase fw-bolder fs-1">Organizamos todo por ti</h3>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-4" v-for="item in servicios" :key="item.id">
        <CardProduct :service="item" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardProduct from '@/components/CardProduct.vue';

export default {
  name: 'ServiciosView',
  components: {
    CardProduct
  },
  computed: {
    ...mapState(['servicios']),
  },
  methods: {
    ...mapActions(['setServicios']),
  },
  async mounted() {
    await this.setServicios();
    this.$nextTick(() => {
      console.log('Servicios después de setServicios:', this.servicios);  // Log
    });
  }
}
</script>
