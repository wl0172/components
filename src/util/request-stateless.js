import axios from 'axios'
import { Message } from 'element-ui'
import config from '@/api/config'

const service = axios.create({
  baseURL: config.api,
  timeout: 15000
})

// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['Admin-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

//无状态码，直接返回数据。
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
