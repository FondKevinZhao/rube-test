<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <!-- 
      高阶函数含义：执行函数返回一个新函数 或 执行函数接受一个函数作为参数

      通过作用域插槽传递一个高阶函数 handleSubmit 
      handleSubmit作用内部会进行表单校验，
        校验通过，会触发传入的回调register
        校验失败就不会触发
    -->
    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="register" @submit.prevent="handleSubmit(register)">
        <h3>
          注册新用户
          <span class="go"
            >我有账号，去 <a href="login.html" target="_blank">登陆</a>
          </span>
        </h3>
        <!-- 
          ValidationProvider 默认生成的结构是span

         -->
        <ValidationProvider
          class="content"
          name="手机号"
          rules="required|phone"
          tag="div"
          mode="eager"
          v-slot="{ errors }"
        >
          <label>手机号:</label>
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          tag="div"
          name="验证码"
          rules="required|code"
          mode="eager"
          v-slot="{ errors }"
        >
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <span
            :class="{
              'send-code-btn': true,
              disabled: isDisabled || isSendCode,
            }"
            @click="sendCode"
            >{{ isSendCode ? `还剩${time}s` : "发送验证码" }}</span
          >
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          tag="div"
          name="密码"
          rules="required|password"
          mode="eager"
          v-slot="{ errors }"
        >
          <label>登录密码:</label>
          <input
            type="text"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="content"
          tag="div"
          name="确认密码"
          :rules="`required|rePassword:${user.password}`"
          mode="eager"
          v-slot="{ errors }"
        >
          <label>确认密码:</label>
          <input
            type="text"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          class="controls"
          tag="div"
          name="用户协议"
          rules="required|isVerify"
          mode="eager"
          v-slot="{ errors }"
        >
          <input name="m1" type="checkbox" v-model="user.isVerify" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="btn">
          <button type="submit">完成注册</button>
        </div>
      </form>
    </ValidationObserver>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import "../../utils/validation";

const codeReg = /^\d{6}$/;
const phoneReg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

extend("code", {
  validate(value) {
    return codeReg.test(value);
  },
  message: "请输入合法的验证码",
});

extend("rePassword", {
  validate(value, params) {
    // console.log(params[0]);
    return value === params[0];
  },
  message: "两次密码输入不一致",
});

extend("isVerify", {
  validate(value) {
    return value;
  },
  message: "请勾选同意尚品汇用户协议",
});

export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        code: "",
        password: "",
        rePassword: "",
        isVerify: false,
      },
      time: 60,
      isSendCode: false,
    };
  },
  methods: {
    // 注册
    async register() {
      // console.log("register");
      // 发送请求，注册
      try {
        const { phone, code, password } = this.user;
        await this.$API.user.reqRegister({
          phone,
          code,
          password,
        });
        // 注册成功，跳转到登录页面
        this.$router.history.push("/login");
      } catch (e) {
        alert(e);
      }
    },
    // 发送验证码
    async sendCode() {
      if (this.isDisabled || this.isSendCode) {
        return;
      }

      this.isSendCode = true;
      // 倒计时
      this.timeId = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(this.timeId);
          this.time = 60;
          this.isSendCode = false;
        }
      }, 1000);

      const code = await this.$API.user.reqSendCode(this.user.phone);
      console.log(code);
    },
  },
  computed: {
    isDisabled() {
      return !phoneReg.test(this.user.phone);
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;
      width: 100%;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
.send-code-btn {
  margin-left: 10px;
  border: 1px solid #333;
  padding: 5px 10px;
  &.disabled {
    opacity: 0.5;
  }
}
</style>