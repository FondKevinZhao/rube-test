## 1. Vue 3.0 性能提升主要是通过哪几方面体现的？

1、响应式系统提升

- vue2在初始化的时候，对data中的每个属性使用defineProperty调用getter和setter使之变为响应式对象。如果属性值为对象，还会递归调用defineProperty使之变为响应式对象。
- vue3使用proxy对象重写响应式。proxy的性能本来比defineProperty好，proxy可以拦截属性的访问、赋值、删除等操作，不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。

>优势：
>可以监听动态新增的属性；
>可以监听删除的属性 ；
>可以监听数组的索引和 length 属性；

2、编译优化

- 优化编译和重写虚拟dom，让首次渲染和更新dom性能有更大的提升
  vue2 通过标记静态根节点，优化 diff 算法
  vue3 标记和提升所有静态根节点，diff 的时候只比较动态节点内容
- Fragments, 模板里面不用创建唯一根节点，可以直接放同级标签和文本内容
- 静态提升：当使用 hoistStatic 时,所有静态的节点都被提升到 render 方法之外。只会在应用启动的时候被创建一次,之后使用只需要应用提取的静态节点，随着每次的渲染被不停的复用。
- patch flag, 跳过静态节点，直接对比动态节点
- 缓存事件处理函数

3、 源码体积的优化

- vue3移除了一些不常用的api，例如：inline-template、filter等
- 使用tree-shaking：通过摇树优化核心库体积，减少不必要的代码量

## 2. Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？

Options Api

1. 包含一个描述组件选项（data、methods、props等）的对象 options；
2. API开发复杂组件，同一个功能逻辑的代码被拆分到不同选项 ；
3. 使用mixin重用公用代码，也有问题：命名冲突，数据来源不清晰；

composition Api

1. vue3 新增的一组 api，它是基于函数的 api，可以更灵活的组织组件的逻辑。
2. 解决options api在大型项目中，options api不好拆分和重用的问题。

## 3. 3.2 版本新特性

[博客地址](https://blog.csdn.net/var_deng/article/details/119726194)

## 4. Vite是什么

首先，vite为什么叫做vite，vite实际上是法语中`快`的意思，所以顾名思义，这个工具给我们带来的就是更快的开发体验，它实际上是一个面向现代浏览器，**基于ECMA标准的ES module实现的一个更轻更快的web应用开发工具**。

之所以是面向现代浏览器，而不顾之前的浏览器，是因为vite本身是一个web应用开发者工具，而对于开发者来说，一般都是使用比较先进的浏览器来进行开发，所以我们可以直接使用一些现代浏览器支持的特性，而不考虑去兼容一些老的浏览器。

而现代浏览器支持的特性中，在vite中最为重要的一个，就是ES module。由于vite是面向现代浏览器的，所以它利用浏览器去解析imports，在服务器端按需编译返回，跳过打包过程。同时支持Vue文件和HMR（热更新），针对生产环境可以使用rollup打包。

此外要注意的一点是，vite仅支持 vue3.0+ 的项目，也即是说我们无法在其中使用vue2.x

#### 1. 认识ES module

ES Module 是模块化的一种方式，除IE 外，其他主流浏览器都支持

通过下面方式加载模块

```js
<script type="module" src="..."></script>
```

默认延迟加载模块，执行时机，在文档解析之后，触发 DOMContentLoaded 事件前执行。

#### 2. 认识HMR

HMR 全称 Hot Module Replacement，中文语境通常翻译为`模块热更新`，它能够在保持页面状态的情况下动态替换资源模块，提供丝滑顺畅的 Web 页面开发体验。

[博客地址](https://zhuanlan.zhihu.com/p/410510492)

#### 3. 认识Vite

`webpack`是目前整个前端使用最多的构建工具，但是除了`webpack`之后也存在其他一些构建工具。比如说`rollup`,`parcel`,`gulp`,`vite`等等。`vite`的官方定位是`下一代前端开发和构建工具`。

但是随着项目越来越大，需要处理的`javascript`呈指数级增长，模块越来越多。构建工具需要很长时间才能开启服务器，`HMR`也需要几秒钟才能在浏览器反应过来。所以出现了`vite`。



## 5. webpack和vite的比较

1. webpack和vite都是现代化打包工具：

2. 底层语言的不同：

   从底层原理上来说，Vite是基于esbuild预构建依赖。而esbuild是采用go语言编写，因为go语言的操作是纳秒级别，而js是以毫秒计数，所以vite比用js编写的打包器快10-100倍。

3. webpack和vite的启动方式不同：

   - **webpack: 分析依赖 => 编译打包 => 交给本地服务器进行渲染。**首先分析各个模块之间的依赖，然后进行打包，在启动 webpack-dev-server 请求服务器时，直接显示打包结果。webpack 打包之后存在的问题：随着模块的增多，会造成打出的 bundle 体积过大，进而会造成热更新速度明显变慢。
   - **vite: 启动服务器 => 请求模块时按需动态编译显示。**是先启动开发服务器，请求某个模块时再对该模块进行实时编译，因为现代游览器本身支持ES-Module，所以会自动向依赖的Module发出请求。所以vite就将开发环境下的模块文件作为浏览器的执行文件，而不是像webpack进行打包后交给本地服务器。
   - **热更新方面，vite效率更高。**当改动了某个模块的时候，也只用让浏览器重新请求该模块，不需要像webpack那样将模块以及模块依赖的模块全部编译一次。

4. 优缺点：

   - vite开发阶段，打包快。
   - vite相关生态没有webpack完善，vite可以作为开发的辅助。

还有一篇博客讲得不错：https://www.jianshu.com/p/504d8c79424d

还有一篇博客讲得不错：https://www.cnblogs.com/zhengrongbaba/p/15177153.html



## 6. Object.defineProperty和proxy的区别

- Proxy使用上比Object.defineProperty方便的多。
- Proxy代理整个对象，Object.defineProperty只代理对象上的某个属性。
- vue中，Proxy在调用的时候递归，Object.defineProperty在一开始就全部递归，Proxy性能优于Object.defineProperty。
- 对象上定义新属性时，Proxy可以监听到，Object.defineProperty监听不到。需要借助vm.$set方法或Vue.set()
- 数组新增删除修改时，Proxy可以监听到，Object.defineProperty监听不到。
- Proxy不兼容IE，Object.defineProperty不兼容IE8及以下。



## 7. vue2和vue3 路由的写法

```
// 模式为hash: createWebHashHistory()
// 模式为history:createWebHistory()
history: createWebHashHistory()/createWebHistory(), 
```

vue3组件中使用route或router

```js
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()

router.push("./路径")
```



[博客地址1](https://blog.csdn.net/weixin_46022934/article/details/125744089)

## 8. vue2和vue3 vuex的写法

在store.js中：`import { createStore } from 'vuex'`

```js
import { createStore } from 'vuex';
export default createStore({
	state: {name: 123 },
	mutations:{    getname(state,newVal){this.state.name=newVal;}  }, 
	// 同步方法：(只有mutations才能改state的值)
	actions:{   getnameAsync(){ ... }     },  // 异步方法
	getter:{},  // 相当于计算属性
	modules: {}  // 将vuex分块
})
```



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

[博客地址](https://blog.csdn.net/weixin_42232622/article/details/125451861)

## 9. 什么是composition API(组合式API)

写在setup函数中的 ref、reactive、计算属性、监视、生命周期等在setup函数中写的API，统称为组合式API。组合式API的体现在自定义hook函数中体现的淋漓尽致。

## 10. 自定义hook函数和mixins的区别是什么呢？

在vue2中一般使用mixins来把相同的某些功能代码复合使用。在vue3中使用hooks函数来完成。优势在于：

- 使用Vue3的组合API封装的可复用的功能函数
- 自定义hook的作用类似于vue2中的mixin技术
- 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4382929ac814c2f815d82d65b32ab3e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp">

[博客地址](https://juejin.cn/post/6949785721502695461)

## 11. 为什么vue3中删除了全局事件总线

#### 利弊分析

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

## 12. 虚拟DOM和diff算法

虚拟 DOM 简单说就是 **用JS对象来模拟 DOM 结构**

三者结合(虚拟DOM  = diff算法 + key关键字)：因为使用了虚拟DOM所以会用到diff算法，diff算法的重点在key

Diff 算法，在 Vue 里面就是叫做 `patch` ，通过新旧虚拟 DOM 对比(即 patch 过程)，找出最小变化的地方转为进行 DOM 操作

### 辉鸿聊虚拟DOM

#### 1. 当数据发生变化时，vue 是怎么更新节点的？

要知道渲染真实 DOM 的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？diff 算法能够很好的帮助我们。

我们先根据真实 DOM 生成一颗`virtual DOM`，当`virtual DOM`某个节点的数据改变后会生成一个新的`Vnode`，然后`Vnode`和`oldVnode`作对比，发现有不一样的地方就直接修改在真实的 DOM 上，然后使`oldVnode`的值为 `Vnode`。

diff 的过程就是调用名为 `patch` 的函数，比较新旧节点，一边比较一边给**真实的DOM**打补丁。

在 js 事件直接操作 DOM 的时代（包括 Jquery 的时代），我们通过 JS 直接对真实的 DOM 树进行增删改查。

但是 JS 事件直接操作 DOM 会随着项目规模的扩大、事件的增加导致事件的管理以及事件和 DOM 之间的关系的维护变得日益复杂。

为了解决这个问题，以 Vue 为代表的新型前端框架（包括 react 等）提出了引入数据中间层来避免直接操作 DOM 的思路：让前端框架底层代替用户去操作 DOM，用户不再关注 DOM 元素，而聚焦于数据（state）。使用 Vue 等框架，我们只需要修改数据，数据变化后 Vue 帮助我们来更新 DOM。

所谓的虚拟 DOM 并不是一个真正的 DOM 树，它是 Vue 底层在检测到数据修改后，不立刻直接去修改真实的 DOM，而是结合数据和模板，生成一个临时的由 js 对象模拟的 DOM 树。

#### 2. DOM 比较策略

在更新时会生成新的虚拟 dom，这时候新旧虚拟 dom 会进行比较，差别化更新。

1. 如果新旧节点不一样，会直接创建一个新标签替换老标签。

2. 如果标签一样，文本不一样，会用新的文本替换老的文本。

3. 如果标签一样，比较属性，设置属性和样式。

4. 新旧节点对比子节点策略:

   4-1. 如果老节点有孩子，新节点没孩子，直接清空老节点孩子。

   4-2. 如果新节点有孩子，老节点没孩子，直接循环遍历新节点依次添加。

   4-3. 如果都有孩子，内部会采用双指针的方式进行比较，先对比头，头如果不一样，会进行尾尾比较，如果尾不一样，会进行老头和新尾比较，如果还不一样，会进行老尾和新头比较，**注意：**在比较的时候会先判断标签是否一样，在判断 key 是否一样，判断 key 的好处在于尽最大可能复用老节点，key 对比 index 的好处是：key不会发生变化，而 index 可能会发生变化，导致判断失误没有复用老节点，如果最后这些比较都不一样，会进行乱序比较。

#### 3. key 的作用

为了复用之前的数据而提高渲染速度，只修改或者增加元素不影响其他的元素渲染。

当遍历的数据发生变化的时候,此时组件会生成全新的虚拟 DOM 树，并与旧的虚拟 DOM 树进行对比(对比条件包括 key)，找到可以复用的真实 DOM节点，去复用这些真实节点，提高代码运行。
**注意：**复用的是上一次生成的真实 DOM 节点。



#### 4. 使用 index 作为 key 值，可能会出现什么问题?

**注意：**其实平常开发中，如果遍历的数据不会发生变化，用 index 是没有问题的。
input 案例
		此案例中，diff 算法生效了，可以复用之前 key 值相同的元素，但是复用错了。
商城商品列表排序
		此案例中，diff 算法失效了，明明具有数据相同的节点可以完全复用，但是由于 key 值问题，导致所有节点都不能复用。



#### 5. 使用数据的唯一标识作为 key 的好处

​	只要服务器数据不发生变化，我前端页面的节点就可以永远复用。

### 天禹聊虚拟DOM

#### 1. 天禹聊虚拟DOM

​     1. 本质是Object类型的对象（它只是一个普通的 js 对象）

​     2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是Vue内部在用，无需真实DOM上那么多的属性。

​     3. 虚拟DOM最终会被Vue转化为真实DOM，呈现在页面上。

#### 2. 天禹聊key

经典面试题:
      1). react/vue中的key有什么作用？（key的内部原理是什么？）
      2). 为什么遍历列表时，key最好不要用index?

   1. 虚拟DOM中key的作用：
         1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

         2). 详细的说: 当状态中的数据发生变化时，vue会根据【新数据】生成【新的虚拟DOM】, 
                       随后vue进行【新虚拟DOM】与【旧虚拟DOM】的**diff比较**，比较规则如下：

         - a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                       (1). 若虚拟DOM中内容没变, 直接使用之前的真实DOM
                       (2). 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

         - b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                   根据数据创建新的真实DOM，随后渲染到到页面


  2. 用index作为key可能会引发的问题：

        1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
           会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
        
        2. 如果结构中还包含输入类的DOM：
              会产生错误DOM更新 ==> 界面有问题。
        
              注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
              于渲染列表用于展示，使用index作为key是没有问题的。
        
  3. 开发中如何选择key?:
        最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
        如果确定只是简单的展示数据，用index也是可以的。



## 13.  聊聊Vue3(陈辉鸿)

- 今年9月份发布的正式版
- Vue3支持vue2的大多数特性
- 设计了一套强大的组合API来替代option API: 可读性和可复用性更好
- 更好的支持Typescript
- 使用Proxy代替defineProperty实现数据响应式: 效率更高, 功能更强大
- 重写虚拟DOM的实现和Tree-Shaking: 更小更快
- 新的组件: Fragment / Teleport / Suspense
- 设计了一个新的脚手架工具vite: 开发启动快了很多

## 14. vue3 tree-shaking

**是什么？**

Tree shaking 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 Dead code elimination

**如何做？**

`Tree shaking`无非就是做了两件事：

- 编译阶段利用`ES6 Module`判断哪些模块已经加载
- 判断哪些模块和变量未被使用或者引用，进而删除对应代码

**作用**

通过`Tree shaking`，`Vue3`给我们带来的好处是：

- 减少程序体积（更小）
- 减少程序执行时间（更快）
- 便于将来对程序架构进行优化（更友好）

[博客地址](https://www.jianshu.com/p/975073fef572)







































































