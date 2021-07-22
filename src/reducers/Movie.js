import {
  GET_MOVIE_LIST_REQUEST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  POST_UPDATE_MOVIE_REQUEST,
  POST_UPDATE_MOVIE_SUCCESS,
  POST_UPDATE_MOVIE_FAIL,
  UPDATE_NONEIMAGE_MOVIE_REQUEST,
  UPDATE_NONEIMAGE_MOVIE_SUCCESS,
  UPDATE_NONEIMAGE_MOVIE_FAIL,
  GET_MOVIE_LIST_REQUEST2,
  GET_MOVIE_LIST_SUCCESS2,
  GET_MOVIE_LIST_FAIL2,
  ADD_MOVIE_UPLOAD_REQUEST,
  ADD_MOVIE_UPLOAD_SUCCESS,
  ADD_MOVIE_UPLOAD_FAIL,
  RESET_MOVIE_MANAGEMENT,
  SAVE_BEFOREINSTALLPROMPT_EVENT,
} from "./constants/Movie";

const initialState = {
  movieList: [],
  loadingMovieList: false,
  errorMovieList: null,
  movieDetail: null,

  movieList2: null,
  loadingMovieList2: false,
  errorMovieList2: null,

  successDeleteMovie: "",
  loadingDeleteMovie: false,
  errorDeleteMovie: null,

  successUpdateMovie: "",
  loadingUpdateMovie: false,
  errorUpdateMovie: null,

  successUpdateNoneImageMovie: "",
  loadingUpdateNoneImageMovie: false,
  errorUpdateNoneImageMovie: null,

  successAddUploadMovie: "",
  loadingAddUploadMovie: false,
  errorAddUploadMovie: null,

  saveBeforeinstallpromptEvent: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_REQUEST: {
      return {
        ...state,
        loadingMovieList: true,
        errorMovieList: null,
        movieDetail: null,
      };
    }
    case GET_MOVIE_LIST_SUCCESS: {
      return {
        ...state,
        movieList: action.payload.data,
        loadingMovieList: false,
      };
    }
    case GET_MOVIE_LIST_FAIL: {
      return {
        ...state,
        errorMovieList: action.payload.errorMovieList,
        loadingMovieList: false,
      };
    }

    case GET_MOVIE_LIST_REQUEST2: {
      return { ...state, loadingMovieList2: true, errorMovieList2: null };
    }
    case GET_MOVIE_LIST_SUCCESS2: {
      return {
        ...state,
        movieList2: action.payload.data,
        loadingMovieList2: false,
      };
    }
    case GET_MOVIE_LIST_FAIL2: {
      return {
        ...state,
        errorMovieList2: action.payload.errorMovieList,
        loadingMovieList2: false,
      };
    }

    case DELETE_MOVIE_REQUEST: {
      return { ...state, loadingDeleteMovie: true, errorDeleteMovie: null };
    }
    case DELETE_MOVIE_SUCCESS: {
      return {
        ...state,
        successDeleteMovie: action.payload.data,
        loadingDeleteMovie: false,
      };
    }
    case DELETE_MOVIE_FAIL: {
      return {
        ...state,
        errorDeleteMovie: action.payload.error,
        loadingDeleteMovie: false,
      };
    }

    case POST_UPDATE_MOVIE_REQUEST: {
      return { ...state, loadingUpdateMovie: true, errorUpdateMovie: null };
    }
    case POST_UPDATE_MOVIE_SUCCESS: {
      return {
        ...state,
        successUpdateMovie: action.payload.data,
        loadingUpdateMovie: false,
      };
    }
    case POST_UPDATE_MOVIE_FAIL: {
      return {
        ...state,
        errorUpdateMovie: action.payload.error,
        loadingUpdateMovie: false,
      };
    }

    case UPDATE_NONEIMAGE_MOVIE_REQUEST: {
      return {
        ...state,
        loadingUpdateNoneImageMovie: true,
        errorUpdateNoneImageMovie: null,
      };
    }
    case UPDATE_NONEIMAGE_MOVIE_SUCCESS: {
      return {
        ...state,
        successUpdateNoneImageMovie: action.payload.data,
        loadingUpdateNoneImageMovie: false,
      };
    }
    case UPDATE_NONEIMAGE_MOVIE_FAIL: {
      return {
        ...state,
        errorUpdateNoneImageMovie: action.payload.error,
        loadingUpdateNoneImageMovie: false,
      };
    }

    case ADD_MOVIE_UPLOAD_REQUEST: {
      return {
        ...state,
        loadingAddUploadMovie: true,
        errorAddUploadMovie: null,
      };
    }
    case ADD_MOVIE_UPLOAD_SUCCESS: {
      return {
        ...state,
        successAddUploadMovie: action.payload.data,
        loadingAddUploadMovie: false,
      };
    }
    case ADD_MOVIE_UPLOAD_FAIL: {
      return {
        ...state,
        errorAddUploadMovie: action.payload.error,
        loadingAddUploadMovie: false,
      };
    }

    case RESET_MOVIE_MANAGEMENT: {
      return {
        ...state,
        loadingMovieList2: false,
        errorMovieList2: null,

        successDeleteMovie: "",
        loadingDeleteMovie: false,
        errorDeleteMovie: null,

        successUpdateMovie: "",
        loadingUpdateMovie: false,
        errorUpdateMovie: null,

        successUpdateNoneImageMovie: "",
        loadingUpdateNoneImageMovie: false,
        errorUpdateNoneImageMovie: null,

        successAddUploadMovie: "",
        loadingAddUploadMovie: false,
        errorAddUploadMovie: null,
      };
    }

    case SAVE_BEFOREINSTALLPROMPT_EVENT: {
      state.saveBeforeinstallpromptEvent = action.payload.event;
      return state;
    }
    default:
      return state;
  }
};
export default movieReducer;
