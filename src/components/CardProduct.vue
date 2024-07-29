<template>
  <article class="card h-100 rounded-3 shadow-sm">
   <div class="position-relative">
    <img :src="service.img" class="card-img-top" :alt="service.nombre">
    <p class="card-text bg-black text-white position-absolute top-0 end-0 px-2 py-1" style="font-size: 11px; border-top-right-radius: 5px;">{{ service.tipo }}</p>
   </div>
    <div class="card-header">
      <h5 class="card-title text-center text-uppercase">{{ service.nombre }}
      </h5>
    </div>
    <div class="card-body fs-6">
      <ul>
        <li v-for="caracteristica in service.caracteristicas" :key="caracteristica" class="text-capitalize">{{ caracteristica }}</li>
      </ul>
    </div>
    <div class="card-footer text-end">
      <p class="card-text text-primary fw-bold fs-4"><i class="bi bi-tag"></i> {{ formatPrice(service.precio) }}</p>
      </div>
  </article>
</template>
<script>

export default {
  name: "CardProduct",
  props: {
    service: {
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
.card-header{
  border-top: 4px solid #FFA500;
}
.card-title{
  font-weight: 700;
}

</style>