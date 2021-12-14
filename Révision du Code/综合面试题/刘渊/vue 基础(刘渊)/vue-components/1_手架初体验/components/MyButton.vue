<template>
  <div>
    <p>{{ count }}</p>
    <button @click="myCount">点击我增加{{ count }}次</button>
  </div>
</template>

<script>
export default {
  name: "my-button",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    myCount() {
      this.count++;
    },
  },
};
</script>

<style>
</style>