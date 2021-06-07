import {
  GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, RESET_USER_LIST,
  UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
  ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL,
  SET_IS_EXIST_USER_MODIFIED,
  GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS, GET_INFO_USER_FAIL,
} from './constants/UsersManagement';
const initialState = {
  usersList: null,
  loadingUsersList: false,
  errorUsersList: null,

  successDelete: "",
  loadingDelete: false,
  errorDelete: null,

  successUpdateUser: null,
  loadingUpdateUser: false,
  errorUpdateUser: null,

  successAddUser: null,
  loadingAddUser: false,
  errorAddUser: null,

  isExistUserModified: false,

  successInfoUser: null,
  loadingInfoUser: false,
  errorInfoUser: null,
}

const usersManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST: {
      return { ...state, loadingUsersList: true, errorUsersList: null };
    }
    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        usersList: action.payload.data,
        loadingUsersList: false
      };
    }
    case GET_USER_LIST_FAIL: {
      return {
        ...state,
        errorUsersList: action.payload.error,
        loadingUsersList: false,
      };
    }

    case DELETE_USER_REQUEST: {
      return {
        ...state, loadingDelete: true, errorDelete: null, successDelete: "",
      }
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state, loadingDelete: false, successDelete: action.payload.data, errorDelete: null,
      }
    }
    case DELETE_USER_FAIL: {
      return {
        ...state, loadingDelete: false, errorDelete: action.payload.error, successDelete: "",
      }
    }
    case RESET_USER_LIST: {
      return {
        ...state,
        errorUsersList: null,

        successDelete: "",
        errorDelete: null,

        successUpdateUser: null,
        errorUpdateUser: null,
      }
    }

    case UPDATE_USER_REQUEST: {
      return {
        ...state, loadingUpdateUser: true, errorUpdateUser: null, successUpdateUser: null
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state, loadingUpdateUser: false, successUpdateUser: action.payload.data, errorUpdateUser: null
      }
    }
    case UPDATE_USER_FAIL: {
      return {
        ...state, loadingUpdateUser: false, errorUpdateUser: action.payload.error, successUpdateUser: null
      }
    }

    case ADD_USER_REQUEST: {
      return {
        ...state, loadingAddUser: true, errorAddUser: null, successAddUser: null
      }
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state, loadingAddUser: false, successAddUser: action.payload.data, errorAddUser: null
      }
    }
    case ADD_USER_FAIL: {
      return {
        ...state, loadingAddUser: false, errorAddUser: action.payload.error, successAddUser: null
      }
    }

    case SET_IS_EXIST_USER_MODIFIED: {
      state.isExistUserModified = action.payload.isExistUserModified
      return state
    }

    case GET_INFO_USER_REQUEST: {
      return { ...state, loadingInfoUser: true, errorInfoUser: null };
    }
    case GET_INFO_USER_SUCCESS: {
      return {
        ...state,
        successInfoUser: action.payload.data,
        loadingInfoUser: false
      };
    }
    case GET_INFO_USER_FAIL: {
      return {
        ...state,
        errorInfoUser: action.payload.error,
        loadingInfoUser: false,
      };
    }
    default:
      return state;
  }
}
export default usersManagementReducer;