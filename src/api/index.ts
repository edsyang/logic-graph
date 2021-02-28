import * as antd from 'antd';
import i18next from 'i18next';

const axios = require('axios');
const { message } = antd;

// 请求前缀
const prefix = (window.pageConfig || {}).prefix || window.location.origin || '';

// 请求适配
axios.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  message.error({})
})

// 相应适配
axios.interceptors.response.use((config: any) => {
  return config;
}, (error: any) => {
  message.error({})
})