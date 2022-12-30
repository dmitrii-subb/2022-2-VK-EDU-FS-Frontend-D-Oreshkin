import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { createStore } from "redux";

const defaulState = {
  from_lang: "en",
  to_lang: "ru",
  translated_text: "",
};

function reducer(state = defaulState, action) {
  switch (action.type) {
    case "SET_FROM_LANG":
      return { ...state, from_lang: action.payload };
    case "SET_TO_LANG":
      return { ...state, to_lang: action.payload };
    case "SET_TRANSLATED_TEXT":
      return { ...state, translated_text: action.payload };
    default:
      return state;
  }
}
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
