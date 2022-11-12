import React, { Component } from 'react'
import HocComp from './HocComp'
class About extends Component {
    
  render() {
    return (
      <div>About
        <p>user:{this.props.user}</p>
      </div>
    )
  }
}
export default  HocComp(About)