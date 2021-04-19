import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersList from "./UsersList";
import theaterReducer from "./Theater";
import bookTicketReducer from "./BookTicket";
import movieDetailReducer from "./MovieDetail";

const rootReducer = combineReducers({
  authReducer, movieReducer, usersList, theaterReducer, bookTicketReducer, movieDetailReducer
});
export default rootReducer;