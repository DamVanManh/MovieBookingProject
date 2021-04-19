import { GET_THEATERS_SHOWTIME_REQUEST, GET_THEATERS_SHOWTIME_SUCCESS, GET_THEATERS_SHOWTIME_FAIL } from './constants/Theater';

const initialState = {
  loading: false,
  error: null,
  theaterList: [],
}

const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATERS_SHOWTIME_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }

    case GET_THEATERS_SHOWTIME_SUCCESS: {
      return {
        ...state,
        theaterList: action.payload.data,
        loading: false
      }
    }

    case GET_THEATERS_SHOWTIME_FAIL: {
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