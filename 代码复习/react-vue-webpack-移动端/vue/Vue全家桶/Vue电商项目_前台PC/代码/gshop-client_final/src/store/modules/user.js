import * as API from "../../api";

export default {
  // 开启命名空间模式
  namespaced: true,
  state: {
    name: "", // 用户名
    token: window.localStorage.getItem("user_token") || "", // 用户登录的唯一标识
    nickName: window.localStorage.getItem("user_name") || "", // 用户昵称
  },
  getters: {},
  actions: {
    // async函数一定会返回一个promise对象
    // 当async里面代码全部成功执行了，这个promise对象就是成功状态
    // 成功状态结果值就是async函数的返回值（和内部promise无关）
    // 当async里面代码有一个失败了，这个promise对象就是失败状态
    // 失败状态结果值就是错误原因
    async login({ commit }, { phone, password }) {
      const user = await API.user.reqLogin(phone, password);
      commit("LOGIN", user);

      // 返回值就是async函数返回的promise的成功结果值
      return {
        token: user.token,
        nickName: user.nickName,
      };
    },
  },
  mutations: {
    LOGIN(state, user) {
      state.name = user.name;
      state.token = user.token;
      state.nickName = user.nickName;
    },
  },
};
