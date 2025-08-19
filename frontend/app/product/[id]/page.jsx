"use client";

import data_product from "@/assets/data";
import "./product.scss";
import Breadcrump from "@/components/Breadcrump/Breadcrump";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import DescriptionBlock from "@/components/DescriptionBlock/DescriptionBlock";
import RelateProducts from "@/components/RelateProducts/RelateProducts";
import new_collections from "@/assets/new_collections";
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import { use } from "react";

const ProductPage = ({ params }) => {
  const { all_product } = useContext(ShopContext);
  const { id } = use(params);
  const product = [...new_collections, ...data_product, ...all_product].find(
    (item) => item.id.toString() === id
  );

  if (!product) return <div>Product not found</div>;

  return (
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <Breadcrump product={product} />
          <ProductDisplay product={product} />
          <DescriptionBlock />
          <RelateProducts />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
