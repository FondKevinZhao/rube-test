<template>
  <div>
    <h1 v-if="loading">Loading</h1>
    <div v-else-if="users.length" class="row">
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <h1 v-else>Enter Name To Search</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("search", this.search);
  },
  beforeDestroy() {
    this.$bus.$off("search", this.search);
  },
  methods: {
    // 搜索用户数据
    async search(searchName) {
      // 切换loading
      this.loading = true;
      // 发送请求
      const response = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        params: {
          q: searchName,
        },
      });
      // 改变users、loading
      this.loading = false;
      this.users = response.data.items.map((user) => {
        return {
          login: user.login, // 用户名
          avatar_url: user.avatar_url, // 用户头像
          html_url: user.html_url, // 用户主页
          id: user.id,
        };
      });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
