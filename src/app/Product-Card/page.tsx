"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/action/cartActions";
import { RootState, RootStore } from "@/store/store";
import "./product.css";
import { Product } from "@/interface/interface";
import { addToWishlist, removeFromWishlist } from "@/action/wishlistActions";
import { Heart } from "lucide-react";
import { notification } from "antd";
import type { NotificationArgsProps, Card } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const ProductCard: React.FC<Product> = ({
  id,
  image,
  brand,
  model,
  price,
  description,
  stock,
  category,
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartArray = Array.isArray(cart) ? cart : [];
  const cartQuantity = cartArray.reduce(
    (total, item) => (item.id === id ? total + item.quantity : total),
    0
  );
  const avlQty = stock - cartQuantity;
  const [quantity, setQuantity] = useState(1);
  const [addedToWishlist, setAddedtoWishlist] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (
    placement: NotificationPlacement,
    message: string
  ) => {
    if (!addedToWishlist) {
      api.success({
        message: message,
        placement,
      });
    } else {
      api.warning({
        message: message,
        placement,
      });
    }
  };

  useEffect(() => {
    if (avlQty === 0) {
      setQuantity(0);
    }

    const wishlistProduct = wishlistItems.find((item) => item.id === id);
    if (wishlistProduct) {
      setAddedtoWishlist(true);
    } else {
      setAddedtoWishlist(false);
    }
  });

  /**
   * Increases the quantity by 1 if it does not exceed the available stock.
   */
  const handleIncreaseQuantity = () => {
    if (quantity < stock - cartQuantity) {
      setQuantity(quantity + 1);
    }
  };

  /**
   * Decreases the quantity by 1 if it's greater than 1.
   */
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  /**
   * This function handles adding a product to the cart.
   * It dispatches an action to add the product to the cart if enough quantity is available.
   */

  const handleAddToCart = useCallback(() => {
    const product = {
      id,
      image,
      brand,
      model,
      price,
      description,
      quantity,
      stock,
      category,
      avlQty,
    };
    if (avlQty >= quantity && avlQty != 0) {
      console.log(product);
      dispatch(addToCart(product));
      const message = "Your Product is Added to the Cart";
      openNotification("bottomRight", message);
    } else {
      const message = "Quantity exceeded";
      openNotification("bottomRight", message);
    }

    setQuantity(1);
  }, [quantity]);

  const handleWishlist = useCallback(() => {
    const product = {
      id,
      image,
      brand,
      model,
      price,
      description,
      quantity,
      stock,
      category,
      avlQty,
    };
    dispatch(addToWishlist(product));
  }, []);
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromWishlist({ id }));
  };
  const handleWishlistClick = () => {
    setAddedtoWishlist(!addedToWishlist);
    const message = !addedToWishlist
      ? "Your Product is Added to the Wishlist"
      : "Your Product is removed from Wishlist";

    if (!addedToWishlist) {
      handleWishlist();
      openNotification("bottomRight", message);
    } else {
      handleRemoveItem(id);
      openNotification("bottomRight", message);
    }
  };

  return (
    <div className="product-card">
      {contextHolder}
      <div style={{ alignSelf: "initial", cursor: "pointer" }}>
        <Heart
          onClick={handleWishlistClick}
          style={{
            color: addedToWishlist ? "red" : "black",
            fill: addedToWishlist ? "pink" : "none",
          }}
        />
      </div>
      <br/>
      <center>
        <img src={image} alt={`${brand} ${model}`} />
        <h2 style={{ color: "black" }}>{model}</h2>
        <p style={{ color: "black" }}>Price: ${price}</p>
        <p style={{ color: "black" }}>{description}</p>
        <p style={{ color: "black" }}>Stock: {stock}</p>
        <p style={{ color: "black" }}>Stock after Purchase: {avlQty}</p>
        <hr className="new1"></hr>
        <br /> <button onClick={handleAddToCart}>Add to Cart</button> &emsp;
        <br />
        <br />
        <p style={{ color: "black" }}>
          <b>Quantity</b> &ensp;
          <br />
          <br />
          <span>
            <button onClick={handleDecreaseQuantity}>-</button>
            &ensp;{quantity}&ensp;
            <button onClick={handleIncreaseQuantity}>+</button>
          </span>
        </p>
      </center>
    </div>
  );
};

export default ProductCard;
