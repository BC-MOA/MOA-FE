import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../src/style/fonts.css";
import colors from "./style/colors";
import { createGlobalStyle } from "styled-components";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  :root {
    ${colors}
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
