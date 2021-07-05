import usersApi from '../../api/usersApi';
import {
  GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, RESET_USER_LIST,
  UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
  ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
  SET_IS_EXIST_USER_MODIFIED,
  GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS, GET_INFO_USER_FAIL,
} from '../constants/UsersManagement';

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_LIST_REQUEST
    })
    usersApi.getDanhSachNguoiDung()
      .then(result => {
        dispatch({
          type: GET_USER_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_USER_LIST_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const deleteUser = (taiKhoanUser) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER_REQUEST
    })
    usersApi.deleteUser(taiKhoanUser)
      .then(result => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: DELETE_USER_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const resetUserList = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_USER_LIST
    })
  }
}

export const putUserUpdate = (user) => {

  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST
    })
    usersApi.editTaiKhoan(user)
      .then(result => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: UPDATE_USER_FAIL,
            payload: { error: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const postAddUser = (user) => {
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
          payload: { error: error.response?.data ? error.response.data : error.message, }
        })
      })
  }
}

export const setStatusIsExistUserModified = (isExistUserModified) => {
  return (dispatch) => {
    dispatch({
      type: SET_IS_EXIST_USER_MODIFIED,
      payload: { isExistUserModified }
    })
  }
}

export const getInfoUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: GET_INFO_USER_REQUEST
    })
    usersApi.getThongTinTaiKhoan(user)
      .then(result => {
        dispatch({
          type: GET_INFO_USER_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_INFO_USER_FAIL,
            payload: {
              error: error.response?.data ? error.response.data : error.message,
            }
          })
        }
      )
  }
}