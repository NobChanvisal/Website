import React, { useState, useEffect } from "react";
import ProductsList from "../ProductsList.jsx";
import ProductCard from "../Category/ProductCard.jsx";
import BrandCategory from "../Sidebar/BrandCategory.jsx";
import Price from "../Sidebar/Price.jsx";
import Color from "../Sidebar/Color.jsx";
import Breadcrumb from "../Category/Breadcrumb";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function BrandPage({ brand }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filteredData, setFilteredData] = useState([]);
  const [onSale, setOnSale] = useState(false); // State for sale filter
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
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
        !selectedCategory ||
        product.model === selectedCategory ||
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
      colors,
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
        colors={colors}
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className="mt-[120px] flex flex-row relative">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden text-[14px] absolute flex items-center top-4 right-4 z-30 bg-transparent text-black py-1 px-4 justify-center border rounded-full"
      >
        <span className=" pr-2">Filters</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-filter"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`px-4 pb-2 w-[20%] h-screen overflow-y-auto fixed lg:relative right-0 top-0 bg-white z-30 transform ${
          isSidebarOpen ? "translate-x-0 pt-[120px]" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:flex flex-col border-solid border-r-2 border-[#e5e5e5] 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
      >
        <h1 className="pb-2 pt-3 font-semibold text-xl border-b">
          Filter
        </h1>
        {/* 
        
        <div className="">
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              onChange={handleOnSaleChange}
              className="w-4 h-4 ml-1 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 pl-3 text-sm text-gray-900 dark:text-gray-300"
            >
              Sale
            </label>
          </div>
        </div>

        
        {!brand && (
          <div>
            <h2 className="tracking-wider uppercase font-semibold mt-3">
              Brand
            </h2>
            <div className="mt-3 ml-1 w-full flex flex-col text-center">
              <a
                href="/nike"
                className="border-1 w-full py-1.5 px-3 rounded-sm my-2 hover:border-slate-800"
              >
                Nike
              </a>
              <a
                href="/newbalance"
                className="border-1 w-full py-1.5 px-3 rounded-sm my-2 hover:border-slate-800"
              >
                New Balance
              </a>
              <a
                href="/puma"
                className="border-1 w-full py-1.5 px-3 rounded-sm my-2 hover:border-slate-800"
              >
                Puma
              </a>
              <a
                href="/adidas"
                className="border-1 w-full py-1.5 px-3 rounded-sm my-2 hover:border-slate-800"
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
        */}
        <section className=" flex flex-column w-full">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className=" text-[17px] tracking-wider font-normal" onClick={() => handleOpen(1)}>
              {!brand &&("Brand")}
              {brand && ("Collection")}
            </AccordionHeader>
            <AccordionBody>
              {!brand && (
                  <div className="ml-1 w-full flex flex-col">
                    <a
                      href="/nike"
                      className="border-1 mr-1 w-[50%] text-center py-1.5  rounded-sm my-2 hover:border-slate-800"
                    >
                      Nike
                    </a>
                    <a
                      href="/newbalance"
                      className="border-1 mr-1 w-[50%] text-center py-1.5  rounded-sm my-2 hover:border-slate-800"
                    >
                      New Balance
                    </a>
                    <a
                      href="/puma"
                      className="border-1 mr-1 w-[50%] text-center py-1.5 rounded-sm my-2 hover:border-slate-800"
                    >
                      Puma
                    </a>
                    <a
                      href="/adidas"
                      className="border-1 mr-1 w-[50%] text-center py-1.5 rounded-sm my-2 hover:border-slate-800"
                    >
                      Adidas
                    </a>
                  </div>
               
              )}

              {brand && (
                <BrandCategory
                  brand={brand}
                  handleChange={handleCategoryChange}
                />
              )}
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className=" text-[17px] tracking-wider font-normal" onClick={() => handleOpen(2)}>
              Price
            </AccordionHeader>
            <AccordionBody>
              <Price handlePriceChange={handlePriceChange} />
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className=" text-[17px] tracking-wider font-normal" onClick={() => handleOpen(3)}>
              Color
            </AccordionHeader>
            <AccordionBody>
            <Color handleChange={handleCategoryChange} />
            </AccordionBody>
          </Accordion>
        </section>
      </aside>

      <div className="flex-1 lg:pl-6">
        <Breadcrumb items={breadcrumbItems} />
        <ProductsList result={result} />
      </div>
    </section>
  );
}

export default BrandPage;
