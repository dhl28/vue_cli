// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/bootstrap-3.3.7/css/bootstrap.min.css'
// import './assets/bootstrap-3.3.7/js/bootstrap.min'

import util from './common/util'
Vue.use(util)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
