import React from "react";
import { Link } from "react-router-dom";

function ArticlesChildImgRight(props) {
  return (
    <section>
      <div className=" px-4 lg:container">
        <div className="grid grid-cols-1 gap-16 md:grid-layout-2 items-start">
          <div className="text-component order-last md:order-first">
            <p className="heading-text mb-1">{props.heading}</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              {props.title}
            </h2>
            <div className="max-mobile:text-[18px] section-description">
              <p>{props.description}</p>
            </div>
            <div className="mt-4 py-2 text-[20px] font-bold text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              {props.links ? (
                <Link to={props.links}>
                  Learn more about {props.aboutName}
                  <span className="group-hover:ml-2">&#8594;</span>{" "}
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" section-img rounded-md shadow-md shadow-slate-400 md:order-last">
            <img className=" rounded-md m-0" src={props.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ArticlesChildImgRight;
