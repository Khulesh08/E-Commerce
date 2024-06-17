"use client";
import React, { useState } from "react";
import AllCategories from "./AllCategories/page";
import Advertisement from "./Advertisement/advertisement";
import { Header } from "./Header/header";
import { Footer } from "antd/es/layout/layout";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="bg-grad">
      <Header
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearchChange}
      />

      <div style={{ marginTop: 120 }}>
        
        <Advertisement />
      </div>

      <AllCategories search={search} selectedCategory={selectedCategory} />
      <Footer
        style={{
          textAlign: "center",
          marginTop: "55px",
          background: "#2a272784",
          color: "white",
          borderTop: "2px solid #ffffff26",
          height: "100px",
          paddingTop: "40px",
        }}
      >
        Shopping Cart ©2024 Created by J&T
      </Footer>
    </div>
  );
};

export default App;
