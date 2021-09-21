<template>
  <div>
    <h1>全局事件总线</h1>
    <Child :count="count" />
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    setCount(num) {
      this.count += num;
    },
  },
  mounted() {
    /*
      绑定事件：接受数据方，被其他组件修改数据
      触发事件：发送数据方，要修改其他组件数据
    */
    this.$globalEventBus.$on("setCount", this.setCount);
  },
  beforeDestroy() {
    this.$globalEventBus.$off("setCount", this.setCount);
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>