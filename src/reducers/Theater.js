import {
  GET_THEATERS_SHOWTIME_REQUEST, GET_THEATERS_SHOWTIME_SUCCESS, GET_THEATERS_SHOWTIME_FAIL,
  GET_THEATERS_SHOWTIME_REQUEST2, GET_THEATERS_SHOWTIME_SUCCESS2, GET_THEATERS_SHOWTIME_FAIL2
} from './constants/Theater';

const initialState = {
  loadingTheaterList: false,
  errorTheaterList: null,
  theaterList: [],

  loadingTheaterList2: false,
  errorTheaterList2: null,
  theaterList2: [],
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

    case GET_THEATERS_SHOWTIME_REQUEST2: {
      return {
        ...state, loadingTheaterList2: true, errorTheaterList2: null
      }
    }
    case GET_THEATERS_SHOWTIME_SUCCESS2: {
      return {
        ...state,
        theaterList2: action.payload.data,
        loadingTheaterList2: false
      }
    }
    case GET_THEATERS_SHOWTIME_FAIL2: {
      return {
        ...state,
        errorTheaterList2: action.payload.errorTheaterList2,
        loadingTheaterList2: false,
      };
    }

    default:
      return state;
  }
}
export default theaterReducer;