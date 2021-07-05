import Axios from '../../ultils/axiosClient';
import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../constants/Users';

export const deleteUser = (values) => {
  return (dispath) => {
    dispath({
      type: DELETE_USER_REQUEST
    })
    Axios.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${values}`)
      .then(result => {
        dispath({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: DELETE_USER_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}