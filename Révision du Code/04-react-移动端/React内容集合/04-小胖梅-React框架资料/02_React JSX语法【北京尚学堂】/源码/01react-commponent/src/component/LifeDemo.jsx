import React, { Component } from "react";
//导入jquery
import $ from "jquery";
// //导入swiper---React项目中使用swiper库
// import { Swiper, SwiperSlide } from "swiper/react";
// // 导入样式
// import "swiper/css";
//导入轮播组件
import MySwiper from './MySwiper'
/* 
    实现效果：轮播图
    1. react生命周期函数  声明空容器
    2. 安装jquery 请求接口
    3. 把获取的数据给空容器  
    4. 通过react语法遍历数据渲染视图
    5. 轮播效果 安装swiper 

*/
export default class LifeDemo extends Component {
  //定义组件内的数据
  constructor() {
    super();
    //定义响应式数据
    this.state = {
      banner: [], //声明空容器  存储轮播数据接口数据
      endTime:new Date('2022/11/11 00:00'),
      day:'',
      h:''
    };
    //定义其他数据
    this.num = 100;
  }
  //网络请求
  componentDidMount() {
    //调用网络请求
    this.http();
    //...
    //倒计时 
    setInterval(()=>{
        console.log('倒计时');

        this.setState({

        })
    },500)
  }
  //封装一个方法
  http = () => {
    //写法：1.原生js的xhr  2. jquery
    //接口：get请求 url=http://iwenwiki.com/api/blueberrypai/getIndexBanner.php
    $.ajax({
      type: "get",
      url: "http://iwenwiki.com/api/blueberrypai/getIndexBanner.php",
      dataType: "json",
      success: (res) => {
        //接口成功了渲染成功的数据
        console.log(res.banner); //[{img:''},{},{}]
        res.banner.forEach((element) => {
          element.img = element.img.replace(
            "http://www.wwtliu.com/sxtstu",
            "http://iwenwiki.com/api"
          );
        });
        //把获取的数据给空容器    this.setState({},callback)
        this.setState(
          {
            banner: res.banner,
          },
          () => {
            console.log(this.state);
          }
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
  render() {
    return (
      <div>
        <h2>生命周期函数练习--结合网络请求</h2>
        <p>距离双十一的时： xxx:xx:xx</p>
        <MySwiper banner={this.state.banner}/>
        {/* 结合轮播swiper */}
        {/* <Swiper>
         {
            this.state.banner.map(ele=>{
               return <SwiperSlide key={ele.title}>
                        <img src={ele.img} height='500' width='100%' alt="" />
                        <p>{ele.title}</p>
                    </SwiperSlide>
            })
         }
        </Swiper> */}
      </div>
    );
  }
}
