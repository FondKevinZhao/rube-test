import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { increment, decrement, incrementAsync } from "./redux/action-creators";

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  };

  state = {
    num: 1,
  };

  handleChange = (e) => {
    this.setState({
      // 默认值是字符串类型。要转换成number
      num: +e.target.value,
    });
  };

  increment = () => {
    this.props.increment(this.state.num);
  };

  decrement = () => {
    this.props.decrement(this.state.num);
  };

  incrementIfOdd = () => {
    const { count } = this.props;
    if (count % 2 === 0) return;
    this.increment();
  };

  incrementAsync = () => {
    // setTimeout(() => {
    //   this.increment();
    // }, 1000);

    this.props.incrementAsync(this.state.num);
  };

  render() {
    // 读取redux数据
    const { count } = this.props;
    return (
      <div>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}

/*
  connect 高阶组件：
    1. 概念：本质上是一个函数，执行函数返回值是一个新组件
    2. 作用：复用代码

  const NewComp = connect(mapStateToProps, mapDispatchToProps)(App);
    App --> UI组件
    NewComp --> 容器组件
    最终渲染时：容器组件内部会渲染UI组件，父子关系。
    容器组件通过props方式给UI组件
      传递redux的数据（mapStateToProps）和
      更新数据的方法（mapDispatchToProps）

    connect内部会帮我们自动绑定重新渲染组件的方法
*/

// 返回一个要传递给UI组件对象（包含需要使用的数据）
const mapStateToProps = (state) => {
  // connect内部会自动触发mapStateToProps方法，同时传递state
  // state就是redux管理的所有数据
  return {
    count: state,
  };
};

// 返回一个要传递给UI组件对象（包含的更新数据的方法）
const mapDispatchToProps = (dispatch) => {
  // dispatch就是redux中的store.dispatch，自动传入
  return {
    increment(num) {
      // 更新数据
      const action = increment(num);
      dispatch(action);
    },
    decrement(num) {
      // 更新数据
      const action = decrement(num);
      dispatch(action);
    },
    // [key](...args) {
    //   const action = obj[key](...args)
    //   dispatch(action)
    // }
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect((state) => ({ count: state }), {
  increment,
  decrement,
  incrementAsync,
})(App);
