import axios from "axios";
axios.defaults.withCredentials = true;
const axiosPrivet = axios.create({ baseURL: "https://blooming-scrubland-82321.herokuapp.com/" });

axiosPrivet.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivet.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosPrivet;
