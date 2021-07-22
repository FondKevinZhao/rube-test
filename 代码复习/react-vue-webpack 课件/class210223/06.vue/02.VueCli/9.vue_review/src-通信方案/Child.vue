<template>
  <div>Child {{ name }}</div>
</template>

<script>
export default {
  name: "Child",
  inject: ["name"],
};
</script>

<style>
</style>