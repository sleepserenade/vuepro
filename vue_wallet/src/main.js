import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import Vuex from 'vuex'

import 'common/less/index.less'

Vue.config.productionTip = false;
// vue.use(VueAwesomeSwiper);


fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use(Vuex);

var state = {
	isLogin:0,
};

const mutations = {
	changeLongin(state,date){
		state.isLogin = data;
	}
}


