import React from "react";
import CardComponent from "./CardComponent";
import { useState } from "react";

const AllProduct = () => {
  const [product, setproduct] = useState([
    { title: "Product title 1", description: "Product description" },
    { title: "Product title 2", description: "Product description" },
    { title: "Product title 3", description: "Product description" },
    { title: "Product title 4", description: "Product description" },
  ]);

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      {product.length > 0
        ? product.map((item) => <CardComponent product={item} />)
        : "No Item Found!!"}
    </div>
  );
};

export default AllProduct;
