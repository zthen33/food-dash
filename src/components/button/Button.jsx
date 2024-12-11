import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Button = ({ children, onClick, className }) => {
  const buttonVariant = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 7,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={twMerge(
        "flex w-max items-center justify-center rounded-md bg-gray-100 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        className
      )}
      variants={buttonVariant}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
};

export default Button;
