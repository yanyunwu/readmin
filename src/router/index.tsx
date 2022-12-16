import React, { useMemo } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { pageManager } from '@/managers'
import { Root } from '@/layouts'
import { Login } from '@/pages/Login'
import { useMenu } from '@/hooks/useMenu'

export const Router: React.FC<React.PropsWithChildren> = () => {
  const menu = useMenu()

  /**
     * 菜单路由配置
    */
  const menuRoutes = useMemo<RouteObject[]>(() => {
    if (menu == null) return []

    /**
         * 动态根据远程的menu菜单计算routes
        */
    return menu.map((item) => {
      const Target = pageManager.getName(item.page)
      return {
        path: item.path,
        element: (Target != null) ? <Target /> : '你还没有为该页面添加组件呢~~~'
      }
    })
  }, [menu])

  /**
     * 全局路由配置
    */
  const routes = useMemo<RouteObject[]>(() => ([
    {
      path: '/',
      element: <Root />,
      children: menuRoutes
    },
    {
      path: '/login',
      element: <Login />
    }
  ]), [menuRoutes])

  const router = useMemo(() => {
    return createBrowserRouter(routes, { basename: '/' })
  }, [routes])

  return <RouterProvider router={router} />
}
