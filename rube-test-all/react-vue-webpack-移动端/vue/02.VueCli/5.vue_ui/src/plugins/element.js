import Vue from "vue";
import { Button, Dialog, Message } from "element-ui";

// 安装插件：全局注册组件
Vue.use(Button);
Vue.use(Dialog);

Vue.prototype.$message = Message;
