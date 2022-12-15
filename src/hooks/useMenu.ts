import React, { useContext } from 'react'
import { MenuRouterContext } from '../context'

export const useMenu = () => {
    const context = useContext(MenuRouterContext)
    return context
}