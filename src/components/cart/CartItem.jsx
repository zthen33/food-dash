import { useCart } from "../../contexts/CartContext";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { MdDeleteForever } from "react-icons/md";

const CartItem = ({ item }) => {
  const { cartItem, addItemToCart, removeItemFromCart, decreaseItemQuantity } =
    useCart();
  return (
    <div
      className="relative rounded-md border-2
    border-gray-100 p-3 dark:border-gray-700"
    >
      <div className="flex items-center gap-2">
        <div>
          <img
            src={item.image}
            className="size-14 rounded-md
        object-cover transition duration-200 hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium">{item.name}</h3>
          <p className="text-gray-500 dark:text-gray-4">
            ${item.amount * item.quantity}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-1 right-1
      flex items-center gap-2"
      >
        <Button
          className="h-7 font-bold"
          onClick={() => decreaseItemQuantity(item.name)}
        >
          -
        </Button>
        <span className="text-sm">
          {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
        </span>
        <Button onClick={() => addItemToCart(item)} className="h-7 font-bold">
          +
        </Button>
      </div>
      <Button
        className="absolute -right-2 -top-2 text-xl
      text-red-500 hover:text-red-700 dark:text-red-400
      dark:hover:text-red-500 "
        onClick={() => removeItemFromCart(item.name)}
      >
        <MdDeleteForever />
      </Button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
