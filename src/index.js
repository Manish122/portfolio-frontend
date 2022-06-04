import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as  positions, transitions } from "react-alert";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById("root")
);
