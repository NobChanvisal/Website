import React, { useState, useEffect } from "react";
import ProductsList from "../ProductsList.jsx";
import ProductCard from "../Category/ProductCard.jsx";
import BrandCategory from "../Sidebar/BrandCategory.jsx";
import Price from "../Sidebar/Price.jsx";
import Color from "../Sidebar/Color.jsx";
import Breadcrumb from "../Category/Breadcrumb";

function BrandPage({ brand }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filteredData, setFilteredData] = useState([]);
  const [onSale, setOnSale] = useState(false); // State for sale filter

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const brandProducts = !brand
          ? data
          : data.filter((product) => product.brand === brand);
        setProducts(brandProducts);
        setFilteredData(brandProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [brand]);

  // Handler for category filter
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handler for price filter
  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  // Handler for on-sale filter
  const handleOnSaleChange = () => {
    setOnSale(!onSale);
  };

  useEffect(() => {
    let filtered = products.filter((product) => {
      const withinPriceRange =
        product.salePrice / 100 >= priceRange.min &&
        product.salePrice / 100 <= priceRange.max;
      const matchesCategory =
        !selectedCategory || product.model === selectedCategory ||
        product.colors === selectedCategory;
      const isOnSale = onSale ? product.prevPrice > 0 : true; 
      return withinPriceRange && matchesCategory && isOnSale;
    });
    setFilteredData(filtered);
  }, [selectedCategory, priceRange, products, onSale]);

  const result = filteredData.map(
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
        id={id}
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

  const breadcrumbItems = [
    { label: "Home", link: "/home" },
    { label: "Store", link: "/store" },
    ...(brand ? [{ label: brand, link: `/${brand.toLowerCase()}` }] : []), // Conditionally add the brand breadcrumb
  ];
  
  return (
    <section className="pt-[120px] flex flex-row">
      <aside
        className=" px-4 pb-2 w-[230px] h-screen overflow-y-auto md:hidden lg:flex flex-col border-solid border-r-2 border-[#e5e5e5] [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <h1 className="pb-2 pt-3 mb-4 font-semibold text-xl border-b">
          Filter
        </h1>
        <div className="">
          <div class="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              onChange={handleOnSaleChange}
              class="w-4 h-4 ml-1 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              for="default-checkbox"
              class="ms-2 pl-3 text-sm text-gray-900 dark:text-gray-300"
            >
              Sale
            </label>
          </div>
        </div>
        {!brand && (
          <div>
            <h2 className="tracking-wider uppercase font-semibold mt-3">Brand</h2>
            <div className="mt-3 ml-1 w-full flex flex-col text-center">
              <a
                className="border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800"
                href="/nike"
              >
                Nike
              </a>
              <a
                className="border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800"
                href="/newbalance"
              >
                New Balance
              </a>
              <a
                className="border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800"
                href="/puma"
              >
                Puma
              </a>
              <a
                className="border-1 w-full bg-transparent py-1.5 px-3 rounded-sm mr-2 my-2 hover:border-slate-800"
                href="/adidas"
              >
                Adidas
              </a>
            </div>
          </div>
        )}
        {brand && (
          <BrandCategory brand={brand} handleChange={handleCategoryChange} />
        )}

        <Price handlePriceChange={handlePriceChange} />
        <Color handleChange={handleCategoryChange} />
      </aside>
      <div className=" flex-1">
        <Breadcrumb items={breadcrumbItems} />
        <ProductsList result={result} />
      </div>
    </section>
  );
}

export default BrandPage;
