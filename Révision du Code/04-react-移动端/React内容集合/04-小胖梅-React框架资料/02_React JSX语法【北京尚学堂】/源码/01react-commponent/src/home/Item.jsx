import React, { Component } from 'react'
// import './item.module.css'
import module from './item.module.css'

export default class Item extends Component {
  render() {
    console.log(this.props.obj);
    return (
      <a href='##' className={module.item}>
        <img src={this.props.obj.cover} width='300' alt="" />
        <p className={module.color}>{this.props.obj.title}</p>
      </a>
    )
  }
}
