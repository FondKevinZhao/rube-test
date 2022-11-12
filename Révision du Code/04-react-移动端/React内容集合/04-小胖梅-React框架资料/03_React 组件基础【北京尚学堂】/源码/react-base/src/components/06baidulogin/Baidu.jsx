import React, { Component } from 'react'
import Dialog from './Dialog'

export default class Baidu extends Component {
    constructor(){
        super()
        /* 
         visibility: hidden;
        visibility: visible;
        */
        this.state={
            isShow1:'hidden',//定义一个属性 
            isShow2:'hidden',//定义一个属性 
            title:'',
        }
    }
    //点击扫码登录
    showImg(n){
        this.setState({
            isShow1:'visible',
            title:'扫码登录'
        })
    }
     //账号登录
     showForm(){
        this.setState({
            isShow2:'visible',
            title:'账号登录'
        })
    }
    //定义一个修改isShow的方法
    hide=()=>{
        this.setState({
            isShow1:'hidden',
            isShow2:'hidden'
        })
    }
  render() {
    return (
      <div>
        <h2>百度首页</h2>
        <button onClick={this.showImg.bind(this,1)}>扫码登录</button>
        <button onClick={this.showForm.bind(this)}>账号登录</button>

        {/* 导入弹框组件 */}
        {/* 图片弹框 */}
        <Dialog isShow={this.state.isShow1} title={this.state.title} hide={this.hide}>
            这是一个图片
        </Dialog>

        {/* 表单弹框 */}
        <Dialog isShow={this.state.isShow2} title={this.state.title} hide={this.hide}>
            <input type="text" />
        </Dialog>

      </div>
    )
  }
}
