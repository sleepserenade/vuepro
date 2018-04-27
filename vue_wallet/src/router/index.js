import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Mall from 'components/mall/mall'
import Service from 'components/service/service'
import Center from 'components/center/center'


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
      component: Center
    }
  ]
})
