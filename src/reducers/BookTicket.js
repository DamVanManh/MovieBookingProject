import {
  BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_LISTSEAT_REQUEST,
  GET_LISTSEAT_SUCCESS, GET_LISTSEAT_FAIL, CHANGE_LISTSEAT, RESET_DATA, SET_DATA_PAYMENT,
  SET_READY_PAYMENT, TIMEOUT, SET_ISMOBILE, SET_STEP, INIT_DATA, RESET_ALERT_OVER10, SET_ALERT_OVER10
} from './constants/BookTicket';

const initialState = {
  // get list seat
  loadingGetListSeat: false,
  danhSachPhongVe: {},
  errorGetListSeatMessage: null,

  // selecting seat
  listSeat: [],
  isSelectedSeat: false,
  listSeatSelected: [],
  danhSachVe: [],
  amount: 0,

  timeOut: false,
  isMobile: false,
  refreshKey: Date.now(),

  maLichChieu: null,
  taiKhoanNguoiDung: null,

  alertOver10: false,

  // payment
  email: '',
  phone: '',
  paymentMethod: '',
  isReadyPayment: false,
  activeStep: 0,

  // booking ticked
  loadingBookingTicket: false,
  successBookingTicketMessage: null,
  errorBookTicketMessage: null,
}

const bookTicketReducer = (state = initialState, action) => {
  switch (action.type) {

    // initialization data
    case GET_LISTSEAT_REQUEST: {
      return {
        ...state,
        loadingGetListSeat: true,
        errorGetListSeatMessage: null,
      }
    }
    case GET_LISTSEAT_SUCCESS: {
      return {
        ...state,
        danhSachPhongVe: action.payload.data,
        loadingGetListSeat: false,
      }
    }
    case GET_LISTSEAT_FAIL: {
      return {
        ...state,
        errorGetListSeatMessage: action.payload.error,
        loadingGetListSeat: false,
      }
    }
    case INIT_DATA: {
      return {
        ...state,
        listSeat: action.payload.listSeat,
        maLichChieu: action.payload.maLichChieu,
        taiKhoanNguoiDung: action.payload.taiKhoanNguoiDung,
        email: action.payload.email,
        phone: action.payload.phone,
      }
    }

    // selecting seat
    case CHANGE_LISTSEAT: {
      const activeStep = action.payload.activeStep === 0 ? 0 : state.activeStep
      return {
        ...state,
        listSeat: action.payload.listSeat,
        isSelectedSeat: action.payload.isSelectedSeat,
        listSeatSelected: action.payload.listSeatSelected,
        danhSachVe: action.payload.danhSachVe,
        activeStep,
        amount: action.payload.amount,
      }
    }
    case RESET_DATA: {
      return {
        ...state,
        danhSachPhongVe:{},
        paymentMethod: '',
        isSelectedSeat: false,
        listSeatSelected: [],
        timeOut: false,
        activeStep: 0,
        danhSachVe: [],
        successBookingTicketMessage: null,
        errorBookTicketMessage: null,
        refreshKey: Date.now(),
        amount: 0,
        alertOver10: false,
      }
    }
    case SET_DATA_PAYMENT: {
      return {
        ...state,
        email: action.payload.email,
        phone: action.payload.phone,
        paymentMethod: action.payload.paymentMethod,
      }
    }
    case SET_READY_PAYMENT: {
      return {
        ...state,
        isReadyPayment: action.payload.isReadyPayment,
      }
    }
    case SET_STEP: {
      return {
        ...state,
        activeStep: action.payload.activeStep,
      }
    }
    case RESET_ALERT_OVER10: {
      return {
        ...state,
        alertOver10: false,
      }
    }
    case SET_ALERT_OVER10: {
      return {
        ...state,
        alertOver10: true,
      }
    }

    // booking ticked
    case BOOK_TICKET_REQUEST: {
      return {
        ...state,
        loadingBookingTicket: true,
        errorBookTicketMessage: null,
      }
    }
    case BOOK_TICKET_SUCCESS: {
      return {
        ...state,
        successBookingTicketMessage: action.payload.data,
        loadingBookingTicket: false,
      }
    }
    case BOOK_TICKET_FAIL: {
      return {
        ...state,
        errorBookTicketMessage: action.payload.error,
        loadingBookingTicket: false,
      }
    }

    // control modal
    case TIMEOUT: {
      return {
        ...state,
        timeOut: true,
      }
    }

    // change view
    case SET_ISMOBILE: {
      return {
        ...state,
        isMobile: action.payload.isMobile,
      }
    }

    default:
      return state;
  }
}
export default bookTicketReducer;