import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/Header";
import CartSidebar from "./components/cart/CartSidebar";
import Main from "./components/main/Main";
import CartProvider from "./contexts/CartContext";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isSiderOpen, setIsSiderOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  //dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  //sidebar
  const toggleSidebar = () => setIsSiderOpen(!isSiderOpen);

  //cart
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartProvider>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div
          className="flex bg-white transition-all duration-300 
      ease-in-out dark:bg-gray-950"
        >
          {/*SIDE BAR*/}
          <Sidebar isOpen={isSiderOpen} toggleSidebar={toggleSidebar} />
          {/*Content Sidebar*/}
          <div
            className={`${isSiderOpen ? "ml-44" : "ml-16"} flex-1
        transition-all duration-500 ease-in-out dark:text-white`}
          >
            {/*HEADER*/}
            <Header
              toggleSidebar={toggleSidebar}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
            />
            {/*MAIN*/}
            <Main />
            {/*CARTSIDEBAR*/}
            <CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
