import React from "react";
// 需要安装sass: npm i sass -D  或 yarn add sass --dev
// 安装VSCODE插件sass进行代码高亮和提示
import "./App.sass";

class App extends React.Component {
  render() {
    return <h1 className="title">hello react cli</h1>;
  }
}

export default App;
