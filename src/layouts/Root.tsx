import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Layout } from './Layout'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { MenuRouterContext } from '@/context'

type MenuType = Required<MenuProps>['items'][number]

const getRoute = (path: string, icon: React.ReactNode, label: string, children?: MenuType[]) => {
    return {
        key: path,
        icon: icon,
        label: <Link to={path} >{label}</Link>
    }
}

export const Root = () => {
    /**
     * 路由守卫可以在这里做
    */
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home', { replace: true })
        }
    }, [location])

    const routes = [
        getRoute('/', <UserOutlined />, '首页'),
        getRoute('/home', <UploadOutlined />, '主页'),
        getRoute('/test', <VideoCameraOutlined />, '测试')
    ]

    return (
        <MenuRouterContext.Provider value={1}>
            <Layout routes={routes} />
        </MenuRouterContext.Provider>
    )
}