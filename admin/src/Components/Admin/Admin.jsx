import AddProduct from "../AddProduct/AddProduct";
import ListProduct from "../ListProduct/ListProduct";
import Sidebar from "../Sidebar/Sidebar";
import "./Admin.scss";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <section className="admin">
      <div className="container">
        <div className="admin__inner">
          <Sidebar />
          <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Admin;
