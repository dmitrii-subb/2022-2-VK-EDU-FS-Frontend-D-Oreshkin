import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  isMobile: false,
  isDesktop: true,
};

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "isMobile":
      state.isMobile = true;
      state.isDesktop = false;
      return state;
    case "isDesktop":
      state.isMobile = false;
      state.isDesktop = true;
      return state;
    default:
      return state;
  }
};

const store = createStore(reduser);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);

reportWebVitals();
