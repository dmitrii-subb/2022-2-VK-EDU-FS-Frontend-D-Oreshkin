import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="125271106...c2q05mtb6us8e.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);

reportWebVitals();
