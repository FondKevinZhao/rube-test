<template>
  <div>
    <h1>Message...</h1>
    <ul>
      <li>
        <router-link to="/home/message/detail/1">message001</router-link
        ><button @click="push">push</button
        ><button @click="replace">replace</button>
      </li>
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
    <button @click="back">back</button><button @click="forward">forward</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    push() {
      // 编程式导航
      // go
      // push
      // replace
      // this.$router.history.push("/home/message/detail/1");
      this.$router.history.push({
        name: "Detail",
        params: {
          id: 1,
        },
      });
    },
    replace() {
      this.$router.history.replace({
        name: "Detail",
        params: {
          id: 1,
        },
      });
    },
    back() {
      this.$router.history.go(-1);
    },
    forward() {
      this.$router.history.go(1);
    },
  },
};
</script>

<style>
</style>