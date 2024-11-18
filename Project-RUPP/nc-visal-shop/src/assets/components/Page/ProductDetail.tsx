import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { Product } from "../interfaces/ProductType";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list container-xl mx-auto pt-36 px-20">
      <div className="product-card grid grid-cols-2">
        <div className="product-image self-start">
          <div
            id="carouselExampleIndicators"
            className="carousel slide max-w-[550px] mx-auto"
          >
            <div className="carousel-indicators d-flex align-items-center">
              {product.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={`indicator-img border border-primary ${
                    index === 0 ? "active" : ""
                  }`}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                />
              ))}
            </div>
            <div className="carousel-inner max-h-[550px] flex items-center">
              {product.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="d-block w-[550px] h-auto object-cover mx-auto"
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="product-info pl-6">
          <nav className="w-max mb-2" aria-label="breadcrumb">
            <ol className="flex w-full flex-wrap items-center text-sm">
              <li className="breadcrumb-item ">
                <a className="text-slate-500 pr-2">{product.brand}</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-slate-500 px-2">{product.category}</a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-slate-500 px-2">{product.model}</a>
              </li>
            </ol>
          </nav>
          <div className="product-title text-[24px] text-[#191919] font-bold pb-2">
            {product.company} {product.title}
          </div>
          <div className="pb-2 flex">
            <img className="stars h-5" src={product.stars} alt="Rating" />
            <p className=" pl-2 text-[#676d75]">{product.reviews}</p>
          </div>
          <div className="price-content">
            <div className="price-content flex">
              <p className="new-price text-[#191919] text-[18px] pr-3">
                ${(product.salePrice / 100).toFixed(2)}
              </p>
              {product.prevPrice > 0 && (
                <p className="prev-price line-through text-[16px] text-[#676d75]">
                  ${(product.prevPrice / 100).toFixed(2)}
                </p>
              )}
            </div>
          </div>
          <div className="short-description text-[#707072] mt-3">
            {product.shortDes}
          </div>
          <div className="size-content  pt-3">
            <p className=" font-semibold">Select Size</p>
            <div className=" flex flex-wrap">
              {product.size.map((sizes) => (
                <button className="py-1 px-3 mr-2 mt-2 rounded-sm border-1 hover:border-black">
                  {sizes}
                </button>
              ))}
            </div>
          </div>

          {/* qty */}

          <form className=" pt-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choose quantity:
            </label>
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1"
                required
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </form>
          <button className=" w-full max-w-96 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm mt-3 px-5 py-2.5">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
