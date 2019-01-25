import Vue from 'vue'
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
Vue.directive('transfer-dom', () => import('vux/src/directives/transfer-dom/index'))

//引用组件
//正常index引用
const compArray1 = [
  'x-header','drawer','view-box','group','cell','x-button','actionsheet','alert','x-switch','toast','confirm','inline-loading','load-more','loading','msg','popover','demo-index','popup-header','popup','radio','spinner','x-address'
]
compArray1.forEach(v => {
  Vue.component(v, () => import(`vux/src/components/${v}/index`))
})

//非index引用
const compArray2 = [
  'tabbar','flexbox','timeline','grid'
]
compArray2.forEach(v => {
  Vue.component(v, () => import(`vux/src/components/${v}/${v}.vue`))
  Vue.component(`${v}-item`, () => import(`vux/src/components/${v}/${v}-item.vue`))
})




export default  Vue
