import React, { useMemo } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import pageManager from '@/pages/page-manager'
import { Root } from '@/layouts'
import { Login } from '@/pages/Login'
import { useMenu } from '@/hooks/useMenu'


export const Router: React.FC<React.PropsWithChildren> = () => {
    const menu = useMenu()

    /**
     * 菜单路由配置
    */
    const menuRoutes = useMemo<RouteObject[]>(() => {
        if (!menu) return []

        /**
         * 动态根据远程的menu菜单计算routes
        */
        return menu.map((item) => {
            const Target = pageManager.getPage(item.page)
            return {
                path: item.path,
                element: Target ? <Target /> : null
            }
        })
    }, [menu])

    /**
     * 全局路由配置
    */
    const routes = useMemo<RouteObject[]>(() => ([
        {
            path: "/",
            element: <Root />,
            children: menuRoutes
        },
        {
            path: "/login",
            element: <Login />
        }
    ]), [menuRoutes])

    const router = useMemo(() => {
        return createBrowserRouter(routes, { basename: '/admin' })
    }, [routes])
    
    return <RouterProvider router={router} />
}