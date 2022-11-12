// 定义路由的所有配置

import Books from "../pages/Books";
import Events from "../pages/Events";
import Home from "../pages/Home";
import News from "../pages/News";
import Pins from "../pages/Pins";

const routes = [
  {
    path: "/",
    component: Home,
    title: "首页",
  },
  {
    path: "/pins",
    component: Pins,
    title: "沸点",
  },
  {
    path: "/news",
    component: News,
    title: "咨询",
  },
  {
    path: "/books",
    component: Books,
    title: "小册",
  },
  {
    path: "/events",
    component: Events,
    title: "活动",
  },
];

export default routes;
