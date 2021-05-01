import { GET_THEATERS_SHOWTIME_REQUEST, GET_THEATERS_SHOWTIME_SUCCESS, GET_THEATERS_SHOWTIME_FAIL } from './constants/Theater';

const initialState = {
  loadingTheaterList: false,
  errorTheaterList: null,
  theaterList: [],
}

const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATERS_SHOWTIME_REQUEST: {
      return {
        ...state, loadingTheaterList: true, errorTheaterList: null
      }
    }

    case GET_THEATERS_SHOWTIME_SUCCESS: {
      return {
        ...state,
        theaterList: action.payload.data,
        loadingTheaterList: false
      }
    }

    case GET_THEATERS_SHOWTIME_FAIL: {
      return {
        ...state,
        errorTheaterList: action.payload.errorTheaterList,
        loadingTheaterList: false,
      };
    }

    default:
      return state;
  }
}
export default theaterReducer;