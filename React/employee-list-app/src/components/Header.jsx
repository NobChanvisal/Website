import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import iconsbell from "./images/iconsbell.png";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname === "/" ? "/employee" : location.pathname
  );

  useEffect(() => {
    setActiveLink(location.pathname === "/" ? "/employee" : location.pathname);
  }, [location.pathname]);

  const links = [
    { name: "Employee", path: "/employee" },
    { name: "Customer", path: "/customer" },
    { name: "Project", path: "/project" },
    { name: "Calendar", path: "/calendar" },
  ];

  return (
    <div>
      <header>
        <nav className="flex justify-between items-center w-full h-[60px] bg-gray-700">
          <div>
            <ul className="flex items-center gap-[4vw] m-0">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`uppercase no-underline px-[15px] py-[8px] rounded-md text-white hover:bg-gray-900 ease-in duration-200 ${
                      activeLink === link.path ? "bg-gray-900" : ""
                    }`}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img className="w-[35px] mx-5" src={iconsbell} alt="iconBell" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
