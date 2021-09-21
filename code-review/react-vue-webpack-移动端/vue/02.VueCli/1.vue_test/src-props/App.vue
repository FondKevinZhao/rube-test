<template>
  <!-- 组件必须有一个根标签 -->
  <div>
    <h1>App...</h1>
    <!-- 给子组件以props方式传递数据（标签属性） -->
    <Child :name="name" :age="age" :count="count" :update="update" />
  </div>
</template>
<script>
import Child from "./views/Child";
// 默认暴露组件配置对象
export default {
  name: "App", // 组件名
  // 组件data必须定义成函数形式
  data() {
    // 返回值对象
    return {
      name: "jack",
      age: 26,
      count: 0,
    };
  },
  methods: {
    update() {
      this.count++;
    },
  },
  components: {
    Child,
  },
};
</script>
<style></style>