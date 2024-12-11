import { menuItems } from "../../constants";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const Menu = () => {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="mt-7"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2
      md:grid-cols-3 lg:grid-cols-4"
      >
        {menuItems.map((item) => (
          <MenuItem key={item.name} menuItem={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
