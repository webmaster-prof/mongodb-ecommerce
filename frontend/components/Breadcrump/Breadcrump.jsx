import "./Bredcrump.scss";
import arrow_icon from "./../../assets/breadcrum_arrow.png";
import Image from "next/image";

const Breadcrump = ({ product }) => {
  return (
    <div className="breadcrump">
      <span>Home</span>
      <Image src={arrow_icon} alt="arrow-icon" />
      <span>Shop</span>
      <Image src={arrow_icon} alt="arrow-icon" />
      <span>Men</span>
      <Image src={arrow_icon} alt="arrow-icon" />
      {product.name}
    </div>
  );
};

export default Breadcrump;
