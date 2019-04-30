import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { setCart } from "./reducers";
import { createLogger } from "redux-logger";
import App from "./App";
import "./styles.css";

const logger = createLogger();
const rootReducer = combineReducers({ setCart });
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
