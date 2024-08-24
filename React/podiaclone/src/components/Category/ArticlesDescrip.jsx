import React from "react";

function ArticleDescrip(props){
    return(
        <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <p className=" heading-text">
                {props.heading}
            </p>
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
      </section>
    )
}
export default ArticleDescrip;