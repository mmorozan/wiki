import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./store/history";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
