import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersList from "./UsersList";
import theaterReducer from "./Theater";
import bookTicket from "./BookTicket";

const rootReducer = combineReducers({
  authReducer, movieReducer, usersList, theaterReducer, bookTicket
});
export default rootReducer;