import React from "react";
import ProductCard from "../Category/ProductCard";
import { Product } from "../interfaces/ProductType";

interface NewArrivalsProps {
  products: Product[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
  // Get only the first 4 products
  const newArrivalProducts = products.slice(0, 4);

  return (
    <section className="new-arrivals">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newArrivalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
