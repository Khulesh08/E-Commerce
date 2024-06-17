import { createAction } from "@reduxjs/toolkit";
import { Product,ID } from "@/interface/interface";

export const addToWishlist = createAction<Product>('addProductToWishlist');
export const removeFromWishlist = createAction<ID>('removeFromWishlist');