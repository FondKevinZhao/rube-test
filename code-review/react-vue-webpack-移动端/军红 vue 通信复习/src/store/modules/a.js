const getters = {

}
const state = {
  data:''
}
const actions = {
  sonChange({commit},val){
    console.log('actions中的方法触发了');
    // 只要触发了 sonChange 方法，就会自动帮我 commit mutations 中的方法
    commit('SON_CHANGE',val)
  }
}

const mutations = {
  SON_CHANGE(state,value){ // 默认的第一个参数就是 state，第二个参数是 commit 传过来的 value
    state.data = value // 这个 value 是 commit('SON_CHANGE',val) 的 val
    console.log('mutations中的方法触发了');
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
