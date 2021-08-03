// 写路由的所有配置
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Message from "../views/Home/Message";
import Detail from "../views/Home/Message/Detail";
import News from "../views/Home/News";
import About from "../views/About";

// 安装插件：全局注册两个组件
Vue.use(VueRouter);

const router = new VueRouter({
  // 配置对象
  // mode 模式：前端路由的模式
  mode: "hash",
  // mode: "history",

  // routes：路由的配置项
  routes: [
    {
      path: "/home",
      component: Home,
      // 子路由
      children: [
        {
          // 地址以 / 开头，就是这个地址
          path: "/home/message",
          component: Message,
          children: [
            {
              name: "Detail", // 命名路由
              path: "detail/:id",
              component: Detail,
              props(route) {
                // route就相当于$route

                // 这个对象上的数据会以props方法传递给Detail组件
                return {
                  ...route.params,
                  ...route.query,
                };
              },
            },
          ],
        },
        {
          // 地址没有以 / 开头，地址前面会自动添加父路由的path
          // /home/news
          path: "news",
          component: News,
        },
        {
          // path: "",
          path: "/home",
          redirect: "news",
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      // path: "/",
      path: "*", // 代表任意地址（不会匹配上已经定义好的地址）
      redirect: "/home",
    },
  ],
});

// 暴露router
export default router;
