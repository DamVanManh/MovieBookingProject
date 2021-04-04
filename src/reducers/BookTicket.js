import { BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BOOK_TICKET_FAIL, GET_ROOM_TICKETLIST_REQUEST, GET_ROOM_TICKETLIST_SUCCESS, GET_ROOM_TICKETLIST_FAIL } from './constants/BookTicket';

const initialState = {
  movieList: [],
  loading: false,
  error: null,
  movieDetail: null,
  seatList: [],

  message: ''
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case BOOK_TICKET_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }

    case BOOK_TICKET_SUCCESS: {
      return {
        ...state, message: action.payload.data, loading: false
      }
    }

    case BOOK_TICKET_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }

    case GET_ROOM_TICKETLIST_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }

    case GET_ROOM_TICKETLIST_SUCCESS: {
      return {
        ...state, message: action.payload.data, loading: false
      }
    }

    case GET_ROOM_TICKETLIST_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }
    default:
      return state;
  }
}
export default movieReducer;