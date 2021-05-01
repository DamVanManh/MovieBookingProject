import {
  GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL,
  GET_MOVIE_LISTBYDAY_REQUEST, GET_MOVIE_LISTBYDAY_SUCCESS, GET_MOVIE_LISTBYDAY_FAIL
} from './constants/Movie';

const initialState = {
  movieList: [],
  loadingMovieList: false,
  errorMovieList: null,
  movieDetail: null,

  movieListByDay: [],
  loadingMovieListByDay: false,
  errorMovieListByDay: null,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_REQUEST: {
      return { ...state, loadingMovieList: true, errorMovieList: null, movieDetail: null, };
    }

    case GET_MOVIE_LIST_SUCCESS: {
      return {
        ...state,
        movieList: action.payload.data,
        loadingMovieList: false
      };
    }

    case GET_MOVIE_LIST_FAIL: {
      return {
        ...state,
        errorMovieList: action.payload.errorMovieList,
        loadingMovieList: false,
      };
    }

    case GET_MOVIE_LISTBYDAY_REQUEST: {
      return { ...state, loadingMovieList: true, errorMovieList: null, movieDetail: null, };
    }

    case GET_MOVIE_LISTBYDAY_SUCCESS: {
      return {
        ...state,
        movieList: action.payload.data,
        loadingMovieList: false
      };
    }

    case GET_MOVIE_LISTBYDAY_FAIL: {
      return {
        ...state,
        errorMovieList: action.payload.errorMovieList,
        loadingMovieList: false,
      };
    }

    default:
      return state;
  }
}
export default movieReducer;