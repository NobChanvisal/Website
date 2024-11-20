import React from "react";

function ProductsList({ result }) {
  return (
    <div>
      {result.length > 0 ? (
        <section className=" ml-64 pr-5 grid grid-cols-4 gap-3">
          {result}
        </section>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          No products found.
        </div>
      )}
    </div>
  );
}

export default ProductsList;
