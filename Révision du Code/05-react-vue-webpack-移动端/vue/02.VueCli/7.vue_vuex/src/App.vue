<template>
  <div>
    <p>
      clicked: {{ count }} times, count is
      {{ oddOrEven }}
    </p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

// 属性 state和getters 要映射到 computed
// 方法 actions和mutations 要映射到 methods

export default {
  name: "App",
  methods: {
    ...mapActions("app", ["incrementAsync"]),
    ...mapMutations("app", ["INCREMENT", "DECREMENT"]),
    increment() {
      this.INCREMENT(1);
    },
    decrement() {
      this.DECREMENT(1);
    },
    incrementIfOdd() {
      if ((this.count & 1) === 1) {
        this.INCREMENT(1);
      }
    },
  },
  computed: {
    // 只有state有两种写法：
    ...mapState("app", ["count"]),
    // ...mapState({
    //   count: (state) => state.app.count,
    // }),

    ...mapGetters("app", ["oddOrEven"]),
  },
};
</script>

<style>
</style>
