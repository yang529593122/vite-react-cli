/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/7 -04 - 07 -3:20 下午
 * @Description: 封装的 http 请求
 */

import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 120000 // 两分钟
axios.defaults.headers.common['Content-Type'] = 'application/json'
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    if (err.response.status === 401) {
      window.location.href = '/login'
    } else {
      return Promise.reject(err)
    }
  }
)

const getRequest = (url, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'GET',
      params,
      headers,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  }).catch((error) => {
    console.log(error)
    if (error.code === 401) {
      window.location.href = '/login'
    }
  })
}
const postRequest = (url, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'POST',
      data: qs.stringify(params),
      headers,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  }).catch((error) => {
    if (error.code === 401) {
      window.location.href = '/login'
    }
  })
}
const fileRequest = (url, data = {}, headers = {}) => {
  axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'multipart/form-data' },
      data,
      url,
    }
    axios(options).then(
      (response) => {
        if (response) {
          resolve(response.data)
        } else {
          reject(response)
        }
      },
      (err) => {
        reject(err)
      }
    )
  }).catch((error) => {
    console.log(error)
  })
}

export { getRequest, postRequest, fileRequest }
