import React from "react";
import stars from "../image/stars.svg";
import rightArrow from "../image/rightArrow.svg";
function Coaching() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Coaching</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              One-on-one coaching and consultations, with billing managed for
              you
            </h2>
            <div className="section-description">
              <p>
                Sometimes your students want one-on-one attention. Podia makes
                it easy for you to charge for coaching sessions and
                consultations.
              </p>
            </div>
            <div className="mt-4 py-2 flex flex-row text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <a>Learn more about coaching</a>
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
              src="https://images.ctfassets.net/19dvw6heztyg/6MRIUMFs5dX9PKOjtzMXjf/9f5b01182904ffc6c4663dc2f442c3ba/digital_products-coaching.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <img className="stars" src={stars} alt="" />

            <div className="review-quote">
              <h2>
                Podia just works. It’s easy to use and includes everything you
                need to sell digital products. I’ve tried all the alternatives,
                and Podia is hard to beat.
              </h2>
              <p>— Shawn Leamon, Divorce and Your Money</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Coaching;
