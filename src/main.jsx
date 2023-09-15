import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router";
import "./styles/index.css";
import "./styles/button.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);
