import React from "react";

function ProductsList({ result }) {
  return (
    <section className="ml-80 mt-6 grid grid-cols-5 gap-5">{result}</section>
  );
}

export default ProductsList;
