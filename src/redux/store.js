import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";
import rootReducer from "./modules/rootReducer";
import rootSagas from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export default store;
