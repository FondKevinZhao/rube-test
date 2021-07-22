# redux

- 状态管理工具
- 集中式管理多个组件共享的状态数据

1. 组成

- actions
  - 同步 action
    - 创建 action 对象工厂函数
    - 特点：返回值是 action 对象
  - 异步 action
    - 执行异步操作，触发更新数据
    - 特点：返回值是函数，函数内部执行异步操作
- store

  - 创建 store 对象

- reducers

  - 根据 prevState 和 action 来计算生成 newState 的函数
  - 不同的状态数据可以定义多个 reducer 函数来管理
  - 最后通过 combineReducers 将多个 reducer 汇总成一个

- constants
  - 常量模块
  - 用来保存 action 的 type 的常量

2. 工作流程

- 读
  - `store.getState()`返回所有数据
- 写
  - 调用 action 函数返回 action 对象
  - 调用 `store.dispatch(action)` 来触发更新
  - 本质上 dispatch 内部就会调用 reducer 函数来计算生成 newState，从而更新 store 管理的数据
  - 通过 `store.subscribe(render)` 来触发组件的重新渲染
  - 组件在重新渲染时能得到最新的数据，从而更新

3. 扩展库

- react-redux

  - 作用：用来简化使用 redux
  - 使用：
    - Provider 组件
      - 接受 store，给后代组件传递 store
    - connect 高阶组件
      - 将 store 的数据和更新数据的方法传递给 UI 组件
      - 同时会自动绑定重新渲染组件的方法 `store.subscribe(render)`

- redux-thunk

  - 作用：让 redux 可以执行异步操作
  - 使用：
    - 在 store 模块中进行配置

- redux-devtools-extension
  - 作用：调试 redux
  - 使用：
    - 在 store 模块中进行配置
    - 安装 Chrome 扩展程序 redux-devtools-extension
