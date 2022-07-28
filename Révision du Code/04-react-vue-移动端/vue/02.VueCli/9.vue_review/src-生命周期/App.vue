<template>
  <div>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <!-- keep-alive Vue的内置组件：缓存路由组件 -->
    <!-- <keep-alive include="Home,About"> -->
    <!-- <keep-alive exclude="Home"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
