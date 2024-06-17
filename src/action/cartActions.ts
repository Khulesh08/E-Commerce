import { createAction } from "@reduxjs/toolkit";
import { ID, Product } from "@/interface/interface";

export const addToCart = createAction<Product>("addToCart");
export const increaseQuantity = createAction<ID>("increaseQuantity");
export const decreaseQuantity = createAction<ID>("decreaseQuantity");
export const removeFromCart = createAction<ID>("removeFromCart");
export const clearCart = createAction("clearCart");
export const updateStock = createAction<{ id: number; quantity: number }>(
  "UPDATE_STOCK"
); // export const CHECKOUT_SUCCESS = createAction<Product>("CHECKOUT_SUCCESS");
export const checkout = createAction('checkout ')
export const sendOtp = createAction<any>("sendOtp");
