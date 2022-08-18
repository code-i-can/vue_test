import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
