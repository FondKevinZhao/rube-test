![logo](images\logo.png)

# React Redux

**主要内容**

* React数据传递
* Redux
* React-redux
* 其他

**学习目标**

 知识点| 要求 
 -| :- 
 React数据传递 | 掌握 
 Redux | 掌握 
 React-redux | 掌握 
 其他 | 掌握 




## 一、React数据传递

### 1.1 父传子

```jsx
//App.js
    render(){
        return (
            <div >
            {/* 父传子 */}
            <ChildA num={this.state.num} />
            <ChildB uname={this.state.uname} />
            </div>
        )
    }
//ChildA
    {this.props.num} 接收传递的数据
```



### 1.2 子传父

```jsx
//App.js
    {/* 子传父 */}
    <ChildB uname={this.state.uname}  toChild={this.gaibian.bind(this)}  />
//ChildB
    ch(){
        this.props.toChild()
    }

    render(){
        return (
            <div>
                ChildB { this.props.uname }

                <button onClick={this.ch.bind(this)}>修改uname的值</button>
            </div>
        )
    }
```



### 1.3 兄弟之间数据传递

需要把数据上传到共有的父级身上，然后再通过父级向下传，传到指定的子级上



### 1.4 深层数据传递

React.createContext()



## 二、Redux

### 2.1 介绍

​	Redux 是 JavaScript 状态容器，提供可预测化的状态管理。Redux 由 Flux 演变而来，但受 Elm 的启发，避开了 Flux 的复杂性。redux能统一管理数据，只要redux中的数据发生改变了，所有使用redux中数据的地方都会改变。redux有自己的一套操作标准。

redux流程图：

​	![logo](images\R-C.png)

### 2.2 使用

1. 安装：

```shell
npm install --save redux
```

2. 三大原则

1. 单一数据源

​    	整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

2. 使用纯函数来执行修改

​    	如何改变 state tree ，你需要编写 reducers。它接收先前的 state 和 action，并返回新的 state

3. State 是只读的

   	 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

​    执行上面纯函数。



### 2.3 核心

action

```js
function gaiTel(){
    return {
        type:'GAITEL' , // 要办业务类型
        data:'12345678911' , // 新数据
    }
}
```

reducer

```jsx
function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}
```

store

1. 调用业务流程，执行

  	store.dispatch(Action)

2. 创建出来唯一的仓库

  	let store = createStore(Reducer)



## 三、React-redux

### 3.1 安装

```shell
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```



### 3.2 使用

**连接react**

1. 关联整个react项目 index.js

```jsx
import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import rootReducer from './reducers'
    const store = createStore(rootReducer)

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
```

2. 某个组件关联store

```jsx
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
<!-- 读的功能，获取数据 -->
const mapStateToProps = state => ({
        
})
<!-- 写入功能 -->
const mapDispatchToProps = dispatch => ({
        
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```

3. 页面中进行读写操作

  	不管是读还是写，都是通过 this.props

 


4. redux中数据改变了，但是页面不更新

  原因：state 是只读的,不能改变它，改变后页面也不会更新

  解决方法：生成一个新的state

```
1.使用 {...state}
2.let newobj ={}
  Object.assign(newobj,state)
```



## 四、其他

### 4.1 reducers合并

```jsx
allReducer.js
    import { combineReducers } from 'redux'
    
    import dian from './reducers/dian'
    import shui from './reducers/shui'
    const allReducers = combineReducers({
        dian,
        shui
    })
    export default allReducers;

app.js:
    import reducers from './componets/_redux/allReducer.js'
    let store = createStore(reducers);
```



### 4.2 异步action

1. 下载中间件 

```shell
npm i --save redux-thunk
```

2. 配置:

  在createStore是配置

```jsx
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux' 
const store = createStore(rootReducer,applyMiddleware(
thunkMiddleware  // 允许我们 dispatch() 函数
)
```

3. 在action中异步请求数据 

```js
export function setChat(data) {
    return {
        type: "SETCHAT",
        data
    }
}

// 网络请求，获取数据，赋值给setChat
// redux-thunk
export const asyncSetChat = (url) => (dispatch, getState) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(setChat(data))
        })
        .catch(error => {
            console.log(error);
        })
}
```

组件中调用 asyncSetChat

```js
componentDidMount(){
this.props.chatActions.asyncSetChat("http://iwenwiki.com/api/blueberrypai/getIndexChating.php")
}
```



