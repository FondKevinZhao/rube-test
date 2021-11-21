<template>
  <el-card>
    <template #header>
      <h3 class="title">添加用户</h3>
    </template>
    <!-- 
      rules 表单校验的规则 
        配合prop使用
          prop
            指定当前表单项使用哪个规则
            指定表单校验的字段是哪个
        配合model使用
          model指定校验的数据去哪里找
    -->
    <el-form label-width="80px" :rules="rules" :model="user" ref="form">
      <el-form-item label="用户名称" prop="username">
        <el-input
          placeholder="请输入用户名称"
          class="input"
          v-model="user.username"
        />
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input
          placeholder="请输入用户昵称"
          class="input"
          v-model="user.nickname"
        />
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input
          placeholder="请输入用户密码"
          type="password"
          class="input"
          v-model="user.password"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="rePassword">
        <el-input
          placeholder="请输入确认密码"
          type="password"
          class="input"
          v-model="user.rePassword"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">添加</el-button>
        <el-button @click="$router.history.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { reqSaveUser } from "../../../api/users";

export default {
  name: "UserSave",
  data() {
    return {
      user: {
        username: "",
        nickname: "",
        password: "",
        rePassword: "",
      },
      rules: {
        username: [
          {
            pattern: /^[0-9A-Za-z]{4,12}$/,
            message: "输入内容不符合规范",
            trigger: "blur",
          },
          { required: true, message: "输入内容不能为空", trigger: "blur" },
        ],
        nickname: [
          { required: true, validator: this.validator, trigger: "blur" },
        ],
        password: [
          {
            pattern: /^[0-9A-Za-z]{4,12}$/,
            message: "输入内容不符合规范",
            trigger: "blur",
          },
          { required: true, message: "输入内容不能为空", trigger: "blur" },
        ],
        rePassword: [
          {
            required: true,
            validator: this.repasswordValidator,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    validator(rule, value, callback) {
      /*
        rule 是一个对象，包含规则名称
        value 当前校验项的值
        callback 必须要调用
          callback() 成功
          callback(xxx) 失败，传入的参数就是失败原因
      */
      if (/^[0-9A-Za-z]{4,12}$/.test(value)) {
        callback();
      } else {
        callback(new Error("输入内容不符合规范"));
      }
    },
    repasswordValidator(rule, value, callback) {
      if (this.user.password === value) {
        callback();
      } else {
        callback(new Error("两次密码输入不一致"));
      }
    },
    submit() {
      // 通过ref获取el-form组件实例对象
      // 校验表单的方法
      this.$refs.form.validate(async (valid) => {
        // valid为true说明表单校验通过
        if (valid) {
          try {
            console.log("表单校验全部通过");
            const { username, nickname, password } = this.user;
            // 添加数据
            await reqSaveUser({ username, nickname, password });

            this.$message({
              type: "success",
              message: "添加用户成功~",
            });
            // 返回上一个页面
            this.$router.history.go(-1);
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
  },
};
</script>

<style>
.title {
  margin: 0;
}
.input.el-input {
  width: 30%;
}
</style>