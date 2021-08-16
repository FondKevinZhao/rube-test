# day03

## 谈谈 props

1. 用于父子组件通信

2. 使用

- 父组件给子组件传递参数
  `<Child :name="name" :age="age"/>`

- 子组件声明接受

```js
props: ["name", "age"];

props: {
  name: String,
  age: Number
}

props: {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18,
    validator(val) {
      return val >= 18 && val <= 60;
    }
  }
}
```

- 子组件使用 props(props 会被数据代理)
  `this.name`

## 总结所有指令（能说多少说多少）

1. 重要

- v-model
  - 用于双向数据绑定
- v-bind
  - 用于单向数据绑定
  - 简写 `:`
- v-on
  - 用于绑定事件
  - 简写 `@`
- v-for
  - 用于遍历
  - 添加一个 key 属性
- v-if/v-else-if/v-else
  - 用于显示&隐藏
  - 隐藏时会移除元素
- v-show
  - 用于显示&隐藏
  - 隐藏时通过 display:none
- v-slot
  - 简写 `#`

2. 次要

- v-text
  - 设置元素的 textContent
- v-html
  - 设置元素的 innerHTML
- v-pre
  - 跳过解析，只渲染原本内容
- v-once
  - 只解析一次
- v-cloak
  - 防止页面闪现

## 谈谈 ref

1. 用来获取 DOM 元素或组件实例对象

2. 使用

- 给元素/组件绑定 ref 属性
  `<input ref="xxx" />`

- 获取
  `this.$refs.xxx`

## Vue Cli

1. 用来快速创建基于 vue 模板项目

2. 使用

- npm i @vue/cli -g
- vue create xxx

## 谈谈 js 异步代码执行机制

1. 同步代码和异步代码如何执行？
   JS 引擎从上到下依次执行所有代码
   遇到同步代码，依次执行
   遇到异步代码，异步函数是会被同步调用，只是其中的异步任务和回调函数会交给浏览器相关模块负责处理
   此时 JS 引擎会继续执行后面代码
   比如：定时器函数会被同步调用，里面计时任务和回调函数会交给浏览器定时器管理模块去处理，
   当浏览器定时器管理模块记录时间到点了，会将回调函数添加回调队列中，等待执行
   等 JS 引擎执行完全局所有代码，才会开启事件轮询，轮询回调队列，执行其中异步回调函数，默认按照顺序依次执行，先进先出

2. 异步代码具体谁先执行，谁后执行？

- 宏任务：setTimeout、setInterval、setImmediate（NODEJS）
  - 执行优先级低
- 微任务：promise.then/catch/finally、queueMicrotask、requestAnimationFrame
  - 执行优先级高

- 将整个 script 当做一个宏任务执行
- 执行完一个宏任务，先检查是否有微任务要执行
- 需要所有微任务都执行完，再检查是否有宏任务要执行
- 执行完一个宏任务，先检查是否有微任务要执行
