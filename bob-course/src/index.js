import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./components/Context/StateProvider";
import { initialState } from "./components/Context/StateOperations";
import { reducer } from "./components/Context/StateOperations";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
