import React from "react";

function Homes(props) {
  return (
    <section className="pt-[70px] w-full">
      <div className="container grid-layout-2 items-start">
        <div className="text-component">
          <p className="heading-text mb-1">{props.heading}</p>
          <h2 className="home-title text-[50px] font-DmSerif">
            {props.title}
          </h2>
          <div className="section-description">
            <p>{props.description}</p>
          </div>
          <button className="mt-4 px-6 py-2 text-[20px] font-bold text-white bg-[#4b2aad] rounded-3xl transition-all hover:bg-[#201445]">
            Get your free account
          </button>
        </div>
        <div className="section-img rounded-md shadow-md shadow-slate-400">
          <img className="rounded-md" src={props.img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Homes;
