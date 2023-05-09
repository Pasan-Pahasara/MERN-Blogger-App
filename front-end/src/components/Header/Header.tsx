import React from "react";

const NavItemsInfo =[
  {name:"Home"},
  {name:"Articles"},
  {name:"Pages"},
  {name:"Pricing"},
  {name:"Faq"},
]

interface HeaderProps {
  name: string;
}

const NavItem = ({name}: HeaderProps) => {
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
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>{/* <img src='' alt='logo' /> */}</div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold font-Ubuntu">
            {/* Use map function to render all the nav items */}
            {NavItemsInfo.map((item) =>   (
              <NavItem key={item.name} name={item.name}/>
            ))}
          </ul>
          <button className="font-Ubuntu border-2 border-purple-600 px-6 py-2 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
