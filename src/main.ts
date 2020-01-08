import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import locale from './locale'
import plugins from './plugins'
import pkg from '../package.json'

import '@/styles/global.scss'
import 'vuetify/dist/vuetify.min.css' // See: public/index.html
import '@mdi/font/css/materialdesignicons.min.css' // See: public/index.html

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Vuetify)

const app = new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  }),
  router,
  store,
  i18n: locale,
  render: h => h(App)
}).$mount('#app')

plugins.install(app, router, store)

console.log(
  `%c ${pkg.name} %c v${pkg.version} %c Made with Vue.js and %c❤%c by ${pkg.author}.%c`,
  'color:#fff;background:linear-gradient(50deg,#965ed6 0,#bb00ff 100%);padding:5px 0;margin10px 0;',
  'background:#fadfa3;padding:5px 0;',
  'font-style:italic;',
  'color:red;',
  'font-style:italic;',
  ''
)
