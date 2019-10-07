import Vue from 'vue'
import Router from 'vue-router'
import AddSushi from '@/components/AddSushi'
import EditSushi from '@/components/EditSushi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Index.vue')
    },
    {
      path: '/add-sushi',
      name: 'AddSushi',
      component: AddSushi

    },
    {
      path: '/edit-sushi/:sushi_slug',
      name: 'EditSushi',
      component: () => import('./components/EditSushi.vue')

    }
  ]
})
