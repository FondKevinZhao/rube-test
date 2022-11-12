import React, { Component } from 'react'

export default class Song extends Component {
    componentDidMount(){
        console.log('-------------',this.props.match.params.songId);
        //网络请求 
    }
  render() {
    console.log(this);
    console.log(this.props.match.params.songId);
    return (
      <div>
        <h3>Song组件 组件是动态组件接受参数--获取动态音乐列表</h3>
        <p>{this.props.match.params.songId}</p>

      </div>
    )
  }
}
