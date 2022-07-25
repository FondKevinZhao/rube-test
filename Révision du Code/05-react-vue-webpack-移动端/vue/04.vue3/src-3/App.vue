<template>
  <p>App...</p>
  <!-- 
    给组件绑定事件，默认当做原生DOM事件处理
    如果子组件声明：emits: ["click"],
      事件就是自定义事件了
   -->
  <Child @click="hello" />
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  methods: {
    hello() {
      console.log("hello");
    },
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>