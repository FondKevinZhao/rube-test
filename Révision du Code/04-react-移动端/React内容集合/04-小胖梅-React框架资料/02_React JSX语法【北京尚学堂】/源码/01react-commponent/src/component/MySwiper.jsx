import React, { Component } from 'react'
//导入swiper---React项目中使用swiper库
import { Swiper, SwiperSlide } from "swiper/react";
// 导入样式
import "swiper/css";

export default class MySwiper extends Component {
  render() {
    return (
        <Swiper>
            {
                this.props.banner.map(ele=>{
                    return <SwiperSlide key={ele.title}>
                    <img src={ele.img} height='500' width='100%' alt="" />
                    <p>{ele.title}</p>
                    </SwiperSlide>
                })
            }
       </Swiper>
    )
  }
}
