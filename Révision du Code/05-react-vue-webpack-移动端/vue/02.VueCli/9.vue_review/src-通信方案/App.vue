<template>
  <div>
    <h1>App...</h1>
    <Father />
  </div>
</template>

<script>
import Father from "./Father.vue";

export default {
  name: "App",
  provide: {
    name: "jack",
  },
  components: {
    Father,
  },
};
</script>

<style>
</style>
