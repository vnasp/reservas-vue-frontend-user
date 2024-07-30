<template>
  <div class="col">
    <div class="card card-servicios" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '22rem', height: '36rem' }">
      <div class="card-body">
       <div> <i :class="iconClass + ' fs-2 text-dark'"></i>
        <h4 class="mb-4">{{ title }}</h4></div>
        <p class="card-description">{{ description }}</p>
        <HomeButton :to="to" :text="buttonText" class="card-button-text"/>
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
    },
    backgroundImage: {
    type: String,
    required: true,
    }
  }
};
</script>

<style scoped lang="scss">
.card-servicios {
  border-radius: 10px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px); 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(189, 189, 189);
  margin: 0 auto; /* Centro horizontalmente */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
}
.card-description {
  background:rgba(255, 255, 255, 0.25);
  padding:20px;
  border-radius: 10px;
}

.card-button-text {
  width: 50%;
  font-size: 12px;
  text-transform: uppercase;
}
</style>