import usersApi from "../../api/usersApi";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/Auth';
export const login = (user) => {
  return (dispath) => {
    dispath({
      type: LOGIN_REQUEST
    })
    usersApi.postDangNhap(user)
      .then(result => {
        // lưu thông tin user xuống local storeage
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