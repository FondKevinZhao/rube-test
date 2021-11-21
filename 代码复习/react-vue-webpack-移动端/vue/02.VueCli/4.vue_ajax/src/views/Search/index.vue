<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    search() {
      const { searchName } = this;
      if (!searchName) {
        alert("请输入搜索名称");
        return;
      }
      // 将searchName传递List组件，由List组件去发送请求
      this.$bus.$emit("search", searchName);
    },
  },
};
</script>

<style>
</style>