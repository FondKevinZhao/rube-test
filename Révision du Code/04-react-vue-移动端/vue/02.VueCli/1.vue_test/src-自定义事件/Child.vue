<template>
  <div>
    <h1>Child...</h1>
    <p>{{ count }}</p>
    <!-- 触发自定义事件 this.$emit(事件名称, ...事件回调函数的参数) -->
    <button @click="$emit('setCount', 2)">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    count: Number,
    // setCount: Function,
  },
};
</script>

<style>
</style>