import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL } from './constants/Users';
const initialState = {
  usersList: [],
  loading: false,
  error: null,

  userUpdate: {}

}

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST: {
      return { ...state, loading: true, error: null };
    }

    case GET_USER_LIST_SUCCESS: {
      return {
        ...state,
        usersList: action.payload.data,
        loading: false
      };
    }

    case GET_USER_LIST_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case DELETE_USER_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state, loading: false,
      }
    }
    case DELETE_USER_FAIL: {
      return {
        ...state, loading: false, error: action.payload.error
      }
    }

    case UPDATE_USER_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state, loading: false, userUpdate: action.payload.data
      }
    }

    case UPDATE_USER_FAIL: {
      return {
        ...state, loading: false, error: action.payload.error
      }
    }

    case ADD_USER_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }

    case ADD_USER_SUCCESS: {
      return {
        ...state, loading: false
      }
    }

    case ADD_USER_FAIL: {
      return {
        ...state, loading: false
      }
    }
    default:
      return state;
  }
}
export default usersList;