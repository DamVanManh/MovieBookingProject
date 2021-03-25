import { GET_THEATERS_SUCCESS, GET_THEATERS_REQUESS, GET_THEATERS_FAIL } from './constants/Movie';

const initialState = {
  loading: false,
  error: null,
  theaterList: [],
}

const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATERS_REQUESS: {
      return {
        ...state, loading: true, error: null
      }
    }

    case GET_THEATERS_SUCCESS: {
      return {
        ...state,
        theaterList: action.payload.data,
        loading: false
      }
    }

    case GET_THEATERS_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    default:
      return state;
  }
}
export default theaterReducer;