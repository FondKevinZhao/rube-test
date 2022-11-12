import React, { Component } from 'react'
/* 
    生命周期函数：
        react组件从创建到销毁的过程中 给你提供的一些函数 这些函数会自动触发 对应的阶段、
    位置：
        render() 同级别 
    构子函数：
    componentWillMount  ：组件将要被渲染，还没渲染，没东西（17废掉，但可以使用）

    **componentDidMount: 组件渲染完成(组件进入运行状态) 【重点：网络请求，绑定事件】

    shouldComponentUpdate: 是否允许组件更新(这个函数中必须有返回值，如果返回true，表示允许更新；如果返回false，表示不允许更新；默认允许 )

    componentWillUpdate 	: 组件将要开始更新（17废掉，但可以使用）

    componentDidUpdate: 组件更新完成(重新进入运行状态)

    componentWillReceiveProps	: 组件接收props更新（17废掉，但可以使用）

    **componentWillUnMount: 组件将要卸载 ，还可以访问this this.setState()只执行一次 【重点：收尾工作， 清空定时器
        
*/
export default class Life extends Component {
    //构造函数
    constructor(){
        super()
        this.state={
            num:100
        }
    }
    //定义方法--修改state数据 目的：视图更新
    changeNum=()=>{
        this.setState({
            num:this.state.num+10
        })
    }
    //1. 组件将要被渲染，还没渲染，没东西 
    componentWillMount(){
        console.log('componentWillMount组件将要挂载页面',this);
    }
    //** 2. 组件渲染完毕  功能：网络请求 
    componentDidMount(){
        console.log('componentDidMount组件渲染完毕，组件进入运行中.... ',this);
    }
    //3. 是否允许组件更新 返回boolean true允许更新  false不更新
    shouldComponentUpdate(){
        console.log('是否允许组件更新 返回boolean',this);
        return true;
    }
    //4. 修改之前
    componentWillUpdate(){
        console.log('组件修改之前',this);
    }
    //** 5. 修改完毕 
    componentDidUpdate(){
        console.log('组件渲染完毕-修改好了',this);
    }
    //6. 传递props参数
    componentWillReceiveProps(nextProps){
        console.log('组件接受其他组件的数据props',nextProps,this);
    }
    //** 7. 卸载  功能：清空计时器 数据初始化   清空变量 
    componentWillUnmount(){
        console.log('组件将要卸载了 清空计时器 ',this);
    }
  render() {
    return (
      <div>
        <h2>生命周期函数</h2>
        <p>state数据:{this.state.num}</p>
        <button onClick={this.changeNum}>num++</button>

      </div>
    )
  }
}
