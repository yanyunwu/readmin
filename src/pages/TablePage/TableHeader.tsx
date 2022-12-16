import React from 'react'
import { Button, Space } from 'antd'
import { green } from '@ant-design/colors'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

export const TableHeader = () => {
  return (
    <div>
      <Space size="middle">
        <Button type="primary" style={{ backgroundColor: green.primary }} icon={<PlusOutlined />}>新增</Button>
        <Button type="primary" danger icon={<DeleteOutlined />}>删除</Button>
      </Space>
    </div>
  )
}
