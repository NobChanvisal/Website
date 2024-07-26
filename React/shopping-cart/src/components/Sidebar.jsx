import React from 'react';
import closeIcon from './images/close.png';


const Sidebar = ({ isOpen, onClose}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[600px] bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-black absolute left-2 top-2">
          <img className='w-6' src={closeIcon} alt="Close icon" />
        </button>
        <div className='grid grid-cols-4 place-items-center pt-6 pb-2 border-b'>
          <p>Product</p>
          <p>Name</p>
          <p>Qty</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
