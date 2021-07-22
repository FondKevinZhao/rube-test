<template>
  <div>
    <h1>App...</h1>
    <Child name="jack" age="18"/>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
</style>
