import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import scroll from './js/components/scoll.js'
import functions from './js/components/function.js'

var test = require('./views/test.vue')
var home = require('./App.vue')

Vue.use(VueRouter)


var router = new VueRouter({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: require('./views/test.vue').default
    },
    {
    	path: '/',
    	name: 'home',
    	component: require('./App.vue').default
    }
  ]
})

new Vue({
  el: '#app',
  router: router
})


