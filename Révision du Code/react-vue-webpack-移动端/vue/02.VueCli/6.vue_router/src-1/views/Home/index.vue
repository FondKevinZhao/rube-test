<template>
  <div>
    <h1>Home...</h1>
    <ul class="nav nav-tabs">
      <li>
        <router-link to="/home/news" active-class="active">News</router-link>
      </li>
      <li>
        <router-link to="/home/message" active-class="active">
          Message
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* 
  scoped: 让样式只对当前组件生效
    1. 会给当前组件所有元素添加一个自定义属性：data-v-1d9b105c
    2. 会给当前组件所有样式都添加一个属性选择器 [data-v-1d9b105c]
    因为只有当前组件由这个自定义属性，所以样式只会当前组件生效
*/
.active {
  background-color: yellowgreen !important;
  color: #fff !important;
}
</style>