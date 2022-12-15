import type { JSXElementConstructor } from 'react'
import * as AllPage from './index'

class PageManager {
  constructor (
    private readonly map: Map<string, JSXElementConstructor<any>>
  ) {
    for (const prop in AllPage) {
      // @ts-expect-error
      this.definePage(prop, AllPage[prop] as JSXElementConstructor<any>)
    }

    console.log(this.map)
  }

  definePage (pageName: string, page: JSXElementConstructor<any>) {
    this.map.set(pageName, page)
  }

  getPage (pageName: string): JSXElementConstructor<any> | null {
    return (this.map.get(pageName) != null) || null
  }
}

export default new PageManager(new Map())
