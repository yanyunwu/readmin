import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Breadcrumb, Layout as AntdLayout, Menu, MenuProps } from 'antd'
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import { usePrefix } from '@/hooks/usePrefix'
import { Logo } from '../components'

import './styles.less'

const { Header, Sider, Content } = AntdLayout

export interface LayoutProps {
  routes?: MenuProps['items']
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const prefix = usePrefix('layout')
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <AntdLayout className={prefix}>
      <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" onBreakpoint={(b) => setCollapsed(b)}>
        <Logo collapsed={collapsed}/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={props.routes}
        />
      </Sider>
      <AntdLayout>
        <Header className={prefix + '-header'}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: prefix + '-trigger',
            onClick: () => setCollapsed(!collapsed)
          })}

        <Breadcrumb>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content className={prefix + '-content'}>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}
