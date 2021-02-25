import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";
import usersList from "./UsersList";
import listMovieReducer from "../pages/Homepage/modules/reducer";

const rootReducer = combineReducers({
  authReducer, movieReducer, usersList, listMovieReducer
});
export default rootReducer;