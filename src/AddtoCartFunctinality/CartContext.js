import React, { createContext, useState} from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addtoCartItems = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removefromCart = (productid) => {
    const updatedCart = cartItems.filter((item) => item.id !== productid);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <cartContext.Provider value={{ cartItems , addtoCartItems, removefromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
