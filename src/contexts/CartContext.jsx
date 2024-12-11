import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
//createContext
const CartContext = createContext({});

// custom hook to use the cart context
export const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add items to cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItems = prevItems.find((i) => i.name === item.name);

      if (existingItems) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  //remove items from cart
  const removeItemFromCart = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  // decrease the item quantity it remove item
  const decreaseItemQuantity = (itemName) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.name === itemName) {
            if (item.quantity > 1) {
              // decrease the  if greater than 1
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // if quantity is 1, remove the item from cart
              removeItemFromCart(itemName);
              return null;
            }
          }
          return item;
        })
        .filter((item) => item !== null);
    });
  };

  // calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.amount * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addItemToCart,
        removeItemFromCart,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
