import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout } from '../../layout'

export const Home = () => {
  return (
    <Layout routes={[
      {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
      },
      {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
      },
      {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
        children: [
          {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          }
        ]
      },
    ]}/>
  )
}