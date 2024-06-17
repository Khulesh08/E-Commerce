import { createReducer } from "@reduxjs/toolkit";
import { Product } from "@/interface/interface";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeFromCart,
  updateStock,
  sendOtp,
  checkout,
} from "@/action/cartActions";
import { getLocalStorage, setLocalStorage } from "@/service/service";
import "firebase/compat/firestore";
import { app } from "@/firebase/firebaseConfig";
import firebase from "firebase/compat/app";

const firestore = (app as any).firestore();

const getCartData = (): Product[] => {
  const localCart = getLocalStorage("cart");
  if (localCart) {
    try {
      if (Array.isArray(localCart)) {
        return localCart;
      }
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
    }
  }
  return [];
};


const setCartData = (cart: Product[]) => {
  setLocalStorage("cart", cart);
};

interface CartState {
  items: Product[];
}
export const initialState: CartState = {
  items: getCartData(),
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(addToCart, (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updateItems = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                avlQty: item.avlQty - action.payload.quantity,
              }
            : item
        );
        state.items = updateItems;
      } else {
        state.items.push({
          ...action.payload,
          avlQty: action.payload.stock - action.payload.quantity,
        });
      }
      setCartData(state.items);
    })

    .addCase(increaseQuantity, (state, action) => {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.items = updatedItems;
      setCartData(state.items);
    })

    .addCase(decreaseQuantity, (state, action) => {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.items = updatedItems;
      setCartData(state.items);
    })

    .addCase(removeFromCart, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      setCartData(state.items);
    })

    .addCase(clearCart, (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    })

    .addCase(updateStock, (_state, action) => {
      const { id, quantity } = action.payload;
      const localProducts = getLocalStorage("products");
      if (localProducts) {
        try {
          const parsedProducts: Product[] = localProducts;
          const updatedProducts = parsedProducts.map((product) =>
            product.id === id
              ? { ...product, stock: product.stock - quantity }
              : product
          );
          setLocalStorage("products", updatedProducts);
          
        } catch (error) {
          console.error(
            "Error parsing products JSON from local storage:",
            error
          );
        }
      }
    })
    .addCase(checkout, (state) => {
      state.items.forEach((item) => {
        // Update Firestore database with new stock
        const firestore = firebase.firestore();
        const productRef = firestore.collection("products").doc(item.id.toString());
        productRef.update({
          stock: item.avlQty,
        })
        .then(() => {
          console.log("Stock updated successfully in Firestore.");
        })
        .catch((error) => {
          console.error("Error updating stock in Firestore:", error);
        });
      });
    });
});

let initialotpState = {
  otp: "",
  verificationId: "",
};
export const sendOtpReducer = createReducer(initialotpState, (builder) => {
  builder.addCase(sendOtp, (state, action) => {
    state = action.payload;
    console.log("action.payload", action.payload);
    // return action.payload.otp;
    return {
      otp: action.payload.otp,
      verificationId: action.payload.verificationId,
    };
  });
});
