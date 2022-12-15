import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout, Menu, MenuProps } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { usePrefix } from '@/hooks/usePrefix'

import './styles.less'

const { Header, Sider, Content } = AntdLayout;

export interface LayoutProps {
  routes?: MenuProps['items']
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const prefix = usePrefix('layout')
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout className={prefix}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={prefix + '-logo'} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={props.routes}
        />
      </Sider>
      <AntdLayout>
        <Header className={prefix + '-header'}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: prefix + '-trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content className={prefix + '-content'}>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};