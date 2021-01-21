import axios from "axios";
const axiosClient = axios.create({
  baseURL: 'https://movie0706.cybersoft.edu.vn/api',
})
axiosClient.interceptors.request.use((config) => { //tất cả request đều phải qua đây 
  // const { accessToken } = JSON.parse(localStorage.getItem('user') || {})
  // if (accessToken) { // nếu có đăng nhập thì thực hiện
  //   config.headers.common.Authorization = `Bearer ${accessToken}`;
  // }

  // tự động thêm Authorization vào header nếu có accessToken
  const user = localStorage.getItem('user');
  if (user) { // nếu có đăng nhập thì thực hiện
    const { accessToken } = JSON.parse(user)
    config.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})
export default axiosClient;