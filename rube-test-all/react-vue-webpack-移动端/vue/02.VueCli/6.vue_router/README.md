# vue-router

- npm i vue-router

## 基本使用

- 路由的配置

```js
// 配置文件：router/index.js
import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home";

// 安装插件: 全局注册两个组件
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
    },
  ],
});

// main.js
import router from './router';

new Vue({
  ...,
  // 应用router
  router
})
```

- 使用
  - `router-link` 用来路由链接跳转
  - `router-view` 用来加载显示路由组件
    - 自动遍历 routes 配置，找到对应路由组件，加载显示
    - 只会加载显示同一级路由组件

## 嵌套路由

- 路由的配置

```js
...
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          name: 'Message',
          path: 'message', // 省略写法：自动补充父路由地址
        },
        {
          name: 'News',
          path: '/home/news', // 完整写法
        },
      ]
    },
  ],
});
```

- 注意：要在 Home 组件中在使用 router-view，才会显示子路由组件

## 路由传递参数的方法

1. params

- 路由配置

```js
{
  name: 'Detail', // 命名路由
  path: '/xxx/:id', // :id params参数
  component: Detail
}
```

- 路由跳转时，传递 params 参数

```html
<router-link to="/xxx/1">xxx</router-link>

<!-- 对象形式使用params参数，必须使用命名路由 -->
<router-link
  :to="{
    name: 'Detail',
    params: {
      id: 1
    }
  }"
>
  xxx
</router-link>
```

- 组件使用 params

`this.$route.params.id`

2. query 参数

- 路由跳转时，传递 params 参数

```html
<router-link to="/xxx?name=jack&age=18">xxx</router-link>

<router-link
  :to="{
    name: 'Xxx',
    query: {
      name: 'jack',
      age: 18
    }
  }"
>
  xxx
</router-link>
```

- 组件使用 query

`this.$route.query`

3. 将 params 参数和 query 参数以 props 方法传递给组件

- 路由配置

```js
{
  ...,
  props(route) {
    return {
      ...route.params,
      ...route.query,
    }
  }
}
```

- 组件声明接受 props

```js
props: ["name", "id"];
```

- 组件使用
  `this.name`

4. 给多个路由组件传递公共参数

- 传递参数

```html
<router-view name="jack" age="18" />
```

- 组件声明接受 props

```js
props: ["name", "age"];
```

- 组件使用
  `this.name`

## 路由跳转的两种方式

1. 路由链接跳转 `router-link`
2. 编程式导航 `this.$router.history.push/replace/go()`
