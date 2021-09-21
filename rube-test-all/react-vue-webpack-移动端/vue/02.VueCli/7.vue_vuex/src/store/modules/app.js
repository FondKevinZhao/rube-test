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
    state.count += data;
  },
  DECREMENT(state, data) {
    state.count -= data;
  },
};

export default {
  // 开启命名空间
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
