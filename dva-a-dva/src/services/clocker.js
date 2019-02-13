import request from '../utils/request';

export function queryUA(args) {
  console.log(args);

  return request("http://httpbin.org/user-agent");
}

export function promiseAll(args) {
  return Promise.all([
    request("http://httpbin.org/user-agent"),
    request("http://httpbin.org/user-agent"),
    Promise.resolve(args)
  ])
}