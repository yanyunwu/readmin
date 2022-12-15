import React from 'react'
import { useRequest } from 'ahooks'
import { MenuRouterContext } from '../context'
import { getMenu } from '@/request'

export const MenuRouter: React.FC<React.PropsWithChildren> = (props) => {
  const { loading, data } = useRequest(getMenu)

  /**
     * 这控制等菜单加载完成后再渲染，可以自定义一些动画
    */

  return (
        <MenuRouterContext.Provider value={data}>
            {!loading && props.children}
        </MenuRouterContext.Provider>
  )
}
