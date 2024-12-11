import Button from "../button/Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { FaSignOutAlt } from "react-icons/fa";
const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "w-44" : "w-16"}f fixed
    left-0 top-0 h-full overflow-hidden text-gray-900
    transition-all duration-500 ease-in-out dark:text-white`}
    >
      <nav
        className="flex h-full flex-col items-center
      justify-between p-3"
      >
        {/* LOGO */}
        <Logo isOpen={isOpen} />

        {/* Nav Links */}
        <NavLinks isOpen={isOpen} />

        {/* Button */}
        <Button className="flex w-full items-center gap-2">
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;
