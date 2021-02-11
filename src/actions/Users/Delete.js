// import Axios from 'axios';
import Axios from '../../ultils/axiosClient';
import { DELETE_USER_REQUEST,DELETE_USER_SUCCESS, DELETE_USER_FAIL}  from '../../constants/User/Users';

export const deleteUser = (values) => {
  return (dispath) => {
    dispath({
      type: DELETE_USER_REQUEST
    })
    Axios.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${values}`)
    .then(result => {
      // console.log("ket qua: ", result.data)
      dispath({
        type: DELETE_USER_SUCCESS,
        payload: { data: result.data}
      })
    }
    )
    .catch(
      error => {
        dispath({
          type: DELETE_USER_FAIL,
          payload: { error: error.response.data, }
        })
      }
    )
  }
}