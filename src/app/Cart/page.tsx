"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  clearCart,
  increaseQuantity,
  updateStock,
  checkout,
} from "@/action/cartActions";
import { RootStore } from "@/store/store";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import "./cart.css";
import { app } from "../../firebase/firebaseConfig";
import { Header } from "../Header/header";
import LoginPage from "../Login/page";
import { addToWishlist } from "@/action/wishlistActions";
import { notification } from "antd";
import { X } from "lucide-react";
import { Empty } from "antd";
import { Footer } from "antd/es/layout/layout";

type NotificationPlacement =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootStore) => state.cart.items);
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    // Additional effects or side-effects here
  }, [loading]);

  const handleIncreaseCartItemQuantity = (id: number) => {
    dispatch(increaseQuantity({ id, quantity: 1 }));
  };

  const handleDecreaseCartItemQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(decreaseQuantity({ id, quantity: 1 }));
    } else {
      dispatch(removeFromCart({ id }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart({ id }));
    const message = "The item is being removed from the cart";
    openNotification("bottomRight", message);
  };

  const handleRemovePopup = (id: number) => {
    setSelectedItemId(id);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    const message = "You have cleared your cart";
    openNotification("bottomRight", message);
  };

  const handleCheckout = () => {
    if (user === null) {
      setShowCheckoutPopup(true);
    } else {
      setLoading(true);
      window.location.href = "/";
      dispatch(checkout());
      dispatch(clearCart());
      cartItems.forEach((item) => {
        const { id, quantity } = item;
        dispatch(updateStock({ id, quantity }));
      });
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleWishlist = useCallback((id: number) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) {
      dispatch(addToWishlist(product));
      setSelectedItemId(null);
      dispatch(removeFromCart({ id }));
      const message = "The item is being moved to the wishlist";
      openNotification("bottomRight", message);
    }
  }, []);

  const openNotification = (
    placement: NotificationPlacement,
    message: string
  ) => {
    api.success({
      message: message,
      placement,
    });
  };

  return (
    <div>
      {contextHolder}
      <Header />
      {cartItems.length === 0 && (
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
            Your cart is empty!
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
      {cartItems.length > 0 && (
        <>
          <div className="cart-card" style={{ marginTop: 140 }}>
            {cartItems.map((item) => (
              <div key={item.id} className="product-card">
                <div className="description-container">
                  <img src={item.image} alt={`${item.brand} ${item.model}`} />
                  <h2 style={{ color: "black" }}>{item.model}</h2>
                  <p style={{ color: "black" }}>Price: ${item.price}</p>
                  <p style={{ color: "black" }}>{item.description}</p>
                  <p style={{ color: "black" }}>
                    Price: $ {item.price * item.quantity}
                  </p>
                </div>
                <div className="">
                  <span style={{ color: "black" }}>
                    <center>
                      Quantity
                      <br />
                      <br />
                      <span>
                        <button
                          onClick={() =>
                            handleDecreaseCartItemQuantity(item.id)
                          }
                        >
                          -
                        </button>
                        &ensp;{item.quantity}&ensp;
                        <button
                          onClick={() =>
                            handleIncreaseCartItemQuantity(item.id)
                          }
                        >
                          +
                        </button>
                      </span>
                    </center>
                  </span>

                  <br />
                  <span className="item-align">
                    <center>
                      <button onClick={() => handleRemovePopup(item.id)}>
                        Remove
                      </button>
                    </center>
                  </span>
                </div>
              </div>
            ))}
            <br />
            <br />
          </div>
          <div
            className="clearbutton-align"
            style={{
              display: "block",
              marginBlock: 50,
              textAlign: "center",
            }}
          >
            <button className="cart-button" onClick={handleClearCart}>
              Clear Cart
            </button>
            &emsp;
            {cartItems.length > 0 && (
              <button className="cart-button" onClick={handleCheckout}>
                Checkout
              </button>
            )}
            <br />
            <br />
            {cartItems.length > 0 && (
              <div>
                <h3
                  className="font-color"
                  style={{ bottom: 8, fontFamily: "Times New Roman" }}
                >
                  Total Price: <b>${totalPrice}</b>
                </h3>
                <p style={{ color: "white" }}>(Inclusive of all the taxes)</p>
                <br />
              </div>
            )}
          </div>
          <Footer
            style={{
              textAlign: "center",
              marginTop: "55px",
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

      {selectedItemId !== null && (
        <div className="popup">
          <div className="login-box" style={{ textAlign: "center" }}>
            <span
              className="close"
              onClick={() => setSelectedItemId(null)}
              style={{ color: "white", fontSize: 20 }}
            >
              <X />
            </span>
            <br />
            <h5 style={{ color: "white", fontFamily: "Times New Roman" }}>
              Would you like to move selected Product to your Wishlist?
            </h5>
            <br />
            <center>
              <button onClick={() => handleWishlist(selectedItemId)}>
                Move to Wishlist
              </button>
              &emsp;
              <button
                onClick={() => {
                  handleRemoveItem(selectedItemId);
                  setSelectedItemId(null);
                }}
              >
                Remove
              </button>
            </center>
          </div>
        </div>
      )}

      {showCheckoutPopup && (
        <div className="popup">
          <div className="login-box">
            <h5 style={{ color: "white", fontFamily: "Times New Roman" }}>
              Please login to proceed with checkout.
            </h5>
            <br />
            <center>
              <button onClick={() => setShowLogin(true)}>Login</button> &emsp;
              <button onClick={() => setShowCheckoutPopup(false)}>
                Cancel
              </button>
            </center>
          </div>
        </div>
      )}
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Cart;
