<template>
  <div>
    <h1>Child...</h1>
    <p>{{ count }}</p>
    <button @click="$globalEventBus.$emit('setCount', 2)">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    count: Number,
  },
};
</script>

<style>
</style>