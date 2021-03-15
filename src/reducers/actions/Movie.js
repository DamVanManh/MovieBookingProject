import bookingApi from '../../api/bookingApi';
import moviesApi from '../../api/moviesApi';
import theatersApi from '../../api/theatersApi';
import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL, GET_MOVIE_DETAIL_REQUEST, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAIL, GET_ROOM_TICKET_SUCCESS, GET_THEATERS_SUCCESS, GET_THEATERS_REQUESS, GET_THEATERS_FAIL, GET_ROOM_TICKET_REQUEST, GET_ROOM_TICKET_FAIL } from '../constants/Movie';

export const getMovieList = (values) => {
  return (dispath) => {
    dispath({
      type: GET_MOVIE_LIST_REQUEST
    })
    moviesApi.getDanhSachPhim()
      .then(result => {
        dispath({
          type: GET_MOVIE_LIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          // console.log(error)
          dispath({
            type: GET_MOVIE_LIST_FAIL,
            payload: { error: error.response.data, }

          })
        }
      )
  }
}

export const getMovieDetail = (id) => {
  return (dispath) => {
    dispath({
      type: GET_MOVIE_DETAIL_REQUEST
    })
    theatersApi.getThongTinLichChieuPhim(id)
      .then(result => {
        dispath({
          type: GET_MOVIE_DETAIL_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_MOVIE_DETAIL_FAIL,
            payload: { error: error.response.data, }
          })
          // console.log(error)
        }
      )
  }
}


export const getRoomTicketList = (maLichChieu) => {
  return (dispath) => {
    dispath({
      type: GET_ROOM_TICKET_REQUEST
    })
    bookingApi.getDanhSachPhongVe(maLichChieu)
      .then(result => {
        dispath({
          type: GET_ROOM_TICKET_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_ROOM_TICKET_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}

export const getTheaters = () => {
  return (dispath) => {
    dispath({
      type: GET_THEATERS_REQUESS
    })
    theatersApi.getThongTinLichChieuHeThongRap()
      .then(result => {
        dispath({
          type: GET_THEATERS_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_THEATERS_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}