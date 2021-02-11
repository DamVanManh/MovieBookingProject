// Auth Reducer: Phục vụ cho đăng nhập, đăng ký, lưu trữ thông tin user đăng nhập

import {LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT}  from '../constants/Auth';

// lấy thông tin user đã lưu trong local trước đó nếu refesh lại trang hoặc tắt trang
// cú pháp ? để tránh trường hợp JSON.parse(null sẽ gây lỗi)
const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
const initialState = {
  currentUser: currentUser,
  loading: false,
  error: null,
}

const authReducer = (state = initialState, action) => { 
  
  switch (action.type) {

    case LOGIN_REQUEST:{
      return {...state, loading: true, error: null}; // error: null trong trường error đang báo lỗi, nhấn đăng nhập lại thì cần reset lại không báo lỗi nữa
    }

    case LOGIN_SUCCESS:{
      return {...state,
        currentUser: action.payload.data,
        loading: false};
    }

    case  LOGIN_FAIL:{
      return {...state,
        error: action.payload.error,
        loading: false,};
    }

    case  LOGOUT:{
      localStorage.removeItem("user");
      return {...state,
        currentUser: null,
        error: null,
        loading: null,};
    }
      
    default:
      return state;
  }
}
export default authReducer;