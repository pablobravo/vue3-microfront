import type { RouteLocationNormalized } from 'vue-router'

export const routerGuards = {
  testGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: Function
  ) {
    next()
  }
}
