import type { RouteRecordRaw } from 'vue-router'
import { routerGuards } from '@/router/guards'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/containers/home/HomeContainer.vue'),
    beforeEnter: routerGuards.testGuard
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/containers/error/ErrorContainer.vue')
  }
]

export default routes
