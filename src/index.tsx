import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ContextState } from "./components/store";
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextState>
        <App />
      </ContextState>
    </BrowserRouter>
  </React.StrictMode>
);
