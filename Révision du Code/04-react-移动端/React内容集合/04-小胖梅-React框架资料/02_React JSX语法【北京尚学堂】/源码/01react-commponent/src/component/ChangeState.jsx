import React, { Component } from 'react'
/* 
    修改state数据响应式有2个方法
    1. 对象语法修改
        setState({
            state变量：修改值
        })
    2. 函数语法
        this.setState((state,props)=>{
            return {
                state变量：修改值
            }
        })
    区别：
        对象语法 有可能是同步的
        函数语法 永远都是同步 
*/
export default class ChangeState extends Component {
    constructor(props){
        super(props)
        //定义响应式数据
        this.state={
            num:100,
            user:'admin'
        }
    }
    //定义修改num变量的方法 --箭头函数
    changeNum=()=>{
        //方法1: 对象语法修改  异步操作 合并语句 执行最后一个修改变量 
        //同一个事件函数中出现多次state状态修改，react不会立即更新state，而是进行合并
        this.setState({
            num:this.state.num+1
        })
        this.setState({
            num:this.state.num+2
        })
        this.setState({
            num:this.state.num+3
        },function(){
            console.log('state修改完毕');
            console.log(this.state);
        })
        //this.setState({}) 在宏任务 微任务 同步操作
        //宏任务 
        setTimeout(()=>{
            this.setState({
                num:this.state.num+2
            })
            this.setState({
                num:this.state.num+3
            })
            this.setState({
                num:this.state.num+4   
            })
        },0)
        //微任务 
        new Promise(resolve=>resolve('xx')).then(res=>{
            this.setState({
                num:this.state.num+4,
                user:'xxx'   
            })
        })

    }

    changeNumFun=()=>{
        //方法2： 函数修改state数据  同步操作 重复执行累加
        this.setState((state,props)=>{
            return {
                num:state.num+1
            }
        })

        this.setState((state,props)=>{
            return {
                num:state.num+2
            }
        })

        setTimeout(()=>{
            this.setState((state,props)=>{
                return {
                    num:state.num+3
                }
            })
            this.setState((state,props)=>{
                return {
                    num:state.num+2
                }
            })
        },0)

    }

    fun(){
        console.log('定义的函数');
        console.log(this);
    }
  render() {
    return (
      <div>
        <h2>修改state数据的方法</h2>
        <p>获取state数据num: {this.state.num }</p>
        <p>获取state数据user: {this.state.user }</p>
        {/* 修改数据 */}
        <button onClick={this.changeNum}>num++</button>
        <button onClick={this.changeNumFun}>函数修改num++</button>
        <button onClick={this.fun}>普通函数</button>
      </div>
    )
  }
}
