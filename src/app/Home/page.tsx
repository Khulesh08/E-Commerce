"use client";
import React, { useEffect } from "react";
import "./home.css";
import { useRouter } from "next/navigation";

export interface HomeProps {
  onSelectCategory: (category: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectCategory }) => {
  const router = useRouter();

  return (
    <div>
      <center>
        <br />
        <button className="button-css" onClick={() => onSelectCategory("all")}>
          All Categories
        </button>
        &emsp;
        <button
          className="button-css"
          onClick={() => onSelectCategory("laptop")}
        >
          Laptops
        </button>
        &emsp;
        <button
          className="button-css"
          onClick={() => onSelectCategory("mobile")}
        >
          Mobiles
        </button>
        &emsp;
        <button
          className="button-css"
          onClick={() => onSelectCategory("television")}
        >
          Televisions
        </button>
        &emsp;
        
      </center>
    </div>
  );
};

export default Home;
