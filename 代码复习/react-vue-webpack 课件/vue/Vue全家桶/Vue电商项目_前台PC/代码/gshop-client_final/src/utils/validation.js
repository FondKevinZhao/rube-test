import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

// 定义表单校验规则
extend("required", {
  ...required,
  message: "请输入{_field_}",
});

const passwordReg = /^\w{6,18}$/;

extend("password", {
  validate(value) {
    return passwordReg.test(value);
  },
  message: "请输入合法的密码",
});

const phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

extend("phone", {
  validate(value) {
    // 返回true校验成功
    // 返回false校验失败
    return phoneReg.test(value);
  },
  message: "请输入合法的手机号",
});
