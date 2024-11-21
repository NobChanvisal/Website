import React, { useState, useEffect } from "react";
import ProductsList from "../ProductsList.jsx";
import Color from "../Sidebar/Color.jsx";
import Price from "../Sidebar/Price.jsx";
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
          product.salePrice <= selected ||
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
    <section className=" pt-[140px]">
      <aside
        className=" px-6 pt-[120px] w-[15%] h-screen overflow-y-auto flex flex-col fixed top-0 left-0 border-solid border-r-2 border-[#e5e5e5] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <h1 className=" pb-2 mb-4 font-semibold text-xl border-b pt-3">Filter</h1>
        <div>
          <h2 className=" tracking-wider uppercase font-semibold">Brand</h2>
          <div className=" mt-3 ml-1 w-fit flex flex-col text-center">
            <a className=" border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800" href="/nike">Nike</a>
            <a className=" border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800" href="/newbalance">New Balance</a>
            <a className=" border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800" href="/puma">Puma</a>
            <a className=" border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800" href="/adidas">Adidas</a>
          </div>
        </div>
        <Price/>
        <Color handleChange={handleChange} />
      </aside>
      <ProductsList result={result} />
    </section>
  );
}

export default Store;
