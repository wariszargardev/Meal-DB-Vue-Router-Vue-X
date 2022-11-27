<template>
  <a :href="href" target="_blank" class="btn btn-outline-primary float-start">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "YoutubeButton",
  props:['href']
}
</script>

<style scoped>

</style>