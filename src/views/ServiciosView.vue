<template>
  <main class="container pt-5">
    <h1 class="my-5 text-center"><i class="bi bi-bookmark-fill me-1"></i>Servicios</h1>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-2" v-for="item in servicios" :key="item.id">
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
