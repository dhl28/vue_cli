import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
const ProviderRegisterStep1 = resolve => require(['../components/user/register/Provider-register-step1.vue'], resolve)
const ProviderRegisterStep2 = resolve => require(['../components/user/register/Provider-register-step2.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/providerRegister/1',
      name: 'ProviderRegisterStep1',
      component: ProviderRegisterStep1
    }, {
      path: '/providerRegister/2',
      name: 'ProviderRegisterStep2',
      component: ProviderRegisterStep2
    }
  ]
})
