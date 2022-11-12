import React, { Component } from 'react'
import Pagination from './Pagination'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            total:100,

        }
    }
    componentDidMount(){
        //请求页码总数  设置state数据 修改默认total 
    }
    eat(){
        console.log(123);
    }
  render() {
    return (
      <div>
        <h2>Home组件</h2>
        <hr />
        {/* 使用分页组件 */}
        <Pagination total={this.state.total} msg='标题' fun={this.eat} str={ 200 } current={'1'} />
        {/* <Pagination  total='100'/> */}
      </div>
    )
  }
}
