import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import wiki from "./wiki";
import history from "../history";

export default combineReducers({
  router: connectRouter(history),
  wiki
});
