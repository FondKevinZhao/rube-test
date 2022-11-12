import React, { Component } from 'react'

export default class Son1 extends Component {
    constructor(){
        super()
        this.state={
            n:10
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        //nextProps 当前的props参数   nextState当前的state数据
        console.log(nextProps,nextState);//{ }
        console.log(this.props,this.state);//this.props 表示 上一次的props数据
        //什么时候渲染：判断传递的props数据 前后是否变化  变化更新  没有变化不更新
        for(let key in nextProps){
            if(nextProps[key] !== this.props[key]){
                return true
            }
        }
        //判断 组件内state数据修改
        for(let key in nextState){
            if(nextState[key] !== this.state[key]){
                return true
            }
        }
        //是否允许组件更新
        return false;
    }
  render() {
    console.log('son1 render');
    return (
      <div>Son1
        <p>n子组件数据: {this.state.n}</p>
        <button onClick={()=>this.setState({n:this.state.n+10})}>n++</button>
      </div>
    )
  }
}
