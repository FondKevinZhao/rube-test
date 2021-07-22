# day01

## 1. 创建虚拟 DOM 对象的两种方式

1. js 语法
   `React.createElement(type, props, ...children)`

2. jsx 语法
   `<h1>title</h1>`

## 2. 谈谈 JSX 语法

1. 全称：javascript xml
2. 作用：用来简化创建虚拟 DOM 对象
3. 语法

- 以<开头，会当做标签语法解析。
  - 如果标签首字母如果是小写，会当做 html 元素解析
  - 如果标签首字母如果是大写，会当做组件解析
- 以{开头，内部代码会当做 js 代码解析

4. jsx 不能被浏览器解析，需要被 babel 编译才行

## 3. 创建组件的两种方式

1. 工厂函数组件

```js
function MyComponent() {
  return <h1>title</h1>;
}
```

2. ES6 类组件

```js
class MyComponent extends React.Component {
  render() {
    return <h1>title</h1>;
  }
}
```

3. 定义组件三个注意事项

- 组件首字母必须大写
- 组件渲染的内容有且只有一个根标签
- 所有标签必须有结束符

## 4. 谈谈 state（有什么用，怎么用）

1. 作用：用来决定用户界面的更新的
2. 使用：

- 初始化
  ```js
  // 在constructor中初始化
  // 简写
  state = {
    xxx: yyy,
  };
  ```
- 获取
  `this.state.xxx`
- 更新
  `this.setState({ xxx: zzz })`

## 5. 谈谈 props

1. 作用：

- 用来存储所有组件标签属性数据
- 组件标签属性数据：用来组件外向组件内传递变化数据

2. 使用：

- 设置标签属性
  `<MyComponent xxx={xxx} yyy={yyy} />`

- 声明接受属性：对属性的类型、必要性限制，设置默认值等

  ```js
  static propTypes = {
    xxx: PropTypes.number.isRequired,
    yyy: PropTypes.string
  }

  static defaultProps = {
    yyy: 'defaultValue'
  }
  ```

- 获取标签属性
  `this.props.xxx`

## 6. 谈谈 refs

1. 作用：

- 用来获取真实 DOM 元素或组件实例对象

2. 使用：

- 初始化 ref 容器
  `xxxRef = React.createRef()`

- 设置 ref 属性
  `<h1 ref={this.xxxRef}>xxx</h1>`

- 获取 ref 的值
  `this.xxxRef.current`
