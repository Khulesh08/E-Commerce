import { createAction } from "@reduxjs/toolkit";
import { Product } from "@/interface/interface";

export const addProduct = createAction<Product>("addProduct");
export const deleteProduct = createAction<number>("deleteProduct");
export const updateProduct = createAction<Product>("updateProduct");
