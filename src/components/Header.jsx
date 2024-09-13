import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get current path

  const Nav = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Rooms",
      path: "/rooms",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact us",
      path: "/contact",
    },
  ];

  return (
    <div className="p-4 shadow-sm item-center">
      <div className="flex justify-between font-semibold text-xl mr-5 gap-10">
        <img src="/head.svg" alt="logo" width={50} height={50} />

        <ul className="md:flex gap-20 hidden">
          {Nav.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all ease-in-out ${
                location.pathname === item.path
                  ? "text-purple-500 underline"
                  : "hover:text-purple-500"
              }`}
            >
              <Link
                to={item.path}
                className={`hover:scale-105 ${
                  location.pathname === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
