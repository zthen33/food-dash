import { menuList } from "../../constants";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ isOpen }) => {
  return (
    <ul className="space-y-3">
      {menuList.map((item) => (
        <a
          href={item.path}
          key={item.name}
          className="flex items-center gap-3 roun p-2
        px-4 font-normal uppercase text-gray-500
        hover:bg-emerald-400 hover:text-gray-100
        dark:text-white/50 dark:hover:text-gray-500
        transition-all duration-300"
        >
          <span className="text-lg">{item.icon}</span>
          {isOpen && <span className="text-sm">{item.name}</span>}
        </a>
      ))}
    </ul>
  );
};

export default NavLinks;
