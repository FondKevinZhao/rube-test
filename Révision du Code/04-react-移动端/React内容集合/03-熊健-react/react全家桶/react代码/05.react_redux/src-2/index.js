import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* 
      负责给后代容器组件传递store对象 
      后代组件就不用引入store
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
