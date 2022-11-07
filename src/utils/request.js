//网络请求的二次封装
import axios from "axios";


const service = axios.create({
  baseURL: '/api', // 设置接口基准地址
  timeout: 5000 // 设置请求超时
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

export default service;