import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersList from "./UsersList";
import theaterReducer from "./Theater";
const rootReducer = combineReducers({
  authReducer, movieReducer, usersList, theaterReducer,
});
export default rootReducer;