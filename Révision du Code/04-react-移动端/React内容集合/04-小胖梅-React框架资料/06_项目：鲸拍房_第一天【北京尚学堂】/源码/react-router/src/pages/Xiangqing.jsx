import React, { Component } from 'react'
import { withRouter } from './withRouter'
class Xiangqing extends Component {
  render() {
    console.log(this.props.params);
    return (
      <div>Xiangqing</div>
    )
  }

}
export default withRouter(Xiangqing)

