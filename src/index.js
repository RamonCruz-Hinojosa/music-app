import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-dom";
import Router from "./Router";

const Main = () => {
  <BrowserRouter>
    <Router />
  </BrowserRouter>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
