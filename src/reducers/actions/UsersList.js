import usersApi from '../../api/usersApi';
import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL } from '../constants/Users';

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

export const deleteUser = (taiKhoanUser) => {
  console.log(taiKhoanUser)
  return (dispath) => {
    dispath({
      type: DELETE_USER_REQUEST
    })
    usersApi.deleteXoaNguoiDung(taiKhoanUser)
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
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const putUserUpdate = (user) => {

  return (dispath) => {
    dispath({
      type: UPDATE_USER_REQUEST
    })
    usersApi.editTaiKhoan(user)
      .then(result => {
        // console.log(result)
        dispath({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          // console.log(error)
          dispath({
            type: UPDATE_USER_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const addUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_REQUEST
    })
    usersApi.postThemNguoiDung(user)
      .then(result => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_USER_FAIL,
          payload: { error: error.response.data }
        })
      })

  }
}