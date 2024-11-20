import React, { useState, useEffect } from "react";
import ProductsList from "../ProductsList.jsx";

import ProductCard from "../Category/ProductCard.jsx";

function Store() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);

  const filteredData = (products, selected) =>
    products
      .filter(
        (product) =>
          !selected ||
          product.category === selected ||
          product.brand === selected ||
          product.model === selected ||
          product.salePrice === selected ||
          product.title === selected
      )
      .map(
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
      );

  const result = filteredData(products, selectedCategory);

  return (
    <section className=" pt-[150px]">
      <div className=" fixed top-[50%] left-0 flex flex-col">
        <a href="/nike">Nike page</a>
        <a href="/newbalance">New Balance page</a>
      </div>
      <ProductsList result={result} />
    </section>
  );
}

export default Store;
