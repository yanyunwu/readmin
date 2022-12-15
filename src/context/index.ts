import React, { createContext } from 'react'

export interface IMenuRouterContext {

}

export const MenuRouterContext = createContext<IMenuRouterContext | null>(null)