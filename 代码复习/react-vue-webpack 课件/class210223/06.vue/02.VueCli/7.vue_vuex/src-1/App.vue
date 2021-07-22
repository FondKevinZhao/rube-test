<template>
  <div>
    <p>
      clicked: {{ $store.state.count }} times, count is
      {{ $store.getters.oddOrEven }}
    </p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    /*
      dispatch
      commit
      state
    */
    console.log(this.$store);
  },
  methods: {
    increment() {
      // 触发actions函数 --> mutations函数 --> 更新state --> render
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement", 1);
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
</style>
