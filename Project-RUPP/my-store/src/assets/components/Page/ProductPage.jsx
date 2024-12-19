import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductPageFooter from "../Category/ProductPageFooter";
import { ProductDetail } from "../Category/ProductDetail";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [open]);
  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    title,
    brand,
    category,
    model,
    gallery = [],
    stars,
    reviews,
    salePrice,
    prevPrice,
    qty,
    colors,
    shortDes,
    des,
    size = [],
  } = product;

  const handleAddToCart = () => {
    console.log("Product data:", product);
    const cartItem = {
      id: product.id,
      title: product.title,
      brand: product.brand,
      colors: product.colors,
      salePrice: product.salePrice,
      image: product.gallery[0],
      qty: 1,
    };
    console.log("Dispatching item:", cartItem);
    dispatch(addToCart(cartItem));
    setOpen(true);
  };

  return (
    <section className="product-list container-xl mx-auto pt-36 px-20">
      {open && (
        <div className="fixed inset-0 flex items-end justify-end bg-black bg-opacity-50 z-30">
          <div className="bg-white w-full max-w-sm m-4 relative p-3 rounded shadow-lg">
            <p className="mt-2">Product added to cart successfully!</p>
            <div className="flex flex-row mt-3">
              <div className="max-w-[120px] border">
                <img className="h-fit w-fit" src={gallery[0]} alt="" />
              </div>
              <div className="pl-2">
                <p className="text-[14px] text-slate-500">{brand}</p>
                <p>{title}</p>
                <p className="pt-1 text-green-500">
                  ${(salePrice / 100).toFixed(2)}
                </p>
                <div className="pt-2 hover:opacity-80">
                  <Link
                    to="/shoppingcart"
                    className="text-sm uppercase underline"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
            <ProductDetail
              title={title}
              salePrice={salePrice}
              brand={brand}
              gallery={gallery}
            />
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
          <div className="pt-3">
            <div className="block mb-2 text-sm font-medium text-gray-900">
              Quantity:
              <span className=" pl-5">{qty}</span>
            </div>
          </div>
          <div className="pt-3">
            <div className="block mb-2 text-sm font-medium text-gray-900">
              Color:
              <span className=" pl-5">{colors}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full max-w-96 text-white bg-black hover:bg-gray-800 focus:ring-4 rounded-lg text-sm mt-3 px-5 py-2.5"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-20">
        <ProductPageFooter desc={des} />
      </div>
    </section>
  );
};

export default ProductPage;
