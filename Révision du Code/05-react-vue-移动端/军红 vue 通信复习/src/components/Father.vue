<template>
  <div>
    <h1>Father组件</h1>
    <Son :name1="name" :list1="list" @son="Hello"></Son>
    <input type="text" v-model="FaterData" />
    <button @click="sendData">传递数据</button>
  </div>
</template>

<script>
import Son from "./Son.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Father",
  components: {
    Son,
  },
  data() {
    return {
      name: "Jack",
      list: [
        {
          name: "ls",
          age: 23,
        },
        {
          name: "zs",
          age: 26,
        },
        {
          name: "ww",
          age: 25,
        },
      ],
      sonData: "",
      FaterData: "",
    };
  },
  methods: {
    ...mapActions("a", ["sonChange"]),

    Hello(val) {
      console.log("父组件", val);
      this.sonData = val;
    },

    getSonData(val) {
      console.log("从子组件获取的数据", val);
    },

    
    sendData() {
      // 触发vuex中的方法，将数据保存至state中
      this.sonChange(this.FaterData);
    },
  },
  mounted() {
    this.$Bus.$on("aaa", this.getSonData);
  },

  beforeDestroy() {
    this.$Bus.$off("getSonData");
  },
  computed: {
    ...mapState("a", ["data"]),
  },
};
</script>

<style>
</style>