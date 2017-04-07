import Vue from 'vue'
import Router from 'vue-router'
import Park from '@/pages/park'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'park',
      component: Park
    }
  ]
})
