import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const headerNav = [
    {
      display: "Thế Giới",
      path: "/world",
    },
    {
      display: "Việt Nam",
      path: "/",
    },
    {
      display: "Tin Tức",
      path: "/news",
    },
  ];
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <header>
      <div className="flex justify-between items-center px-9 h-16 w-full bg-white shadow-md ">
          <Link to="/">
            <div className="cursor-pointer flex items-center gap-x-3 ">
                <i className="bx bxs-virus text-[#53c7f9] text-[40px]"></i>
                <p className=" text-black text-[15px] font-bold">Covid-19 Tracker</p>
            </div>
          </Link>
        <nav>
          <ul className="flex gap-x-10 mr-44">
            {headerNav.map((e, i) => (
              <li
                key={i}
                className={`text-gray-600 ${
                  i === active ? "text-red-500 font-bold" : ""
                }`}
              >
                <Link className="hover:text-black" to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <i className="cursor-pointer bx bxs-sun text-[25px] text-yellow-400"></i>
        </div>
      </div>
    </header>
  );
};
export default Header;
