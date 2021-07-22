### day01

#### 1. 谈一谈 MVVM

M：Model 数据层(data、methods、computed)

V：View 视图层(模板页面)

VM：ViewModel 视图模型层

数据绑定：M - V (给元素设置 value、textContent)
事件监听：V - M (给元素绑定 input 事件，来收集用户输入的数据，从而更新 Model层 数据)



#### 2. 谈一谈插值语法

语法：`{{JS 表达式}}`

作用：用来动态展示 js 数据



#### 3. 谈一谈指令语法(请列举)

指令语法：作为标签属性使用

**1. v-model：**

   作用：双向数据绑定。

   使用：`v-model="JS 表达式"`

**2. v-bind：**

   作用：单项数据绑定、强制数据绑定

   使用：`v-bind:属性名="JS 表达式"`

   简写：`:属性名="JS 表达式"`

**3. v-on：**

   作用：绑定事件监听

   使用：`v-on:事件名="事件回调函数"`

   简写：`@事件名="事件回调函数"`

**4. v-if/v-else-if/v-else：**

   作用：条件渲染、显示隐藏

   使用：`v-if="JS 表达式"`

**5. v-show：**

   作用：条件渲染、显示隐藏

   使用：`v-show="JS 表达式"`

**6. v-for：**

   作用：列表渲染、遍历展示数据

   使用：`v-for="(item, index) in 数据" :key="item.id"`

**v-if 和 v-show 的区别：**

1. v-if 隐藏时会移除元素
2. v-show 隐藏时通过 display: none;

#### 4. 谈一谈计算属性

使用：

```js
computed: {
    // 只读
    xxx() {}
    // 可读可写
    xxx: {
        get() {},
        set() {}
    }
}
```



特点：

1. 有缓存。

2. 一旦依赖的数据发生变化，才会重新计算，更新。

   

#### 5. 谈一谈监视属性

使用：

```js
watch: {
    // 第一次不会触发
    xxx() {}
    // 第一次会接触
    xxx: {
        handler() {},
        immediate: true
    }
}
```

特点：

监视某个已存在的属性发生变化，就会触发指定函数



***



# day02

#### 1. 谈一谈事件(回调函数写法？修饰符？)

1. 绑定监听：
   - `v-on: xxx="fun"`
   - `@xxx="fun"`
   - `@xxx="fun(参数)"`
   - 默认事件形参：event
   - 隐函属性对象：$event
2. 事件修饰符：
   - .prevent：阻止事件的默认行为 `event.preventDefault()`
   - .stop：停止事件冒泡 `event.stopPropagation()`
3. 按键修饰符：
   - .keycode：操作的是某个 keycode 值的键。
   - .enter：操作的是 enter 键。

#### 2. 谈一谈生命周期函数

1. vue 对象的生命周期

   1. 初始化显示
      - beforeCreate()
      - created()
      - beforeMount()
      - mounted()
   2. 更新状态
      - beforeUpdate()
      - updated()
   3. 销毁 vue 实例：`vm.$destroy()`
      * beforeDestroy()
      * destroyed()

2. 常用的生命周期方法

   created() / mounted()：发送 Ajax 请求，启动定时器等异步任务。

   beforeDestroy()：做收尾工作，如：清除定时器。

   

#### 3. 输入 url 到页面最终渲染完成，中间发生了什么？

总的来说分为一下几个过程：

1. DNS 解析：将域名解析成 IP 地址。
2. TCP 链接：TCP 三次握手。
3. 发送 HTTP 请求。
4. 服务器处理请求并返回 HTTP 报文。
5. 浏览器解析渲染页面。
6. 断开连接：TCP 四次挥手。

#### 























