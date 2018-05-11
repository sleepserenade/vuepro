import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Mall from 'components/mall/mall'
import Service from 'components/service/service'
import Center from 'components/center/center'
import Totalassets from 'components/totalassets/totalassets'
import Userinfo from 'components/userinfo/userinfo'
import Creditcard from 'components/creditcard/creditcard'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Login from 'components/login/login'
import Pay from 'components/pay/pay'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/center',
      name: 'center',
      meta: {
        title: '',
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Center,
      children: [{
          path: '/totalassets',
          name: 'totalassets',
          component: Totalassets
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: Userinfo
        },
        {
          path: '/creditcard',
          name: 'creditcard',
          component: Creditcard
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    },
    {
      path:'/pay',
      name:'pay',
      component: Pay
    }
  ]
})
