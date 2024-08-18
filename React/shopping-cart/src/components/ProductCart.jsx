import React from 'react';
import shoppingCart from '../components/images/cart.png';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function ProductCart(props) {
  const { proId, proImg, proName, proInfo, proPrice, proSize, delays } = props;
  
  return (
    <motion.div
      className="card-container bg-white w-[250px] mx-5 my-3 place-items-center flex flex-col rounded-3xl border border-slate-300 hover:shadow-lg hover:shadow-slate-300"
      initial={{ x: 0, y: 200, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: delays }}
      variants={cardVariants}
    >
      <div className="image w-[100%]">
      <img className="mb-2 rounded-t-3xl w-[100%] h-[250px] object-cover" src={proImg} alt={proName} />
      </div>
      <div className='product-info px-2'>
        <p className="text-2xl font-bold mb-2">{proName}</p>
        <span className="text-slate-500 line-clamp-1">{proInfo}</span>
        <p className="my-2 text-lg">{proPrice}</p>
        <div className="flex-1"></div>
        <div className="grid grid-cols-2 gap-1 px-[15px]">
          <select
            className="my-3 py-[10px] px-[30px] rounded-md border border-slate-500 cursor-pointer focus:ring-1 focus:ring-blue-500 focus:outline-none"
            name="size"
            id={`size-${proId}`}
          >
            {proSize.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          <button className="add-button flex flex-row items-center my-3 py-[10px] px-[30px] rounded-md bg-blue-500 text-white">
            Add
            <img className="w-[20px] ml-2" src={shoppingCart} alt="shopping cart icon" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCart;
