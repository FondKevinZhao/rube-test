import React, { Component } from "react";

export default class HandleEvent extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      user: "admin",
    };
    //绑定this函数
    this.changeNum2 = this.changeNum2.bind(this);
  }
  // 1. 普通函数 没有this  undefined
  fun() {
    console.log("普通函数", this); //undefined
  }
  //2. 箭头函数 this指向当前组件
  fun2 = () => {
    console.log("箭头函数", this); //{ }
    console.log(this.state.user);
    //修改 this.setState({})
  };
  //3. 标签调用的时候 绑定this
  changeNum() {
    console.log("普通函数调用bind绑定this", this);
    this.setState({
      num: this.state.num + 1,
    });
  }
  //4. constructor声明函数绑定this
  changeNum2() {
    console.log("constructor声明函数绑定this", this);
  }
  //5. 普通函数接受参数
  changeParams(a, b) {
    console.log("普通函数接受参数", a, b);
    this.setState({
      user: a,
    });
  }
  //5. 箭头函数接受参数
  changeParams2 = (a, b) => {
    console.log("箭头函数接受参数", a, b);
    console.log(this);
  };
  //6. 普通函数获取事件对象  js原来的event对象
  getEvent(e) {
    console.log("普通函数获取事件对象", e);
  }
  //7. 普通函数获取事件对象
  getEvent2(e, x, y) {
    console.log("e", e);
    console.log("x", x);
    console.log("y", y);
  }
  //8. 箭头函数事件对象
  getEvent3 = (e) => {
    console.log("箭头函数event", e);
  };
  //9. 箭头函数event
  getEvent4 = (e, a) => {
    console.log("箭头函数event", e, a);
  };
  //10. 获取实参的个数
  getEvent5 = (...rest) => {
    console.log("获取实参的个数", rest);
  };
  render() {
    return (
      <div>
        <h2>react事件绑定</h2>
        <p>state数据num:{this.state.num}</p>
        <p>state数据user:{this.state.user}</p>
        {/* 触发事件  this.函数名 */}
        <button onClick={this.fun}>普通函数</button>
        <button onClick={this.fun2}>箭头函数</button>
        {/* 一、函数绑定this */}
        {/* 1. 给当前的函数绑定this  调用函数的时候fun.bind(this)  */}
        <button onClick={this.changeNum.bind(this)}>普通函数绑定this</button>
        {/* 2. 使用this的时候可以使用箭头函数  普通函数需要绑定this  */}
        {/* 3. 普通函数在constructor里面绑定this */}
        <button onClick={this.changeNum2}>constructor普通函数绑定this</button>
        <hr />
        {/* 二、事件传递参数 */}
        {/* 1. 普通函数传递参数 fun.bind(this,参数1,参数2,...) */}
        <button onClick={this.changeParams.bind(this, 1, 2)}>
          普通函数传递参数
        </button>
        {/* 2. 箭头函数传递参数 */}
        <button onClick={this.changeParams2.bind(null, 10, 20)}>
          {" "}
          箭头函数传递参数
        </button>
        <hr />
        {/* 三、事件对象 event   总结：不传递参数 默认第一个变量事件对象  有参数传递 最后一个参数事件对象*/}
        {/* 1. 普通函数事件对象 -- 普通函数不传递参数的时候，默认第一个参数 */}
        <button onClick={this.getEvent}>普通函数事件对象</button>
        {/* 2. 普通传递参数 事件对象是参数的最后一个变量    */}
        <button onClick={this.getEvent2.bind(this, 11, 22)}>
          普通传递参数事件对象
        </button>
        {/* 3. 箭头函数 不传递参数 默认第一个参数为事件对象*/}
        <button onClick={this.getEvent3}>箭头事件对象</button>
        {/* 3. 箭头函数有参数传递  事件对象是参数的最后一个变量 */}
        <button onClick={this.getEvent4.bind(null, 100)}>
          箭头函数有参数传递事件对象
        </button>
        <button onClick={this.getEvent5.bind(null, 100, 200, 309)}>
          箭头函数有参数传递对象
        </button>

        {/* 事件可以写在标签行内 */}
        <button onClick={() => this.setState({ user: "新user值" })}>
          修改user
        </button>
      </div>
    );
  }
}
