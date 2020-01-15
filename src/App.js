import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-center"
          hideProgressBar
          autoClose={4000}
        />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
