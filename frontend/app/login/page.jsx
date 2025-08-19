"use client";

import { useState } from "react";
import "./login.scss";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    console.log("SignUp Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login__inner">
          <div className="login__content">
            <h1 className="login__title">{state}</h1>
            <form action="#" className="login__form">
              {state === "Sign Up" ? (
                <input
                  className="login__form-input"
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  value={formData.username}
                  onChange={changeHandler}
                />
              ) : (
                <></>
              )}
              <input
                className="login__form-input"
                type="email"
                name="email"
                placeholder="Email Adress"
                value={formData.email}
                onChange={changeHandler}
              />
              <input
                className="login__form-input"
                type="text"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={changeHandler}
              />
              <button
                className="login__form-button"
                onClick={() => {
                  state === "Login" ? login() : signUp();
                }}
              >
                Continue
              </button>
              {state === "Sign Up" ? (
                <p className="login__form-text">
                  Alreody have on account?{" "}
                  <span onClick={() => setState("Login")}>Login here</span>
                </p>
              ) : (
                <p className="login__form-text">
                  Create an account?{" "}
                  <span onClick={() => setState("Sign Up")}>Click here</span>
                </p>
              )}
              <div className="login__form-checkbox">
                <input type="checkbox" />
                <p className="login__form-text">
                  By contiruing i ogne to the terems of use & privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
