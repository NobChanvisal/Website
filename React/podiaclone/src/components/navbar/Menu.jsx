import React from "react";
import WebsiteButton from "./WebsiteButton";
import SellButton from "./SellButton";
import EmailButton from "./EmailButton";
import ResourcesButton from "./ResourcesButton";


const Menu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`absolute left-4 top-4 right-4 bg-white shadow-lg px-6 py-2 rounded-[20px] hover:bg-[#f5efeb] ${
        isOpen ? "block" : "hidden"
      } lg:hidden`}
    >
      <div className="flex flex-col items-start text-[20px]">
        <div className=" mb-3 w-full flex justify-between items-center">
          <p className=" heading-text">Menu</p>
          <button onClick={onClose} className=" text-[#9c8881] text-[20px]">
          &#10540;
          </button>
        </div>
        <WebsiteButton />
        <EmailButton />
        <SellButton />
        <button className="pricin-btn px-6 py-2 my-2 rounded-[20px] hover:bg-[#f5efeb]">
          Pricing
        </button>
        <ResourcesButton />
        <button className="Signup-btn px-6 py-2 w-full mt-4 text-[17px] font-bold text-white bg-[#4b2aad] rounded-[20px] transition-all hover:bg-[#201445]">
            Sign up free
          </button>
      </div>
    </div>
  );
};

export default Menu;
