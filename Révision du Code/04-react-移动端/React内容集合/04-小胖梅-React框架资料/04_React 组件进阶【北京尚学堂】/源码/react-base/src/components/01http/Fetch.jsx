import React, { Component } from 'react'

export default class Fetch extends Component {
    constructor(){
        super()
        this.state={
            user:'',
            pwd:''
        }
    }
  componentDidMount(){
    //1. get请求 fetch('xxx?xx=xx')
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    .then(res=>{
        //fetch成功的数据 数据流 需要解析
        // console.log(res);
        // return res.text()
        return res.json();
    })
    .then(res=>{
        console.log('轮播接口',res);
    })

    //2. get传递参数 
    fetch('http://iwenwiki.com/api/blueberrypai/getSongInfo.php?song=mo')
    .then(res=>res.json())
    .then(res=>{
        console.log('歌曲接口',res);
    })

  }  
  //登录的函数
  /* 
    http://iwenwiki.com/api/blueberrypai/login.php
    登录
    含义	必填	参数名	类型	说明
    请求方式			post	
    用户账号	是	user_id	String	服务器默认：iwen@qq.com
    密码	是	password	String	服务器默认：	iwen123
    验证码	是	verification_code	String	服务器默认：crfvw
  */
  login=()=>{
    //获取用户输入的值--存储state变量
    fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
        method:'post',
        body:`user_id=${this.state.user}&password=${this.state.pwd}&verification_code=crfvw`,
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        }
    }).then(res=>res.json())
    .then(res=>{
        console.log(res);
    })


  }
  render() {
    return (
      <div>
        <h2>Fetch</h2>  
        <h3>登录界面</h3>
        账号：<input type="text" value={this.state.user} onChange={(e)=>this.setState({user:e.target.value})}/> <br />
        密码：<input type="text" value={this.state.pwd} onChange={(e)=>this.setState({pwd:e.target.value})} /> <br />
        <button onClick={this.login}>登录</button>

      </div>
    )
  }
}
