import Vue from 'vue'
import VueRouter from 'vue-router'
import EyeView from '../views/EyeView.vue'
import CherView from '@/views/CherView.vue'
import ResultView from '@/views/ResultView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: CherView
  },
  {
    path: '/search',
    name: 'result',
    component: ResultView
  },
  {
    path: '/news',
    name: 'news',
    component: EyeView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
