import React, { Component } from 'react'
import Item from './Item'
//导入模拟的数据 
import list from '../data/list'

export default class Home extends Component {
  render() {
    console.log('render',list.data);//[{},{}]
    return (
      <div>Home

        {/* 导入子组件 */}
        {
            list.data.map(ele=>{
                return  <Item obj={ele} key={ele.id}/>
            })
        }

      </div>
    )
  }
}
