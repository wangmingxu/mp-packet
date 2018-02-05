import { getCurrentPageUrlWithArgs } from './route'
import promisify from './promisify'
import { requestBaseUrl } from '../constant'

const requestPromise = params => {
  return new Promise((resolve, reject) => {
    wx.request(
      Object.assign(
        {
          success({ data }) {
            console.log(data)
            // 0成功,6余额不足,7签名授权过期
            switch (data.status) {
              case 0:
                resolve(data)
                break
              case 6:
                reject(data)
                break
              case 7:
                const url = getCurrentPageUrlWithArgs().replace('pages/','')
                promisify(wx.getStorage, { key: 'signInfo' })
                  .then(({ data: signInfo }) => {
                    return requestPromise({
                      url: `${requestBaseUrl}/refurbishUserSign`,
                      data: signInfo
                    })
                  })
                  .then(({ data: signInfo }) => {
                    return promisify(wx.setStorage, {
                      key: 'signInfo',
                      data: signInfo
                    })
                  })
                  .then(() => {
                    wx.reLaunch({ url })
                  })
                reject(data)
                break
              default:
                wx.showModal({
                  title: '提示',
                  content: data.msg,
                  showCancel: false
                })
                reject(data)
            }
          },
          fail(ret) {
            wx.showModal({
              title: '提示',
              content: JSON.stringify(ret),
              showCancel: false
            })
            reject(ret)
          }
        },
        params
      )
    )
  })
}

export default requestPromise
