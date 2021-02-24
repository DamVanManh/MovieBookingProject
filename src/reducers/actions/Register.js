import Axios from 'axios';
import usersApi from '../../api/usersApi';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/Auth';
export const register = (user) => {
  return (dispath) => {
    dispath({
      type: LOGIN_REQUEST
    })

    usersApi.postDangKy(user)
      .then(result => {
        // lưu thông tin user xuống local storeage nếu đăng ký thành công
        localStorage.setItem("user", JSON.stringify(result.data));

        dispath({
          type: LOGIN_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: LOGIN_FAIL,
            payload: {
              error: error.response.data,
            }
          })
        }
      )
  }
}