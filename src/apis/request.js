/*
 * Axios API 请求封装
 */
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiTimeOut = import.meta.env.VITE_API_TIME_OUT;

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: apiTimeOut,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error(`请求错误: ${error.response.status}`);
    } else {
      console.error(`网络错误: ${error.message}`);
    }
    return Promise.reject(error);
  },
);

export const apiGet = (url, params) => {
  return apiClient.get(url, { params });
};

export const apiPost = (url, data) => {
  return apiClient.post(url, data);
};
