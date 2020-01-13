import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import Api from "../../../services/api";

import { addProductFailure, addProductSuccess } from "./actions";

function* addToCart({ payload }) {
  const { id } = payload;
  try {
    const product = yield call(Api.get, `/products/${id}`);
    yield delay(700);
    yield put(addProductSuccess(product));
  } catch (e) {
    console.log(e);
    yield put(addProductFailure());
  }
}

export default all([takeLatest("@cart/ADD_PRODUCT_REQUEST", addToCart)]);
