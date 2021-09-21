<template>
  <p>App...</p>
  <!-- 
    组件会接受到一个props属性，和一个自定义事件 
    
    vue2:
      属性名：value
      事件名称：input
    vue3:
      属性名：modelValue  -> count
      事件名称：update:modelValue -> update:count
  -->
  <Child v-model:count="count" />
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>