import React from "react";
import rightArrow from "../image/rightArrow.svg";
function Webinars() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Webinars</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              Webinars and workshops with registration and payment in one place
            </h2>
            <div className="section-description">
              <p>
                How can you charge for your webinars and workshops? Do it from
                your Podia site. Set up a paid webinar product and your
                customers can register straight from your website.
              </p>
            </div>
            <div className="mt-4 py-2 flex flex-row text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <a>Learn more about webinars</a>
              <img
                src={rightArrow}
                alt=""
                className="transition-all group-hover:ml-[5px]"
              />
            </div>
            
          </div>
          <div className="section-img">
            <img
              className=" rounded-md m-0"
              src="https://images.ctfassets.net/19dvw6heztyg/5LepYwomTxpDT9PU2CoeHo/0aec7f94e534ac062df48c7e7f4c7f51/digital_products-webinars.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
      <div className="container center-card mb-[6rem] text-white">
        <div className="banner-info p-16 bg-[#201445] rounded-lg">
          <h2 className=" text-[34px] mb-1 font-DmSerif">Get your free Podia account</h2>
          <p className=" text-[18px] text-[#d7e2e8]">
            Join the 150,000+ creators who use Podia to create websites, sell
            digital products, and build online communities.
          </p>
          <button className=" py-2 px-6 mt-6 text-[18px]  bg-[#9484c6] rounded-3xl font-semibold">Sign Up Form</button>
        </div>
      </div>
    </section>
    </>
  );
}
export default Webinars;
