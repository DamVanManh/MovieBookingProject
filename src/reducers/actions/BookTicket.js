// phục vụ cho đặt vé, lấy danh sách ghế

import bookingApi from '../../api/bookingApi';
import { } from '../constants/Movie';

import bookingApi from "../../api/bookingApi";
import { BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_ROOM_TICKETLIST_REQUEST, GET_ROOM_TICKETLIST_SUCCESS, GET_ROOM_TICKETLIST_FAIL } from "../constants/BookTicket";

export const bookTicket = (danhSachVe) => {
  return (dispath) => {
    dispath({
      type: BOOK_TICKET_REQUEST
    })
    bookingApi.postDatVe(danhSachVe)
      .then(result => {
        dispath({
          type: BOOK_TICKET_SUCCESS,
          payload: {
            data: result.data,
          }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: BOOK_TICKET_FAIL,
            payload: {
              error: error.response.data,
            }
          })

        }
      )
  }
}

export const getRoomTicketList = (maLichChieu) => {
  return (dispath) => {
    dispath({
      type: GET_ROOM_TICKETLIST_REQUEST
    })
    bookingApi.getDanhSachPhongVe(maLichChieu)
      .then(result => {
        dispath({
          type: GET_ROOM_TICKETLIST_SUCCESS,
          payload: { data: result.data }
        })
      }
      )
      .catch(
        error => {
          dispath({
            type: GET_ROOM_TICKETLIST_FAIL,
            payload: { error: error.response.data, }
          })
        }
      )
  }
}