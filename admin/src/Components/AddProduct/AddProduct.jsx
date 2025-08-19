import "./AddProduct.scss";
import upload_area from "./../../assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <section className="addproduct">
      <div className="addproduct__inner">
        <div className="addproduct__items">
          <div className="addproduct__item">
            <h2 className="addproduct__title">Product Title</h2>
            <input
              value={productDetails.name}
              onChange={changeHandler}
              className="addproduct__input"
              type="text"
              name="name"
              placeholder="Type Here"
            />
          </div>
          <div className="addproduct__block">
            <div className="addproduct__item">
              <h2 className="addproduct__title">Price</h2>
              <input
                value={productDetails.old_price}
                onChange={changeHandler}
                className="addproduct__input"
                type="text"
                name="old_price"
                placeholder="Type Here"
              />
            </div>
            <div className="addproduct__item">
              <h2 className="addproduct__title">Offer Price</h2>
              <input
                value={productDetails.new_price}
                onChange={changeHandler}
                className="addproduct__input"
                type="text"
                name="new_price"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="addproduct__item">
            <h2 className="addproduct__title">Product Category</h2>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="addproduct__select"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div className="addproduct__item">
            <label htmlFor="file-input">
              <img
                className="addproduct__upload-image"
                src={image ? URL.createObjectURL(image) : upload_area}
                alt="upload-area-image"
              />
            </label>
            <input
              onChange={imageHandler}
              type="file"
              name="image"
              id="file-input"
              hidden
            />
          </div>
          <button
            onClick={() => {
              Add_Product();
            }}
            className="addproduct__button"
          >
            ADD
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
