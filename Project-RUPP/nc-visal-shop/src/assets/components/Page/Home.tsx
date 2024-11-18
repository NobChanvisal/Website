import { SiNike, SiAdidas, SiNewbalance, SiPuma } from "react-icons/si";
import NewArrivals from "./NewArrivals";
import { Product } from "../interfaces/ProductType";

interface HomeProps {
  products: Product[];
}
function Home({ products }: HomeProps) {
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
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
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
                data-bs-target="#carouselExampleAutoplaying"
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
        </div>
      </section>

      {/* Brand section */}
      <section className="py-10 px-10 mx-auto">
        <div className="brand-content w-full h-24 grid grid-cols-4">
          <a
            href="#"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiNike className="text-[80px]" />
          </a>
          <a
            href="#"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiAdidas className="text-[80px]" />
          </a>
          <a
            href="#"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiNewbalance className="text-[80px]" />
          </a>
          <a
            href="#"
            className="brand-profile flex items-center justify-center border hover:border-black transition-all duration-200"
          >
            <SiPuma className="text-[80px]" />
          </a>
        </div>
      </section>
      <div className=" py-10 px-10 mx-auto">
        <div className=" w-full flex justify-between">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <a className=" " href="#">Shop all</a>
        </div>
        <NewArrivals products={products} />
      </div>
    </>
  );
}

export default Home;
