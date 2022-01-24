import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "style/reset.css";
import "style/fonts.css";
import "style/color.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
