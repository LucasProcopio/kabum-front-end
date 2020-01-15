import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import Api from "../../../services/api";

import { addProductFailure, addProductSuccess } from "./actions";
import { toast } from "react-toastify";

function* addToCart({ payload }) {
  const { id } = payload;
  try {
    const product = yield call(Api.get, `/products/${id}`);
    yield delay(700);
    yield put(addProductSuccess(product));
    toast.success("✅ Produto adicionado ao carrinho com sucesso");
  } catch (e) {
    toast.error("⛔ Falha adicionar produto no carrinho");
    yield put(addProductFailure());
  }
}

export default all([takeLatest("@cart/ADD_PRODUCT_REQUEST", addToCart)]);
