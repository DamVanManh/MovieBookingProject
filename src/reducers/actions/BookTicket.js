// lấy danh sách vé và đặt vé
import bookingApi from '../../api/bookingApi';
import { BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_LISTSEAT_REQUEST, GET_LISTSEAT_SUCCESS, GET_LISTSEAT_FAIL } from "../constants/BookTicket";

export const getListSeat = (maLichChieu) => {
  return (dispatch) => {
    dispatch({
      type: GET_LISTSEAT_REQUEST
    })
    bookingApi.getDanhSachPhongVe(maLichChieu)
      .then(result => {
        dispatch({
          type: GET_LISTSEAT_SUCCESS,
          payload: { data: result.data }
        })
      })
      .catch(
        error => {
          dispatch({
            type: GET_LISTSEAT_FAIL,
            payload: { error: error.message }
          })
        }
      )
  }
}

export const bookTicket = (data) => {
  return (dispatch) => {
    dispatch({
      type: BOOK_TICKET_REQUEST
    })
    bookingApi.postDatVe(data)
      .then(result => {
        dispatch({
          type: BOOK_TICKET_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      })
      .catch(
        error => {
          dispatch({
            type: BOOK_TICKET_FAIL,
            payload: { error: error.message }
          })

        }
      )
  }
}


