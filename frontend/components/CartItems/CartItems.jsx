"use client";

import { useContext } from "react";
import "./CartItems.scss";
import Image from "next/image";
import remove_icon from "./../../assets/cart_cross_icon.png";
import { ShopContext } from "@/context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems__inner">
        <div className="cartitems__header">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="cartitems__line"></div>
        <div className="cartitems__details">
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className="cartitems__detail" key={e.id}>
                  {" "}
                  <Image
                    src={e.image}
                    alt="product"
                    className="cartitems__image"
                  />
                  <p className="cartitems__name">{e.name}</p>
                  <p className="cartitems__price">${e.new_price}</p>
                  <button className="cartitems__quantity">
                    {cartItems[e.id]}
                  </button>
                  <p className="cartitems__allprice">
                    ${e.new_price * cartItems[e.id]}
                  </p>
                  <Image
                    src={remove_icon}
                    alt="remove"
                    onClick={() => removeFromCart(e.id)}
                    className="cartitems__icon"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cartitems__info">
          <div className="cartitems__left">
            <h2 className="cartitems__left-title">cart Totals</h2>
            <div className="cartitems__left-items">
              <div className="cartitems__left-item">
                <p>Subtotal</p>
                <span>${getTotalCartAmount()}</span>
              </div>
              <div className="cartitems__left-line"></div>
              <div className="cartitems__left-item">
                <p>Shipping Free</p>
                <span>Free</span>
              </div>
              <div className="cartitems__left-line"></div>
              <div className="cartitems__left-item">
                <p>Total</p>
                <span>${getTotalCartAmount()}</span>
              </div>
            </div>
            <button className="cartitems__left-button">proceed checkout</button>
          </div>
          <div className="cartitems__right">
            <p className="cartitems__right-text">
              If You have a promp code, Inter it here
            </p>
            <div className="cartitems__right-form">
              <input
                className="cartitems__right-input"
                type="text"
                placeholder="promo order"
              />
              <button className="cartitems__right-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
