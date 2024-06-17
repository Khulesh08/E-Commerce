import { createReducer } from "@reduxjs/toolkit";
import { Product } from "@/interface/interface";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "@/action/productActions";
import { setLocalStorage } from "@/service/service";
import "firebase/compat/firestore";
import { app } from "@/firebase/firebaseConfig";

const firestore = (app as any).firestore();

const getProductsData = (): Product[] => {
  const localProduct = localStorage.getItem("products");
  if (localProduct) {
    try {
      const parsedProducts = JSON.parse(localProduct); 
      if (Array.isArray(parsedProducts)) {
        return parsedProducts;
      }
    } catch (error) {
      console.log("Error on fetching products from the local storage", error);
    }
  }
  return [];
};

const setProductsData = (products: Product[]) => {
  setLocalStorage("products", products);
};

interface CartState {
  products: Product[];
}

export const initialState: CartState = {
  products: getProductsData(),
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      state.products = [...state.products, action.payload];
      setProductsData(state.products);
      const customId = action.payload.id; 
      firestore.collection("products").doc(customId).set(action.payload);
    })
    .addCase(deleteProduct, (state, action) => {
      state.products = state.products.filter(
        (products) => products.id !== action.payload
      );
      setProductsData(state.products);

      firestore.collection("products").doc(action.payload.toString()).delete();
    })
    .addCase(updateProduct, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      setProductsData(state.products);

      firestore
        .collection("products")
        .doc(action.payload.id.toString())
        .set(action.payload);
    });
});
