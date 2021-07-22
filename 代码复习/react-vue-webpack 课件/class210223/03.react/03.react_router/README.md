# 前端路由

前端路由用来开发单页面应用

1. 什么是单页面应用？

- 整个应用只有一个完整页面，所有更新都在一个页面更新的
- 点击链接，不会刷新，只会更新局部内容（切换组件），更新地址

2. 什么是路由

- 一个 key-value 的映射关系
- 前端路由中：key 就是路由路径，value 就路由组件

3. 使用

- 下载前端路由

  - `npm i react-router-dom`
  - `yarn add react-router-dom`

- 组件

  - BrowserRouter
    - 路由 history 模式，必须在最外面使用
  - HashRouter
    - 路由 hash 模式，必须在最外面使用
  - Route
    - `<Route path="/login" component={Login}/>`
    - 根据路由路径的变化，自动加载/卸载组件
      - 地址匹配上，就会加载组件
      - 地址没有匹配上，就会卸载组件
  - Link
    - `<Link to="/home">Home</Link>`
    - 用来路由跳转
    - 特点：不会刷新页面，只会更新地址
  - NavLink
    - `<NavLink to="/home">Home</NavLink>`
    - 用来路由跳转
    - 特点：与 Link 基本一致，再选中时会自动添加一个类名：active
  - Switch
    - 让包裹的多个 Route，只会匹配并加载一个
    - 性能好些，不会加载多个 Route
  - Redirect
    - `<Redirect to="/home" />`
    - 重定向到一个新地址

- 路由组件传参

  - params
    - 定义 `<Route path="/home/message/:id" />`
    - 传递参数 `<NavLink to="/home/message/3">Message003</NavLink>`
    - 读取 `this.props.match.params.id`
  - query
    - 传递参数 `<NavLink to="/home/message/3?name=jack&age=18">Message003</NavLink>`
    - 读取 `this.props.location.search`
  - state
    - 传递参数 `this.props.history.push('/home', { xxx: yyy })`
    - 读取 `this.props.location.state`

- 路由跳转的方法

  - 路由链接跳转
    - Link/NavLink
  - 编程式导航跳转
    - this.props.history.push/replace/goBack/goForward()

- 路由组件的三个属性

  - 什么是路由组件？ 通过 Route 加载的组件，就是路由组件
  - history/location/match

- 动态路由
  - 多对一的关系（多个地址匹配上一个路由组件）
  - `<Route path="/home/message/:id" />`
