import moviesApi from '../../api/moviesApi';

import {
  GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL,
  DELETE_MOVIE_REQUEST, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL,
  POST_UPDATE_MOVIE_REQUEST, POST_UPDATE_MOVIE_SUCCESS, POST_UPDATE_MOVIE_FAIL,
  UPDATE_NONEIMAGE_MOVIE_REQUEST, UPDATE_NONEIMAGE_MOVIE_SUCCESS, UPDATE_NONEIMAGE_MOVIE_FAIL,
  GET_MOVIE_LIST_REQUEST2, GET_MOVIE_LIST_SUCCESS2, GET_MOVIE_LIST_FAIL2,
  ADD_MOVIE_UPLOAD_REQUEST, ADD_MOVIE_UPLOAD_SUCCESS, ADD_MOVIE_UPLOAD_FAIL,
  RESET_MOVIE_MANAGEMENT,
} from '../constants/Movie';

export const getMovieList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_LIST_REQUEST
    })
    moviesApi.getDanhSachPhim()
      .then(result => {
        dispatch({
          type: GET_MOVIE_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_MOVIE_LIST_FAIL,
            payload: { errorMovieList: error.response.data, }
          })
        })
  }
}

export const getMovieListManagement = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_LIST_REQUEST2
    })
    moviesApi.getDanhSachPhim()
      .then(result => {
        dispatch({
          type: GET_MOVIE_LIST_SUCCESS2,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_MOVIE_LIST_FAIL2,
            payload: { errorMovieList: error.response.data, }
          })
        })
  }
}

export const deleteMovie = (maPhim) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_MOVIE_REQUEST
    })
    moviesApi.deleteMovie(maPhim)
      .then(result => {
        dispatch({
          type: DELETE_MOVIE_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: DELETE_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        })
  }
}

export const updateMovieUpload = (phimObj) => {
  return (dispatch) => {
    dispatch({
      type: POST_UPDATE_MOVIE_REQUEST
    })
    moviesApi.postCapNhatPhimUpload(phimObj)
      .then(result => {
        dispatch({
          type: POST_UPDATE_MOVIE_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: POST_UPDATE_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        })
  }
}
export const updateMovie = (phimObj) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_NONEIMAGE_MOVIE_REQUEST
    })
    moviesApi.postCapNhatPhim(phimObj)
      .then(result => {
        dispatch({
          type: UPDATE_NONEIMAGE_MOVIE_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: UPDATE_NONEIMAGE_MOVIE_FAIL,
            payload: { error: error.response.data }
          })
        })
  }
}

export const addMovieUpload = (movieObj) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MOVIE_UPLOAD_REQUEST
    })
    moviesApi.postThemPhimUpload(movieObj)
      .then(result => {
        dispatch({
          type: ADD_MOVIE_UPLOAD_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: ADD_MOVIE_UPLOAD_FAIL,
            payload: { error: error.response.data }
          })
        })
  }
}

export const resetMoviesManagement = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_MOVIE_MANAGEMENT
    })
  }
}



