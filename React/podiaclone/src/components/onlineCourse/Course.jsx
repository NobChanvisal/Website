import React from "react";
import stars from "../image/stars.svg";
import rightArrow from "../image/rightArrow.svg";
function Courses() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Online Courses</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              Beautiful online courses you can build in moments
            </h2>
            <div className="section-description">
              <p>
                Make a beautiful online course for your customers. Podia hosts
                your course. That means all the lessons, files, and videos you
                want handled for you.
              </p>
            </div>
            <div className="mt-4 py-2 flex flex-row text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <a>Learn more about courses</a>
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
              src="https://images.ctfassets.net/19dvw6heztyg/6Upd6xYyofNMlYawCQm7OA/1c2d7c3b665bb2dda455db43da72762a/digital_products-courses.png?w=1440&q=75"
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
                We didn’t have to stress about technical details or custom
                coding. Using Podia made selling our first eBook quick,
                efficient, and fun.
              </h2>
              <p>— Matt & Steph, Plant-based food bloggers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Courses;
