import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header";
import { history } from "./services/history";
import GlobalStyle from "./styles/global";

const App = function() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
