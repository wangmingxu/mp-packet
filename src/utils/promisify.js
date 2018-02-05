export default (func, options) => {
  return new Promise((resolve, reject) => {
    func(
      Object.assign(
        {
          success(ret) {
            console.log(ret)
            resolve(ret)
          },
          fail(ret) {
            console.log(ret)
            reject(ret)
          }
        },
        options
      )
    )
  })
}

export const sleep = milsec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milsec)
  })
}