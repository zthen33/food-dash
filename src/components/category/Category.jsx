import { categories } from "../../constants";
import { motion } from "framer-motion";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const containerVariants = {
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
      className="grid grid-cols-1 gap-4 sm:grid-cols-2
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
    >
      {categories.map((category) => (
        <CategoryItem key={category.name} category={category} />
      ))}
    </motion.div>
  );
};

export default Category;
