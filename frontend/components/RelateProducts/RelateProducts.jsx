import Item from "../Items/Item";
import "./RelateProducts.scss";
import data_product from "@/assets/data";

const RelateProducts = () => {
  return (
    <section className="relate">
      <div className="relate__inner">
        <h1 className="relate__title">Related Products</h1>
        <div className="relate__line"></div>
        <div className="relate__items">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelateProducts;
