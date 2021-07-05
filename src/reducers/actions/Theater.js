
import theatersApi from '../../api/theatersApi';
import {
  GET_THEATERS_SHOWTIME_REQUEST, GET_THEATERS_SHOWTIME_SUCCESS, GET_THEATERS_SHOWTIME_FAIL,
  GET_THEATERS_SHOWTIME_REQUEST2, GET_THEATERS_SHOWTIME_SUCCESS2, GET_THEATERS_SHOWTIME_FAIL2,
} from '../constants/Theater';

export const getTheaters = () => {
  return (dispatch) => {
    dispatch({
      type: GET_THEATERS_SHOWTIME_REQUEST
    })
    theatersApi.getThongTinLichChieuHeThongRap()
      .then(result => {
        dispatch({
          type: GET_THEATERS_SHOWTIME_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_THEATERS_SHOWTIME_FAIL,
            payload: { errorTheaterList: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}

export const getTheaters2 = () => {
  return (dispatch) => {
    dispatch({
      type: GET_THEATERS_SHOWTIME_REQUEST2
    })
    theatersApi.getThongTinLichChieuHeThongRap()
      .then(result => {
        dispatch({
          type: GET_THEATERS_SHOWTIME_SUCCESS2,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispatch({
            type: GET_THEATERS_SHOWTIME_FAIL2,
            payload: { errorTheaterList2: error.response?.data ? error.response.data : error.message, }
          })
        }
      )
  }
}