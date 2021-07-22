import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../views/Home";
// import Search from "../views/Search";
// import Login from "../views/Login";
// import Register from "../views/Register";
// import Detail from "../views/Detail";
// import AddCartSuccess from "../views/AddCartSuccess";
// import ShopCart from "../views/ShopCart";
// import Trade from "../views/Trade";
// import Pay from "../views/Pay";
// import PaySuccess from "../views/PaySuccess";
// import Center from "../views/Center";

// 路由懒加载：动态导入
const Home = () => import(/* webpackChunkName: 'Home' */"../views/Home");
const Search = () => import(/* webpackChunkName: 'Search' */"../views/Search");
const Login = () => import(/* webpackChunkName: 'Login' */"../views/Login");
const Register = () => import(/* webpackChunkName: 'Register' */"../views/Register");
const Detail = () => import(/* webpackChunkName: 'Detail' */"../views/Detail");
const AddCartSuccess = () => import(/* webpackChunkName: 'AddCartSuccess' */"../views/AddCartSuccess");
const ShopCart = () => import(/* webpackChunkName: 'ShopCart' */"../views/ShopCart");
const Trade = () => import(/* webpackChunkName: 'Trade' */"../views/Trade");
const Pay = () => import(/* webpackChunkName: 'Pay' */"../views/Pay");
const PaySuccess = () => import(/* webpackChunkName: 'PaySuccess' */"../views/PaySuccess");
const Center = () => import(/* webpackChunkName: 'Center' */"../views/Center");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //   isHideFooter: false,
    // },
  },
  {
    // path: "/search/:keyword", // 必须传params
    path: "/search/:keyword?", // 可选params
    name: "Search",
    component: Search,
    // meta: {
    //   isHideFooter: false,
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // meta参数：一旦当前路由组件被加载了，meta参数就会传入$route
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
    beforeEnter(to, from, next) {
      if (from.name === "Detail") {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: ShopCart,
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    beforeEnter(to, from, next) {
      if (from.name === "Trade") {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/paysuccess",
    name: "PaySuccess",
    component: PaySuccess,
    beforeEnter(to, from, next) {
      if (from.name === "Pay") {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/center",
    name: "Center",
    component: Center,
  },
];

const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes,
  // 滚动行为
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return {
      x: 0, // 水平方向
      y: 0, // 垂直方向
    };
  },
});

// 设置全局路由导航守卫
router.beforeEach((to, from, next) => {
  /*
    to 要去的路由信息对象
    from 从哪来的路由信息对象
    next 调用next才会去to路由这个地址
      A路由跳转到B路由
        to：B
        from: A
        如果没有调用next方法，不会跳转，会停留在A
        调用next方法，才会去B
  */
  // console.log(to, from);
  // if (to.name === "AddCartSuccess") {
  //   if (from.name === "Detail") {
  //     next(); // 直接调用, 去的就是to的路由地址
  //   } else {
  //     next({ name: "Home" }); // 传参，去Home路由
  //   }
  //   return;
  // }

  next();
});

// router.afterEach((to, from, next) => {});

export default router;
