### 1. Vue代码层面优化

####  1) v-for 遍历列表

指定非下标的唯一key

不同时使用 v-if

#### 2) 图片资源懒加载

如使用 v-lazyload
1. 安装插件：`npm install vue-lazyload --save-dev`

2. 引用文件，一般在 main.js 全局引用，且配置好图片：

  ```js
  import VueLazyload from 'vue-lazyload'
  
  Vue.use(VueLazyload, {
       loading: require('img/loading.png'),//加载中图片，一定要有，不然会一直重复加载占位图
       error: require('img/error.png')  //加载失败图片
  });
  ```

  

3. vue 文件中将需要懒加载的图片绑定 v-bind:src 修改为 v-lazy：

   ```js
   <img v-lazy="'/static/img/' + item.productImage" :key="'/static/img/' + item.productImage"> 
   //将 :src 属性直接改为 v-lazy, :key 是为了防止刷新页面或图片更改时图片不更新
   ```

   

#### 3) 路由懒加载

定义：懒加载简单来说就是延迟加载或按需加载，即在需要的时候的时候进行加载。

作用：为给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题。

使用：常用的懒加载方式有两种：即使用 **vue 异步组件**  和  **ES 中的 import**。

Vue 异步组件实现懒加载：

```js
component：resolve=>(require(['需要加载的路由的地址'])，resolve)
```

ES 中的 import 方法：`const Home = () => import('./pages/Home')`

`const HelloWorld = ()=> import('需要加载的模块地址') // import 中放的是需要加载的模块地址`



#### 4) 组件懒加载

组件懒加载的方法和路由懒加载的方法相同。

#### 5) 第三方插件的按需引入
如: element-ui / vant 

两种方式：
1、按需引入
- 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的：
- 更改 .babelrc 文件
2、 我们将按需引入的代码单独分割一下
在 src 文件夹中新建我们的 element 文件夹，并在里面新建一个 index.js 文件
在 index 文件中去书写我们需要引入的部分组件
在 main.js 中使用该文件，就大功告成了

#### 6) 大数组优化1: 冻结响应式数据

当前组件如果只是为纯展示组件时，拿到数据后使用`Object.freeze()`将数据冻结，这样数据就无法进行响应变化。

```js
export default {
  data: () => ({
    users: []
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users); // 这样数组内部就没有做数据劫持处理, 效率更高
  }
};
```



#### 7) 大数组优化2: 虚拟列表

- 当组件处于非常长的列表时，数据过多导致DOM元素同样多，导致卡顿。

- 使用业界常用手段`虚拟列表`，只渲染可以看到的窗口的区域DOM。

- 虚拟列表的基本实现思路:  ==> 测试代码 vue/虚拟列表/index.html

  - 用vue的for循环渲染列表，自己手动加一个滚动条，然后通过监听scroll，
  - 算出应该显示到第几个，通过计算属性截取显示的数据

- 真实项目可以使用第三方插件:

  ​	[vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)

#### 8) 事件销毁

Vue 组件销毁时，实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。单独添加的监听事件是不会移除的，需要手动移除事件的监听，以免造成内存泄漏。

```
created() {
	document.addEventListener('scroll', this.onScroll, false);
},
beforeDestory() {
	document.removeEventListener('scroll', this.onScroll, false);
}
```



### 2. webpack配置层面优化

#### 1) 兼容性处理

- JS
  - babel-loader: presets: ['@babel/preset-env'] 问题就是只能编译/转换简单语法
  - @babel/polyfill: 做复杂语法(新的APi)兼容，问题是体积太大了
  - core-js: 在@babel/preset-env基础上，增加了useBuiltIns: 'usage'来实现按需打包
- CSS  
  - postcss-loader  
  
  - 内部使用autoprefixer插件, 给C3样式自动添加厂商前缀
  
    ![preview](https://segmentfault.com/img/remote/1460000014782566/view)
  
  - 在package.json中指定browserslist来指示postcss-loader兼容性做到什么程度

#### 2) 拆分打包与压缩

对第三方JS包, css进行拆分打包

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2130fabf53ec430b9d103ae8b8009eca~tplv-k3u1fbpfcp-watermark.image)

#### 3) 资源预加载(prefetch)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a896fd6ab9e4e3b9479ea018aae8b49~tplv-k3u1fbpfcp-watermark.image)

#### 4) 生产环境时不生成 SourceMap

productionSourceMap: false

减少打包文件

#### 5) 文件名hash化=>利用浏览器缓存

对打包文件名用上contenthash ==> 某个bundle对应的模块文件内容发生改变文件名才会变化 ===> 利用浏览器缓存

#### 6) 代码Tree Shaking

效果: 打包时'摇掉'模块中没有被使用的代码

条件: 必须是ES6模块化导出且进行代码压缩时



### 3. 基础的Web技术层面的优化

#### 1) 开启 Gzip

- 下载: yarn add compression-webpack-plugin --dev

- vue.config.js

```
var CompressionWebpackPlugin = require('compression-webpack-plugin');
...
configureWebpack: config => {
  config.plugins.push(
      new CompressionWebpackPlugin({
          test: new RegExp('\\.(js|css)$'),
          threshold: 8192,
          minRatio: 0.8
      })
 )
```

- nginx.conf中

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6749ab642da04d578181cc30d6f114e7~tplv-k3u1fbpfcp-watermark.image)

#### 2) 静态资源(css/js/img)使用CND引入

浏览器从服务器上下载 CSS、js 和图片等文件时都要和服务器连接，而大部分服务器的带宽有限，如果超过限制，网页就半天反应不过来。而 CDN 可以通过不同的域名来加载文件，从而使下载文件的并发连接数大大增加，且CDN 具有更好的可用性，更低的网络延迟和丢包率 。

![image-20201119221157741](images/image-20201119221157741.png)