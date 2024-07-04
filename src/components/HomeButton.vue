<template>
  <router-link :to="to" class="btn btn-primary">{{ text }}</router-link>
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

<style scoped lang="scss"></style>
