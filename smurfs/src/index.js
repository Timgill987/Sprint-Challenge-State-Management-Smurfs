import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";



import "./index.css";
import App from "./components/App";
import { smurfReducer } from "./Reducer/smurfReducer";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
