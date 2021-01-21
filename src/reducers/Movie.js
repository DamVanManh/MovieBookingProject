import { GET_MOVIE_LIST_REQUEST,GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL}  from '../constants/Movie';

const initialState = {
  movieList: [],
  loading: false,
  error: null,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_REQUEST:{
      return {...state, loading: true, error: null};
    }

    case GET_MOVIE_LIST_SUCCESS:{
      return {...state,
        movieList: action.payload.data,
        loading: false};
    }

    case  GET_MOVIE_LIST_FAIL:{
      return {...state,
        error: action.payload.error,
        loading: false,};
    }
  
    default:
      return state;
  }
}
export default movieReducer;