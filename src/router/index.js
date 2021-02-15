import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(vueRouter);

export default new vueRouter({
  mode:'history',
  routes
})

