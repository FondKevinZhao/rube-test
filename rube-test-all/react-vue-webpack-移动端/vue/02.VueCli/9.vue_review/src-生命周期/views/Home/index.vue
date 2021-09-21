<template>
  <div>Home..</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("home mounted");
  },
  beforeDestroy() {
    console.log("home beforeDestroy");
  },
  activated() {
    console.log("home activated");
  },
  deactivated() {
    console.log("home deactivated");
  },
};
</script>

<style>
</style>