import React from "react";

function ProductsList({ result }) {
  return (
    <div>
      {result.length > 0 ? (
        <section className=" sm:ml-10 pl-4 sm:pl-0 pr-4 gap-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
