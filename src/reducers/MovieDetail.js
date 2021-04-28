import { GET_MOVIE_SHOWTIMES_REQUESS, GET_MOVIE_SHOWTIMES_SUCCESS, GET_MOVIE_SHOWTIMES_FAIL, RESET_MOVIEDETAIL_REDUCER } from './constants/MovieDetail';

const initialState = {
  movieDetailShowtimes: [],
  loadingMovieDetailShowtimes: false,
  errorMovieDetailShowtimes: null,
}

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_SHOWTIMES_REQUESS: {
      return { ...state, loadingMovieDetailShowtimes: true, errorMovieDetailShowtimes: null, };
    }

    case GET_MOVIE_SHOWTIMES_SUCCESS: {
      return {
        ...state,
        movieDetailShowtimes: action.payload.data,
        loadingMovieDetailShowtimes: false
      };
    }

    case GET_MOVIE_SHOWTIMES_FAIL: {
      return {
        ...state,
        errorMovieDetailShowtimes: action.payload.error,
        loadingMovieDetailShowtimes: false,
      };
    }

    case RESET_MOVIEDETAIL_REDUCER: {
      return {
        ...state,
        movieDetailShowtimes: [],
        errorMovieDetailShowtimes: null,
        loadingMovieDetailShowtimes: false,
      };
    }

    default:
      return state;
  }
}
export default movieDetailReducer;