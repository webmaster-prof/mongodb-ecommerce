"use client";

import Item from "../Items/Item";
import "./NewCollections.scss";
import { useEffect, useState } from "react";

const NewCollections = () => {
  const [new_collections, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((res) => res.json())
      .then((data) => setNew_Collections(data));
  }, []);

  return (
    <section className="new">
      <div className="container">
        <div className="new__inner">
          <h1 className="new__title">new collections</h1>
          <div className="new__decor"></div>
          <div className="new__items">
            {new_collections.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
