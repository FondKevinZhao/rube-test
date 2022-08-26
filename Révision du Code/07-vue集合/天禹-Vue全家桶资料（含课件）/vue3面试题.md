#### 1. Vue 3.0 性能提升主要是通过哪几方面体现的？

1、响应式系统提升

- vue2在初始化的时候，对data中的每个属性使用defineProperty调用getter和setter使之变为响应式对象。如果属性值为对象，还会递归调用defineProperty使之变为响应式对象。
- vue3使用proxy对象重写响应式。proxy的性能本来比defineProperty好，proxy可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。

>优势：
>可以监听动态新增的属性；
>可以监听删除的属性 ；
>可以监听数组的索引和 length 属性；

2、编译优化

- 优化编译和重写虚拟dom，让首次渲染和更新dom性能有更大的提升
  vue2 通过标记静态根节点,优化 diff 算法
  vue3 标记和提升所有静态根节点,diff 的时候只比较动态节点内容
- Fragments, 模板里面不用创建唯一根节点,可以直接放同级标签和文本内容
- 静态提升
- patch flag, 跳过静态节点, 直接对比动态节点
- 缓存事件处理函数

3、 源码体积的优化

- vue3移除了一些不常用的api，例如：inline-template、filter等
- 使用tree-shaking

#### 2. Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？

[博客地址](https://blog.csdn.net/qq_38110572/article/details/116055832)

#### 3. 3.2 版本新特性

[博客地址](https://blog.csdn.net/var_deng/article/details/119726194)

#### 4. Vite是什么

首先，vite为什么叫做vite，vite实际上是法语中快的意思，所以顾名思义，这个工具给我们带来的就是更快的开发体验，它实际上是一个面向现代浏览器，基于ECMA标准的ES module实现的一个更轻更快的web应用开发工具

之所以是面向现代浏览器，而不顾之前的浏览器，是因为vite本身是一个web应用开发者工具，而对于开发者来说，一般都是使用比较先进的浏览器来进行开发，所以我们可以直接使用一些现代浏览器支持的特性，而不考虑去兼容一些老的浏览器

而现代浏览器支持的特性中，在vite中最为重要的一个，就是ES module。由于vite是面向现代浏览器的，所以它利用浏览器去解析imports，在服务器端按需编译返回，跳过打包过程。同时支持Vue文件和HMR（热更新），针对生产环境可以使用rollup打包。

此外要注意的一点是，vite仅支持 vue3.0+ 的项目，也即是说我们无法在其中使用vue2.x

##### 1. 认识ES module

ES Module 是模块化的一种方式，除IE 外，其他主流浏览器都支持

通过下面方式加载模块

```js
<script type="module" src="..."></script>
```

默认延迟加载模块，执行时机，在文档解析之后，触发DOMContentLoaded 事件前执行。

##### 2. 认识HMR

HMR 全称 Hot Module Replacement，中文语境通常翻译为模块热更新，它能够在保持页面状态的情况下动态替换资源模块，提供丝滑顺畅的 Web 页面开发体验。

[博客地址](https://zhuanlan.zhihu.com/p/410510492)

##### 3. 认识Vite

`webpack`是目前整个前端使用最多的构建工具，但是除了`webpack`之后也存在其他一些构建工具。比如说`rollup`,`parcel`,`gulp`,`vite`等等。`vite`的官方定位是`下一代前端开发和构建工具`。

但是随着项目越来越大，需要处理的`javascript`呈指数级增长，模块越来越多。构建工具需要很长时间才能开启服务器，`HMR`也需要几秒钟才能在浏览器反应过来。所以出现了`vite`。

---



#### 5. webpack和vite的比较

1. webpack和vite都是现代化打包工具：

2. 底层语言的不同：

   从底层原理上来说，Vite是基于esbuild预构建依赖。而esbuild是采用go语言编写，因为go语言的操作是纳秒级别，而js是以毫秒计数，所以vite比用js编写的打包器快10-100倍。

3. webpack和vite的启动方式不同：

   - webpack: 分析依赖=> 编译打包=> 交给本地服务器进行渲染。首先分析各个模块之间的依赖，然后进行打包，在启动webpack-dev-server，请求服务器时，直接显示打包结果。webpack打包之后存在的问题：随着模块的增多，会造成打出的 bundle 体积过大，进而会造成热更新速度明显拖慢。
   - vite: 启动服务器=> 请求模块时按需动态编译显示。是先启动开发服务器，请求某个模块时再对该模块进行实时编译，因为现代游览器本身支持ES-Module，所以会自动向依赖的Module发出请求。所以vite就将开发环境下的模块文件作为浏览器的执行文件，而不是像webpack进行打包后交给本地服务器。
   - 热更新方面，vite效率更高。当改动了某个模块的时候，也只用让浏览器重新请求该模块，不需要像webpack那样将模块以及模块依赖的模块全部编译一次。

4. 优缺点：

   - vite开发阶段，打包快。
   - vite相关生态没有webpack完善，vite可以作为开发的辅助。

还有一篇博客讲得不错：https://www.jianshu.com/p/504d8c79424d

还有一篇博客讲得不错：https://www.cnblogs.com/zhengrongbaba/p/15177153.html



#### 6. Object.defineProperty和proxy的区别

- Proxy使用上比Object.defineProperty方便的多。
- Proxy代理整个对象，Object.defineProperty只代理对象上的某个属性。
- vue中，Proxy在调用的时候递归，Object.defineProperty在一开始就全部递归，Proxy性能优于Object.defineProperty。
- 对象上定义新属性时，Proxy可以监听到，Object.defineProperty监听不到。需要借助vm.$set方法或Vue.set()
- 数组新增删除修改时，Proxy可以监听到，Object.defineProperty监听不到。
- Proxy不兼容IE，Object.defineProperty不兼容IE8及以下。



#### 7. vue2和vue3 路由的写法

```
// 模式为hash:createWebHashHistory()，模式为history:createWebHistory()
history:createWebHashHistory()/createWebHistory(), 
```

[博客地址1](https://blog.csdn.net/weixin_46022934/article/details/125744089)

[博客地址2](https://www.cnblogs.com/DDjans/p/14844364.html)

#### 8. vue2和vue3 vuex的写法

在store.js中：`import { createStore } from 'vuex'`

在main.js中：

```js
import store from '@/store'
createApp(App).use(store).mount('#app')
```

在使用时：

```js
import { useStore } from 'vuex';
const store = useStore();
console.log(store.state.count);
```

[博客地址(顺便包含pinia)](https://blog.csdn.net/weixin_42232622/article/details/125451861)

#### 9. 有了vuex为什么还要有pinia

pinia 目前已经是 vue 官方正式的状态库。适用于 vue2 和 vue3

pinia中没有了mutations和modules，pinia不必以嵌套（通过modules引入）的方式引入模块，因为它的每个store便是一个模块，如storeA，storeB... 。在我们使用Vuex的时候每次修改state的值都需要调用mutations里的修改函数（下面会说到），因为Vuex需要追踪数据的变化，这使我们写起来比较繁琐。而pinia则不再需要mutations，同步异步都可在actions进行操作，至于它没有了mutations具体是如何最终到state变化的，这里我们不过多深究。

相比于Vuex，Pinia是可以直接修改状态的，并且调试工具能够记录到每一次state的变化

pinia使用$patch方法可以修改多个state中的值

**相对于以前的 vuex，pinia具有以下优势：**

- 更简单的写法，代码更清晰简洁，支持 `composition api` 和 `options api` 语法
- 抛弃传统的 Mutation ，只有 state,  getter 和 action ，简化状态管理库
- 不需要嵌套模块，符合 Vue3 的 Composition api，让代码扁平化
- 更完善的 typescript 支持，无需创建自定义复杂的包装类型来支持 TypeScript，所有内容都是类型化的，并且 [API](https://so.csdn.net/so/search?q=API&spm=1001.2101.3001.7020) 的设计方式尽可能利用 TS 类型推断
- 非常轻量，只有1kb的大小
- 代码简洁，很好的代码自动分割

[博客地址1(好文)](https://mp.weixin.qq.com/s?__biz=MzA5MTI0ODUzNQ==&mid=2652957572&idx=1&sn=c77f7ca8550aace7714b26d6781ccca3&chksm=8bab097cbcdc806a190092a0c083f36b47f9eb9d15951f22248598f5f6e7eedf667d35d67ed0&scene=27)

[博客地址2](https://www.jianshu.com/p/c45218b4a5e0)

#### 10. 什么是composition API(组合式API)

写在setup函数中的 ref、reactive、计算属性、监视、生命周期等在setup函数中写的API，统称为组合式API。组合式API的体现在自定义hook函数中体现的淋漓尽致。

#### 11. 自定义hook函数和mixins的区别是什么呢？

在vue2中一般使用mixins来吧相同的某些功能代码复合使用。在vue3中使用hooks函数来完成。优势在于：

- 使用Vue3的组合API封装的可复用的功能函数
- 自定义hook的作用类似于vue2中的mixin技术
- 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂

[博客地址](https://juejin.cn/post/6949785721502695461)

#### 12. 为什么vue3中删除了全局事件总线

##### 利弊分析

**使用EventBus的好处在于：**

1. 可全局使用
2. 订阅和发布都很灵活，代码量少
3. 跨组件通信，无需使用缓存



**相对于状态管理，缺点也很明显：**

1. 订阅和发布必须成对出现，不然就没有意义
2. 由于在页面使用里的灵活性，一旦事件多了后，难以对事件进行维护
3. 在订阅事件的组件里，必须手动销毁监听，否则会引发多次执行
4. 对于一些包含业务逻辑的通信，复用性差，需要在多个地方重复写逻辑



**总结**

- 中大型项目都不推荐用EventBus，建议用vuex做状态管理，方便日后维护。
- 小型项目，涉及到多处跨组件通信的情况，可以考虑使用。

[Vue3学习之全局事件总线mitt](https://blog.csdn.net/m0_50789696/article/details/125168752)

#### 13. 虚拟DOM和diff算法

虚拟 DOM 简单说就是 **用JS对象来模拟 DOM 结构**

三者结合(虚拟DOM  = diff算法 + key关键字)：因为使用了虚拟DOM所以会用到diff算法，diff算法的重点在key

Diff 算法，在 Vue 里面就是叫做 `patch` ，它的核心就是参考 **[Snabbdom](https://link.zhihu.com/?target=https%3A//github.com/snabbdom/snabbdom)**，通过新旧虚拟 DOM 对比(即 patch 过程)，找出最小变化的地方转为进行 DOM 操作

[博客地址1](https://zhuanlan.zhihu.com/p/421197879)

[博客地址2](https://www.cnblogs.com/sugartang/p/16189101.html)

天禹聊key：

经典面试题:
      1). react/vue中的key有什么作用？（key的内部原理是什么？）
      2). 为什么遍历列表时，key最好不要用index?
   1. 虚拟DOM中key的作用：
         1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

         2). 详细的说: 当状态中的数据发生变化时，vue会根据【新数据】生成【新的虚拟DOM】, 
                         随后vue进行【新虚拟DOM】与【旧虚拟DOM】的**diff比较**，比较规则如下：

         - a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                       (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                       (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

         - b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                   根据数据创建新的真实DOM，随后渲染到到页面


  2. 用index作为key可能会引发的问题：

        1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
           会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

              2. 如果结构中还包含输入类的DOM：
                 会产生错误DOM更新 ==> 界面有问题。
              3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
                 于渲染列表用于展示，使用index作为key是没有问题的。

  3. 开发中如何选择key?:
        最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
        如果确定只是简单的展示数据，用index也是可以的。



#### 14.  聊聊Vue3(陈辉鸿)

- 今年9月份发布的正式版
- Vue3支持vue2的大多数特性
- 设计了一套强大的组合API来替代option API: 可读性和可复用性更好
- 更好的支持Typescript
- 使用Proxy代替defineProperty实现数据响应式: 效率更高, 功能更强大
- 重写虚拟DOM的实现和Tree-Shaking: 更小更快
- 新的组件: Fragment / Teleport / Suspense
- 设计了一个新的脚手架工具vite: 开发启动快了很多

#### 15. vue3 tree-shaking

**是什么？**

Tree shaking 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 Dead code elimination

**如何做？**

`Tree shaking`无非就是做了两件事：

- 编译阶段利用`ES6 Module`判断哪些模块已经加载
- 判断那些模块和变量未被使用或者引用，进而删除对应代码

**作用**

通过`Tree shaking`，`Vue3`给我们带来的好处是：

- 减少程序体积（更小）
- 减少程序执行时间（更快）
- 便于将来对程序架构进行优化（更友好）

[博客地址](https://www.jianshu.com/p/975073fef572)

#### 15. 一文搞懂pinia

[博客地址](https://zhuanlan.zhihu.com/p/533233367)

[此博客的B站视频地址](https://www.bilibili.com/video/BV1rv4y1M7qo/?spm_id_from=333.788.recommend_more_video.0&vd_source=ba9278b625c8ac0175e9312cb9cfed59)

#### 16. provide inject 传递响应式数据

1. 如果是传递某个值或者某个对象，我们在定义的时候使用ref或reactive，那么接收到的就是响应式的数据。
2. 如果是多个值，我们可以使用计算属性

```js
// 定义的时候，使用响应式定义
const state = reactive({
	name: "lisa",
	age: "18",
});
// 方法一： 将state里的值全部传递给子组件
provide('state',state);
// 方法二： 通过computed 计算属性实现响应式
provide('name', computed(() => {
  return state.name
}));
```

[博客地址](https://blog.csdn.net/Shivy_/article/details/125218899)





































































