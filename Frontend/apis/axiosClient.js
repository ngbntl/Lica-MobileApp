import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.5:3000",
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async function (config) {
  config.headers = {
    Authorization: "",
    Accept: "application/json",
    ...config.headers,
  };

  config.data;
  return config;
});

axiosClient.interceptors.response.use(
  function (res) {
    if (res.data && res.status === 200) {
      return res.data;
    }
    throw new Error("Error");
  },
  function (error) {
    console.log(`Error api ${JSON.stringify(error)}`);
    throw new Error(error.response);
  }
);

export default axiosClient;
