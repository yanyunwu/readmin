import React, { useEffect } from 'react'
import { notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

export const Home = () => {
  const [api, contextHolder] = notification.useNotification()
  useEffect(() => {
    api.success({
      message: '欢迎你再次回来！',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />
    })
  }, [])
  return (
    <div>home3123{contextHolder}</div>
  )
}
