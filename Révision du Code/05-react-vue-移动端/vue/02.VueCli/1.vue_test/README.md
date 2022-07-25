# 组件间通信

## props

1. 适用于父子组件通信

2. 使用

- 传递数据
  - `<Child :name="name" :xxx="xxx"/>`
- 声明接受
  ```js
  {
    props: ['name'],
    props: {
      name: String
    },
    props: {
      name: {
        type: String,
        required: true,
        default: xxx,
        validator() {}
      }
    }
  }
  ```
- 使用
  `this.xxx`

## 自定义事件

1. 用于子向父通信

2. 使用

- 绑定自定义事件
  - `<Child @xxx="xxx"/>`
  - `<Child ref="xxx"/>`
    - `mounted() { this.$refs.xxx.$on(xxx, xxx) }`
- 触发自定义事件
  - `this.$emit(xxx, x, y, z...)`

## 全局事件总线

1. 用于任意组件通信（兄弟、祖孙）

2. 使用

- 定义全局事件总线对象
  - `Vue.prototype.$bus = new Vue()`
  - `beforeCreate() { Vue.prototype.$bus = this }`
- 绑定事件
  - `mounted() { this.$bus.$on(xxx, xxx) }`
  - `beforeDestroy() { this.$bus.$off(xxx, xxx) }`
- 触发事件
  - `this.$bus.$emit(xxx, x, y, z...)`

## 插槽

1. 用于父子组件通信标签数据

2. 使用

- 默认插槽

  - 父组件传递标签数据
    ```html
    <Child>
      <p>xxx</p>
      <span>xxx</span>
    </Child>
    ```
  - 子组件使用标签数据

  ```js
  <slot />
  ```

- 具名、命名插槽

  - 父组件传递标签数据
    ```html
    <Child>
      <!-- 新语法 -->
      <template v-slot:header>
        <header>xxx</header>
      </template>
      <template #content>
        <div>xxx</div>
      </template>
      <!-- 旧语法：了解 -->
      <footer slot="footer">xxx</footer>
    </Child>
    ```
  - 子组件使用标签数据
    ```js
    <slot name="header" />
    ```

- 作用域插槽

  - 父组件传递标签数据（父组件通过语法接受子组件传递的数据）
    ```html
    <Child>
      <!-- 新语法 -->
      <template #content="{ xxx }">
        <div>{{ xxx }}</div>
      </template>
    </Child>
    ```
  - 子组件使用标签数据（通过标签属性给父组件传递数据）
    ```js
    <slot name="content" :xxx="xxx" />
    ```

## vuex
