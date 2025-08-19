"use client";

import { useContext } from "react";
import "./shopcategory.scss";
import { ShopContext } from "@/context/ShopContext";
import Image from "next/image";
import arrow_down from "./../../assets/dropdown_icon.png";
import Item from "@/components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <section className="shopcategory">
      <div className="container">
        <div className="shopcategory__inner">
          <Image
            className="shopcategory__image"
            src={props.banner}
            alt="banner"
          />
          <div className="shopcategory__top">
            <p className="shopcategory__top-sub">
              Showing 1-12 <span>out of 36 products</span>
            </p>
            <button className="shopcategory__top-sort">
              <span>Sort by</span>
              <Image src={arrow_down} alt="arrow-icon" />
            </button>
          </div>
          <div className="shopcategory__items">
            {all_product.map((item, index) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <button className="shopcategory__button">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
