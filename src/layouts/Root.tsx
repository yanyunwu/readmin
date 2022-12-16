import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Layout } from './Layout'
import { QuestionOutlined } from '@ant-design/icons'
import { useMenu } from '@/hooks/useMenu'
import { iconManager } from '@/managers'

type MenuType = Required<MenuProps>['items'][number]

const getRoute = (path: string, icon: React.ReactNode, label: string, children?: MenuType[]) => {
  return {
    key: path,
    icon,
    label: <Link to={path} >{label}</Link>
  }
}

export const Root = () => {
  const menu = useMenu()

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

  const routes = menu?.map((item) => {
    const Icon = iconManager.getName(item.icon) ?? QuestionOutlined
    return getRoute(item.path, <Icon />, item.title)
  })

  return (
    <Layout routes={routes} />
  )
}
