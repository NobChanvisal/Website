import React, { useState } from "react";
import podiaLogo from "../image/navImage/podialogo.png";
import WebsiteButton from "./WebsiteButton";
import EmailButton from "./EmailButton";
import SellButton from "./SellButton";
import ResourcesButton from "./ResourcesButton";
import Menu from "./Menu";
import dropdown from "../image/dropdown.svg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-white shadow-md py-3 fixed top-0 right-0 left-0 z-50">
      <div className="px-4 lg:container flex justify-between">
        <div className="left-contain flex items-center">
          <img className="logo mr-2 w-[75px] h-[25px]" src={podiaLogo} alt="" />
          <div className="menu-bar flex items-center max-lg:hidden">
            <WebsiteButton />
            <EmailButton />
            <SellButton />
            <button className="pricin-btn px-6 py-2 rounded-[20px] hover:bg-[#f5efeb]">
              Pricing
            </button>
            <ResourcesButton />
          </div>
        </div>
        <div className="right-contain flex items-center">
          <button className="Login-btn px-6 py-2 mr-2 text-[17px] rounded-[20px] transition-all hover:bg-[#f5efeb]">
            Login
          </button>
          <button className="Signup-btn px-6 py-2 hidden lg:block text-[17px] font-bold text-white bg-[#4b2aad] rounded-[20px] transition-all hover:bg-[#201445]">
            Sign up free
          </button>
          <div
            onClick={toggleSidebar}
            className="menu-toggle-btn lg:hidden flex px-3 py-2 text-[17px] rounded-[20px] hover:bg-[#f5efeb]"
          >
            Menu
            <img src={dropdown} alt="" />
          </div>
          <Menu isOpen={isMenuOpen} onClose={toggleSidebar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
