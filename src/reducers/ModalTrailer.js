
import { OPEN_MODAL, CLOSE_MODAL } from './constants/ModalTrailer';

const initialState = {
  open: false,
  urlYoutube: "",
}

const modalTrailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { open: action.payload.open, urlYoutube: action.payload.urlYoutube };
    }
    case CLOSE_MODAL: {
      return { open: action.payload.open, urlYoutube: "" };
    }
    default:
      return state;
  }
}
export default modalTrailerReducer;