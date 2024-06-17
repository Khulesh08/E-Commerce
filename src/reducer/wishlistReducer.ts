import { createReducer } from "@reduxjs/toolkit";
import { Product } from "@/interface/interface";
import { addToWishlist, removeFromWishlist } from "@/action/wishlistActions";
import { getLocalStorage, setLocalStorage } from "@/service/service";

const getWishlistData = (): Product[] => {
  const localWishlist = getLocalStorage("wishlist");
  if (localWishlist) {
    try {
      if (Array.isArray(localWishlist)) {
        return localWishlist;
      }
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
    }
  }
  return [];
};

const setWishlistData = (wishlist: Product[]) => {
  setLocalStorage("wishlist", wishlist);
};

interface WishlistState {
  items: Product[];
}
export const initialState: WishlistState = {
  items: getWishlistData(),
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToWishlist, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item } : item
        );
        state.items = updatedItems;
      } else {
        state.items.push(action.payload);
      }

      setWishlistData(state.items);
    })

    .addCase(removeFromWishlist, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      setWishlistData(state.items);
    });
});
