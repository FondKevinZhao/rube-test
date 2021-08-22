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


