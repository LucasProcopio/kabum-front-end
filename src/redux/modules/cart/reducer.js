import produce from "immer";
import { forEach } from "lodash";
import lib from "../../../lib";

const initialState = {
  products: [],
  loader: false,
  inCart: 0,
};

export default function cart(state = initialState, action) {
  function addProduct(product, prodDraft) {
    const newProduct = product.data;
    let inCart = false;

    forEach(prodDraft, prod => {
      if (prod.id === newProduct.id) {
        prod.inCart++;
        inCart = true;
      }
    });

    if (inCart === false) {
      newProduct.inCart = 1;
      newProduct.withDiscount = lib.discountFifteenPercent(newProduct.price);
      prodDraft.push(newProduct);
    }

    return inCart;
  }

  function removeProduct(id, prodDraft) {
    let inCart = true;
    forEach(prodDraft, (prod, key) => {
      if (id === prod.id) {
        prod.inCart--;
      }

      if (prod.inCart === 0) {
        prodDraft.pop(prod[key]);
        inCart = false;
      }
    });

    return inCart;
  }

  return produce(state, draft => {
    switch (action.type) {
      case "@cart/ADD_PRODUCT_REQUEST": {
        draft.loader = true;
        break;
      }
      case "@cart/ADD_PRODUCT_FAILURE": {
        draft.loader = false;
        break;
      }
      case "@cart/ADD_PRODUCT_SUCCESS": {
        draft.loader = false;
        const inCart = addProduct(action.payload.product, draft.products);
        if (!inCart) draft.inCart++;
        break;
      }
      case "@cart/REMOVE_CART_PROD": {
        const inCart = removeProduct(action.payload.id, draft.products);
        if (!inCart) draft.inCart--;
        break;
      }
      default:
        return state;
    }
  });
}
