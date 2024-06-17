import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/reducer/cartReducers";
import { productReducer } from "@/reducer/productReducer";
import { rootReducer } from "@/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
