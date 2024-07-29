<template>
  <router-link :to="to" class="btn btn-primary btn-custom">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.btn-custom{
  box-shadow: inset 0px -3px 0px -0px rgba(0, 0, 0, 0.1);
}
</style>
