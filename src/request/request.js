import axios from 'axios';
import router from '@/router/index';
import Cookies from "js-cookie";

const service = axios.create({ timeout: 60000 });

service.interceptors.request.use(
    config => {
        const token = Cookies.get('token');
        if (token) config.headers.Authorization = `X-KILOGOD-AUTHORIZATION ${token}`;
        return config;
    },
    e => Promise.reject(e)
);

const err = error => {
    console.log(error)
    if(error.response.status == 401) {
        Cookies.remove('token');
        router.push('login');
    }
    if(error.response.status == 403) {
        Cookies.remove('token');
        // router.push('login');
    }
    return Promise.reject(error)
};

service.interceptors.response.use(response => {
    if(response.status == 200) return response.data;
    return Promise.reject(response);
}, err);

const axiosinstaller = {
    install(Vue) {
        Vue.prototype.$axios = Vue.prototype.$http = Vue.axios = service;
    }
};

export { axiosinstaller, service as axios};
