import React from "react";

function Price({ handlePriceChange }) {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(500);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMin(value);
    handlePriceChange(value, max);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMax(value);
    handlePriceChange(min, value);
  };

  return (
    <div className="price-filter mt-3">
      
      <div className="mt-3 ml-1">
        <label>
          <div className=" flex flex-row justify-between text-[12px]">
            <p>Min</p>
            <span>${min}</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={min}
            onChange={handleMinChange}
          />
        </label>
        <label>
          <div className=" flex flex-row justify-between text-[12px] mt-2">
            <p>Max</p>
            <span>${max}</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={max}
            onChange={handleMaxChange}
          />
        </label>
      </div>
    </div>
  );
}

export default Price;
