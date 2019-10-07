import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddSushi from '@/components/AddSushi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ './components/Index.vue')
    },
    {
      path: '/add-sushi',
      name: 'AddSushi',
      component: () => import(/* webpackChunkName: "about" */ './components/AddSushi.vue')

    }
  ]
})
