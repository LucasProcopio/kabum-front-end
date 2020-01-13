import { all } from "redux-saga/effects";

import products from "./product/sagas";
import cart from "./cart/sagas";

export default function* rootSagas() {
  return yield all([products, cart]);
}
