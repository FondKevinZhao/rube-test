## day01

#### 1. 创建虚拟 DOM 对象的两种方式。

   **创建虚拟DOM对象的两个语法：**

   ​     1. js语法 React.createElement

   ​      这个语法不需要babel编译。

   ​      语法太麻烦了

   ​     2. jsx语法：用来简化创建虚拟DOM对象。

   ​      最终经过babel编译，会变成第一种语法。

2. 谈一谈 JSX 语法。
	**语法内容：**

   ​       1. 以尖括号 < 开头，里面的内容如果是html同名元素，会解析成html元素，如果不是，会当做组件解析。

   ​       2. 以花括号 { 开头，里面的内容会当做 js 代码解析。

#### 3. 谈一谈创建 react 组件的两种方式。

   1. 工厂函数组件（功能简单的组件）。
   2. ES6类组件（功能复杂的组件）。

   **注意事项：**

   1. 组件名**首字母必须大写**。
   2. 标签必须有**结束符**(单标签/双标签都需要带结束符)。
   3. 组件内部渲染的元素，有且只有一个**根标签**。

#### 4. 谈一谈 react 中 state(有什么用，怎么用)。

   1. state 是组件对象最重要的属性，值是对象(可以包含多个数据)。
   2. 组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示(重新渲染组件)。

   **用法：**

   1. 初始化状态：

      ```js
      constrctor(props) {
          super(props);
          this.state = {
              stateProp1: value1,
              stateProp2: value2
          }
      }
      ```

      

   2. 读取某个状态值：

      ```js
      this.state.statePropertyName
      ```

      

   3. 更新状态-->组件界面更新：

      ```js
      this.setState({
          stateProp1: value1,
          stateProp2: value2
      })
      ```

      

#### 5. 谈一谈 react 中的 props。

   **理解：**

   1. 每个**组件实例对象**都会有 props(properties 的简写)属性。
   2. 组件标签的所有属性都保存在 props 中。

   **作用：**

   1. 通过**标签属性**从**组件外**向**组件内**传递变化的数据。
   2. 注意：组件内部不要修改 props 数据。

#### 6. 谈一谈 react 中的 refs。

   1. **组件内**的标签都可以定义 ref 属性来标识自己。

   2. 在组件中可以通过 `this.createRef.current/this.funcRef/this.stringRef` 来得到对应的真实 DOM 元素。

   3. **作用：**

      1. 给普通元素绑定，获取到对应的真实DOM元素。
      2. 给组件绑定，获取到对应的组件实例对象。

      > ​       如果触发事件元素和要获取的 DOM 元素是同一个元素，可以用 event.target 获取。
      >
      > ​       如果触发事件元素和要获取的 DOM 元素不是同一个元素，可以用 ref 获取。

***

## day02

#### 1. 谈一谈受控组件

​	**非受控组件:** 通过 ref 的方式来自动收集表单数据的组件。

​	**受控组件:**  通过 state 和 onChange 事件的方式来自动收集表单数据的组件。

#### 2. 谈一谈生命周期函数

​	 **1. 旧**

   **初始化挂载阶段：**

   ​	所有的生命周期函数默认值触发一次

1. constructor：

   ​	过去：初始化state，初始化ref容器等操作。

   ​	现在以上操作可以简写了。

   ​	现在：没啥用了

2. componentWillMount：

   ​	现在标记为UNSAFE_

   ​	问题：可能会触发多次

3. render：

   ​	返回组件要渲染的虚拟DOM对象

4. componentDidMount：组件挂载完毕

   ​	4个生命周期函数中，只有这个操作DOM，发送请求、绑定事件、设置定时器等一次性任务。

   **更新阶段：**

​			**父组件渲染，导致子组件更新:**

   1. UNSAFE_componentWillReceiveProps

   2. shouldComponentUpdate

      做组件性能优化，减少组件重新渲染的次数。

      返回值 true，就会重新渲染。

      返回值 false，就不会重新渲染。

      看 state 和 props 有没有变化。

   3. UNSAFE_componentWillUpdate

   4. render

   5. ComponentDidUpdate

​			**组件 this.setState:**

1. shouldComponentUpdate
2. UNSAFE_ComponentWillUpdate
3. render
4. componentDidUpdate

​			**组件 this.forceUpdate:**

1. UNSAFE_componentWillUpdate

2. render

3. componentDidUpdate

   **卸载阶段：**

​	componentWillUnmount: 做一些收尾工作：清除定时器、解绑事件等。

​	React 组件卸载时，会把 React 组件相关的东西全部清除。

​	state/props/ref/onClick 事件都会自动清除。



**2. 新**

​		**初始化挂载阶段：**

​       1. constructor

​       2. static getDerivedStateFromProps

​       3. render

​       4. componentDidMount 组件挂载完毕

​      **更新阶段：**

​       1. static getDerivedStateFromProps 更新 state

​       2. shouldComponentUpdate

​       3. render

​       4. getSnapshotBeforeUpdate 可以提前操作 DOM

​       5. componentDidMount 组件挂载完毕

​      **卸载阶段：**

​       componentWillUnmount



​     **总结：**

​      重要生命周期函数：

​       render

​       componentDidMount

​       shouldComponentUpdate

​       componentWillUnmount 

#### 4. 谈一谈 react 中 state(有什么用，怎么用)。

   1. state 是组件对象最重要的属性，值是对象(可以包含多个数据)。
   2. 组件被称为“状态机”，通过更新组件的 state 来更新对应的页面显示(重新渲染组件)。

   **用法：**

   1. 初始化状态：

      ```js
      constrctor(props) {
          super(props);
          this.state = {
              stateProp1: value1,
              stateProp2: value2
          }
      }
      ```

      

   2. 读取某个状态值：

      ```js
      this.state.statePropertyName
      ```

      

   3. 更新状态-->组件界面更新：

      ```js
      this.setState({
          stateProp1: value1,
          stateProp2: value2
      })
      ```

      

#### 5. 谈一谈 react 中的 props。

   **理解：**

   1. 每个**组件实例对象**都会有 props(properties 的简写)属性。
   2. 组件标签的所有属性都保存在 props 中。

   **作用：**

   1. 通过**标签属性**从**组件外**向**组件内**传递变化的数据。
   2. 注意：组件内部不要修改 props 数据。

#### 6. 谈一谈 react 中的 refs。

   1. **组件内**的标签都可以定义 ref 属性来标识自己。

   2. 在组件中可以通过 `this.createRef.current/this.funcRef/this.stringRef` 来得到对应的真实 DOM 元素。

   3. **作用：**

      1. 给普通元素绑定，获取到对应的真实DOM元素。
      2. 给组件绑定，获取到对应的组件实例对象。

      >        如果触发事件元素和要获取的 DOM 元素是同一个元素，可以用 event.target 获取。
      >
      >        如果触发事件元素和要获取的 DOM 元素不是同一个元素，可以用 ref 获取。

***

## day03

#### 1.  虚拟 DOM diff 算法

​	虚拟 DOM Diff 算法总结：React 对新旧虚拟 DOM 树比较时，进行了三种优化，来提升比较的速度。

​	**1. tree diff**

1. 原因：开发时，我们进行跨层级移动节点较少，可以忽略不计，所以我们生成的 DOM 树结构很稳定。
2. tree diff 策略。
   - 只进行相同层级的节点比较，从上到下依次比较。
   - 如果比较新旧 DOM 节点相同，继续比较子节点，如果不同，就不对比子节点了。
3. 避免跨层级移动节点，如果真的需要，通过 css 去控制。

  **2. component diff**

1. 原因：相同类的组件生成相似的结构，不同类的组件生成不同的结构。
2. component diff 策略

   - 比较时，如果对比的节点是组件，走 component diff。
   - 对比组件是否是同一类的组件：
     - 是：
       1. 会默认对组件子节点进  tree diff。
       2. 此时可以优化，定义 shouldComponentUpdate 函数。内部判断新旧 state 和 props 是否发生变化，如果有变化就返回 true，如果都没有变化就返回 false (返回 false 就会跳过子节点的比较)。
     - 不是，就删除旧组件，替换成新组件。



  **3. element diff**

1. 原因：相同层级的多个子节点进行操作时，性能不好(往前面追加元素)。
2. element diff 策略：
   - 给相同层级的多个子节点都要添加一个 key 属性，值是唯一的。
   - 比较新旧 DOM 节点时，优先比较 key，key 相同还要看位置，都相等，就不动，位置不同就要移动位置，key 不同就要重点创建节点。
3. key 的值能用 id 用 id， 如果想使用 index，只能用于数组最后面的操作。

#### 2. 谈一谈原型

	  1. 每一个函数都有一个 prototype 属性，即显式原型。
	  2. 每一个实例对象都有一个 `__proto__` 属性，即隐式原型。
	  3. 对象的隐式原型指向 其 构造函数的显示原型。

**注意事项：**

1. 当函数定义的时候，就已经有了显示原型了，是一个空对象(constructor 属性除外)，但是只有当函数实例化对象能够使用。
2. 隐式原型在创建对象的时候就自动添加了，当访问对象的属性的时候可能会沿着隐式原型查找。

#### 3. 总结 this 指向

1. 什么是 this？
   - 一个关键字，是一个引用变量。
   - 函数中可以出现 this (全局的 this 指向 window)。
   - this 指向其所在函数的调用者，如果没有调用者则指向window。
   - this 的指向是在调用函数的时候确定的。
2. this 指向(其实就是看函数的调用方式)
   - this 默认绑定 (函数默认调用)。
   - 定时器的 this 指向 window。
   - 箭头函数的 this：箭头函数没有自己的 this，箭头函数内部的 this 并不是调用时候指向的对象，而是定义函数时所在函数的 this 指向。
   - this 指向调用函数的上下文 (函数是上下文调用的)。
   - 注意隐式丢失现象(通过一个上下文对象拿到了一个函数，但是没有调用，而是赋值给了其他人)。
   - this 指向实例化对象 (函数实例化调用)。
   - 强制绑定：this 指向 call、apply、bind 修改的对象(函数是call、apply、bind调用的)。

---

## day04

#### 1. React 中的 setState 是同步还是异步

​	 setState 既能是同步也能是异步。

1. 在定时器和原生DOM事件中，setState是同步调用的。
2. 在React合成事件和生命周期函数中，setState是异步调用的：

   1. setState传入的是对象：多次调用setState会合并成一次，要更新的数据也会合并成一个。
   2. setState传入的是函数：多次调用setState会合并成一次，要更新的数据都会生效。

#### 2.  谈一谈闭包

什么是闭包：

1. 函数嵌套函数，闭包就是内部嵌套的函数。

2. 闭包就是包含被引用变量的 closure 对象，在嵌套的  内部函数中。

产生闭包的情况：

1. 函数嵌套。
2. 内部函数引用外部函数的变量。
3. 调动外部函数。

闭包的作用：

1. 延长了局部变量的生命周期。
2. 可以在外部操作局部变量。

闭包的缺点：

1. 函数的局部变量占用内存时间过长，容易造成内存泄露。
2. 解决：
   1. 减少使用闭包。
   2. 及时释放闭包。

#### 3. 谈一谈跨域

跨域：给不同源的地址发送 Ajax 请求。

**解决跨域问题：**

1. **jsonp 原理:** 就是利用script标签发送请求不受同源策略的限制,去给服务器发送请求, 发送时要将一个定义好的函数名通过callback=函数名的形式, 上传给服务器.服务器会响应函数的调用.具体要响应给浏览器的数据,就是函数调用时的实参. 浏览器拿到函数调用的字符串之后, 会将这个字符串,放到对应的script里面去执行, 执行时会自动将引号去掉.直接变成了一段js代码. 而这段js代码就是函数调用. 所以这时会去全局查找对应的函数. 找到了之后就执行这个函数, 响应的数据, 就直接赋值给形参了. 在这个函数体中, 就可以操作这个数据了。

   **jsonp 的注意点：**

   1. jsonp 只能发送 get 请求。
   2. jsonp 没有兼容性问题。
   3. 要想实现跨域，需要后台配合。

2. **cors(跨域资源共享)：**ie10+的浏览器才拥有的功能. 在真正发送ajax之前,浏览器会检查是否同源,如果不同源,会自动先给指定的服务器预请求一下,询问是否支持cors.如果服务器响应支持,浏览器才会让我们写的ajax请求发送出去,响应的时候就不再拦截了.如果服务器不支持cors.浏览器就不会将我们的ajax发送出去。

   **cors 的注意点：**

   1. IE10+才支持(有兼容性问题)。
   2. 可以使用 get/post 请求。
   3. 依然需要后台配合。

---

## day05

#### 谈一谈 react 中的 前端路由

前端路由是用来开发单页面应用的。

1. 什么是单页面应用？

   - 整个应用只有一个完整页面，所有更新都在一个页面中更新。
   - 点击链接，不会刷新，只会更新局部内容(切换组件)，更新地址。
2. 什么是路由？
   - 一个 key-value 的映射关系。
   - 前端路由中：key 就是路由路径，value 就是路由组件。

**路由怎么使用？**

1. 下载前端路由：

   1. `npm i react-router-dom` npm 的下载方法
   2. `yarn add react-router-dom` yarn 的下载方法

2. 组件：

   1. BrowserRouter：
      - 使用路由的 history 模式，必须在最外面使用。
   2. HashRouter：
      - 使用路由的 hash 模式，必须在最外面使用。
   3. Route：
      1. `<Route path="/login" component={Login}/>`
      2. 根据路由路径的变化，自动加载/卸载组件：
         - 地址匹配上，就会加载组件。
         - 地址没有匹配上，就会卸载组件。
   4. Link：
      1. `<Link to="/home">Home</Link>`
      2. 用来路由跳转。
      3. 特点：不会刷新页面，只会更新地址。
   5. NavLink：
      1. `<NavLink to="/home">Home</NavLink>`
      2. 用来路由跳转。
      3. 特点：与 Link 基本一致，在选中时会自动添加一个类名：active。
   6. Switch：
      1. 让包裹的多个 Route，只会匹配并加载一个。
      2. 性能好一些，不会加载多个 Route。
   7. Redirect：
      1. `<Redirect to="/home"/>`
      2. 重定向一个新地址。

3. 路由组件传参：

   1. params：
      1. 定义 `<Route path="/home/message/:id" />`
      2. 传递参数 `<NavLink to="/home/message/3">Message003</NavLink>`
      3. 读取 `this.props.match.params.id`
   2. query：
      1. 传递参数 `<NavLink to="/home/message/3?name=jack&age=18">Message003</NavLink>`
      2. 读取 `this.props.location.search`
   3. state：
      1. 传递参数 `this.props.history.push('/home', { xxx: yyy })`
      2. 读取 `this.props.location.state`

4. 路由跳转的方法：

   1. 路由间接跳转：`Link/NavLink`

   2. 编程式导航跳转：

      `this.props.history.push/replace/goBack/goForward()`

5. 路由组件的三个属性：

   1. 什么是路由组件？、
      - 通过 Route 加载的组件，就是路由组件。
      - history/location/match

6. 动态路由：

   1. 多对一的关系(多个地址匹配上一个路由组件)。
   2. `<Route path="/home/message/:id" />`
