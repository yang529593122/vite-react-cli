/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/6 -04 - 06 -4:31 下午
 * @Description: 全局布局组件 只有登录状态 才会使用
 */

import React from 'react'
import { Layout, Menu } from 'antd'
import { Outlet, Link } from 'react-router-dom'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import UserMenu from '@components/UserMenu'
const { Header, Sider, Content } = Layout

const Index = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/app/user">用户</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/app/info">信息</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <UserMenu />
        </Header>
        <Content style={{ padding: '20px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Index
