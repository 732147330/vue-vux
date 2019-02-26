import Vue from 'vue'
import Vuex from 'vuex'
//引用json菜单数据

//vux
import vuxMenuData from './assets/json/vux/menu/menuData'
//aeg

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routingState: 'home',
    scrollData: 0,
    vuxMenuData
  },
  mutations: {
    SETROUTINGSTATE(state, payload) {
      state.routingState = payload
    },
    SETSCROLLDARA(state, payload) {
      state.scrollData = payload
    }
  },
  actions: {
    setRoutingState({commit, state}, payload) {
      commit('SETROUTINGSTATE', payload)
    },
    setScrollData({commit, state}, payload) {
      commit('SETSCROLLDARA', payload)
    }
  }
})




