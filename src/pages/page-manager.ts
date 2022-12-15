import type { ReactNode } from 'react'
import * as AllPage from './index'

class PageManager {

    constructor(
        private map: Map<string, ReactNode>
    ) {
        for(const prop in AllPage) {
            // @ts-ignore
            this.definePage(prop, AllPage[prop] as ReactNode)
        }

        console.log(this.map);
        
    }

    definePage(pageName: string, page: ReactNode) {
        this.map.set(pageName, page)
    }

    getPage(pageName: string): ReactNode {
        return this.map.get(pageName) || null
    }

}


export default new PageManager(new Map())