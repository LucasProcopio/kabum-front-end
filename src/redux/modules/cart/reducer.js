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
    let productKey;

    forEach(prodDraft, (prod, key) => {
      if (prod.id === id) {
        productKey = key;
      }
    });

    prodDraft.pop(productKey);
  }

  function handleCartProduct(product, prodDraft, addProduct) {
    if (product.inCart === 1 && addProduct === false) {
      return;
    }

    forEach(prodDraft, prod => {
      if (product.id === prod.id) {
        addProduct ? prod.inCart++ : prod.inCart--;
      }
    });
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
      case "@cart/ADD_CART_PROD_ITEM": {
        handleCartProduct(action.payload.product, draft.products, true);
        break;
      }
      case "@cart/REMOVE_CART_PROD_ITEM": {
        handleCartProduct(action.payload.product, draft.products, false);
        break;
      }
      case "@cart/REMOVE_CART_PROD": {
        removeProduct(action.payload.id, draft.products);
        draft.inCart--;
        break;
      }
      default:
        return state;
    }
  });
}
