"use client";

import "./../Navbar/Navbar.scss";
import logo from "./../../assets/logo.png";
import cart_icon from "./../../assets/cart_icon.png";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShopContext } from "@/context/ShopContext";
import nav_dropdown from "./../../assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(localStorage.getItem("auth-token"));
  }, []);

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/">
            <div className="header__logo">
              <Image src={logo} alt="header-logo" />
              <p>SHOPPER</p>
            </div>
          </Link>
          <Image
            src={nav_dropdown}
            alt="dropdown-icon"
            onClick={dropdownToggle}
            className="header__dropdown"
          />
          <nav className="header__nav" ref={menuRef}>
            <ul className="header__list">
              <Link href="/">
                <li
                  onClick={() => setMenu("shop")}
                  className={`header__list-item  ${
                    menu === "shop" ? "header__list-active" : ""
                  }`}
                >
                  Shop
                </li>
              </Link>
              <Link href="/men">
                <li
                  onClick={() => setMenu("men")}
                  className={`header__list-item  ${
                    menu === "men" ? "header__list-active" : ""
                  }`}
                >
                  Men
                </li>
              </Link>
              <Link href="/women">
                <li
                  onClick={() => setMenu("women")}
                  className={`header__list-item  ${
                    menu === "women" ? "header__list-active" : ""
                  }`}
                >
                  Women
                </li>
              </Link>
              <Link href="/kids">
                <li
                  onClick={() => setMenu("kids")}
                  className={`header__list-item  ${
                    menu === "kids" ? "header__list-active" : ""
                  }`}
                >
                  Kids
                </li>
              </Link>
            </ul>
          </nav>
          <div className="header__card">
            {auth ? (
              <button
                className="header__card-button"
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  setAuth(null);
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="header__card-button">Login</button>
              </Link>
            )}

            <Link href="/cart">
              <Image
                src={cart_icon}
                alt="header-card-icon"
                className="header__card-icon"
              />
            </Link>
            <div className="header__card-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
