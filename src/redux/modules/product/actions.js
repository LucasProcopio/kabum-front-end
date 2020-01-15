export function fetchProductsRequest() {
  return {
    type: "@product/FETCH_PRODUCT_REQUEST",
  };
}

export function fetchProductFailure() {
  return {
    type: "@product/FETCH_PRODUCT_FAILURE",
  };
}

export function fetchProductSuccess(products) {
  return {
    type: "@product/FETCH_PRODUCT_SUCCESS",
    payload: { products },
  };
}

export function fetchProductByIdRequest(id) {
  return {
    type: "@product/FETCH_PRODUCT_BY_ID_REQUEST",
    payload: { id },
  };
}

export function fetchProductByIdFailure() {
  return {
    type: "@product/FETCH_PRODUCT_BY_ID_FAIURE",
  };
}

export function fetchProductByIdSuccess(product) {
  return {
    type: "@product/FETCH_PRODUCT_BY_ID_SUCCESS",
    payload: { product },
  };
}

export function fetchProductByName(name) {
  return {
    type: "@product/FETCH_PRODUCT_BY_NAME",
    payload: { name },
  };
}
