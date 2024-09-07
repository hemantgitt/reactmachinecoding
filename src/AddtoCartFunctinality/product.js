import React, { useContext } from "react";
import { cartContext } from "./CartContext";

const Product = ({ product }) => {
  const { addtoCartItems } = useContext(cartContext);

  const handleProduct = () => {
    addtoCartItems(product);
  };
  return (
    <>
      <div>
        <h2>{product.name}</h2>
        <h1>Product: `${product.price}`</h1>

        <button onClick={handleProduct}>AddtoCart</button>
      </div>
    </>
  );
};

export default Product;
