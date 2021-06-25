import {
  GET_MOVIE_SHOWTIMES_REQUESS, GET_MOVIE_SHOWTIMES_SUCCESS, GET_MOVIE_SHOWTIMES_FAIL, RESET_MOVIEDETAIL_REDUCER,
  GET_COMMENT_REQUESS, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL,
  POST_COMMENT_REQUESS, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL,
  LIKE_COMMENT_REQUESS, LIKE_COMMENT_SUCCESS, LIKE_COMMENT_FAIL,
} from './constants/MovieDetail';

const initialState = {
  movieDetailShowtimes: [],
  loadingMovieDetailShowtimes: false,
  errorMovieDetailShowtimes: null,

  commentList: [],
  loadingCommentList: false,
  errorCommentList: null,

  postCommentObj: null,
  loadingPostComment: false,
  errorPostComment: null,

  likeCommentObj: {},
  loadingLikeComment: false,
  errorLikeComment: null,
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

    case GET_COMMENT_REQUESS: {
      return { ...state, loadingCommentList: true, errorCommentList: null, };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        commentList: action.payload.data,
        loadingCommentList: false
      };
    }
    case GET_COMMENT_FAIL: {
      return {
        ...state,
        errorCommentList: action.payload.error,
        loadingCommentList: false,
      };
    }

    case POST_COMMENT_REQUESS: {
      return { ...state, loadingPostComment: true, errorPostComment: null, };
    }
    case POST_COMMENT_SUCCESS: {
      return {
        ...state,
        postCommentObj: action.payload.data,
        loadingPostComment: false
      };
    }
    case POST_COMMENT_FAIL: {
      return {
        ...state,
        errorPostComment: action.payload.error,
        loadingPostComment: false,
      };
    }

    case LIKE_COMMENT_REQUESS: {
      return { ...state, loadingLikeComment: true, errorLikeComment: null, };
    }
    case LIKE_COMMENT_SUCCESS: {
      return {
        ...state,
        likeCommentObj: action.payload.data,
        loadingLikeComment: false
      };
    }
    case LIKE_COMMENT_FAIL: {
      return {
        ...state,
        errorLikeComment: action.payload.error,
        loadingLikeComment: false,
      };
    }

    default:
      return state;
  }
}
export default movieDetailReducer;


