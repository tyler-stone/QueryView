import { combineReducers } from "redux";
import queryResultsReducer from "./queryResultsReducer";
import queryTextReducer from "./queryTextReducer";

export default combineReducers({
  queryResults: queryResultsReducer,
  queryText: queryTextReducer
});
