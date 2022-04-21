import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReducerContext from "./ReducerContext/ReducerContext";
import PreviewReducer from "./ReducerContext/PreviewReducer";

ReactDOM.render(
  <ReducerContext>
    <PreviewReducer>
      <App />
    </PreviewReducer>
  </ReducerContext>,
  document.getElementById("root")
);
