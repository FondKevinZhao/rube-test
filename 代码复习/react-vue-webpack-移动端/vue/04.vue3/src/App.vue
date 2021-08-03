<template>
  <p>App...</p>
  <A name="jack" @hello="hello" />
  <B name="jack" @hello="hello" />
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";

export default {
  name: "App",
  components: {
    A,
    B,
  },
  methods: {
    hello() {
      console.log("hello");
    },
  },
};
</script>

<style>
</style>