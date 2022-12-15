import React, { useMemo } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import pageManager from '@/pages/page-manager'
import { Root } from '@/layouts'
import { Login } from '@/pages/Login'

import { Home } from '@/pages/Home'
import { TestPage } from '@/pages/TestPage'
import { useMenu } from '@/hooks/useMenu'


export const Router: React.FC<React.PropsWithChildren> = () => {
    const menu = useMenu()

    /**
     * 菜单路由配置
    */
    const menuRoutes = useMemo<RouteObject[]>(() => {
        if (!menu) return []

        return [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/test",
                element: <TestPage />
            }
        ]
    }, [menu])

    /**
     * 基础路由配置
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