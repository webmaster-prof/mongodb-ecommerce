import Image from "next/image";
import "./Offers.scss";

import exclusive_image from "./../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <section className="offers">
      <div className="container">
        <div className="offers__inner">
          <div className="offers__content">
            <p className="offers__content-title">ecxclusive offers for you</p>
            <h3 className="offers__content-sub">
              only on best sellers products
            </h3>
            <button className="offers__content-button">
              <span>check now</span>
            </button>
          </div>
          <div className="offers__images">
            <Image src={exclusive_image} alt="offers-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
