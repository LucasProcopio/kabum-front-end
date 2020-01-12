import produce from "immer";

const initialState = {
  list: [],
  loader: false,
};

export default function product(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@product/FETCH_PRODUCT_REQUEST": {
        draft.loader = true;
        break;
      }
      case "@product/FETCH_PRODUCT_FAILURE": {
        draft.loader = false;
        break;
      }
      case "@product/FETCH_PRODUCT_SUCCESS": {
        draft.loader = false;
        draft.list = action.payload.products;
        break;
      }
      default:
        return state;
    }
  });
}
