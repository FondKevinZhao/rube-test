<template>
  <header class="header">
    <div class="header-top">
      <p v-if="nickName">
        尚品汇欢迎您！{{ nickName }} <button>退出登录</button>
      </p>
      <p v-else>
        尚品汇欢迎您！请<router-link to="/login" class="header-top-login"
          >登录</router-link
        ><router-link to="/register">免费注册</router-link>
      </p>

      <nav class="header-top-nav">
        <span><router-link to="/center">我的订单 </router-link></span>
        <span><router-link to="/shopcart">我的购物车 </router-link></span>
        <span><router-link to="/">我的尚品汇 </router-link></span>
        <span><router-link to="/">尚品汇会员 </router-link></span>
        <span><router-link to="/">企业采购 </router-link></span>
        <span><router-link to="/">关注尚品汇 </router-link></span>
        <span><router-link to="/">合作招商 </router-link></span>
        <span><router-link to="/">商家后台 </router-link></span>
      </nav>
    </div>

    <div class="header-bottom">
      <h1>
        <router-link to="/"><img src="./logo.png" alt="logo" /></router-link>
      </h1>
      <form class="header-bottom-form" @submit.prevent="goSearch">
        <input class="header-bottom-input" type="text" v-model="keyword" />
        <button class="header-bottom-btn" type="submit">搜索</button>
      </form>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      keyword: this.$route.params.keyword || "",
    };
  },
  methods: {
    goSearch() {
      const { keyword } = this;

      const location = {
        name: "Search",
      };

      // params需要判断
      // 原因：keyword如果没有值，但是加上params参数，跳转时路径出现问题（来到首页）
      // 解决：判断keyword有没有值，再加上params参数
      if (keyword) {
        location.params = {
          keyword,
        };
      }
      // query有值就加上了，query没有值是一个空对象，空对象对query没有任何影响
      location.query = this.$route.query;

      this.$router.history.push(location);
    },
  },
  computed: {
    ...mapState({
      nickName: (state) => state.user.nickName,
    }),
  },
};
</script>

<style lang="less">
/* 
  样式是嵌套写好，还是单独写好？
    嵌套写：
      .header {
        height: 80px;
        .header-top {
          display: flex;
        }
      }

      解析后：
      .header {
        height: 80px;
      }
      .header .header-top {
        display: flex;
      }

    嵌套写问题：
      1. 解析后css体积很大
      2. 性能差
        .a .b .c .d {}
        浏览器解析css选择器：从右往左

  选择器：一般三个以内最好，超过三个建议定义一个类名直接用
*/
.header {
  height: 100px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
  color: #333;
  padding: 10px 20px;
  font-size: 12px;
  p {
    margin: 0;
  }
  a {
    color: #333;
  }
}

.header-top-login {
  border-right: 1px solid #333;
  padding: 0 5px;
  margin-right: 5px;
}

.header-top-nav {
  span {
    border-right: 1px solid #333;
    padding-right: 5px;
    margin-left: 8px;
    &:last-child {
      border: none;
    }
  }
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  h1 {
    margin: 0;
  }
  img {
    height: 65px;
    width: 170px;
  }
}

.header-bottom-form {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.header-bottom-input {
  width: 450px;
  border: 1px solid #ea4a36;
  outline: none;
  height: 22px;
  padding: 4px 5px;
}
.header-bottom-btn {
  width: 80px;
  height: 32px;
  color: #fff;
  background-color: #ea4a36;
  border: none;
}
</style>