import axios from 'axios';

import {getToken, hasToken} from '@/utils/cookie'

const instance = axios.create({
    baseURL: '/api/',
    timeout: 5000,
});

instance.interceptors.request.use(function (config) {
    if (hasToken()) {
        config.headers['Authorization'] = getToken();
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance
