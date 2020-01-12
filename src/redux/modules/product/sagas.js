import { call, put, all, takeLatest, delay } from "redux-saga/effects";
import Api from "../../../services/api";

import { fetchProductFailure, fetchProductSuccess } from "./actions";

function* fetchProducts() {
  try {
    const products = yield call(Api.get, "/products");
    yield delay(1500);
    yield put(fetchProductSuccess(products));
  } catch (e) {
    console.log("failed> " + e);
    yield put(fetchProductFailure());
  }
}

export default all([
  takeLatest("@product/FETCH_PRODUCT_REQUEST", fetchProducts),
]);
