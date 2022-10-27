import axios from "axios";
import LocalStorage from "./local_storage";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${LocalStorage.getRefreshToken()}`,
};

//All request will wait 4 seconds before timeout
axiosClient.defaults.timeout = 4000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
