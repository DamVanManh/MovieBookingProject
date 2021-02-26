import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersList from "./UsersList";

const rootReducer = combineReducers({
  authReducer, movieReducer, usersList,
});
export default rootReducer;