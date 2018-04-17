import Vue from 'vue'
import Router from 'vue-router'

import PostList from './pages/post-list'
import PostDetail from './pages/post-detail'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'post-list' }
    },
    {
      name: 'post-list',
      path: '/posts',
      component: PostList
    },
    {
      name: 'post-detail',
      path: '/posts/:id',
      component: PostDetail
    }
  ]
})