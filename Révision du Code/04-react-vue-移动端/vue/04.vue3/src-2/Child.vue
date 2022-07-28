<template>
  <div>Child</div>
  <p>{{ count }}</p>
  <button @click="$emit('update:count', count + 2)">按钮</button>
</template>

<script>
export default {
  name: "Child",
  props: ["count"],
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>