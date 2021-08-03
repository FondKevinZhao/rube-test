import Vue from "vue";
import VueRouter from "vue-router";

import Users from "../views/Users";
import UserSave from "../views/Users/UserSave";
import UserUpdate from "../views/Users/UserUpdate";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Users", // 命名路由
      path: "/users",
      component: Users,
    },
    {
      name: "UserSave", // 命名路由
      path: "/users/save",
      component: UserSave,
    },
    {
      name: "UserUpdate", // 命名路由
      path: "/users/update",
      component: UserUpdate,
    },
    {
      path: "*",
      redirect: "/users",
    },
  ],
});
