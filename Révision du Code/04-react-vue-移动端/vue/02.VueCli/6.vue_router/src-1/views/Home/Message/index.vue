<template>
  <div>
    <h1>Message...</h1>
    <ul>
      <li><router-link to="/home/message/detail/1">message001</router-link></li>
      <li>
        <!-- <router-link to="/home/message/detail/3?name=jack&age=18"
          >message003</router-link
        > -->

        <!-- 
          name: 'Detail' 跳转地址是 Detail 命名路由的地址
         -->
        <router-link
          :to="{
            name: 'Detail',
            params: {
              id: 3,
            },
            query: {
              name: 'jack',
              age: 18,
            },
          }"
          >message003</router-link
        >
      </li>
      <li><router-link to="/home/message/detail/5">message005</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style>
</style>