<template>
  <div>Child</div>
</template>

<script>
export default {
  name: "Child",
  props: ["age"],
  mounted() {
    // 没有声明接受的props，在$attrs
    // 没有声明接受的props，会在html中显示这个属性
    console.log(this.$attrs.name);
  },
  inheritAttrs: false,
};
</script>

<style>
</style>