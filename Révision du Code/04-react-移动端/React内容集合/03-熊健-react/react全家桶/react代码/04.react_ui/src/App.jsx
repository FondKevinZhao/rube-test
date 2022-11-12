import React from "react";
import { Button, Modal, Carousel } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

class App extends React.Component {
  del = () => {
    Modal.confirm({
      title: "您确认要删除吗",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "确认",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        console.log("OK");
      },
      // onCancel() {
      //   console.log("Cancel");
      // },
    });
  };
  render() {
    const contentStyle = {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    };

    return (
      <div>
        <Button
          onClick={this.del}
          type="primary"
          icon={<PlusOutlined />}
          size="large">
          按钮
        </Button>

        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
