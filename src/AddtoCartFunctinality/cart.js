import React, { useContext } from "react";
import { cartContext } from "./CartContext";

export const Cart = () => {
  const { cartItems, removefromCart, clearCart } = useContext(cartContext);

  const handleRemoveFromCart = (productid) => {
    removefromCart(productid);
  };

  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}{" "}
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={clearCart}>
            clearCart
        </button>
      </div>
    </>
  );
};
