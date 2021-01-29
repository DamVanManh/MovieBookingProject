import Axios from 'axios';
import { GET_USER_LIST_REQUEST,GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL}  from '../../constants/User/Users';

export const getUsersList = (values) => {
  return (dispath) => {
    dispath({
      type: GET_USER_LIST_REQUEST
    })
    Axios.get("https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
    .then(result => {
      // console.log("ket qua: ", result.data)
      dispath({
        type: GET_USER_LIST_SUCCESS,
        payload: { data: result.data}
      })
    }
    )
    .catch(
      error => {
        dispath({
          type: GET_USER_LIST_FAIL,
          payload: { error: error.response.data, }
        })
      }
    )
  }
}