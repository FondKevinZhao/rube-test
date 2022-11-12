![logo](images\logo.png)

# React Hook 

**主要内容**

* State Hook
* Effect Hook 
* Context Hook
* 自定义hook
* 额外的Hook

**学习目标**

 知识点| 要求 
 -| :- 
 State Hook | 掌握 
 Effect Hook | 掌握 
 Context Hook | 掌握 
 自定义hook | 掌握 
 额外的Hook | 掌握 




## 一、State Hook

### 1.1 Hook介绍

​	Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

​	没有破坏性改动:

​	完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。

​	100% 向后兼容的。 Hook 不包含任何破坏性改动。

​	现在可用。 Hook 已发布于 v16.8.0。

​	我们准备让 Hook 覆盖所有 class 组件的使用场景，但是我们将继续为 class 组件提供支持

​	![logo](images\hook-1.jpg)



### 1.2 使用State Hook

​	![logo](images\state.png)

1. **定义**

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**说明：**

​		1.调用 useState 方法的时候做了什么? 

​			它定义一个 “state 变量”，这是一种在函数调用时保存变量的方式 —— useState 是一种新方法，它与 class 里面的 this.state 提供			的功能完全相同

​		2.useState 需要哪些参数？

 	 		useState() 方法里面唯一的参数就是初始 state，不同于 class 的是，我们可以按照需要使用数字或字符串对其进行赋值，而不一			  定是对象。

​		3.useState 方法的返回值是什么

​		     返回值为：当前 state 以及更新 state 的函数



2. **读取state**

   在函数中，我们可以直接用 count

   ```jsx
    <p>You clicked {count} times</p>
   ```

   

3. **更新state**

​	在函数中，我们已经有了 setCount 和 count 变量，所以我们不需要 this:

```jsx
<button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```



## 二、Effect Hook 

### 2.1 介绍

​	![logo](images\effect.jpg)

你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。

`useEffect` 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。（我们会在[使用 Effect Hook] 里展示对比 `useEffect` 和这些方法的例子。）



### 2.2 语法

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

​	当你调用 `useEffect` 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，React 会在每次渲染后调用副作用函数 —— **包括**第一次渲染的时候。（我们会在[使用 Effect Hook] 中跟 class 组件的生命周期方法做更详细的对比。）



1.useEffect 做了什么?

 	通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。

2.为什么在组件内部调用 useEffect?

 	 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。

3.useEffect 会在每次渲染后都执行吗?

  	是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。



### 2.3 需要清除的 Effect

​	添加和删除订阅的代码的紧密性，所以 useEffect 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它

```jsx
useEffect(() => {
function srcFn(){
   console.log("滚动了")
}
document.addEventListener('scroll',srcFn)
return document.removeEventListener('scroll',srcFn)
})
```

为什么要在 effect 中返回一个函数？ 

​	这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

React 何时清除 effect？ 

​	React 会在组件卸载的时候执行清除操作

```jsx
//生命周期函数
    /**
     * 第二个参数不存在 useEffect 类似 componentDidMount，componentDidUpdate 他们两个（修改数据都会走） 不限制
     缺点：里面有数据请求，只要有数据修改，就会发送请求
     */
    useEffect(()=>{
        console.log('========函数组件组件加载完毕！');
    })

    /**
     *  2. 第二个参数写空数组[] 表示 useEffect 只能执行一次 以后禁止执行，可以做网络请求 componentDidMount
     */
    useEffect(()=>{
        console.log('第一次执行了，以后不再执行。。。。');
        //发送网络请求。。。
    },[])

    /**
     * 3. 第二个参数[变量,..]  表达：如果变量修改了  useEffect重新执行 
     * 生命周期走不走，取决于变量变不变
     * [msg,num]写两个参数的话，只要有一个修改，就会执行
     */
    useEffect(()=>{
        console.log('执行了**********');
    },[num])
```





### 2.4 Effect 进行性能优化

​	在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可

```jsx
useEffect(() => {
document.title = `You clicked ${count} times`;
}, [count]);
```

​	这个参数是什么作用呢？如果 count 的值是 5，而且我们的组件重渲染的时候 count 还是等于 5，React 将对前一次渲染的 [5] 和后一次渲染的 [5] 进行比较。因为数组中的所有元素都是相等的(5 === 5)，React 会跳过这个 effect，这就实现了性能的优化。



## 三、Context Hook

### 3.1 语法

```jsx
const value = useContext(MyContext);
```

​	接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定



### 3.2 使用

```jsx
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar () {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```



## 四、自定义Hook

### 4.1 介绍

通过自定义 Hook，可以将组件逻辑提取到可重用的函数中

自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。



### 4.2 自定义Hook

```js
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

### 4.3 使用自定义hook

```jsx
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```



## 五、额外的Hook

### 5.1 Reducer Hook

1. **语法**

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

​	useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

2. **使用**

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```



### 5.2 Callback Hook

语法

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

​	把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用



### 5.3 使用useMemo

语法

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

​	把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。



### 5.4 useRef

语法

```jsx
const refContainer = useRef(initialValue);
```

​	useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

 

### 5.5 总结Hook

​	![logo](images\hook.jpg)

