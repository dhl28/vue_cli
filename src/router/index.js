import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const ProviderRegister = resolve => require(['../components/user/register/Provider-register.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/providerRegister',
      name: 'ProviderRegister',
      component: ProviderRegister
    }
  ]
})
