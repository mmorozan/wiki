import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import api from "./middlewares/api";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import history from "./history";

const composeEnhancer = composeWithDevTools({});
const enhancer = composeEnhancer(
  applyMiddleware(thunk, routerMiddleware(history), api)
);

const store = createStore(reducer, enhancer);

window.store = store;

export default store;
