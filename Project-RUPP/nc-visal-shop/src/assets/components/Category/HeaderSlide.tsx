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
            <p className=" text-center">
              Get free delivery on orders over $100
            </p>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <p className=" text-center">
              Online support 24/7
            </p>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <p className=" text-center">
              Secure payment
            </p>
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
            style={{ width: "18px", height: "18px",color:"black"}}
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
