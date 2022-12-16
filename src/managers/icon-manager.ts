import type { JSXElementConstructor } from 'react'
import { Manager } from './manager'
import * as allIcon from '@ant-design/icons'

export const iconManager = new Manager()

for (const prop in allIcon) {
  // @ts-expect-error
  iconManager.setName(prop, allIcon[prop] as JSXElementConstructor<any>)
}
