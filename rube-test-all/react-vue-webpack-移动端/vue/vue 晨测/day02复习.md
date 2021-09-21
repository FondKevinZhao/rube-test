# day02

## 事件处理

绑定事件 v-on

1. 事件回调函数

- `@click="handleClick"` 接受 event 参数
- `@click="handleClick(123)"` 接受 123 参数
- `@click="handleClick(123, $event)"` 接受 123 event 参数
- `@click="count++"` 一条语句直接写

2. 事件修饰符

- `.prevent` 阻止事件默认行为
- `.stop` 阻止事件冒泡

3. 按键修饰符

- `@keyup.13`
- `@keyup.enter`

## 生命周期函数

1. 初始化

- beforeCreate
- created
- beforeMount
- **mounted**
  - 发送请求、设置定时器、绑定事件等一次性任务

2. 更新

- beforeUpdate
- updated

3. 卸载

- beforeDestroy
  - 做收尾工作：清除定时器、解绑事件等
- destroyed

## 过渡或动画

对显示&隐藏的元素加上过渡&动画效果

1. transition

- vue 内置的组件
- 用法：使用 transition 包裹一个显示&隐藏的元素
  - v-show、v-if
- 类名：
  - 显示 - 隐藏（leave）
    - v-leave
    - v-leave-active
    - v-leave-to
  - 隐藏 - 显示 (enter)
    - v-enter
    - v-enter-active
    - v-enter-to

## 过滤器

- 作用：用来格式化数据
- 注意：vue3 移除过滤器 API，一般不使用
- 语法：
  - 定义
  ```js
  filters: {
    format(time, str) {
      return dayjs(time).format(str)
    }
  }
  ```
  - 使用
    `{{ time | format('YYYY-MM-DD HH:mm:ss') }}`

