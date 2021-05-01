import moviesApi from '../../api/moviesApi';

import {
  GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL,
  GET_MOVIE_LISTBYDAY_REQUEST, GET_MOVIE_LISTBYDAY_SUCCESS, GET_MOVIE_LISTBYDAY_FAIL
} from '../constants/Movie';

export const getMovieList = (values) => {
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
        }
      )
  }
}

export const getMovieListByDay = (maNhom, tuNgay, denNgay) => {
  return (dispatch) => {
    dispatch({
      type: GET_MOVIE_LISTBYDAY_REQUEST
    })
    moviesApi.getDanhSachPhimTheoNgay(maNhom, tuNgay, denNgay)
      .then(result => {
        dispatch({
          type: GET_MOVIE_LISTBYDAY_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_MOVIE_LISTBYDAY_FAIL,
            payload: { errorMovieListByDay: error.response.data, }

          })
        }
      )
  }
}


