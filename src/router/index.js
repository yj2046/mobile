import Vue from 'vue'   /* 引用vue文件 */
import Router from 'vue-router'  /* 引用vue路由模块，并赋值给变量Router */
import Home from '@/pages/home'
import Detail from '@/pages/goodsDetail'
import Demo from '@/pages/componentsDemo'
import EditTool from '@/pages/editTool'

Vue.use(Router)   /* 使用路由 */
export default new Router({
  routes: [     /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'Hello',  /* 这里的name同上，暂时没发现有什么意思 */
      component: Home   /* 注册Hello组件 */
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/editTool',
      name: 'EditTool',
      component: EditTool
    }
  ]
})
