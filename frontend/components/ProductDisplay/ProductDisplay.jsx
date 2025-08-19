"use client";

import Image from "next/image";
import "./ProductDisplay.scss";
import star_icon from "./../../assets/star_icon.png";
import star_dull_icon from "./../../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay__inner">
        <div className="productdisplay__images">
          <div className="productdisplay__images-litle">
            <Image
              src={product.image}
              alt="product-image"
              width={500}
              height={500}
            />
            <Image
              src={product.image}
              alt="product-image"
              width={500}
              height={500}
            />
            <Image
              src={product.image}
              alt="product-image"
              width={500}
              height={500}
            />
            <Image
              src={product.image}
              alt="product-image"
              width={500}
              height={500}
            />
            <Image
              src={product.image}
              alt="product-image"
              width={500}
              height={500}
            />
          </div>
          <Image
            className="productdisplay__images-big"
            src={product.image}
            alt="product-image"
            width={500}
            height={500}
          />
        </div>
        <div className="productdisplay__info">
          <h1 className="productdisplay__info-title">{product.name}</h1>
          <div className="productdisplay__info-stars">
            <Image src={star_icon} alt="star-icon" />
            <Image src={star_icon} alt="star-icon" />
            <Image src={star_icon} alt="star-icon" />
            <Image src={star_icon} alt="star-icon" />
            <Image src={star_dull_icon} alt="star-icon" />
            <div>(122)</div>
          </div>
          <div className="productdisplay__info-prices">
            <div>${product.old_price}</div>
            <div>${product.new_price}</div>
          </div>
          <p className="productdisplay__info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloribus quas veritatis ratione in incidunt, magnam assumenda
            cupiditate expedita eos?{" "}
          </p>
          <div className="productdisplay__info-size">
            <h2>Select Size</h2>
            <div className="productdisplay__info-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXl</div>
            </div>
          </div>
          <button
            className="productdisplay__info-button"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            add to cart
          </button>
          <div className="productdisplay__info-category">
            Category: <span>Women, T-Shirt, Crop Top </span>
          </div>
          <div className="productdisplay__info-category">
            Tags: <span>Modern, Latest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
