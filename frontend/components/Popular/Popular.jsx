import Link from "next/link";
import Item from "../Items/Item";
import "./Popular.scss";
import data_product from "@/assets/data";

const Popular = () => {
  return (
    <section className="popular">
      <div className="container">
        <div className="popular__inner">
          <h1 className="popular__title">Popular in women</h1>
          <div className="popular__decor"></div>
          <div className="popular__items">
            {data_product.map((item) => (
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

export default Popular;
