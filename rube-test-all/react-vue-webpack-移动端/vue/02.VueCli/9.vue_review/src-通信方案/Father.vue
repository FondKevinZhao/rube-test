<template>
  <div>Father {{ name }}<Child /></div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "Father",
  inject: ["name"],
  components: {
    Child,
  },
};
</script>

<style scoped>
</style>
