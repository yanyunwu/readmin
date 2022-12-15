import React from 'react'
import { MenuRouter } from '@/components/MenuRouter'
import { Router } from '@/router'

import '@/styles/App.css'

export const App: React.FC = () => {
  return (
    <div className="App">
      <MenuRouter>
        <Router />
      </MenuRouter>
    </div>
  )
}
