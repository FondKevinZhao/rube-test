import React, { Component } from "react";

import store from "./redux/store";
import { increment, decrement } from "./redux/action-creators";

export default class App extends Component {
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
    // 更新redux数据
    // 1. 调用action-creators生成action对象
    const action = increment(this.state.num);
    // 2. 调用dispatch方法触发reducers函数，从而更新数据
    store.dispatch(action);
  };

  decrement = () => {
    const action = decrement(this.state.num);
    store.dispatch(action);
  };

  incrementIfOdd = () => {
    const count = store.getState();
    if (count % 2 === 0) return;
    this.increment();
  };

  incrementAsync = () => {
    // setTimeout(() => {
    //   this.increment();
    // }, 1000);

    setTimeout(this.increment, 1000);
  };

  componentDidMount() {
    store.subscribe(() => {
      // 事件：一旦redux的数据更新了，就会触发传入的回调函数
      // 重新渲染组件
      this.setState({});
    });
  }

  render() {
    // 读取redux数据
    const count = store.getState();
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
