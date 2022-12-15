import React from 'react'
import { usePrefix } from '@/hooks'

import './styles.less'

export const Logo: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const prefix = usePrefix('layout-logo')

  return (
        <div className={prefix}>
            {!collapsed && 'XX后台管理'}
        </div>
  )
}
