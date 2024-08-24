import React from "react";
import stars from "../image/stars.svg";
function Rate(props){
    return(
        <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <img className="stars" src={stars} alt="" />
            <div className="review-quote">
              <h2>
                {props.description}
              </h2>
              <p>{props.paragraph}</p>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Rate;