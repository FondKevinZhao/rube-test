import React, { Component } from 'react'
import {Avatar, Card } from 'antd';
const { Meta } = Card;
/* Card
        cover	卡片封面
        hoverable	鼠标移过时可浮起
    Meta
        avatar 头像/图标
        description	描述内容
        title	标题内容
        style	定义容器类名的样式

*/
export default class Item extends Component {
  render() {
    let user = this.props.obj.data.username || this.props.obj.data.desc || this.props.obj.data.start_pos;
    //价格 预览 
    return (
        <Card
            hoverable
            style={{
                width: 275,
                height:300,
                float:'left',
                marginRight:'30px',
                marginBottom:'20px'
            }}
            cover={<img alt="example" height='185px' width='275px' src={this.props.obj.data.pic} />}
    >
        {/* <Meta title={this.props.obj.data.subject} description={ `${user}   ${this.props.obj.data.views}`  } /> */}
        <Meta title={this.props.obj.data.subject} description={user} />
    </Card>
    )
  }
}
