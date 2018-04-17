import axios from 'axios'
import Vue from 'vue'

import router from './router'
import store from './store'

import App from './app'

import Style from './styles/main'

// Globals
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// Instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})