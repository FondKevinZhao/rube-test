<template>
  <div>
    <!-- 给slot传递数据，就是给父组件传递数据，父组件只有插槽位置可以使用 -->
    <slot :msg="msg" age="18"/>
  </div>
</template>

<script>
export default {
  name: "C",
  data() {
    return {
      msg: "hello CCCC",
    };
  },
};
</script>

<style>
</style>