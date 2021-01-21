// import Axios from 'axios';
import axiosClient from '../ultils/axiosClient';
import { GET_MOVIE_LIST_REQUEST,GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL}  from '../constants/Movie';

export const getMovieList = (values) => {
  return (dispath) => {
    dispath({
      type: GET_MOVIE_LIST_REQUEST
    })
    // Demo request cần access token mới get được
    // const { accessToken } = JSON.parse(localStorage.getItem('user') || {});
    // Axios.get("https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",{headers: {Authorization: `Bearer ${accessToken}`}})

    // Demo sử dụng axios interceptors: tự động thêm Authorization vào header nếu có accessToken
    axiosClient.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")

    // khi không dùng axios interceptors
    // Axios.get("https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    
    .then(result => {
      dispath({
        type: GET_MOVIE_LIST_SUCCESS,
        payload: { data: result.data }
      })
    }
    )
    .catch(
      error => {
        dispath({
          type: GET_MOVIE_LIST_FAIL,
          payload: { error: error.response.data, }
        })
      }
    )
  }
}