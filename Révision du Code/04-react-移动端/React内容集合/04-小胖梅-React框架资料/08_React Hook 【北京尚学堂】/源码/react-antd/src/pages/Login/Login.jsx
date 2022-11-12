import React, { Component } from "react";
import { Button, Checkbox, Form, Input, Col, Row,message, Space } from "antd";
/* 
  栅格布局：24格
    Row  行  
    Col  列
        span={8} 占的列数 
        offset={8}  列偏移
    Form 表单容器
        labelCol={{span:num}} 标题占据的位置
        wrapperCol   内容控件
        onFinish	提交表单且数据验证成功后回调事件
        onFinishFailed	提交表单且数据验证失败后回调事件
        onValuesChange	字段值更新时触发回调事件
    Form.Item#
      表单字段组件，用于数据双向绑定、校验、布局等。
        label	label 标签的文本
        name	字段名，支持数组 用户输入的内容
        rules	校验规则，设置字段的校验逻辑。点击此处查看示例

  登录接口：
     user_id	String	服务器默认：iwen@qq.com
     password	String	服务器默认：	iwen123
     verification_code	String	服务器默认：crfvw
*/
import api from '../../api/index'
export default class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    //获取用户输入的账号和面密码---连接后端接口 比较输入的账号和密码是否正确？ 模拟
    //网络请求
    api.getLogin({
      user_id:values.user,
      password:values.pwd,
      verification_code:'crfvw'
    })
    .then(res=>{
      console.log(res.data);
      if(res.data.success){  //登录成功--跳转到首页--- 
        //获取用户名
        localStorage.setItem('username',values.user)
        //编程式导航跳转页面
        this.props.history.push('/')
      }else{
        message.error('账号或者密码错误',1);
      }
    

    })

  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col span={8} offset={8}>
              <Form
                name="basic"
                labelCol={{
                  span: 4,
                }}
                wrapperCol={{
                  span: 20,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="账号"
                  name="user"
                  rules={[
                    {
                      required: true,
                      message: "请输入你的账号!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="pwd"
                  rules={[
                    {
                      required: true,
                      message: "请输入密码!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 4,
                    span: 16
                  }}
                >
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 4,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
