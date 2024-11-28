import React, { useEffect, useState } from "react";
import ProductCard from "../Category/ProductCard";
import { SiNike, SiAdidas, SiNewbalance, SiPuma } from "react-icons/si";
function Home() {
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
  const newArrivals = products.slice(0, 4);
  const productSale = products.filter((product) => product.prevPrice > 0);
  return (
    <>
      <section>
        {/* Carousel section */}
        <div className="w-full">
          <div>
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <div className="carousel-inner h-[90vh]">
                <div className="carousel-item relative active">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"></div>
                  <img
                    src="https://jdsportsblog.s3.amazonaws.com/wp-content/uploads/2021/11/Desktop_Top_Banner_1920x840.jpg"
                    className="d-block w-100 object-cover h-[90vh]"
                    alt="..."
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <h2 className="text-red-500 text-[60px] sm:text-[80px]">
                      New Balance
                    </h2>
                    <p className="text-white text-[30px] sm:text-[40px]">
                      Built to move
                    </p>
                  </div>
                </div>
                <div className="carousel-item h-fit">
                  <img
                    className="d-block w-100 object-cover h-[90vh]"
                    src="https://www.sevenstore.com/images/blog/PUMA_WEB_5_MAIN_BANNER.jpg"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.pinimg.com/originals/38/6d/59/386d5936bb1df1cce23284e2e6dd25a9.jpg"
                    className="d-block w-100 object-cover h-[90vh]"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://jdsportsblog.s3.amazonaws.com/wp-content/uploads/2023/04/Blog_Desktop_1920x840.jpg"
                    className="d-block w-100 object-cover h-[90vh]"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand section */}
      <section className="pt-10 pb-5 px-10 mx-auto">
        <div className="brand-content w-full grid grid-cols-2 md:grid-cols-4">
          <a
            href="/nike"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiNike className="text-[80px]" />
          </a>
          <a
            href="/adidas"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiAdidas className="text-[80px]" />
          </a>
          <a
            href="/newbalance"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiNewbalance className="text-[80px]" />
          </a>
          <a
            href="/puma"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiPuma className="text-[80px]" />
          </a>
        </div>
      </section>
      <section className=" py-5 px-10 mx-auto">
        <div className=" sm:mb-4  mb-2 w-full flex justify-between items-end">
          <h2 className="sm:text-2xl font-bold">New Arrivals</h2>
          <a className=" hover:underline max-sm:text-[12px]" href="/store">
            View all product
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivals.map(
            ({
              id,
              img,
              title,
              qty,
              brand,
              stars,
              reviews,
              category,
              colors,
              model,
              prevPrice,
              salePrice,
            }) => (
              <ProductCard
                key={id}
                id={id}
                qty={qty}
                colors={colors}
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
      <section className="banner relative my-5">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"></div>
        <img
          className="w-full"
          src="https://images.puma.com/image/upload/c_scale,f_auto,q_auto:good,w_1280/cms/images/8257c79b153a31dd482b28b98c59a80dd5de1c49?_a=BAMCkGfi0"
          alt="Banner"
        />
        <div className="text-box absolute top-1/3 px-12 z-20">
          <p className=" sm:text-[32px] text-white font-semibold sm:mb-4 mb-2">
            STYLES EVERYONE WILL LOVE
          </p>
          <a
            className="sm:py-2 sm:px-5 py-1 px-2 text-[10px] sm:text-[14px] border-none outline outline-1 outline-slate-100 text-white hover:outline-slate-300 rounded-sm"
            href="/store"
          >
            Shop Now
          </a>
        </div>
      </section>
      <section className=" py-5 sm:px-10 px-4 mx-auto">
        <div className=" sm:mb-4 mb-2 w-full flex justify-between">
          <h2 className="sm:text-2xl font-bold">Item on sale</h2>
          <a className=" hover:underline" href="/store">
            View all product
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productSale
            .slice(0, 4)
            .map(
              ({
                id,
                img,
                title,
                qty,
                colors,
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
                  qty={qty}
                colors={colors}
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
      <section className="banner relative my-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10"></div>
        <img
          className="w-full"
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_4338,c_limit/65aa0109-0bff-430d-9008-5078bf90f863/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
          alt="Banner"
        />
        <div className="text-box absolute top-1/3 px-12 z-20">
          <p className=" sm:text-[32px] text-white font-semibold uppercase mb-1">
            Collection for Kids
          </p>
          <a
            className=" text-white text-[10px] sm:text-[14px]"
            
          >
            Comming soon...
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
