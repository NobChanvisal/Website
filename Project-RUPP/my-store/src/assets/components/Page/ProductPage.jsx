import { useParams } from "react-router-dom";
import ProductPageFooter from "../Category/ProductPageFooter";
import { useState, useEffect } from "react";
import { ProductDetail } from "../Category/ProductDetail";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store the product details

  useEffect(() => {
    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, brand, category, model, gallery, stars, reviews, salePrice, prevPrice, shortDes,des, size } = product;

  return (
    <section className="product-list container-xl mx-auto pt-36 px-20">
      <div className="product-card grid grid-cols-2">
        {/* Image Carousel */}
        <div className="product-image self-start">
          <div
            id="carouselExampleIndicators"
            className="carousel slide max-w-[550px] mx-auto"
          >
            <div className="carousel-indicators flex justify-center">
              {gallery.map((image, index) => (
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
              {gallery.map((image, index) => (
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
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info pl-6">
          <nav className="w-max mb-2" aria-label="breadcrumb">
            <ol className="flex w-full flex-wrap items-center text-sm">
              <li className="breadcrumb-item">
                <span className="text-slate-500 pr-2">{brand}</span>
              </li>
              <li className="breadcrumb-item">
                <span className="text-slate-500 px-2">{category}</span>
              </li>
              <li className="breadcrumb-item">
                <span className="text-slate-500 px-2">{model}</span>
              </li>
            </ol>
          </nav>
          <div className="product-title text-[24px] text-[#191919] font-bold pb-2">
            {title}
          </div>
          <div className="pb-2 flex">
            <img className="stars h-5" src={stars} alt="Rating" />
            <p className="pl-2 text-[#676d75]">{reviews}</p>
          </div>
          <div className="price-content flex pb-2">
            <p className="new-price text-[#191919] text-[18px] pr-3">
              ${(salePrice / 100).toFixed(2)}
            </p>
            {prevPrice > 0 && (
              <p className="prev-price line-through text-[16px] text-[#676d75]">
                ${(prevPrice / 100).toFixed(2)}
              </p>
            )}
          </div>
          <div className="short-description text-[#707072] mt-3">
            {shortDes}
          </div>
          <div>
            <ProductDetail title={title}/>
          </div>
          <div className="size-content pt-3">
            <p className="font-semibold">Select Size</p>
            <div className="flex flex-wrap">
              {size.map((sizes, index) => (
                <button
                  key={index}
                  className="py-1 px-3 mr-2 mt-2 rounded-sm border hover:border-black"
                >
                  {sizes}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <form className="pt-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Choose quantity:
            </label>
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                className="bg-gray-100 border rounded-l-lg p-3 h-11 hover:bg-gray-200"
              >
                −
              </button>
              <input
                type="text"
                className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center w-full"
                defaultValue="1"
              />
              <button
                type="button"
                className="bg-gray-100 border rounded-r-lg p-3 h-11 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </form>

          {/* Add to Cart Button */}
          <button className="w-full max-w-96 text-white bg-black hover:bg-gray-800 focus:ring-4 rounded-lg text-sm mt-3 px-5 py-2.5">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-20">
        <ProductPageFooter
            desc={des}
        />
      </div>
    </section>
  );
};

export default ProductPage;
