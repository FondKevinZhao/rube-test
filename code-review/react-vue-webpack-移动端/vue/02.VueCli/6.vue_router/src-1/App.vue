<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 路由链接跳转 -->
          <router-link
            class="list-group-item"
            active-class="active"
            exact-active-class="aaa"
            to="/about"
            >About</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            exact-active-class="aaa"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <div>
              <!-- 
                用来显示路由组件：自动根据当前路由去路由配置找到对应组件，进行显示 
                一个router-view只能显示一级的路由组件
              -->
              <router-view />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
/* .router-link-active {
  background-color: yellowgreen !important;
  color: #fff !important;
} */
</style>
