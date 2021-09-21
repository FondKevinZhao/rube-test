// vuex配置
import Vue from "vue";
import Vuex from "vuex";

// 安装插件
Vue.use(Vuex);

// 配置

// 用来集中式管理vuex所有状态数据的对象
// 需要对状态赋初始化值
const state = {
  count: 0,
};

// 用来保存只读的计算属性数据
const getters = {
  oddOrEven(state) {
    return (state.count & 1) === 1 ? "奇数" : "偶数";
  },
};

// 包含n个用来间接更新数据的方法对象
// 往往会进行异步操作（发送请求）
const actions = {
  // increment(store) {
  //   /*
  //     store对象包含方法
  //       dispatch(action函数名称, 数据)   用来触发action函数
  //       commit(mutation函数名称, 数据)   用来触发mutation函数
  //       state    vuex管理的state数据
  //   */
  //   store.commit("INCREMENT", 1);
  // },
  increment({ commit }) {
    commit("INCREMENT", 1);
  },
  decrement({ commit }, data) {
    commit("DECREMENT", data);
  },
  incrementIfOdd({ commit, state }) {
    if ((state.count & 1) === 1) {
      commit("INCREMENT", 1);
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT", 1);
    }, 1000);
  },
};

// 包含n个用来直接更新数据的方法对象
// 直接对数据进行操作
const mutations = {
  INCREMENT(state, data) {
    // state vuex管理的state数据
    // data 调用commit传入第二个参数
    state.count += data;
  },
  DECREMENT(state, data) {
    state.count -= data;
  },
};

const store = new Vuex.Store({
  getters,
  state,
  actions,
  mutations,
});

export default store;
