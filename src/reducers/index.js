import { combineReducers } from "redux";
import queryViewsReducer from "./queryViewsReducer";

export default combineReducers({
  queryViews: queryViewsReducer
});
