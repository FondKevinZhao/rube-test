<template>
  <div>
    <Header />
    <router-view />
    <!-- 除了Login和Register以外都要有 -->
    <!-- <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <!-- 如果模板语法后面的表达式过长，建议计算属性来优化 -->
    <!-- <Footer v-if="isShowFooter" /> -->
    <!-- 使用meta参数 -->
    <Footer v-if="!$route.meta.isHideFooter" />

    <!-- 测试拦截器功能 -->
    <!-- <button @click="handleClick">按钮</button> -->
  </div>
</template>

<script>
// import request from "./utils/request";
import Header from "./components/Header";

export default {
  name: "App",
  computed: {
    // isShowFooter() {
    //   const { path } = this.$route;
    //   return path !== "/login" && path !== "/register";
    // },
  },
  methods: {
    // 测试拦截器功能
    // handleClick() {
    //   request({
    //     url: "http://39.98.123.211/api/user/passport/dasdsa",
    //     method: "POST",
    //     data: {
    //       phone: "13700000000",
    //       password: "111111",
    //     },
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // },
  },
  components: {
    Header,
  },
};
</script>


<style lang="less">
</style>
