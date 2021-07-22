<template>
  <div>
    <slot name="header"></slot>
    <p>------</p>
    <slot :a="a" />
    <p>------</p>
    <slot name="footer" :b="b" />
  </div>
</template>

<script>
export default {
  name: "D",
  data() {
    return {
      a: "222222",
      b: 333333333,
    };
  },
};
</script>

<style>
</style>