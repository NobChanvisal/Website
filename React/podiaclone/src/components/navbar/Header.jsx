import React from "react";
import podiaLogo from '../image/navImage/podialogo.png'
import WebsiteButton from "./WebsiteButton";
import EmailButton from "./EmailButton";
import SellButton from "./SellButton";
import ResourcesButton from "./ResourcesButton";

function Header() {
  return (
    <header className="header bg-white shadow-md  py-3 px-[88px] fixed top-0 right-0 left-0 z-50">
      <div className="container flex col justify-between">
        <div className="left-contain flex col flex-none items-center">
            <img className="logo mr-2 w-[75px] h-[25px]" src={podiaLogo} alt="" />
            <WebsiteButton/>
            <EmailButton/>
            <SellButton/>
            <button className="pricin-btn px-6 py-2 rounded-[20px] hover:bg-[#f5efeb]">Pricing</button>
            <ResourcesButton/>
        </div>
        <div className="right-contain">
            <button className="Login-btn px-6 py-2 mr-2 text-[17px] rounded-[20px] transition-all hover:bg-[#f5efeb]">Login</button>
            <button className="Signup-btn px-6 py-2 text-[17px] font-bold text-white bg-[#4b2aad] rounded-[20px] transition-all hover:bg-[#201445]">Sign up free</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
