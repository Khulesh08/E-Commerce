// import { Product } from "@/interface/interface";

// export const submitNewProducts = async (newProducts: Product[]) => {
//   try {
//     const localProducts = JSON.parse(localStorage.getItem("products") || "[]");

//     const updatedLocalProducts = [...localProducts, newProducts];
//     localStorage.setItem("products", JSON.stringify(updatedLocalProducts));

//     return updatedLocalProducts;
//   } catch (error) {
//     console.error("Error submitting new products:", error);
//     throw error;
//   }
// };

// export const submitNewCart = async (newCart: Product[]) => {
//   try {
//     const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const updatedLocalCart = [...localCart, newCart];
//     localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
//     return updatedLocalCart;
//   } catch (error) {
//     console.log("Error on submitting cart :", error);
//     throw error;
//   }
// };

// export const updateAvailableQuantity = async (
//   productId: number,
//   avlQty: number
// ) => {
//   try {
//     const localProducts = JSON.parse(localStorage.getItem("products") || "[]");

//     const updatedLocalProducts = localProducts.map((product: any) => {
//       if (product.productId === productId) {
//         return { ...product, stock: avlQty };
//       }
//       return product;
//     });

//     localStorage.setItem("products", JSON.stringify(updatedLocalProducts));

//     return updatedLocalProducts.find(
//       (product: any) => product.productId === productId
//     );
//   } catch (error) {
//     console.error("Error updating available quantity:", error);
//     throw error;
//   }
// };
