import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import config from '@/api/config'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: config.api,
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //     //   config.headers['Admin-Token'] = getToken()
    //     // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.state != 1) {
      Message({
        message: res.message || res.msg || '请求失败，请联系管理员',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
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
