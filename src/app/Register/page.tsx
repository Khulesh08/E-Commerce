"use client";
import React, { useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { FirebaseError } from "firebase/app";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(password === confirmPassword)) {
      return setError("Passwords do not match.");
    } else if (password.length < 6) {
      return setError("Password isn't strong enough");
    }

    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.location.href = "/";
    } catch (error) {
      if ((error as FirebaseError).code) {
        setError((error as FirebaseError).message);
        console.error(
          "Error signing in:",
          (error as FirebaseError).code,
          (error as FirebaseError).message
        );
      } else {
        setError("An unknown error occurred");
        console.error("Unknown error signing in:", error);
      }
    }
  };

  return (
    <div className="login-box">
      <center>
        <h2 className="font-color">Register</h2>
      </center>
      <form onSubmit={handleSubmit}>
        <br />
        <div className="user-box">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            value={email.toLowerCase()}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type={visible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <br />
        <div className="user-box">
          <input
            type={visible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
        </div>
        <center>
          <span>
            <input type="checkbox" onClick={() => setVisible(!visible)} />
            &ensp;<label className="font-color">Show Password</label>
          </span>
        </center>

        <br />
        <center>
          <button type="submit" className="login-btn">
            Register
          </button>
        </center>
      </form>
      <br />
      <center>
        <span>
          <h5 style={{ color: "red" }}>{error}</h5>
        </span>
        <span className="font-color">
          Already have an account?
          <Link href="../Login" className="font-color">
            <b>Login</b>
          </Link>
        </span>
      </center>
    </div>
  );
};

export default RegisterPage;
