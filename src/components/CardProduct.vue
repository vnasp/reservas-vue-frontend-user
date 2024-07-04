<template>
  <article class="card h-100 rounded-3 shadow-sm mb-4">
    <img :src="product.img" class="card-img-top" :alt="product.nombre">
    <div class="card-header">
      <h5 class="card-title text-center text-uppercase">{{ product.nombre }}
      </h5>
    </div>
    <div class="card-body">
      <p class="card-text">Tiempo: {{ product.tiempo }}</p>
      <p class="card-text pt-3">Ingredientes:</p>
      <ul>
        <li v-for="ingrediente in product.ingredientes" :key="ingrediente" class="text-capitalize">{{ ingrediente }}</li>
      </ul>
    </div>
    <div class="card-footer text-end">
      <p class="card-text text-primary fw-bold fs-4">Precio: {{ formatPrice(product.precio) }}</p>
      </div>
  </article>
</template>
<script>

export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
      }).format(value);
    },
}
}
</script>

<style scoped lang="scss">
.card-header {
  min-height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>