import React, { Component } from 'react'
import ChildRef from './ChildRef';

export default class MyForm extends Component {
    //react希望数据来源state数据
    constructor(){
        super()
        this.state={
            val:'',//存储input表单的数据
            select:2,
        }
        //2.1 非受控组件---定义ref 
        this.myInput = React.createRef();
        //定义获取div的ref
        this.divRef = React.createRef();
        //定义获取子组件实例的ref
        this.myRef = React.createRef();
    }
    //定义函数
    getInput=(e)=>{
        console.log('change事件触发了',e);
        console.log(e.target.value);
        this.setState({
           val:e.target.value 
        })
        //网络请求
        //this.state.val
    }
    //定义select函数
    getSelect=(e)=>{
      console.log(e.target.value);
      this.setState({
        select:e.target.value
      })

    }
    //非受控组件---ref-----
    // 2.3 获取ref属性  this.ref.current 获取绑定的ref元素的dom元素
    getInp=()=>{
      console.log(this.myInput.current);//获取到DOM元素
      //获取input元素输入的值
      console.log(this.myInput.current.value);

    }
    //修改div的dom操作
    changeDiv=()=>{
      console.log(this.divRef);
      console.log(this.divRef.current);
      //字体大小和样式
      this.divRef.current.style.color='red'
      this.divRef.current.style.fontSize='30px'
    }
    //获取子组件实例 ref
    getChild=()=>{
      console.log(this.myRef.current);
      //获取子组件的数据
      console.log(this.myRef.current.state.child);
      //调用方法
      this.myRef.current.child()
    }
  render() {
    return (
      <div>
        <h3>受控组件--value-onChange</h3>
        {/* 一、受控组件  react提供的方法获取设置表单数据 不操作DOM  */}
        {/* 1. 受控组件input表单  react语法：属性 value + onChange */}
        <input type="text" value={this.state.val}  onChange={this.getInput}/>
        <p>输入的表单值：{this.state.val}</p>
       {/* 2. select */}
       <select value={this.state.select} onChange={this.getSelect}>
        <option value="1">北京</option>
        <option value="2">上海</option>
        <option value="3">深圳</option>
       </select>
       {/* 3. textarea  */}
       <hr />
       <h3>非受控组件-ref-可以操作DOM</h3>

      {/* 二、 非受控组件 react提供的 操作DOM元素的方法 */}
      {/* 2.2 给表单标签 绑定属性 ref={constructor定义的ref变量 } */}
      <input type="text"  ref={ this.myInput} onKeyUp={this.getInp} />
      {/* ref使用
          1. 获取普通标签的DOM元素
          2. 获取子组件实例
      */}
      <div ref={this.divRef}>我是一个普通的div标签</div>
       <button onClick={this.changeDiv}>修改div样式</button> 

       {/* 2. 获取子组件实例 */}
       <ChildRef msg='hello' ref={this.myRef} />
      <button onClick={this.getChild}>获取子组件实例</button>

      </div>
    )
  }
}
