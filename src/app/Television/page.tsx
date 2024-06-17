"use client";
import React, { useMemo, useState } from "react";
import { Product } from "../../interface/interface";
import ProductCard from "../Product-Card/page";
import { RootStore } from "@/store/store";
import { useSelector } from "react-redux";
import "./television.css";
import { Header } from "../Header/header";

const Television = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const televisions: Product[] = useSelector(
    (state: RootStore) => state.products.products
  );

  const filterTelevision = useMemo(() => {
    return televisions.filter((product) => product.category === "television");
  }, []);

  const filteredProducts = filterTelevision.filter(
    (product) =>
      product.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  if (filterTelevision.length === 0) {
    return (
      <div>
        <Header />
        <div className="text-alignment" style={{ color: "white" }}>
          <p>No Televisions Available...</p>
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
            placeholder="Search Televisions..."
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

export default Television;
