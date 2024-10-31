import React from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

function Navigation({ handleInputChange, query }) {
  return (
    <nav className=" p-5 ml-80 flex flex-row items-center justify-around border-solid border-b-2 border-[#f3f3f3]">
      <div className="nav-container">
        <input
          className="search-input py-3 px-5 bg-slate-50 outline-none border-none mr-5 rounded-md position-relative w-56"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile- flex flex-row">
        <a href="#">
          <CiHeart className=" w-6 h-6 ml-8 text-black"/>
        </a>
        <a href="#">
          <AiOutlineShopping className=" w-6 h-6 ml-8 text-black"/>
        </a>
        <a href="#">
          <BsPerson className=" w-6 h-6 ml-8 text-black"/>
        </a>
      </div>
    </nav>
  );
}
export default Navigation;
