import React from "react";
import shoppingLogo from "../image/Serviceimage/shoppingCart.svg";
import arrow from "../image/Serviceimage/arrow.svg"
import upload from "../image/Serviceimage/upload.svg"

function Service() {
  return (
    <>
      <section className=" font-inter">
        <div className="container grid grid-cols-3 gap-x-7 gap-y-16">
          <div className="item1 center-card col-span-3 justify-self-center text-center max-w-[1024px]">
            <h2 className=" text-[34px] font-DmSerif">
              All you have to do is make the product. Podia takes care of the
              details for you.
            </h2>
            <div className="section-description">
              <p>
                Podia lets you make your sales page, take payments, and give
                your customers access all in one place. Host and sell your
                products without needing to figure out a handful of new tools.
              </p>
            </div>
          </div>
          <div className="item2 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={shoppingLogo} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">Checkout and sales are handled for you</h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  You don’t have to figure out a bunch of tools or website
                  embeds. Just connect a payment provider and your Podia site
                  takes care of payments for you.
                </p>
              </div>
            </div>
          </div>
          <div className="item3 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={arrow} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">
                Your customers log in, and your products are there for them
              </h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  Your Podia site handles access to products for you. Everything
                  is in one place. When your customers buy a product, they get a
                  log in. After that, they can see all the products they’ve
                  bought from you.
                </p>
              </div>
            </div>
          </div>
          <div className="item4 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={upload} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">Upload your product. Make your sales page. Done.</h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  You could sell a digital product by this afternoon. Podia
                  handles hosting, sales pages, checkout, and delivery. All you
                  need is something to sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;
