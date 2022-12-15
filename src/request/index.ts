
export const getMenu = async () => {
  const res = await fetch('/mock/menu.json')
  return await res.json()
}
