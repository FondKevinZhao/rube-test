<template>
  <div @click="$emit('click')">Child</div>
</template>

<script>
export default {
  name: "Child",
  emits: ["click"],
};
</script>

<style>
</style>