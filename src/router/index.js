import Vue from 'vue'
import Router from 'vue-router'
import Share from '@/components/Share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Share',
      component: Share
    }
  ]
})
