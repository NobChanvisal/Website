import React, { useState, useEffect } from "react";
import ProductsList from "../ProductsList.jsx";
import ProductCard from "../Category/ProductCard.jsx";
import BrandCategory from "../Sidebar/BrandCategory.jsx";
import Price from "../Sidebar/Price.jsx";
import Color from "../Sidebar/Color.jsx";

function BrandPage({ brand }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(`Fetched data for ${brand}:`, data);
        setProducts(data.filter((product) => product.brand === brand));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [brand]);

  const handleInputChange = (event) => setQuery(event.target.value);
  const handleChange = (event) => setSelectedCategory(event.target.value);

  const filteredData = (products, selected) =>
    products
      .filter(
        (product) =>
          !selected ||
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
    <section className="pt-[150px]">
      <aside
        className="side-bar px-5 pt-[150px] w-full sm:w-[15%] h-screen overflow-y-auto flex flex-col fixed top-0 left-0 border-solid border-r-2 border-[#e5e5e5] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <BrandCategory brand={brand} handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </aside>
      <ProductsList result={result} />
    </section>
  );
}

export default BrandPage;
