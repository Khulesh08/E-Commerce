"use client";
import { Product } from "../../interface/interface";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../Product-Card/page";
import { useSelector } from "react-redux";
import { RootStore } from "@/store/store";
import axios from "axios";
import { Header } from "../Header/header";

const Laptop: React.FC = () => {
  const laptops: Product[] = useSelector(
    (state: RootStore) => state.products.products
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLaptops = useMemo(() => {
    return laptops.filter((product) => product.category === "laptop");
  }, []);

  const filteredProducts = filteredLaptops.filter(
    (product) =>
      product.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (filteredLaptops.length === 0) {
    return (
      <div>
        <div className="text-alignment">
          <p>No Laptops Available...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="search-container" style={{ marginTop: 90 }}>
        <center>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Laptops..."
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

export default Laptop;

//Fetching Data From an API

// import { Product } from "../../interface/interface";
// import { useEffect, useState } from "react";
// import ProductCard from "../Product-Card/page";
// import { useSelector } from "react-redux";
// import { RootStore } from "@/store/store";
// import axios from "axios";

// const Laptop: React.FC = () => {
//   const [laptops, setLaptops] = useState<Product[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://65d71d4a27d9a3bc1d7a36e7.mockapi.io/Laptop",
//           { params: { category: "Laptop" } }
//         );

//         setLaptops(response.data);
//       } catch (error) {
//         console.error("Error Fetching Data;", error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (laptops.length === 0) {
//     return (
//       <div className="text-alignment">
//         <p>No Prodcuts Available...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="product-list">
//       {laptops.map((laptop) => (
//         <ProductCard key={laptop.id} {...laptop} />
//       ))}
//     </div>
//   );
// };

// export default Laptop;

// export const laptops: Type[] = [
//   {
//     id: 1,
//     model: "MacBook",
//     brand: "Apple",
//     price: 2499,
//     stock: 20,
//     quantity: 0,
//     description: `Apple M3 Pro
//     18GB unified memory
//     512GB SSD storage `,
//     image:
//       "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685969130/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256606_ufqgl3.png?tr=w-640",
//   },

//   {
//     id: 2,
//     model: "MacBook",
//     brand: "Apple",
//     price: 1999,
//     stock: 20,
//     quantity: 0,
//     description: `Apple M2 Pro
//     18GB unified memory
//     256GB SSD storage `,
//     image:
//       "data:image/jpeg;base64,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",
//   },

//   {
//     id: 3,
//     model: "MacBook",
//     brand: "Apple",
//     price: 1799,
//     stock: 20,
//     quantity: 0,
//     description: `Apple Macbook i5
//     18GB unified memory
//     256GB SSD storage `,
//     image:
//       "data:image/jpeg;base64,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",
//   },
//   {
//     id: 4,
//     model: "MacBook",
//     brand: "Apple",
//     price: 2199,
//     stock: 20,
//     quantity: 0,
//     description: `Apple Macbook i9
//     18GB unified memory
//     256GB SSD storage `,
//     image:
//       "data:image/jpeg;base64,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",
//   },
// ];
