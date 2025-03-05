import React from "react";

import "./App.css";

import { ActiveUserContextProvider } from "./Contexts/ActiveUserContext";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ActiveUserContextProvider>
        <Router />
      </ActiveUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
