import React from "react";

function Home() {
  return (
    <section className="pt-[70px]">
      <div className="container grid grid-cols-2 gap-16">
        <div className="text-component">
          <p className="heading-text mb-1">Digital Products</p>
          <h2 className="home-title text-[50px] font-DmSerif">
            Sell online courses, coaching sessions, webinars, workshops, ebooks,
            and anything you can think of on Podia
          </h2>
          <div className="section-description">
            <p>
              Get everything you need in one place that you own. Podia takes
              care of hosting products, taking payments, and getting products to
              your customers. And you always control your own work.
            </p>
          </div>
          <button className="mt-4 px-6 py-2 text-[20px] font-bold text-white bg-[#4b2aad] rounded-[20px] transition-all hover:bg-[#201445]">
            Get your free account
          </button>
        </div>
        <div className="home-img">
          <img
            src="https://images.ctfassets.net/19dvw6heztyg/3xU9z3jUaXTRdC0ii7hXVb/2ac68a4e2bab8ea98b76e001daf345af/digital_products-hero.png?w=1440&q=75"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
