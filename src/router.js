import Vue from 'vue'
import Router from 'vue-router'
import $store from './store'

Vue.use(Router)

//配置一级菜单路由(由于一级菜单是底部，有图片和选中状态，之后考虑优化配置一级菜单路由)
const routes = [
  {
    path: '/',
    name: 'comp',
    component: () => import(/* webpackChunkName: "Home" */ './views/vux/Home.vue')
  },
  {
    path: '/vux/chart',
    name: 'chart',
    // route level code-splitting
    // this generates a separate chunk (chart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: false */ './views/vux/Chart.vue')
  },
  {
    path: '/vux/function',
    name: 'function',
    // route level code-splitting
    // this generates a separate chunk (function.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: false */ './views/vux/Function.vue')
  },
  {
    path: '/vux/mode',
    name: 'mode',
    // route level code-splitting
    // this generates a separate chunk (function.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: false */ './views/vux/Mode.vue')
  }
]
//分配路由器
var distributeRouter = (menu,type) => {
  menu.forEach(v => {
    if(v.values!=[] && v.values != null) {
      v.values.forEach(v1 => {
        //配置二级菜单路由
        v1.values.forEach(v2 => {
          let temp = ''
          if (v2.indexOf('-') >= 0) {
            temp = v2.substring(0, 1).toUpperCase() + v2.substring(1, v2.indexOf('-')) + v2.substring(v2.indexOf('-') + 1, v2.indexOf('-') + 2).toUpperCase() + v2.substring(v2.indexOf('-') + 2)
          } else {
            temp = v2.substring(0, 1).toUpperCase() + v2.substring(1)
          }
          routes.push({
            path: `/${type}/${v.title}/${v2}`,
            name: `${v.title}-${v2}`,
            component: () => import(/* webpackPrefetch: false */`./components/vux/${v.title}/${temp}.vue`)
          })
        })
      })
    }
  })
}
//进行处理和配置二级以下菜单路由
//vux
distributeRouter($store.state.vuxMenuData,'vux');
//aeg

// console.log(routes)
// console.log('**********')

let $router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//跳转前触发
$router.beforeEach((to, from, next) => {
  // console.log(to)
  next()
})

//跳转后触发
$router.afterEach((to, from, next) => {
  //console.log(from)
  // setTimeout(() => window.scrollTo(0, 0), 0)
  if(from.params.scrollTop != undefined){
    to.params.scrollTop = from.params.scrollTop
  }
  if(to.name === "comp" || to.name === "chart"
    || to.name === "function"){
    setTimeout(() => window.scrollTo(0, to.params.scrollTop), 0)
  }else{
    setTimeout(() => window.scrollTo(0, 0), 0)
  }
})

// $router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   console.log(error.message);
//   console.log(targetPath);
//   if(isChunkLoadFailed){
//     // $router.replace(targetPath);
//     // console.log($router);
//     // console.log(targetPath);
//     location.reload();
//   }
// })


export default $router
