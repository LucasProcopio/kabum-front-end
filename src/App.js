import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Routes from "./routes";
import Header from "./components/Header";
import { history } from "./services/history";
import GlobalStyle from "./styles/global";

const App = function() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
