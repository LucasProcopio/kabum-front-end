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
