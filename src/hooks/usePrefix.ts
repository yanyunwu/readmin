
export const usePrefix = (after?: string) => {
  const prefix = 'readmin'
  return `${prefix}-${after ?? ''}`
}
