import { combineReducers } from "redux";

import product from "./product/reducer";
import cart from "./cart/reducer";

export default combineReducers({ product, cart });
