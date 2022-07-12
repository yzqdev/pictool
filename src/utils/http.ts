// http.ts

import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5400"
    : "https://pictool-server.vercel.app/",
  timeout: 6000,
});

// http.defaults.withCredentials = true;
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log("requestUrl==", config.url);

    config.headers["Content-Type"] = "application/json;charset=UTF-8";

    console.log(config);
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器

http.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("进入response");
    let data = response.data;
    return data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
// @ts-ignore
http.postForm = (url: string, data: any) => {
  return http.post(url, qs.stringify(data), {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};
export default http;
