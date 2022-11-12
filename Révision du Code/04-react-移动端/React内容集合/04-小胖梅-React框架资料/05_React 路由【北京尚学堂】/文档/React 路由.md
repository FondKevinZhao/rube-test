![logo](images\logo.png)

# React 路由

**主要内容**

* 路由安装
* 路由配置

**学习目标**

 知识点| 要求 
 -| :- 
 路由安装 | 掌握 
 路由配置 | 掌握 



## 一、路由安装

### 1.1 路由介绍

单页面得特点：只需要加载一次主页面，通过局部刷新，就可以实现跳转或者切换页面

优点：加载速度快，用户体验比较好

缺点：

\- 第一次加载比传统要慢一点
\- 不利seo
\- 页面相对复杂

\- 返回键



### 1.2 路由安装

安装：npm install --save react-router-dom

引入页面：import { Route, HashRouter, Switch, Redirect } from "react-router-dom"

使用：

```jsx
<HashRouter>
 	<Switch>
	  <Route exact path='/' component={Home}/>
	  <Route path='/news' component={News}/>
	  <Route path='/about' component={About}/>
    </Switch>
</HashRouter>
```





#### 说明属性 

1. HashRouter,BrowserRouter 路由容器 包裹路由走向

2. HashRouter 是基于window.location.hash 出现访问路径在地址栏上 加#

3. BrowserRouter是基于HTML5 history API (pushState, replaceState, popstate)事件 访问路径地址栏 不加#  /

4. Route 配置路由走向

   path 访问的相对路径的地址  /+字符串 

   component 组件名称  （进入这个路径 跳转到哪个组件）

   exact 精准匹配  路径地址必须是一模一样进入到对应的界面

5. Switch

   选择路由地址里面的某一个路径  选择第一个满足条件的，就不往下匹配了



### 1.3 路由效果

​	![logo](images\router.gif)



## 二、路由配置

### 2.1 路由配置

​	元素描述了你在屏幕上想看到的内容，是构成 React 应用的最小砖块，与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致

```js
import React,{ Component } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import routers from "./router/index";
class App extends Component<any,any>{
  render(): React.ReactNode {
    return (
        <BrowserRouter>
            {
                routers.map(router=>{
                    return (
                        <Route
                            path={router.path}
                            component = { router.component }
                        ></Route>
                    )
                })
            }
        </BrowserRouter>
    )
  }
}
export default App
```



### 2.2 定义导航

```jsx
import {Link} from 'react-router-dom'
<Link to='about'></Link>
```



### 2.3 路由嵌套

​	![logo](images\02.jpg)

```jsx
<News path="/news">
  <Route path="/news/ball" component={ NewsBall }></Route>
  <Route path="/news/sports" component={ NewsSports }></Route>
</News>
```

访问子级路由

​	访问：/news/ball



### 2.4 路由重定向

方式1：Redirect

```jsx
<Route path="/news" render={() => (<Redirect to='/news/ball'/>)}></Route>
```

方式2：编程式导航

```jsx
this.props.history.push("path")this.props.history.replace("path")
```



### 2.5 路由参数（动态路由）

1. 定义：在Route中定义,以冒号+变量名定义

```jsx
<Route path='about/:id' component={About}>
```

2. 调用：调用时要给具体的值

```jsx
<Link to='about/23'>about</Link>
```

3. 接收路由参数:在路由加载的组件中接收

​	需要在生命周期函数(不限DidMount) 

```jsx
componentDidMount(){
	this.props.match.params.id
}
```



### 2.6 路由高亮

```jsx
import {NavLink} from 'react-router-dom'
```

配置：

1. 把Link换成 NavLink

1. 在css中定义active类名的样式

	

### 2.7 编程式导航

**编程式导航**

​     1. 注意点：当前的组件需要配置路由配置 <Route path='' component={}/> 才有this.props.路由相关信息

​     2. 配置路由 this.props

​       1.  history:路由跳转方式api方法 可以实现路由跳转js

​       2.  location:

​       3.  match : 路由配置信息 - 包含：路由path 路由的参数 路由的url地址 

   

   **路由跳转方式**

​     1. this.props.history.go() 返回功能

​        1. go(1) 前进

​        2. go(-1) 返回上一层

​        3. go(-2) 返回上二层



​     2. this.props.history.goBack() 返回上一层

​     3. this.props.history.push('/path路径') 跳转进入某一个路径 有返回功能 /path/参数

​     4. this.props.history.replace('/path路径') 跳转进入某一个路径 并关闭当前的页面 没有返回功能





## 三、react-router-dom@6

参考链接：

https://www.jianshu.com/p/03234215a90e



## 路由配置

嵌套路由：路由根据层级嵌套可以实现路由嵌套 (v5版本子路由写在父路由path值上)

索引路由: 父组件的默认路由 或者 子路由的路径都不匹配时 渲染

无匹配路由：当路由的路径都不匹配时 渲染 (v6版本废弃了Redirect重定向)

```jsx
import React from "react";
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/About/News";
import Message from "./pages/About/Message";
import Detail from "./pages/About/Message/Detail";

ReactDom.render(
  <BrowserRouter>
    {/* Routes代替v5版本Switch */}
    <Routes>
      {/* 一级路由 */}
      <Route path='/' element={<App />}>
        {/* 二级路由 */}
        <Route path='Home' element={<Home/>}></Route>
        <Route path='About' element={<About />}>
          {/* 三级路由 */}
          <Route path='message' element={<Message />}>
            {/* 路由路径接收params参数 */}
            <Route path=':detailID' element={<Detail />}></Route>
            {/* 索引路由：父组件的默认路由 子路由的路径都不匹配时 */}
            <Route index element={<main><h2>您还没选择任意选项</h2></main>}></Route>
          </Route>
          <Route path='news' element={<News/>}></Route>
        </Route>
        {/* 无匹配路由 */}
        <Route path='*' element={<p>无效路径</p>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
```



### 路由嵌套

当路由被嵌套时，一般认为网页的某一部分保持不变，只有网页的子部分发生变化。

例如，如果你访问一个简单的博客，则始终显示该博客的标题，然后在其下方显示一个博客文章列表。但是，当你单击博客文章时，博客文章列表将替换为该特定博客文章的内容或描述。

在React Router v5中，必须明确定义嵌套路由，React Router v6并非如此。它从React Router库中挑选了一个名为 `Outlet` 的最佳元素，为特定路由呈现任何匹配的子元素。首先，从 `react-router-dom` 库中导入 `Outlet`：

```javascript
import { Outlet } from 'react-router-dom';
```





### 路由重定向

https://reactrouter.com/docs/en/v6/api#navigate

#### 官网：

https://reactrouter.com/docs/en/v6

#### 学习网站：

https://segmentfault.com/a/1190000023684163



引入

```js
import { Navigate } from "react-router-dom";
```



重定向是通过指定了`replace`属性的`Navigate`组件单独完成的。

```jsx
<Navigate replace to="/" />
```

如果要从路径复制重定向，则需要与`Route`组合。

```jsx
//当输入  /* 任意信息，重定向到首页
<Route path='/*' element={<Navigate replace to="/" />} />
```



