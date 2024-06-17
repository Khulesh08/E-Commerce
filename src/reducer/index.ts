import { cartReducer } from "./cartReducers";
import { productReducer } from "./productReducer";
import { wishlistReducer } from "./wishlistReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  wishlist: wishlistReducer,
});
