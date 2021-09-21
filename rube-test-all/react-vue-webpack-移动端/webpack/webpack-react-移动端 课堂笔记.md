### webpack

1. 工具使用的库都是开发依赖。

2. webpack基于node平台执行的。

3. webpack只认识js/JSON资源，loader可以让webpack能够去处理哪些非JavaScript文件。loader是一个“加载器”。

4. webpack-cli 是webpack的命令行工具。

5. src：放项目源代码。

6. build：放打包后要上线的代码。

7. public：放公共资源，长久不变的资源。

8. bin：放的是一些可执行的程序。

9. `import * as module2 from "./js/modules";` // 引入module2暴露的所有内容，重命名为module2 {name， age}

   注意：这个方法只适用于**分别暴露**和**默认暴露**。

10. 在你安装node时，node内部安装了npm和npx。npx： 

11. 所有的配置文件必须在根目录中写。

12. webpack配置文件 `webpack.config.js`。

13. 配置对象中的属性名是固定的，不能有任何的错误，不然会报错。

14. 这个关于打包的时候打包不彻底的解决方案：在package.json 中的最后面加入：

    ```js
     "browserslist": [
         "> 1%", // 支持9
         "last 2 versions", // 浏览器的最近的两个版本
         "ie > 8" // 支持IE8
     ]
    ```

15. #### eslint 的作用

    1. 审查代码是否符合编码规范和统一的代码风格。
    2. 审查代码是否存在语法错误。
    
16. 配置对象中配置loader的时候，只使用一个loader的时候可以使用loader，多个loader的配置得使用use。

    ```js
     use: [
         "style-loader", // 动态创建style标签，将js中的css代码添加到style中
         "css-loader", // css以模块的方式整合到js中
         "less-loader", // 将less编译成css
     ],
    ```

    注意：use中的内容的执行顺序是从下到上的。

17. 选择器里的css其实是从右往左解析的。

    ```css
     <style>
         div .main {
    		
         }
     </style>
     /*先解析.main 然后解析 div*/
    ```

    

18. 写less不建议嵌套写，除非为了增加权重。用less主要是用它的另外的功能，如变量。

19. loader中使用type：asset配置，文件名采用assetModuleFilename 规则。

20. 在loader配置里输出原文件：type: "asset/resource",

21. loader只需要下载，然后配置就可以了。

    插件就需要下载，然后引入，然后再去new调用。所有插件都是new调用的。

22. 异步加载js，等其他js资源加载完成，再加载。

    async：不保证加载顺序。

    defer：从上到下依次加载。

23. webpack配置出错：**error: EPERM: operation not permitted** 解决：用管理员身份打开即可。

24. devServer(webpack中的代码自动在浏览器中打开)：只会在内存中打包，不会输出文件到本地，即使你把build删除后，仍然可以启动。

25. link标签：link标签没有解析好那么其他内容不会执行。可以用来处理闪屏。

26. 样式文件在打包的时候，会把所有的样式文件合并成一个文件。

27. 1. js兼容性靠 babel-loader。
    2. css兼容性靠postcss-loader。
    3. html 一般不用考虑兼容性。

28. 打包：兼容性、压缩、混淆。




### react

1. angular Google公司研发。

   react Facebook研发。

   vue 尤雨溪。

2. loadash 一个函数库。

3. 声明：是一种开发代码的模式(如调用方法)。对应的是“命令式”，如for循环。

4. 模块化：只针对js文件。

   组件化：包含html/css/js封装成一个完整的功能。代码复用、代码更加简洁、提高运行效率。

5. react native 开发原生移动应用。代码和react差不多。

6. Bootcdn 可以下载vue、react、jQuery、bootstrap等库和框架。

7. 关于虚拟 DOM：

   1. 本质是 Object 类型的对象(是一般对象，即不是 array 也不是 function)。
   2. 虚拟 DOM 比较“轻”，真实 DOM 比较“重”。因为虚拟 DOM 是 React 内部在用，无需真实 DOM 上那么多的属性。
   3. 虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。

8. jsx语法：用来简化创建虚拟DOM对象，最终经过babel编译，会变成js语法。

   语法规则：

   1. 定义虚拟 DOM 时，不要写引号。

   2. 标签中混入 JS 表达式时要用 {}。

   3. 样式的类名指定不要用 class，要用 className。

   4. 内联样式，要用 `style={{key: value}}` 的形式去写。

   5. 只有一个跟标签。

   6. 标签必须闭合。

   7. 标签首字母：

      (1). 若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，则报错。

      (2). 若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错。

9. 一定要注意区分：js语句代码 与 js表达式 的区别。

   1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方。

      下面这些都是表达式：

      1. a
      2. a+b
      3. demo(1)
      4. arr.map()
      5. function test () {}

   2. 语句(代码)：

      下面这些都是语句(代码)：

      1. if (){}
      2. for(){}
      3. switch(){case:xxxx}

10. 工厂函数的 this 指向的是 undefined。原因是 babel 编译完后开启了严格模式，所以 this 指向的是 undefined。

11. 类函数：

    1. 正常情况下，es6类函数this指向实例。
    2. React，ES6类函数默认开启了局部的严格模式，this指向undefined。
    3. 改成箭头函数，方法添加到实例的直接属性，不在原型上。

12. 类总结：

    1. 类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
    2. 如果A类继承了B类，且A类中写了构造器，那么A类构造器中super是必须要调用的。
    3. 类中定义的方法，都是放在了类的原型对象上，供实例去使用。

13. 如果函数是组件，函数名就是你的组件名，如果类是组件，类名就是你的组件名。

14. 执行了 `ReactDOM.render(<MyComponent /> ...之后，发生了什么？)`

    1. React 解析组件标签，找到了 MyComponent 组件。
    2. 发现组件是使用**函数定义**的，随后调用该函数，将返回的虚拟 DOM 转为 真实 DOM，随后呈现在页面中。

15. 执行了 `ReactDOM.render(<MyComponent /> ...之后，发生了什么？)`

    1. React 解析组件标签，找到了 MyComponent 组件。
    2. 发现组件是使用**类定义**的，随后 new 出来该类的实例，并通过该实例调用到原型上的 render 方法。
    3. 将 render 返回的虚拟 DOM 转为真实 DOM，随后呈现在页面中。

16. 一般没有状态(state)的组件称为简单组件。有状态(state)的的组件称为复杂组件。

17. 人 → 状态 → 影响 → 行为。

    组件 → 状态 → 驱动 → 页面。

18. 类中的方法 this 指向：类中的方法默认开启了局部的严格模式，所以 this 指向的是 undefined。

19. 类里面可以直接写赋值语句，如：`a = 1;` 

    类中不能随便定义变量，如：`let a = 1;`

20. **注意：**

    状态(state)不可直接更改。

    状态必须通过 setState 进行更新，且更新是一种合并，不是替换。

21. react中的props数据是只读的，不能修改。

22. prop-types：属性检查的一个库。

23. 高阶函数：执行函数返回值也是一个函数。(也就是说一个函数的返回值是一个函数)

24. 非受控组件: 通过ref的方式来自动收集表单数据的组件。

     受控组件: 通过state和onChange事件的方式来自动收集表单数据的组件。

25. 组件开发流程：

    1. 拆分组件(按照用户界面的功能或变化来拆分组件)。

    2. 实现静态组件。

    3. 实现动态组件。

       1. 要不要定义state？(要，看用户界面有没有变化)

       2. 设计state定义数据名叫什么，值的类型是什么？数组

          ```js
           state = {
               toDoList: ['吃饭', ’睡觉‘]
           }
          ```

       3. state定义在哪个组件？

          如果只有一个组件使用，就定义在这个组件内部，如果有多个组件使用，就定义在多个组件公共的父组件中。
          
       4. 功能：
       
          先完成数据显示。
       
          再完成添加、修改、删除等功能。
       
       5. 子组件修改父组件的 state 数据：
       
          父组件定义更新 state 数据的方法。
       
          将方法以 props 方式传递给子组件。
       
          子组件调用方法从而更新父组件 state 的数据。

26. 挂载：理解为这个组件渲染到页面上去。

27. render() 会返回一个虚拟DOM对象。

28. 组件生命周期：

    **1. 旧**

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

       3. render

       4. ComponentDidUpdate

    ​			**组件 this.setState:**

    	1. shouldComponentUpdate
    	2. UNSAFE_ComponentWillUpdate
    	3. render
    	4. componentDidUpdate

    ​			**组件 this.forceUpdate:**

    1. shouldComponentUpdate
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

    ​       1. static getDerivedStateFromProps 更新state

    ​       2. shouldComponentUpdate

    ​       3. render

    ​       4. getSnapshotBeforeUpdate 可以提前操作DOM

    ​       5. componentDidMount 组件挂载完毕

    ​      **卸载阶段：**

    ​       componentWillUnmount

    

    ​     **总结：**

    ​      重要生命周期函数：

    ​       render：返回要渲染的虚拟 DOM 对象

    ​       componentDidMount：发送请求、设置定时器、绑定事件等一次性任务。

    ​       shouldComponentUpdate：性能优化：减少组件重新渲染的次数。

    ​		通过比较：state 和 props 有没有变化，来决定要不要重新渲染。

    ​       componentWillUnmount：收尾工作：清除定时器、解绑事件等，防止内存泄露。

29. 关于 class 类的三种方法：

    ```js
    class Test {
              // 1. 定义a属性，在类的直接属性上 Test.a
              static a = {}
              // 2. 在实例对象直接属性上  this.b
              b = () => {}
              // 3在类的原型对象上 this.c
              c() {}
    }
    ```

    

30. 原生js style样式：style="opacity:1"

    React style样式需要写成对象形式。

31. React中this指向有个特点，所有生命周期函数的this都是组件实例对象。其他函数默认是undefined，除非改成箭头函数。

32. 报错处理：Warning: Can't perform a React state update on an unmounted component. 表示定时器或其他东西没有关闭掉。

33. 更新的时候会产生新的 DOM 树。

34. 虚拟 DOM Diff 算法总结：React 对新旧虚拟 DOM 数比较时，进行了三种优化，来提升比较的速度。

    **1. tree diff**

    1. 原因：开发时，我们进行跨层级移动节点较少，可以忽略不计，所以我们生成的 DOM 树结构很稳定。
    2. tree diff 策略。
       - 只进行相同层级的节点比较，从上到下依次比较。
       - 如果比较新旧 DOM 节点相同，继续比较子节点，如果不同，就不对比子节点了。
    3. 避免跨层级移动节点，如果真的需要，通过 css 去控制。

    **2. component diff**

    1. 原因：相同类的组件生成相似的结构，不同类的组件生成不同的结构。
    2. component diff 策略
       - 比较时，如果对比的节点是组件，走 component diff。
       - 对比组件是否是同一类的组件
         - 是：
           1. 会默认对组件子节点进  tree diff。
           2. 此时可以优化，定义 shouldComponentUpdate 函数。内部判断新旧 state 和 props 是否发生变化，如果有变化就返回 true，如果都没有变化就返回 false(返回 false 就会跳过子节点的比较)
         - 不是，就删除旧组件，替换成新组件。

    **3. element diff**

    1. 原因：相同层级的多个子节点进行操作时，性能不好(往前面追加元素)。
    2. element diff 策略：
       - 给相同层级的多个子节点都要添加一个 key 属性，值是唯一的。
       - 比较新旧 DOM 节点时，优先比较 key，key 相同还要看位置，都相等，就不动，位置不同就要移动位置，key 不同就要重点创建节点。
    3. key 的值能用 id 用 id， 如果想使用 index，只能用于数组最后面的操作。

35. 想要下载npm 指定的版本：npm i npm@6 -g   下载npm 第六版

36. 卸载npm: npm uninstall

37. `<noscript>You need to enable JavaScript to run this app.</noscript>` 这个是React脚手架里面的提示，表示：如果你的js是关闭状态，那这个标签会生效，并出现标签内的内容。

38. reportWebVitals(console.log) : 用来分析网站的性能，一般代码写好了之后才会去使用。如果里面没有 console.log ，那么就不会有啥反应。

39. react 组件文件后缀一般用 .jsx。

40. 组件会写在文件夹pages下面。

41. react 组件文件的名字首字母要大写。

42. .sass 或 .scss 这两个文件后缀都是指用 .sass语法。注意：.sass 可以省略花括号。

43. 复制过来HTML需要修改：

    class 改成 className ：ctrl + H 替换。

    检查 input 和 img 是否都有结束符。

44. status: 响应状态码

     1xx: 代表请求还未完成，还需要进一步处理

      2xx: 代表响应成功 200

      3xx: 代表重定向（请求资源这里没有，要去其他地方找）

      	301 代表永久重定向
      	
      	302 代表临时重定向
      	
      	304 代表重定向到浏览器缓存中

      4xx: 代表客户端错误

      	401 未授权
      	
      	403 禁止访问
      	
      	404 资源找不到

      5xx: 代表服务器错误

      	500 服务器内部错误

    ​	  501 服务器不支持请求的功能

45. 阿熊说：

    **从父组件传递给子组件：**

    1. 传递数据前：先要用 state 保存下来，如果数据变化了，调用`this.setState({旧数据: 新数据})`.

    2. 父组件向子组件传递变化数据(如：函数{如果是函数的话，从子组件向父组件传递变化数据是以调用函数并传参的方式传递的}、数据等)：在父组件里面给子组件添加标签属性，值为你想要传递的数据或函数。
    3. 传递过来的数据在 this.props 上(如果忘记了，可以直接打印 props)。

    **由子组件传递给父组件：**

    1. 先在父组件中定义函数。如： 

       ```js
       click = (childData) => {
           this.setState({
               data: childData,
           })
       }
       ```

    2. 将这个函数通过标签属性的方式传递给子组件，然后子组件在 this.props 上可以拿到这个函数，调用时并传参就把数据传给了父组件。(注意：组件的数据一般都保存在 state 中)

       ```js
       // xuqiu:
       change = () => {
           this.props.click(this.state.childData)
       }
       ```

46. 前端路由的两种模式：

    前端路由：主要用于开发单页面应用的。(SPA：single page web application)

    1. hash(以前经常用这种方式)
       - 兼容性好
       - 路由带 # 号，不好看
       - location.hash
    2. history(现在基本用这种方式)
       - 兼容性稍差
       - 路由好看
       - history

47. 前端路由：

    1. browserRouter: 使用 history 模式的前端路由。(必须要在最外层使用，否则 Route， Link，NavLink，Switch，redirect 没有效果)。
    2. HashRouter：使用 hash 模式的前度路由。(必须要在最外层使用，否则 Route， Link，NavLink，Switch，redirect 没有效果)。
    3. Route：根据路由路径的变化，加载显示相应的路由组件。
    4. Link：相当于 a 标签，特点：1. 不会刷新。2. 只会做路由跳转(更新地址)。3. to 路由路径。
    5. NavLink：和 Link 基本一致，不同的是选中时会添加一个类名：active。`activeClassName="my-active"`，修改选中的类名。
    6. Switch：让内部 Route 值加载显示一个。
    7. Redirect：匹配所有地址，并重定向一个新地址。特点：一旦前面的 Route 匹配上了，Redirect 就不生效了。

48. 路由跳转的两种方式：

    1. 编程式导航跳转：

       `this.props.history.push('/home/message/q')`

    2. 路由链接跳转：

       `<NavLink to = "/home/message/1?name=jack&age=18"></NavLink>`

49. 路由中，组件更不更新跟 link 没有关系，跟 route 有关系。

50. path 匹配规则：Route 的 path 匹配规则，默认以 path 开头的路径就会匹配上。加上exact 属性，匹配规则就是全匹配(必须一模一样才行了)。

51. 一般首页的路径就一个斜杠 /，后面不接 home。

52. 引入antd(ant design) 的样式：`import "antd/dist/antd.css";` 。

53. 所有的组件必须引入才能用。

54. Link 负责跳转，Route 负责更新。

55. 声明周期是不能定义成箭头函数的。

#### redux

55. 创建 store 对象：

    1. store 对象中会集中管理所有 redux 数据。
    2. store 对象提供的读/写 redux 数据的方法：
       1. 读：`store.getState()`
       2. 写：`store.dispatch(action)`

56. action-creators：

    用来创建 action 对象的工厂函数模块：
    
    action 对象： { type: 操作类型, data: 数据}
    
    定义多少个工厂函数模块？看对数据有多少种操作。
    
57. reducers：

    根据 prevState(之前数据) 和 action 来计算生成 newState(新数据)的函数模块

58. 更新 redux 数据：

    1. 调用 action-creators 生成 action 对象。
    2. 调用 dispatch 方法触发 reducers 函数，从而更新数据(自动调用 reducers)。
    3. reducers 内部通过计算得到 newState 作为返回值返回(reducers 自动操作)。

59.  connect 高阶组件：

    1. 概念：本质上是一个函数，执行函数返回值是一个新组件。
    2. 作用：复用代码。
#### 移动端

1. 移动端适配：设置 html 的字体大小 = 屏幕宽度 / 100

   ```js
   <script>
       function setHtmlFontSize() {
       document.documentElement.style.fontSize = document.body.clientWidth / 100 + "px";
   }
   setHtmlFontSize();
   
   window.onresize = setHtmlFontSize;
   </script>
   ```

2. rem 单位跟 HTML 的字体大小有关

   如：HTML 标签的字体大小是16px, 那么 1rem = 16px;

3. em 跟离自己最近的标签的大小有关，自己有则使用自己的。

4. 面试题：

   设计稿以 iPhone7 为基准设计，将屏幕分为 10份，设计稿有一个元素为 150px，请问：应该设置 rem 多少？

   html 字体大小 = 375 / 10 = 37.5px

   150 / 37.5 rem

   rem = 元素设计稿大小 /  (屏幕的宽度 / 分为多少份)

   rem = 150 / (375 / 10)

5. `<meta name="viewport" content="width=device-width initial-scale=1.0">`

6. `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">`





