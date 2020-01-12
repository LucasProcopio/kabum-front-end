import { all } from "redux-saga/effects";

import products from "./product/sagas";

export default function* rootSagas() {
  return yield all([products]);
}
