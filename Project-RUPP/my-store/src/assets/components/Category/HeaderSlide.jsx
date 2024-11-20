
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";

function HeaderSlide() {
  return (
    <div className="w-full max-w-[770px]">
      <div
        id="carouselExampleInterval"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="5000">
            <div className=" flex flex-row items-center justify-center">
              <LiaShippingFastSolid className=" mr-2 text-red-500" />
              Get free delivery on orders over $100
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className=" flex flex-row items-center justify-center">
              <BiSupport className=" mr-2 text-red-500" />
              Online support 24/7
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className=" flex flex-row items-center justify-center">
              <MdOutlinePayment className=" mr-2 text-red-500" />
              Secure payment
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className=" flex flex-row items-center justify-center">
            <GiBoxUnpacking className=" mr-2 text-red-500"/>
              7-Days Return
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ width: "18px", height: "18px", color: "black" }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ width: "18px", height: "18px" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default HeaderSlide;
