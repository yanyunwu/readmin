import type { JSXElementConstructor } from 'react'
import { Manager } from './manager'
import * as allPage from '@/pages'

const pageManager = new Manager()

for (const prop in allPage) {
  // @ts-expect-error
  pageManager.setName(prop, allPage[prop] as JSXElementConstructor<any>)
}

export { pageManager }
