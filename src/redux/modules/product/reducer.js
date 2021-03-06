import produce from "immer";
import { forEach } from "lodash";
import lib from "../../../lib";

const initialState = {
  list: [],
  loader: false,
  detail: {},
  filtered: [],
};

export default function product(state = initialState, action) {
  function addProduct(products) {
    const productList = products.data;

    forEach(productList, (prod, key) => {
      const withDiscount = lib.discountFifteenPercent(prod.price);
      productList[key].withDiscount = withDiscount;
    });

    return productList;
  }

  function filterProduct(draft, nameFilter) {
    return lib.applyNameFilter(draft.list, nameFilter);
  }

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
        draft.list = addProduct(action.payload.products);
        break;
      }
      case "@product/FETCH_PRODUCT_BY_ID_SUCCESS": {
        draft.loader = false;
        const newProduct = action.payload.product;
        newProduct.withDiscount = lib.discountFifteenPercent(newProduct.price);
        draft.detail = newProduct;
        break;
      }
      case "@product/FETCH_PRODUCT_BY_NAME": {
        draft.filtered = filterProduct(draft, action.payload.name);
        break;
      }

      default:
        return state;
    }
  });
}
