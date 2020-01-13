import produce from "immer";

const initialState = {
  list: [],
  loader: false,
  detail: {},
};

export default function product(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@product/FETCH_PRODUCT_REQUEST":
      case "@product/FETCH_PRODUCT_BY_ID_REQUEST": {
        draft.loader = true;
        break;
      }
      case "@product/FETCH_PRODUCT_FAILURE":
      case "@product/FETCH_PRODUCT_BY_ID_FAILURE": {
        draft.loader = false;
        break;
      }
      case "@product/FETCH_PRODUCT_SUCCESS": {
        draft.loader = false;
        draft.list = action.payload.products;
        break;
      }
      case "@product/FETCH_PRODUCT_BY_ID_SUCCESS": {
        draft.loader = false;
        draft.detail = action.payload.product;
        break;
      }
      default:
        return state;
    }
  });
}
