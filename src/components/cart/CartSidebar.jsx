import { FaTimes } from "react-icons/fa";
import Button from "../button/Button";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

const CartSidebar = ({ isCartOpen, toggleCart }) => {
  const { cartItems, totalAmount } = useCart();
  return (
    <div
      className={`fixed right-0 top-0 z-20 h-screen
    w-[400px] transform transiton-trasnform duration-300
    ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div
        className="flex h-screen flex-col bg-white
      shadow-lg dark:bg-gray-900 dark:text-gray-200 
      rounded-bl-3xl rounded-tl-3xl"
      >
        {/* Cart Header */}
        <div
          className="flex items-center justify-between
        border-b border-gray-200 p-4 dark:border-gray-700"
        >
          <h2>Your Cart</h2>
          <Button onClick={toggleCart}>
            <FaTimes size={20} />
          </Button>
        </div>

        <div className="flex-1 p-3">
          {cartItems?.length === 0 ? (
            <p
              className="text-center text-gray-600
            dark:text-gray-400"
            >
              Your cart it empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems?.map((item) => (
                <CartItem key={item.name} item={item} />
              ))}
            </div>
          )}
        </div>

        <div
          className="overflow-hidden border-t border-gray-200 p-4
        dark:border-gray-700"
        >
          <p
            className="text-lg font-semibold flex
            items-center justify-between"
          >
            Total Amount:{" "}
            <span className="font-bold text-xl">${totalAmount}</span>
          </p>
          <Button className="mt-5 w-full ">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

CartSidebar.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default CartSidebar;
