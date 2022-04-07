/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/6 -04 - 06 -3:47 下午
 * @Description: 路由
 */

import React, { lazy, Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Loading from '@components/Loading'

const routes = [
  {
    path: '/',
    redirectTo: '/login',
  },
  {
    path: '/app',
    component: lazy(() => import('@layout')),
    children: [
      {
        path: 'user',
        component: lazy(() => import('@views/Home')),
      },
      {
        path: 'info',
        component: lazy(() => import('@views/About')),
      },
      {
        path: 'about',
        component: lazy(() => import('@views/About')),
      },
    ],
  },
  {
    path: '/login',
    component: lazy(() => import('@views/Login')),
  },
  {
    path: '*',
    component: lazy(() => import('@views/NoFound')),
  },
]
const changeRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      item.children = changeRouter(item.children)
    }
    if (item.component) {
      item.element = (
        <Suspense fallback={<Loading />}>
          <item.component />
        </Suspense>
      )
    }
    if (item.redirectTo) {
      item.element = <Navigate to={item.redirectTo} />
    }
    delete item.component
    return item
  })
}
const Router = () => useRoutes(changeRouter(routes))

export default Router
