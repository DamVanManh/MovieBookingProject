import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL, GET_MOVIE_DETAIL_SUCCESS, GET_ROOM_TICKET_SUCCESS } from './constants/Movie';

const initialState = {
  movieList: [],
  loading: false,
  error: null,

  movieDetail: null,
  seatList: []
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_REQUEST: {
      return { ...state, loading: true, error: null, movieDetail: null, };
    }

    case GET_MOVIE_LIST_SUCCESS: {
      return {
        ...state,
        movieList: action.payload.data,
        loading: false
      };
    }

    case GET_MOVIE_LIST_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case GET_MOVIE_DETAIL_SUCCESS: {
      return {
        ...state,
        movieDetail: action.payload.data,
        loading: false
      }
    }

    case GET_ROOM_TICKET_SUCCESS: {
      return {
        ...state,
        seatList: action.payload.data,
        loading: false
      }
    }

    default:
      return state;
  }
}
export default movieReducer;