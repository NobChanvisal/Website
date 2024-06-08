import React from "react";
import iconsbell from "./images/iconsbell.png";

function Header() {
  return (
    <div>
      <header>
        <nav className=" flex justify-between items-center w-full h-[60px] bg-gray-700">
          <div>
            <ul className="flex items-center gap-[4vw] m-0">
              <li>
                <a className=" uppercase no-underline px-[15px] py-[8px] rounded-md text-white hover:bg-gray-900" href="">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="uppercase no-underline px-[15px] py-[8px] rounded-md text-white hover:bg-gray-900" href="">
                  Team
                </a>
              </li>
              <li>
                <a className="uppercase no-underline px-[15px] py-[8px] rounded-md text-white hover:bg-gray-900" href="">
                  Project
                </a>
              </li>
              <li>
                <a className="uppercase no-underline px-[15px] py-[8px] rounded-md text-white hover:bg-gray-900" href="">
                  Calendar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src={iconsbell} alt="iconBell" />
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
