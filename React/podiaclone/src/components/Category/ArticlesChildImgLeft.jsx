import React from "react";

function ArticlesChildImgLeft(props) {
  return (
    <section>
      <div className="px-4 lg:container">
        <div className="grid grid-cols-1 gap-16 md:grid-layout-2 items-start">
          <div className="section-img">
            <img
              className=" rounded-md"
              src={props.img}
              alt=""
            />
          </div>
          <div className="text-component">
            <p className="heading-text mb-1">{props.heading}</p>
            <h2 className=" title-section">
              {props.title}
            </h2>
            <div className="section-description">
              <p>
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ArticlesChildImgLeft;
