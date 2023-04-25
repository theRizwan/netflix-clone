import axios from 'axios';    

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = 'https://api.themoviedb.org/3';

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};