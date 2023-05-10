import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
];

interface HeaderProps {
  name: string;
}

const NavItem = ({ name }: HeaderProps) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
      <span className="text-purple-600 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  // define an state visible or unvisible
  const [navIsVisible, setNavIsVisible] = useState(false);

  // define a handler for toggling my nav is visible state so nav
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>{/* <img className="w-16" src="" alt="logo" /> */}</div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <CloseIcon className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <MenuIcon className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        {/* introducing dynamic class suite string */}
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full "
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold font-Ubuntu">
            {/* Use map function to render all the nav items */}
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 font-Ubuntu border-2 border-purple-600 px-6 py-2 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
