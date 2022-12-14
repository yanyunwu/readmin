import React, { useState } from 'react';
import { Layout as AntdLayout, Menu, theme, MenuProps } from 'antd';
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntdLayout style={{height: '100%'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={prefix + '-logo'} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={props.routes}
        />
      </Sider>
      <AntdLayout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: prefix + '-trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};