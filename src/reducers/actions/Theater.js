
import theatersApi from '../../api/theatersApi';
import {
  GET_THEATERS_SHOWTIME_REQUEST, GET_THEATERS_SHOWTIME_SUCCESS, GET_THEATERS_SHOWTIME_FAIL
} from '../constants/Theater';

export const getTheaters = () => {
  return (dispath) => {
    dispath({
      type: GET_THEATERS_SHOWTIME_REQUEST
    })
    theatersApi.getThongTinLichChieuHeThongRap()
      .then(result => {
        dispath({
          type: GET_THEATERS_SHOWTIME_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_THEATERS_SHOWTIME_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}