import React, { useState } from 'react';
import marketCart from './images/market.png';
import Sidebar from './Sidebar';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md py-4 px-10 fixed top-0 w-full">
        <div className="flex justify-between">
          <div className="text-[20px]">Product List</div>
          <img
            className="w-7 cursor-pointer"
            src={marketCart}
            alt="Market Cart"
            onClick={toggleSidebar}
          />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
    </>
  );
}

export default Header;
