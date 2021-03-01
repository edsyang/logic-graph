import * as antd from 'antd';
import i18next from 'i18next';

const axios = require('axios');

const { message } = antd;

// 请求前缀
const prefix: string = (window.pageConfig || {}).prefix || '';

// 请求适配
axios.interceptors.request.use((config: any) => {
  console.log(i18next);
  return config;
}, (error: any) => {
  message.error(`Error: ${error}`);
});

// 相应适配
axios.interceptors.response.use((config: any) => {
  console.log(prefix);
  return config;
}, (error: any) => {
  message.error(`Error: ${error}`);
});
