// Fetching data through API

// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "@/interface/interface";
// import ProductCard from "../Product-Card/page";
// import axios from "axios";

// const AllCategories: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://65d71d4a27d9a3bc1d7a36e7.mockapi.io/Laptop"
//         );
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error Fetching Data;", error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (products.length === 0) {
//     return (
//       <div className="text-alignment">
//         <p>No Prodcuts Available...</p>
//       </div>
//     );
//   }
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductCard key={product.id} {...product} />
//       ))}
//     </div>
//   );
// };

// export default AllCategories;

import React, { useState, useEffect } from "react";
import { Product } from "@/interface/interface";
import ProductCard from "../Product-Card/page";
import { Empty } from "antd";
import firebase from "firebase/compat/app"; //
import "firebase/compat/firestore"; //
import { getLocalStorage } from "@/service/service";

interface AllCategoriesProps {
  search: string;
  selectedCategory: string;
}

const AllCategories: React.FC<AllCategoriesProps> = ({
  search,
  selectedCategory,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const savedProducts = getLocalStorage("products");
    if (savedProducts) {
      try {
        setProducts(savedProducts);
      } catch (error) {
        console.log("fetching data from local storage failed", error);
      }
    }
  }, []);
  useEffect(() => {
    const firestore = firebase.firestore(); //
    const unsubscribe = firestore
      .collection("products")
      .onSnapshot((snapshot) => {
        const updatedProducts: Product[] = [];
        snapshot.forEach((doc) => {
          updatedProducts.push({
            id: doc.id,
            ...doc.data(),
          } as unknown as Product);
        });
        setProducts(updatedProducts);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const isSearchMatch =
      !search ||
      product.model.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().startsWith(search.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });
  if (filteredProducts.length === 0) {
    return (
      <div className="text-alignment" style={{ margin: "500px" }}>
        <center>
          <Empty description={false} />
          <p
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 25,
            }}
          >
            No {selectedCategory} available...
          </p>
        </center>
      </div>
    );
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default AllCategories;
