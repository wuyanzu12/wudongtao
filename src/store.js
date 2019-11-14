import Vue from 'vue'
import Vuex from 'vuex'

// vue使用vuex这个方法
Vue.use(Vuex)

const state = {
  position: {},
  user: null
}

// 操作state里面的值
const mutations = {
  setPosition (state, val) {
    state.position = val;
  },
  setUser (state, val) {
    state.user = val
  }
}

const actions = {
  setPosition ({ commit }, val) { // 解构赋值
    // 异步请求后端获取当前位置数据 
    commit('setPosition', val)
  },
  setUser ({ commit }, val) {
    commit('setUser', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})




// 模块化
// const Position = {
//   state: {

//   },
// }
// const User = {

// }