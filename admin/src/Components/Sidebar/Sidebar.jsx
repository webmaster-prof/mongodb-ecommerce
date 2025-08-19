import "./Sidebar.scss";
import add_product_icon from "./../../assets/Product_Cart.svg";
import list_product_icon from "./../../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <Link to={"/addproduct"}>
          <div className="sidebar__item">
            <img
              className="sidebar__item-img"
              src={add_product_icon}
              alt="icon"
            />
            <p className="sidebar__item-title">Add Product</p>
          </div>
        </Link>
        <Link to={"/listproduct"}>
          <div className="sidebar__item">
            <img
              className="sidebar__item-img"
              src={list_product_icon}
              alt="icon"
            />
            <p className="sidebar__item-title">Product List</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
