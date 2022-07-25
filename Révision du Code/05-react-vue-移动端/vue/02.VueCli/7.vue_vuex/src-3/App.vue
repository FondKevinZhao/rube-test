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
  mounted() {
    /*
      dispatch
      commit
      state
    */
    console.log(this.$store);
  },
  methods: {
    ...mapActions(["incrementAsync"]),
    ...mapMutations(["INCREMENT", "DECREMENT"]),
    increment() {
      this.INCREMENT(1);
    },
    decrement() {
      this.DECREMENT(1);
    },
    incrementIfOdd() {
      // this.$store.dispatch("incrementIfOdd");
      if ((this.count & 1) === 1) {
        this.INCREMENT(1);
      }
    },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
  },
  computed: {
    /*
      mapState 是一个函数
      mapState(["count"]) 函数调用返回值是一个对象
      对象：
        {
          // count: function() {},
          count() {
            return this.$store.state.count
          }
        }
    */
    ...mapState(["count"]),
    ...mapGetters(["oddOrEven"]),
  },
};
</script>

<style>
</style>
