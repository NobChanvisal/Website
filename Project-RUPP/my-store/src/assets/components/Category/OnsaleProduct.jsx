import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; 

function OnsaleProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const productSale = products.filter((product) => product.prevPrice > 0);

  return (
    <section className="new-arrivals">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productSale.map(
          ({
            id,
            img,
            title,
            brand,
            stars,
            reviews,
            category,
            model,
            prevPrice,
            salePrice,
          }) => (
            <ProductCard
              key={id}
              img={img}
              title={title}
              brand={brand}
              stars={stars}
              reviews={reviews}
              category={category}
              model={model}
              prevPrice={prevPrice}
              salePrice={salePrice}
            />
          )
        )}
      </div>
    </section>
  );
}

export default OnsaleProduct;
