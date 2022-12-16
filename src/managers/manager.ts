import type { JSXElementConstructor } from 'react'

type JSX = JSXElementConstructor<any>

/**
 * 用来字符串和构造函数做映射
*/
export class Manager {
  private readonly map: Map<string, JSX>
  constructor (data?: Array<[string, JSX]>) {
    this.map = new Map(data)
  }

  setName (name: string, component: JSX) {
    this.map.set(name, component)
  }

  getName (name: string): JSX | undefined {
    return this.map.get(name)
  }
}
