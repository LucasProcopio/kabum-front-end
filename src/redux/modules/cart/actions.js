export function addProductRequest(id) {
  return {
    type: "@cart/ADD_PRODUCT_REQUEST",
    payload: { id },
  };
}

export function addProductFailure() {
  return {
    type: "@cart/ADD_PRODUCT_FAILURE",
  };
}

export function addProductSuccess(product) {
  return {
    type: "@cart/ADD_PRODUCT_SUCCESS",
    payload: { product },
  };
}

export function removeCartProduct(id) {
  return {
    type: "@cart/REMOVE_CART_PROD",
    payload: { id },
  };
}
