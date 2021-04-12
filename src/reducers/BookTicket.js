import {
  BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_LISTSEAT_REQUEST,
  GET_LISTSEAT_SUCCESS, GET_LISTSEAT_FAIL, ADD_DATA_MALICHCHIEU_TAIKHOANNGUOIDUNG,
  CHANGE_LISTSEAT, INIT_DATA_REBOOKING, SET_PAYMENT_METHOD, OPEN_MODAL_BYTIMEOUT,
} from './constants/BookTicket';

const initialState = {
  // get list seat
  loadingGetListSeat: false,
  danhSachPhongVe: {},
  errorGetListSeatMessage: null,

  // selecting seat
  maLichChieu: null,
  listSeat: [],
  taiKhoanNguoiDung: null,
  paymentMethod: '',
  listSeat_payMent_key: Date.now(),
  isSelectedSeat: false,

  // booking ticked
  loadingBookingTicket: false,
  successBookingTicketMessage: null,
  errorBookTicketMessage: null,

  // control modal
  openModal: { byTimeOut: false, byBookingTicket: false }
}

const bookTicket = (state = initialState, action) => {
  switch (action.type) {

    // get list seat
    case GET_LISTSEAT_REQUEST: {
      return {
        ...state, loadingGetListSeat: true, errorGetListSeatMessage: null
      }
    }
    case GET_LISTSEAT_SUCCESS: {
      return {
        ...state, danhSachPhongVe: action.payload.data, loadingGetListSeat: false
      }
    }
    case GET_LISTSEAT_FAIL: {
      return {
        ...state,
        errorGetListSeatMessage: action.payload.error,
        loadingGetListSeat: false,
      }
    }

    // selecting seat
    case ADD_DATA_MALICHCHIEU_TAIKHOANNGUOIDUNG: {
      return {
        ...state, maLichChieu: action.payload.maLichChieu, taiKhoanNguoiDung: action.payload.taiKhoanNguoiDung
      }
    }
    case CHANGE_LISTSEAT: {
      return {
        ...state, listSeat: action.payload.listSeat, isSelectedSeat: action.payload.isSelectedSeat
      }
    }
    case INIT_DATA_REBOOKING: {
      return {
        ...state, listSeat_payMent_key: Date.now(), paymentMethod: '', openModal: { byBookingTicket: false, byTimeOut: false }, successBookingTicketMessage: null, errorBookTicketMessage: null,
      }
    }
    case SET_PAYMENT_METHOD: {
      return {
        ...state, paymentMethod: action.payload.paymentMethod
      }
    }

    // booking ticked
    case BOOK_TICKET_REQUEST: {
      return {
        ...state, loadingBookingTicket: true, errorBookTicketMessage: null
      }
    }
    case BOOK_TICKET_SUCCESS: {
      return {
        ...state, successBookingTicketMessage: action.payload.data, loadingBookingTicket: false, openModal: { byBookingTicket: true, byTimeOut: false }
      }
    }
    case BOOK_TICKET_FAIL: {
      return {
        ...state,
        errorBookTicketMessage: action.payload.error, openModal: { byBookingTicket: true, byTimeOut: false },
        loadingBookingTicket: false,
      }
    }

    // control modal
    case OPEN_MODAL_BYTIMEOUT: {
      return {
        ...state,
        openModal: { ...state.openModal, byTimeOut: action.payload.openModal.byTimeOut }
      }
    }

    default:
      return state;
  }
}
export default bookTicket;