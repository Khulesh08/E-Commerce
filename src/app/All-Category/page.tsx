// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "@/interface/interface";
// import ProductCard from "../Product-Card/page";
// import { getLocalStorage } from "@/service/service";

// const AllCategories: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const savedProducts = getLocalStorage("products");
//     if (savedProducts) {
//       try {
//         setProducts(savedProducts);
//       } catch (error) {
//         console.log("fetching data from local storage failed", error);
//       }
//     }
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

// // Fetching data through API

// // "use client";
// // import React, { useEffect, useState } from "react";
// // import { Product } from "@/interface/interface";
// // import ProductCard from "../Product-Card/page";
// // import axios from "axios";

// // const AllCategories: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://65d71d4a27d9a3bc1d7a36e7.mockapi.io/Laptop"
// //         );
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error("Error Fetching Data;", error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   if (products.length === 0) {
// //     return (
// //       <div className="text-alignment">
// //         <p>No Prodcuts Available...</p>
// //       </div>
// //     );
// //   }
// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <ProductCard key={product.id} {...product} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default AllCategories;

// "use client";
// import React, { ReactEventHandler, useEffect, useState } from "react";
// import { Product } from "@/interface/interface";
// import ProductCard from "../Product-Card/page";
// import { getLocalStorage } from "@/service/service";
// import { useMemo } from "react";
// import "./allCategory.css";

// const AllCategories: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const filteredProducts = products.filter((product) =>
//     product.model.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };
//   useEffect(() => {
//     const savedProducts = getLocalStorage("products");
//     if (savedProducts) {
//       try {
//         setProducts(savedProducts);
//       } catch (error) {
//         console.log("fetching data from local storage failed", error);
//       }
//     }
//   }, []);

//   if (products.length === 0) {
//     return (
//       <div className="text-alignment">
//         <p>No Prodcuts Available...</p>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search products..."
//       />
//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllCategories;

import React, { useEffect, useState } from "react";
import { Product } from "@/interface/interface";
import ProductCard from "../Product-Card/page";
import { getLocalStorage } from "@/service/service";
import { useMemo } from "react";
import "./allCategory.css";
// import Header from "../Header2/header";

const AllCategories: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = products.filter(
    (product) =>
      product.model.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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

  if (products.length === 0) {
    return (
      <div className="text-alignment">
        <p>No Products Available...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="search-container">
        <center>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="search-input"
          />
        </center>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
