"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./login.css";
import Link from "next/link";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { app, auth } from "../../firebase/firebaseConfig";
import Home from "../page";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

interface LoginPageProps {
  onClose: () => void;
}
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  }
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose }) => {
  const countryCode = "+91";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState<boolean>(false);
  const [usingEmail, setUsingEmail] = useState<boolean>(true);
  const [toVerify, setToVerify] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();

  const router = useRouter();

  const openNotification = useCallback(
    (placement: NotificationPlacement) => {
      api.warning({
        message: `User Logged Out`,
        placement,
      });
    },
    [api]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      openNotification("bottomRight");

      console.log("User signed in:", user);
      setError("");
      setEmail("");
      setPassword("");
      Home;
      router.push("/");
      onClose();
    } catch (error) {
      if ((error as FirebaseError).code) {
        setError((error as FirebaseError).message);
        console.error(
          "Error signing in:",
          (error as FirebaseError).code,
          (error as FirebaseError).message
        );
      } else {
        setError((error as FirebaseError).message);
        console.error("Unknown error signing in:", error);
      }
    }
  };

  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      window.recaptchaVerifier
        .render()
        .then((widgetId) => {
          console.log("reCAPTCHA rendered successfully");
          console.log(widgetId);
        })
        .catch((error) => {
          console.error("Error rendering reCAPTCHA:", error);
        });
    }
  };

  const handleSubmitPhoneNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setToVerify(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          console.log(error);
          (error as FirebaseError).code, (error as FirebaseError).message;
        });
    }
  };

  const handleResendCode = () => {
    setVerificationCode("");
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVerify = () => {
    if (verificationCode.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(verificationCode)
        .then((result) => {
          const user = result.user;
          openNotification("bottomRight");

          console.log("User signed in:", user);
          router.push("/");
          onClose();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {usingEmail ? (
        <div className="popup">
          <div className="login-box">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <center>
              <h2 className="font-color">Login</h2>
            </center>
            <br />
            <form onSubmit={handleSubmit} className="form">
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  value={email.toLowerCase()}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <center>
                <span>
                  <input type="checkbox" onClick={() => setVisible(!visible)} />
                  &ensp;<label className="font-color">Show Password</label>
                </span>
              </center>
              <br />
              <center>
                <button className="login-btn" type="submit">
                  Login
                </button>
              </center>
            </form>
            <br />
            <center>
              <h6 style={{ color: "red" }}>{error}</h6>
              <p className="font-color">
                Don't have an account?
                <b>
                  &ensp;
                  <Link href="../Register" className="font-color">
                    Register
                  </Link>
                </b>
                <br /> <br />
                <a onClick={() => setUsingEmail(false)}>
                  Sign In using Phone Number
                </a>
              </p>
            </center>
          </div>
        </div>
      ) : (
        <div className="popup">
          <div className="login-box">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <center>
              <h2 className="font-color">Login</h2>
            </center>
            <br />
            <form onSubmit={handleSubmitPhoneNumber} className="form">
              <div>
                <div className="user-box">
                  <input
                    type="tel"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <label>Phone Number</label>
                </div>
              </div>
              {!toVerify && (
                <center>
                  <button className="login-btn" type="submit">
                    Send OTP
                  </button>
                </center>
              )}
              {toVerify && (
                <div>
                  <div className="user-box">
                    <input
                      type="text"
                      inputMode="numeric"
                      name="OTP"
                      value={verificationCode}
                      onChange={(e) => {
                        setVerificationCode(e.target.value);
                      }}
                      required
                    />
                    <label> Enter OTP</label>
                    <br />
                    <center>
                      <h6 style={{ color: "red" }}>{error}</h6>
                      <button className="login-btn" onClick={handleVerify}>
                        Verify Code
                      </button>
                      &emsp;
                      <button className="login-btn" onClick={handleResendCode}>
                        Resend
                      </button>
                    </center>
                  </div>
                </div>
              )}
            </form>

            <br />
            <center>
              <h6 style={{ color: "red" }}>{error}</h6>
              <p className="font-color">
                <a onClick={() => setUsingEmail(true)}>Sign In using Email</a>
              </p>
            </center>
          </div>
        </div>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginPage;
