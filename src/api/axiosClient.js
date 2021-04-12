import axios from "axios";
import { BASE_URL } from '../constants/config';
const axiosClient = axios.create({
  baseURL: BASE_URL,
})
axiosClient.interceptors.request.use((config) => { //tất cả request đều phải qua đây 
  const user = localStorage.getItem('user');
  if (user) { // nếu có đăng nhập thì thực hiện
    const { accessToken } = JSON.parse(user)
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})

export default axiosClient;
