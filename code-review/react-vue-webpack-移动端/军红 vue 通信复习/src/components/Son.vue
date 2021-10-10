<template>
  <div>
    <h1>son组件</h1>
    <div>{{ name1 }}</div>
    <ul>
      <li v-for="(item, index) in list1" :key="index">
        名字：{{ item.name }}---------年龄：{{ item.age }}
      </li>
    </ul>
    <input type="text" :value="value" @input="handleChange($event)" />
    <button @click="logValue">打印vuex中state中的value</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Son",
  props: {
    name1: String,
    list1: Array,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleChange(e) {
      console.log(111);
      this.value = e.target.value;
      this.$emit("son", this.value);
      this.$Bus.$emit("aaa", this.value);
    },

    logValue() {
      console.log(this.data);
    },
  },
  computed: {
    ...mapState("a", ["data"]), // 映射 store 中 a 模块 中的 data
  },
};
</script>

<style>
</style>