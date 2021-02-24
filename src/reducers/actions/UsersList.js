import usersApi from '../../api/usersApi';
import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL } from '../constants/Users';

export const getUsersList = (values) => {
  return (dispath) => {
    dispath({
      type: GET_USER_LIST_REQUEST
    })
    usersApi.getDanhSachNguoiDung()
      .then(result => {
        // console.log("ket qua: ", result.data)
        dispath({
          type: GET_USER_LIST_SUCCESS,
          payload: { data: result.data }
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