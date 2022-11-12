import React, { Component } from 'react'
import HocComp from './HocComp'
 class News extends Component {
  render() {
    return (
      <div>News
        <p>user:{this.props.user}</p>
      </div>
    )
  }
}

export default HocComp(News)

/* 
export default class News extends Component {
    constructor(){
        super()
        this.state={
            user:''
        }
    }
    componentDidMount(){
        let user = localStorage.getItem('username')
        this.setState({
            user
        })
    }
  render() {
    return (
      <div>News
        <p>user:{this.state.user}</p>
      </div>
    )
  }
} */
