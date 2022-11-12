import React, { Component } from 'react'
import Item from './Item'
import arr from '../../data/baiduData'
//百度首页--获取热搜的数据
/* const arr=[
    {
        id:1,
        title:"党的二十大开幕了",
        href:'http://www.baidu.com',
        hot:true
    },
    {
        id:2,
        title:"党的二十大开幕了22222",
        href:'http://www.baidu.com',
        hot:true
    },
    {
        id:3,
        title:"党的二十大开幕了3333",
        href:'http://www.baidu.com',
        hot:false
    },
    {
        id:4,
        title:"党的二十大开幕了444",
        href:'http://www.baidu.com',
        hot:false
    },

] */
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>百度热搜</h3>
        {/* 热搜的列表是重复的组件  */}
        <Item arr={arr}/>

      </div>
    )
  }
}
