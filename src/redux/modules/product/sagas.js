import { call, put, all, takeLatest, delay } from "redux-saga/effects";
import Api from "../../../services/api";

import {
  fetchProductFailure,
  fetchProductSuccess,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} from "./actions";

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

function* fetchProductById({ payload }) {
  const { id } = payload;
  try {
    const product = yield call(Api.get, `/products/${id}`);
    yield delay(800);
    yield put(fetchProductByIdSuccess(product.data));
  } catch (e) {
    console.log("failed> " + e);
    yield put(fetchProductByIdFailure());
  }
}

export default all([
  takeLatest("@product/FETCH_PRODUCT_REQUEST", fetchProducts),
  takeLatest("@product/FETCH_PRODUCT_BY_ID_REQUEST", fetchProductById),
]);
