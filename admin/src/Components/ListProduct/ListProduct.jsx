import { useEffect, useState } from "react";
import "./ListProduct.scss";
import crossIcon from "./../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/getallproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <section className="listproduct">
      <div className="listproduct__inner">
        <h1 className="listproduct__title">All Products List</h1>
        <div className="listproduct__main">
          <div className="listproduct__main-header">
            <p className="listproduct__header-title">Products</p>
            <p className="listproduct__header-title">Title</p>
            <p className="listproduct__header-title">Old Price</p>
            <p className="listproduct__header-title">New Price</p>
            <p className="listproduct__header-title">Category</p>
            <p className="listproduct__header-title">Remove</p>
          </div>
          <div className="listproduct__main-body">
            <div className="listproduct__body-list">
              {allproducts.map((product, index) => {
                return (
                  <div className="listproduct__list-item" key={index}>
                    <img
                      className="listproduct__item-img"
                      src={product.image}
                      alt="image"
                    />
                    <h3 className="listproduct__item-title">{product.name}</h3>
                    <p className="listproduct__item-old">
                      ${product.old_price}
                    </p>
                    <p className="listproduct__item-new">
                      ${product.new_price}
                    </p>
                    <p className="listproduct__item-category">
                      {product.category}
                    </p>
                    <img
                      className="listproduct__item-removeicon"
                      src={crossIcon}
                      alt="remove-icon"
                      onClick={() => {
                        remove_product(product.id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
