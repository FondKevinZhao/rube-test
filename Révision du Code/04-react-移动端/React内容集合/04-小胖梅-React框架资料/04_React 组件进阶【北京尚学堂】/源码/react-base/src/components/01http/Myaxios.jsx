import React, { Component } from 'react'
import axios from 'axios'
// import qs from 'querystring'
const qs = require('querystring')
export default class Myaxios extends Component {
    componentDidMount(){
        //axios网络请求
        //1. get请求
        axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        .then(res=>{
            console.log('get请求-无参---',res.data);
        })

        //get接口：http://iwenwiki.com/api/blueberrypai/getSongInfo.php  参数 song  前端固定mo

        //2.1 get传递参数
        axios.get('http://iwenwiki.com/api/blueberrypai/getSongInfo.php?song=mo')
        .then(res=>{
            console.log('get传递参数--地址栏--',res.data);
        })

        //2.2 get传递参数 axios.get('url',{ params:{后台变量：xx} })
        axios.get('http://iwenwiki.com/api/blueberrypai/getSongInfo.php',{
            //params是配置项属性 params 表达get传递参数
            params:{
                song:'mo'
            }
        })
        .then(res=>{
            console.log('get传递参数--地址栏--',res.data);
        })

        //3. post传递参数
        /* 
            http://iwenwiki.com/api/blueberrypai/login.php
            登录
            含义	必填	参数名	类型	说明
            请求方式			post	
            用户账号	是	user_id	String	服务器默认：iwen@qq.com
            密码	是	password	String	服务器默认：	iwen123
            验证码	是	verification_code	String	服务器默认：crfvw
            {
                user_id:'iwen@qq.com',
                password:'iwen123',
                verification_code:'crfvw'
            }
            JSON.parse()/stringify() '{}'
            nodejs: querystring 
        */
    //    let data='user_id=iwen@qq.com&password=iwen123&verification_code=crfvw'
        axios.post('http://iwenwiki.com/api/blueberrypai/login.php',qs.stringify({
            user_id:'iwen@qq.com',
            password:'iwen123',
            verification_code:'crfvw'
        })).then(res=>{
            console.log('post传递参数-----',res.data);
        })

        //4. axios()完整写法  简写：axios.get()  axios.post()
        // //jquery:$.ajax()   $.get()/$.post()
        axios({
            method:'get',//请求的方式
            // url:'http://iwenwiki.com/api/blueberrypai/getSongInfo.php?song=mo',//请求的地址接口
            url:'http://iwenwiki.com/api/blueberrypai/getSongInfo.php',//请求的地址接口
            params:{
                song:'mo'
            }
        }).then(res=>{
            console.log('--axios()完整写法--',res.data);
        })
        //post
        axios({
            method:'post',//请求的方式
            url:'http://iwenwiki.com/api/blueberrypai/login.php',//请求的地址接口
            data:qs.stringify({
                user_id:'iwen@qq.com',
                password:'iwen123',
                verification_code:'crfvw'
            })
        }).then(res=>{
            console.log('--axios()完整写法--post---',res.data);
        })
        //5. 执行多个并发请求---------------------
        //多个请求 需要等所有的请求成功后 再去做什么 ----------------- 
        //需求：1. 获取轮播图数据  2. 歌曲数据  都获取完毕 再去渲染页面
        function http1(){
            return axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        }

        function http2(){
            return axios.get('http://iwenwiki.com/api/blueberrypai/getSongInfo.php',{params:{song:'mo'}})
        }
        //axios.all([接口1,接口2]).then( axios.spread( (one,two)=>{ 两次成功的结果渲染 } ) )
        axios.all([http1(),http2()])
        .then( axios.spread( (one,two)=>{
            console.log('==============',one.data);
            console.log('==============',two.data);
        }) )
 

      

    }
  render() {
    return (
      <div>Myaxios</div>
    )
  }
}
