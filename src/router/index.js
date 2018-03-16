import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import Detail from '@/components/Detail'
import Cookie from '../components/cookie-log'
import Rid from '../components/rid'
import Yuhan from '../components/yuhan'
import Xzd from '../components/xzd'
import Formlist from '../components/formlist'
import Qqsj from '../components/qqsj'
import Kuayu from '../components/kuayu'
import Qingqiu from '../components/qingqiu'
import Vuescroll from '../components/vuescroll'
import Fanhuitop from '../components/fanhuitop'
import Main from '../components/main'
import Formdata from '../components/formdata'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/detail/:id/:detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/cookie',
      name: 'cookie',
      component: Cookie
    },
    {
      path: '/rid',
      name: 'rid',
      component: Rid
    },
    {
      path: '/yuhan',
      name: 'yuhan',
      component: Yuhan
    },
    {
      path: '/xzd',
      name: 'xzd',
      component: Xzd
    },
    {
      path: '/formlist',
      name: 'formlist',
      component: Formlist
    },
    {
      path: '/qqsj',
      name: 'qqsj',
      component: Qqsj
    },
    {
      path: '/kuayu',
      name: 'kuayu',
      component: Kuayu
    },
    {
      path: '/qingqiu',
      name: 'qingqiu',
      component: Qingqiu
    },
    {
      path: '/vuescroll',
      name: 'vuescroll',
      component: Vuescroll
    },
    {
      path: '/fanhuitop',
      name: 'fanhuitop',
      component: Fanhuitop
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/formdata',
      name: 'formdata',
      component: Formdata
    }
  ]
})
