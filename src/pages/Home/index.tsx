import { useRequest } from 'ahooks'
import { getMenu } from '@/request'


export const Home = () => {
  const { data } = useRequest(getMenu)
  console.log(data);
  

  return (
    <div>home</div>
  )
}