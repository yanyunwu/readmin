import React, { Fragment, useMemo, useState } from 'react'
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Modal, Radio, Select, Space, Switch, Table, Tag, TreeSelect } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { sleep } from '@/utils'
import { useRequest } from 'ahooks'
import { TableHeader } from './TableHeader'

// 模拟请求数据
const fetchData = async () => {
  const data: DataType[] = new Array(100).fill(0).map((item, index) => {
    return {
      key: String(index),
      name: '周小明' + index,
      age: 20,
      address: '中国北京市五道口职业技术学院',
      tags: ['帅气', '勇敢']
    }
  })
  await sleep(1500)
  return data
}

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  tags: string[]
}

export const TablePage = () => {
  const { loading, data } = useRequest(fetchData)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const columns = useMemo<ColumnsType<DataType>>(() => (
    [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.name.length - b.name.length
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
                <Fragment>
                  {tags.map((tag) => (
                      <Tag key={tag} color="green">
                        {tag.toUpperCase()}
                      </Tag>
                  )
                  )}
                </Fragment>
        )
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record) => (
                <Space size="middle">
                  <Button type="primary" size='small' onClick={showModal}>编辑</Button>
                  <Button type="primary" size='small' danger>删除</Button>
                </Space>
        )
      }
    ]
  ), [])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onFormLayoutChange = () => {

  }

  return (
    <div>
      <Table
      loading={loading}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      bordered
      title={() => <TableHeader />}
      footer={() => ''}
      style={{
        height: '100%',
        overflow: 'auto'
      }}
      />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: 'small' }}
      onValuesChange={onFormLayoutChange}
      size='small'
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou'
                }
              ]
            }
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
      </Modal>
    </div>
  )
}
