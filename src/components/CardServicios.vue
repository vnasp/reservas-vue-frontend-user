<template>
  <div class="col">
    <div class="bg-dark text-white p-4 rounded-4 text-center">
      <i :class="iconClass + ' fs-2'"></i>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="mt-3">
        <HomeButton :to="to" :text="buttonText"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/HomeButton.vue';

export default {
  name: "CardServicios",
  components: {
    HomeButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>