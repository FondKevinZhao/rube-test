import React, { Component } from 'react'
import { Carousel } from 'antd';
import PropTypes from 'prop-types'
/* 
  Carousel 走马灯
    autoplay 自动轮播
    
    轮播内容：
        div 
*/
export default class Banner extends Component {
  render() {
    console.log(this.props.arr);
    return (
        <Carousel autoplay>
           {
            this.props.arr.map(ele=>{
                return  <div key={ele.id}>
                    <img src={ele.img} height='528px' alt="" />
                </div>
            })
           }
        </Carousel>
    )
  }
}
//arr=[{id:xx,img:''},{}]
Banner.propTypes={
    arr:PropTypes.array.isRequired
}