// import { Product } from "../../interface/interface";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "../Product-Card/page";
// import { useSelector } from "react-redux";
// import { RootStore } from "@/store/store";

// const Mobile: React.FC = () => {

//   const [mobiles, setMobiles] = useState<Product[]>([]);

//   useEffect(()=>{
//     const fetchData =
//   })

//   if (mobiles.length === 0) {
//     return (
//       <div className="text-alignment">
//         <p>No Prodcuts Available...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="product-list">
//       {mobiles.map((mobile) => (
//         <ProductCard key={mobile.id} {...mobile} />
//       ))}
//     </div>
//   );
// };

// export default Mobile;
// "use client";
// import { Product } from "../../interface/interface";
// import ProductCard from "../Product-Card/page";
// import { useSelector } from "react-redux";
// import { RootStore } from "@/store/store";
// import { useMemo, useState } from "react";
// import { Header } from "../Header/header";

// const Mobile: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const mobiles: Product[] = useSelector(
//     (state: RootStore) => state.products.products
//   );

//   const filteredMobiles = useMemo(() => {
//     return mobiles.filter((product) => product.category === "mobile");
//   }, []);

//   const filteredProducts = filteredMobiles.filter(
//     (product) =>
//       product.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
//       product.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
//   );

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   if (filteredMobiles.length === 0) {
//     return (
//       <div>
//         <Header />
//         <div
//           className="text-alignment"
//           style={{ color: "white", marginTop: 350 }}
//         >
//           <center>
//             <p>No Mobile Available...</p>
//           </center>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <div className="search-container" style={{ marginTop: 90 }}>
//         <center>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             placeholder="Search Mobiles..."
//             className="search-input"
//           />
//         </center>
//       </div>
//       <div className="product-list">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobile;

// export const mobiles: Type[] = [
//   {
//     id: 11,
//     model: "Iphone",
//     brand: "Apple",
//     price: 999,
//     stock: 20,
//     quantity: 0,
//     description: "MacBook i3",
//     image:
//       "data:image/jpeg;base64,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",
//   },

//   {
//     id: 12,
//     model: "Iphone",
//     brand: "Apple",
//     price: 999,
//     stock: 20,
//     quantity: 0,
//     description: "Mackbook i5",
//     image:
//       "data:image/jpeg;base64,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",
//   },

//   {
//     id: 13,
//     model: "Iphone",
//     brand: "Apple",
//     price: 999,
//     stock: 20,
//     quantity: 0,
//     description: "Mackbook i5",
//     image:
//       "data:image/jpeg;base64,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",
//   },

//   {
//     id: 14,
//     model: "iphone",
//     brand: "Apple",
//     price: 999,
//     stock: 20,
//     quantity: 0,
//     description: "Mackbook i5",
//     image:
//       "data:image/jpeg;base64,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",
//   },
// ];
