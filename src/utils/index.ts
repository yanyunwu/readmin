
export const sleep = async (time: number) => {
  return await new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
