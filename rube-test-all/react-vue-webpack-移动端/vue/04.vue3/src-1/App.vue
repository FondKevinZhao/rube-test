<template>
  <p>{{ times }}</p>
  <p>{{ count }}</p>
  <button @click="handleClick">按钮</button>
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ key }} -- {{ value }}</li>
  </ul>
  <button @click="person.sex = '男'">按钮</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
      person: {
        name: "jack",
      },
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
  watch: {
    count() {
      console.log("watch触发了");
    },
  },
  computed: {
    times() {
      return this.count + "次";
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style>
</style>