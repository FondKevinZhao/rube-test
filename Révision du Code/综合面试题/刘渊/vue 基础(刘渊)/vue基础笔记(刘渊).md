## splice 方法

- 参数只有两个：代表删除：第一个起始位置，第二个表示删几个。

  ```js
  var arr = [1, 2, 3];
  arr.splice(0, 1); // 从下标为0的位置开始删除，删除1个
  ```

  

- 参数如果是多个：是增还是改：看第二个参数，第二个是 0 代表增，如果不是 0 代表改。

  ```js
  // 不变
  var arr = [1, 2, 3];
  arr.splice(1, 0); // 从下标为1的位置开始删除，删除0个。
  ```

  ```js
  // 增
  var arr = [1, 2, 3];
  arr.splice(1, 0, 6); // 从下标为1的位置开始删除，删除0个，增加一个6
  // 结果：[1, 6, 2, 3]
  ```

  ```js
  // 改
  var arr = [1, 2, 3];
  arr.splice(1, 1, 6); // 从下标为1的位置开始删除，删除1个，增加一个6
  // 结果：[1, 6, 3]
  ```

  

## 在 vue 当中一开始 data 中的属性数据都是响应式的

数组的数据：说的每个数组当中元素整体

对象的数据：说的对象的属性

## 在 vue 中处理响应式数据对于数组和对象是不一样的

1. 因为 vue 一开始就为 data 当中所有的属性通过 Object.defineProperty 添加了 get 和 set。

2. 数组修改的时候，必须使用特定的几个方法才能是响应式，如果直接通过下标操作数组的数据，那就不是响应式的。

   为什么数组的方法就可以是响应式？

   因为此 splice 非原生的 splice，Vue 当中给数组部分方法添加了修改页面的功能(重写了数组的方法)。

总结：vue 在对待数组的和对象的时候处理响应式是不一样的

- 对象是通过 Object.defineProperty 添加了 get 和 set。
- 数组是重写数组的方法：push、pop、shift、unshift、reverse、sort、splice。

## 禁用系统滚动条

```css
html,body {
  height: 100%;
  overflow: hidden;
}
```



## 自定义指令(和定义过滤器很像)

定义全局指令：`Vue.directive('指令名字', 回调函数);`

定义局部指令：在 vm 当中 directives 对象当中配置。

注意：指令的名称必须是全小写，不能大写。而且在定义指令名称的时候，不用写 v-。

## 自定义插件

插件的作用：定义插件对象，为 Vue 和 Vue 的实例添加一些额外功能。

插件对象必须声明使用 Vue.use()。

一个插件必须要有一个 install 方法，这是 vue 当中规定的。

写法跟 jQuery 很像：

```js
(function(window) {
    let MyPlugin = {}
    // 逻辑
    ...
    // 暴露
    window.MyPlugin = Myplugin
})(window);
```



## 自定义组件(非单文件组件)

定义全局组件：

- 复杂方式：

  1. **定义组件**，本质是通过 `Vue.extend(option配置对象)定义一个组件函数(以后用来作为构造函数使用)`。
  2. **注册组件**，本质就是为组件定义一个组件名称(组件标签名)`Vue.component('标签名'，组件函数)`
  3. **使用组件**，组件标签名在解析的时候会自动对应到每一个组件函数的实例，每个实例服务一个组件标签。

- 简化方式：`Vue.component('标签名'，option配置对象)`

  组件当中的 data 选项为什么非得是一个函数，而不能是一个对象？

  - 在组件中 data 使用对象会报错。报错内容：组件必须要定义成一个函数。
  - 当每次写标签使用的时候，都会偷偷的实例化定义出来的函数的实例化对象，被称作为组件对象。也就是说每一个组件标签(如：`<my-button></my-button>`)，背后都会对应自己的组件对象在支撑着。

定义局部组件：在工作中，没有人定义局部组件，因为定义局部组件，只能在当前组件使用。

缺点：

1. 这样定义组件麻烦、模板没提示。
2. 样式没法单独写。
3. 没法使用模块化解析 ES6 语法。

## 模块：一个 js 文件

什么是模块化？

- 模块化是针对于项目来说的

- 我这个项目是很多个 js 文件组成的。

## 组件：由 html/css/js 组成的代码片段。

组件化比模块化的范围要大。

## 脚手架的安装和目录结构

一、之前自己搭建环境、配置 webpack 只是一些基本的功能

脚手架 4/3

脚手架 2(现在没人用了)

区别：

1. 创建脚手架 4和3 的 vue 项目，并运行：
   - npm install -g @vue/cli
   - vue create vue-demo     使用安装的脚手架创建一个新的vue项目
   - npm run serve    运行创建的项目
2. 创建脚手架 2 的 vue 项目(已经淘汰了)
   - npm install -g @vue/cli-init
   - vue init webpack vue-demo
   - npm run dev
3. 查看 vue 脚手架版本：vue --version 或 vue -V
4. 删除 vue 脚手架的指令(只是演示，下载好了就行，不需要删除)：npm uninstall -g @vue/cli

## eslint 的禁用

eslint 的配置的错误级别

1. 局部禁用某个错误提示(工作中基本不用)：`/* eslint-disable no-unused-vars */`。表示对当前文件生效，其他文件照样不行。如：

   ```js
   /* eslint-disable no-unused-vars */
   var a;
   // 如果直接 var a，在脚手架里面会报错。如果加上看起来像个注释的东西： /* eslint-disable no-unused-vars */ 就不会报错了。
   ```

   

2. `package.json` 当中找到 `eslintConfig` 项，全局配置禁用某些错误提示：

   ```js
   "rules": {
       "no-unused-vars":"off"
   }
   ```

   

3. 开发阶段直接关闭 eslint 的提示功能

   手动创建 vue.config.js

   ```js
   module.exports = {
       // 写自己想要配置的东西去覆盖系统自带的
       // 关闭 Eslint 的规则
       lintOnSave: false
   }
   ```

   

## webpack 配置

- 脚手架 2：配置是暴露的，我们可以直接在里面修改配置。
- 脚手架 3：配置是隐藏的，我们需要通过脚手架扩展的 vue.config.js 来配置。

vue.config.js(相当于一个小的 webpack 配置文件) 在构建项目的时候是没有的，我们要配置 webpack 的时候，需要自己建立。

运行启动命令行：

- 脚手架 2: npm run dev
- 脚手架3: npm run serve

## 如何知道某个组件有没有用到某个数据？

就看当前组件有没有对那个数据进行：增、删、改、查

## map方法

功能：加工数组。根据已有的数组，创建新的数组，新数组当中的每一项和老数组当中每一项对应有关系。

参数：回调函数(item, index, arr)。要谁写谁。每个数组项都会执行这个回调函数，返回的是一个新的项，放在新数组中。

返回值：把每一项都返回的新项组成的新数组返回。

**注意：some/every/reduce/map/filter/forEach这些方法都暗含了遍历**

```js
this.users = response.data.items.map(item => ({
    username: item.login,
    userurl: item.url,
    userimg: item.avatar_url
}))
// 其实这个 item 不止这三项，但是我映射的只有三项
```



## 请求方式

1. 普通的http请求就是get和post。
2. Ajax请求一般情况下包含四种：get post put delete

## 前后端分离

分离前：前端只负责搭网页，然后后面的逻辑和接口都是由后端来做。

分离后：前端做前端的(搭页面、做交互(请求获取数据，展示渲染))，后端做后端的(数据库的存储操作，接口的书写，服务器的部署)。就是把后端的一些东西剥离出来给前端工程师，其实是减轻了后端人员的工作量。

## restful API 接口规范

restful API 接口规范：相同的路径，不同的请求方式，代表不同的动作。是现在目前最流行的书写后端接口的一个规范

1. 资源化：每个数据都会被看作是一个资源(商品、表格等)，对于每一个资源来说，操作数据库有4个情况(增、删、改、查)。

2. 后端人员对数据库的每个操作，对应前端人员Ajax的5个请求：get post put delete patch

​     get：调用后端人员写的查的资源接口

​     post：调用后端人员写的添加的资源接口

​     put：调用后端人员写的修改的资源接口

​     delete：调用后端人员写的删除的资源接口

​	  patch：局部更新



## 隐式类型转换

(刘渊哥)隐式类型转换：

啥时候出现？计算、比较、全部转基本

判等的时候：判等如果都是对象，判地址。如果有一个不是对象类型，那转基本。

1. 数组转基本：去掉中括号，中间留下什么，就带引号。

   ```js
   console.log([1, 2, 3] + 100); // '1, 2, 3100'
   ```

   

2. 对象转基本：固定的 '[object Object]'。

   ```js
   console.log({name:'zs'} + 100); // '[object Object]100'
   ```

   

3. 函数转基本：固定的 函数整体加字符串。

   ```js
   function fn() {
       console.log(111);
   }
   
   console.log(fn + 100); // 'function fn() {console.log(111)}100'
   ```




## 什么是localStorage？

(刘渊哥)只要`todos`数据发生变化，就把变化后的数据存储到 localStorage 当中

 localStorage 是前端本地存储的方案，是一个小型的数据库，存储到 localStorage 当中的东西，都会自动转化为字符串

localStorage 当中有 4 个 API：

- `localStorage.setItem('键', 值)` // 给 localStorage 存储数据
- `localStorage.getItem('键')` // 获取 localStorage 当中某个键的数据
- `localStorage.removeItem('键')` // 删除 localStorage 当中某个数据
- `localStorage.clearItem()` // 清空 localStorage 当中所有的数据

> 里面的“键”，通常都大写，如：`localStorage.setItem('TODOS_KEY', newVal)` 注意：这里的值不能直接存对象数据类型的值，否则会存入的 '[object Object]'。因为对象数据全部都会私自转基本，数据就不对了。
>
> 如果有对象，我们可以这样写：`localStorage.setItem('TODOS_KEY', JSON.stringify(newVal))`



## reduce的使用

功能：统计数组当中的符合条件的结果(数字或者其他类型)

参数：回调函数(参数：prev(上一次统计的结果) item index arr) 	统计的初始值

返回值：返回统计后的结果

```js
let arr = [1, 2, 3];
let newArr = arr.reduce((prev, item, index, arr)=> {
    // 这个方法也是暗含遍历，会拿数组的每一项执行回调函数
    // 第一次执行回调的时候，prev 的值就是你给的初始值
    // 第一次执行完回调函数后，会返回 prev 值，返回给了第二次执行时候的初始值
    return i
}, 0)
console.log(newArr); // 6
```



