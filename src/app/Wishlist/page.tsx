"use client";
import React, { useEffect, useCallback } from "react";
import { Product } from "@/interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/action/cartActions";
import { RootStore } from "@/store/store";
import "./wishlist.css";
import { Header } from "../Header/header";
import { ShoppingCart } from "lucide-react";
import { removeFromWishlist } from "@/action/wishlistActions";
import { setLocalStorage } from "@/service/service";
import { notification } from "antd";
import { NotificationArgsProps } from "antd";
import { Empty } from "antd";
import { Footer } from "antd/es/layout/layout";

type NotificationPlacement = NotificationArgsProps["placement"];

const Cart: React.FC<Product> = ({ id }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootStore) => state.wishlist.items);
  const cart = useSelector((state: RootStore) => state.cart.items);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (
    placement: NotificationPlacement,
    message: string
  ) => {
    api.success({
      message: message,
      placement,
    });
  };

  useEffect(() => {
    setLocalStorage("products", products);
  }, []);

  const products: Product[] = useSelector(
    (state: RootStore) => state.products.products
  );

  /**
   * Removes an item from the cart by dispatching the removeFromCart action.
   * @param {number} id - The ID of the item to be removed.
   */
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromWishlist({ id }));
    const message = "Your Product is being removed from the wishlist";
    openNotification("bottomRight", message);
  };

  const handleAddtoCart = (id: number) => {
    const product = wishlistItems.find((item) => item.id === id);
    if (product) {
      console.log(product);
      dispatch(addToCart(product));
      const message = "Your Product is Added to the Cart";
      openNotification("bottomRight", message);
    }
  };

  return (
    <div>
      {contextHolder}
      <div>
        <Header />
      </div>
      <div>
        {wishlistItems.length === 0 && (
          <>
            <p
              style={{
                textAlign: "center",
                fontSize: 30,
                color: "white",
                marginTop: 400,
              }}
            >
              <Empty description={false} style={{ fontSize: 20 }} />
              Your Wishlist is empty!
            </p>
            <Footer
              style={{
                textAlign: "center",
                marginTop: "300px",
                background: "#2a272784",
                color: "white",
                borderTop: "2px solid #ffffff26",
                height: "100px",
                paddingTop: "40px",
                position: "initial",
              }}
            >
              Shopping Cart ©2024 Created by J&T
            </Footer>
          </>
        )}
        {wishlistItems.length > 0 && (
          <>
            <div className="cart-card" style={{ marginTop: 140 }}>
              {wishlistItems.map((item) => (
                <div key={item.id} className="product-card">
                  <div className="description-container">
                    <img src={item.image} alt={`${item.brand} ${item.model}`} />
                    <h2 style={{ color: "black" }}>{item.model}</h2>
                    <p style={{ color: "black" }}>Price: ${item.price}</p>
                    <p style={{ color: "black" }}>{item.description}</p>
                  </div>
                  <div className="">
                    <span className="item-align">
                      <center>
                        <button onClick={() => handleRemoveItem(item.id)}>
                          Remove
                        </button>
                        &ensp;
                        <button onClick={() => handleAddtoCart(item.id)}>
                          <ShoppingCart />
                        </button>
                      </center>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Footer
              style={{
                textAlign: "center",
                marginTop: "175px",
                background: "#2a272784",
                color: "white",
                borderTop: "2px solid #ffffff26",
                height: "100px",
                paddingTop: "40px",
              }}
            >
              Shopping Cart ©2024 Created by J&T
            </Footer>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
