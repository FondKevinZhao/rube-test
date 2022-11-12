import React, { Component } from 'react'

export default class Unmount extends Component {
    constructor(){
        super()
        this.timer=null;
    }
    componentDidMount(){
        //1.事件
        window.addEventListener('scroll',this.scrollFun)
        //2. 计时器
        this.timer = setInterval(()=>{
            console.log('计时器运行中');
        },1000)

    }
    scrollFun() {
        //获取滚动的高度
        let height = document.documentElement.scrollTop;
        console.log(height);
    }
    //生命周期函数---性能优化
    componentWillUnmount(){
        //清空事件
        window.removeEventListener('scroll',this.scrollFun)
        //计时器清空
        clearInterval(this.timer)
        //数据初始化
        // this.setState({})
    }
  render() {
    return (
      <div>Unmount
        <div style={{height:'2000px'}}></div>
      </div>
    )
  }
}
