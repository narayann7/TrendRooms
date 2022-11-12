import axios from "axios";
import LocalStorage from "./localStorage";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
axiosClient.interceptors.request.use((config) => {
  const accessToken = LocalStorage.getAccessToken();
  if (accessToken) {
    config.headers.session = `Access ${accessToken}`;
  }
  const refreshToken = LocalStorage.getRefreshToken();
  if (refreshToken) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  }
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response.data.accessToken) {
    console.log("NEW------accessToken: ", response.data.accessToken);
    LocalStorage.setAccessToken(response.data.accessToken);
  }
  return response;
});

//All request will wait 4 seconds before timeout
axiosClient.defaults.timeout = 4000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
