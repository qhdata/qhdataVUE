import axios from 'axios';
import qs from 'qs';
// import { Message } from 'element-ui';
// import router from '../router';

axios.interceptors.request.use(config => config, error => Promise.reject(error));

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response));

const FN = {
    checkStatus(response) {
        if (response && (response.status === 200 || response.status === 403)) {
            return response;
        }
        // 异常状态 错误/异常 扶正
        return {
            data: {
                code: -404,
                msg: response.statusText,
                data: response.statusText,
            },
        };
    },
    checkCode(res, opt) {
        // 状态 code 异常(包括网络错误, 服务器错误, 后端抛出的错误), 可以弹出一个错误提示
        const { code } = res.data;
        if (code !== 200) {
            if (code === -404) {
                alert(res.data.msg);
            } else if (code === 403) {
                // 未登录
                alert(res.data.msg);
                // setTimeout(() => {
                //     router.push('/login');
                // }, 500);
            } else if (!opt || !opt.noError) {
                // Message.error(res.data.msg);
                alert(res.data.msg);
            }
        }
        return res.data;
    },
};

export default {
    post(url, data, config, opt) {
        config = config || {};
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            ...config,
        })
            .then(response => FN.checkStatus(response))
            .then(res => FN.checkCode(res, opt));
    },
    get(url, params, config, opt) {
        config = config || {};
        return axios({
            method: 'get',
            url,
            params,
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            ...config,
        })
            .then(response => FN.checkStatus(response))
            .then(res => FN.checkCode(res, opt));
    },
    delete(url, params, config, opt) {
        config = config || {};
        return axios({
            method: 'delete',
            url,
            params,
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            ...config,
        })
            .then(response => FN.checkStatus(response))
            .then(res => FN.checkCode(res, opt));
    },
    put(url, data, config, opt) {
        config = config || {};
        return axios({
            method: 'put',
            url,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            ...config,
        })
            .then(response => FN.checkStatus(response))
            .then(res => FN.checkCode(res, opt));
    },
    patch(url, data, config, opt) {
        config = config || {};
        return axios({
            method: 'patch',
            url,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            ...config,
        })
            .then(response => FN.checkStatus(response))
            .then(res => FN.checkCode(res, opt));
    },
    all(reqs) {
        return axios.all(reqs)
            .then(res => res);
    },
};

