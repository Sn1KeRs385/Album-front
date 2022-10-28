import { RouteRecordRaw } from 'vue-router'
import authentication from 'src/router/middleware/authentication'
import notAuthentication from 'src/router/middleware/not-authentication'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
    beforeEnter: authentication,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue'),
    beforeEnter: notAuthentication,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
