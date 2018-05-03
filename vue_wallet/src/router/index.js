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

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/home'
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
      component: Center,
      children:[
        {
          path: '/totalassets',
          component :Totalassets
        },
        {
          path:'/userinfo',
          component :Userinfo
        },
        {
          path:'/creditcard',
          component:Creditcard
        }
      ]
    }
  ]
})
