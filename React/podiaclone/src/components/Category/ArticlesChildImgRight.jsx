import React from "react";
import { Link } from "react-router-dom";

function ArticlesChildImgRight(props) {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-16">
        <div className="text-component place-self-center">
          <p className="heading-text mb-1">{props.heading}</p>
          <h2 className="home-title text-[30px] font-DmSerif">{props.title}</h2>
          <div className="section-description">
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
        <div className="section-img">
          <img className=" rounded-md m-0" src={props.img} alt="" />
        </div>
      </div>
    </section>
  );
}
export default ArticlesChildImgRight;
