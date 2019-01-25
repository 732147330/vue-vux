export default function distributeRouter (menu,type) {
  var routes = [];
  menu.forEach(v => {
    if(v.values!=[] && v.values != null) {
      v.values.forEach(v1 => {
        //配置二级菜单路由
        v1.values.forEach(v2 => {
          let temp = ''
          if (v2.indexOf('-') > -1) {
            temp = v2.substring(0, 1).toUpperCase() + v2.substring(1, v2.indexOf('-')) + v2.substring(v2.indexOf('-') + 1, v2.indexOf('-') + 2).toUpperCase() + v2.substring(v2.indexOf('-') + 2)
          } else {
            temp = v2.substring(0, 1).toUpperCase() + v2.substring(1)
          }
          routes.push({
            path: `/${type}/${v.title}/${v2}`,
            name: `${v.title}-${v2}`,
            component: () => import(`./components/${type}/${v.title}/${temp}.vue`)
          })
        })
      })
    }
  })
  return routes;
}


//   function test(menu,type) {
//   return menu;
// }
//
//  const  config = {
//   url: "baidu1111"
// }
//
// export { distributeRouter }
