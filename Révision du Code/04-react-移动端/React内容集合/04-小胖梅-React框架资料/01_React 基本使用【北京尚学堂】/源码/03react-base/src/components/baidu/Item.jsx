import React, { Component } from 'react'
import './item.css'
export default class Item extends Component {
  render() {
    console.log(this.props);
    return (
      <div>   
        {/* 遍历动态数据 */}
        {
            this.props.arr.map(ele=>{
                return (
                    <a href={ele.href} key={ele.id}>
                        <span className='num'>{ele.id}</span>
                        {ele.title}
                        {ele.hot?<span>热</span>:''}
                    </a>
                )
            })
        }

        {/* <a href="##">
            <span className='num'>1</span>
            党的二十大开幕了
            <span>热</span>
        </a> */}

      </div>
    )
  }
}
