import axios from 'axios';
// import * as iakit from 'iakit';

const _instance = axios.create({
    timeout: 5000
});

_instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log(error);
        return Promise.reject({
            stat: 'fail',
            msg: '服务器错误！'
        });
    }
);

export const getData = (url, params = {}) => _instance.get(url, { params });

/*
export const postData = (url, params = {}) => _instance.post(url, params);
*/

export {
    _instance as $http
};
