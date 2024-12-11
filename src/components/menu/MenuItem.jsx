import Button from "../button/Button";
import { useCart } from "../../contexts/CartContext";
import PropTypes from "prop-types";
const MenuItem = ({ menuItem }) => {
  const { cartItems, addItemToCart, decreaseItemQuantity } = useCart();

  const inCart = cartItems?.find((item) => item.name === menuItem.name);

  return (
    <div
      className="flex cursor-pointer flex-col
    gap-6 rounded-lg bg-white p-5 text-gray-600 transition-all
    duration-300 ease-in-out hover:outline hover:outline-teal-500
    dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600
    dark:hover:outline"
    >
      <div className="overflow-hidden rounded-md">
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className="h-48 w-full rounded-md object-cover
        transition duration-300 ease-in hover:scale-110
        sm:h-52 md:h-60"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{menuItem.name}</h3>
        <p className="font-semibold text-emerald-500">${menuItem.amount}</p>
      </div>

      {/* in cart*/}
      {inCart ? (
        <div
          className="flex items-center justify-between
     rounded-lg bg-emerald-100 p-1 px-5 dark:bg-gray-500
     dark:text-gray-200"
        >
          <Button
            onClick={() => decreaseItemQuantity(menuItem.name)}
            className="size-8 rounded-full
        bg-emerald-500 font-bold text-white"
          >
            -
          </Button>
          <span>
            {inCart?.quantity < 10 ? `0${inCart?.quantity}` : inCart?.quantity}
          </span>
          <Button
            onClick={() => addItemToCart(menuItem)}
            className="size-8 rounded-full
        bg-emerald-500 font-bold text-white"
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => addItemToCart(menuItem)}
          className="w-full bg-emerald-300
        font-bold tracking-widest"
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  menuItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
