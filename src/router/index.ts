import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw,_RouteRecordBase } from 'vue-router'
import Layout from '@/layout/index.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
 export const constantRoutes:RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {title: '用户登录', hidden: true},
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import ("@/views/home/index.vue"),
        name: 'Home',
        meta: { title: '个人主页', icon: 'UserFilled', affix: true }
      }
    ]
  },
  {
    path: '/hotel',
    component: Layout,
    redirect: '/hotel/search',
    name: 'Hotel',
    meta: {title: '酒店', icon: 'HomeFilled'},
    children: [
      {
        path: 'search',
        component: () => import('@/views/hotel/index.vue'),
        name: 'search',
        meta: { title: '酒店' }
      },
    ]
  },
  {
    path: '/plan',
    component: Layout,
    redirect: '/plan/searchfor',
    name: 'Plan',
    meta: {title: '航班', icon: 'Promotion'},
    children: [
      {
        path: 'searchfor',
        component: () => import('@/views/plan/index.vue'),
        name: 'searchfor',
        meta: { title: '航班' }
      },
    ]
  },
  {
    path: '/history',
    component: Layout,
    redirect: '/history/hotel',
    name: 'History',
    meta: {title: '历史查询', icon: 'Document'},
    children: [
      {
        path: 'list_hotel',
        component: () => import('@/views/history/hotel.vue'),
        name: 'list_hotel',
        meta: { title: '酒店预订历史' }
      },
      {
        path: 'list_plan',
        component: () => import('@/views/history/plan.vue'),
        name: 'list_plan',
        meta: { title: '航班预订历史' }
      },
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes:RouteRecordRaw[] = [

  // 404 page must be placed at the end !!!
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
    ...asyncRoutes
  ]
})

export const addRoutes = (routes:RouteRecordRaw[]) => {
  for(let i = 0; i < routes.length; i++) {
    router.addRoute(routes[i])
  }
}

export default router
