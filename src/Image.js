import React from "react";
import product from "./product";

const Image = () => <img src={product.image} alt={product.name} className="product-img" />;

export default Image;
