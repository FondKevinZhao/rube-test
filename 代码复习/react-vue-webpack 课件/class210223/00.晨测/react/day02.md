# day02

## 1. 谈谈受控组件

通过 state 和 change 事件的方式来自动收集表单数据的组件

## 2. 谈谈生命周期函数

1. 旧版本

- 初始化挂载阶段

  - constructor
  - componentWillMount
  - render
  - componentDidMount

- 更新阶段

  - 父组件更新导致子组件重新渲染
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate
  - this.setState
    - shouldComponentUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate
  - this.forceUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate

- 卸载阶段
  - componentWillUnmount

2. 新版本

- 初始化挂载阶段

  - constructor
  - static getDerivedStateFromProps
  - render
  - componentDidMount

- 更新阶段

  - this.setState 和 父组件更新导致子组件重新渲染

    - static getDerivedStateFromProps
    - shouldComponentUpdate
    - render
    - getSnapshotBeforeUpdate
    - componentDidUpdate

  - this.forceUpdate
    - static getDerivedStateFromProps
    - render
    - getSnapshotBeforeUpdate
    - componentDidUpdate

- 卸载阶段
  - componentWillUnmount

3. 重要的生命周期函数

- render
  - 返回要渲染的虚拟 DOM 对象
- componentDidMount
  - 发送请求、设置定时器、绑定事件等一次性任务
- shouldComponentUpdate
  - 性能优化：减少组件重新渲染的次数
  - 通过比较 state 和 props 有没有变化，来决定要不要重新渲染
- componentWillUnmount
  - 收尾工作：清除定时器、解绑事件等
  - 防止内存泄漏

## 3. 谈谈 state

## 4. 谈谈 props

## 5. 谈谈 refs
