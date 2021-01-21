import { combineReducers } from "redux";
import authReducer from "./Auth";
import movieReducer from "./Movie";

const rootReducer = combineReducers({
  authReducer, movieReducer
});
export default rootReducer;