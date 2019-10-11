import axios from "axios";
import $urls from "./urls.js";
import $public from "./public.js";
import $store from "@/store/index.js";

const TIMEOUT = 30000; //请求超时延迟

/**
 * 请求不需要loading时，参数内带hideLoading: true
 */

// 添加请求拦截器
axios.interceptors.request.use(
  config => {

    let params = (config.params || config.data);

    //默认开启loading
    if (!params.hideLoading) {
      $store.commit("showLoading");
    }

    return config;
  },
  error => {
    $store.commit("hideLoading");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    $store.commit("hideLoading");
    return response;
  },
  error => {
    $store.commit("hideLoading");
    return Promise.reject(error.response || error);
  }
);

/**
 * 异步请求
 * @param {String} method 请求方式
 * @param {String} url 请求地址
 * @param {Object} data 请求数据
 *
 * @returns {Promise}
 */

function request(method, url, _params) {
  //参数处理
  let params = _params || {};
  let ajaxUrl = $urls[url] || url;
  params["_"] = Math.random();

  let ajaxParams = {
    url: ajaxUrl,
    method: method,
    timeout: TIMEOUT,
    headers: {
      // Authorization: "Bearer" + " " + $public.getLocal("access_token"),
      // "X-Requested-With": "XMLHttpRequest"
    }
  };

  switch (method) {
    case "get":
    case "delete":
      ajaxParams.params = params;
      break;
    case "put":
    case "post":
    case "patch":
      ajaxParams.data = params;
      break;
    default:
      ajaxParams.data = params;
      break;
  }

  return new Promise((resolve, reject) => {
    axios(ajaxParams).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    });
  });
}

function get(url, data) {
  return request("get", url, data);
}

function post(url, data) {
  return request("post", url, data);
}

function put(url, data) {
  return request("put", url, data);
}

function patch(url, data) {
  return request("patch", url, data);
}

function del(url, data) {
  return request("delete", url, data);
}

export default {
  get,
  post,
  put,
  patch,
  del
};
