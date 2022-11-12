import React, { Component } from "react";
import axios from "axios";
export default class Kuayu extends Component {
  componentDidMount() {
    //请求穷游接口：
    //穷游：https://www.qyer.com/qcross/home/index/recommendbiz?page=1
    axios.get('/api/qcross/home/index/recommendbiz?page=1')
    .then(res=>{
        console.log(res.data);
    })
  }

  render() {
    return <div>Kuayu</div>;
  }
}
