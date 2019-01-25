//import Vue from './vux'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import LoadingPlugin  from 'vux/src/plugins/loading'
import AlertPlugin  from 'vux/src/plugins/alert'
import ConfirmPlugin  from 'vux/src/plugins/confirm'
import ToastPlugin  from 'vux/src/plugins/toast'

//引用配置
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

//引用指令
Vue.directive('transfer-dom', () => import('vux/src/directives/transfer-dom/'))
// Vue.directive('transfer-dom', TransferDom)

Vue.config.productionTip = false

//设置全局属性
Vue.prototype.axios = axios
Vue.prototype.storage = window.localStorage
Vue.prototype.$devicePixelRatio = 2

new Vue({
  router,
  store,
  data() {
    return {
      Event: new Vue()
    }
  },
  render: h => h(App)
}).$mount('#app')

