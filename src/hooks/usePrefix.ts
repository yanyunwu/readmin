import React from "react"

export const usePrefix = (after?: string) => {
  const prefix = 'rtest'
  return `${prefix}-${after || ''}`
}