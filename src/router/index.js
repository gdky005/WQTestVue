import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },

      ],
    },

  ]
})
