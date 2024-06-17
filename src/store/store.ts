import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/reducer/cartReducers";
import { productReducer } from "@/reducer/productReducer";
import { rootReducer } from "@/reducer";
import { wishlistReducer } from "@/reducer/wishlistReducer";

export const store = configureStore({
  reducer: {
    wishlist : wishlistReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
