import { createContext } from 'react'

export interface Menu {
  path: string
  title: string
  icon: string
  page: string
  children?: Menu[]
}
export type IMenuRouterContext = Menu[]

export const MenuRouterContext = createContext<IMenuRouterContext | null>(null)
