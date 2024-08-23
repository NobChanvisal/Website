import React, { useState } from "react";
import minusIcon from "../image/minusIcon.svg";
import plusIcon from "../image/plusIcon.svg";
import plusWhite from "../image/plusWhite.svg";
import minusWhite from "../image/minusWhites.svg";

// Destructure sections from the props object
function Collapse({ sections }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10">
        <div className="text-component pt-1">
            <h2 className="heading-text">FAQs</h2>
            <h2 className="title-section">Quick Answers</h2>
            <div className="section-description">
              <p>
                Don’t see your answer?{" "}
                <a className="underline" href="">
                  Reach out to us, we’d love to help!
                </a>
              </p>
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <div
                onClick={() => toggleCollapse(index)}
                className="w-full m-0 py-3 flex flex-row items-center justify-between group cursor-pointer"
              >
                <h3 className="group-hover:text-[#4b2aad] text-[28px] font-DmSerif p-0">
                  {section.title}
                </h3>
                <div className="bg-[#f5efeb] group-hover:bg-[#4b2aad] ml-8 w-10 h-10 rounded-full center-card justify-center relative">
                  <img
                    className="z-10"
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt=""
                  />
                  <img
                    className="absolute group-hover:z-20"
                    src={openIndex === index ? minusWhite : plusWhite}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="py- max-w-[840px]">
                  <p className="text-[17px]">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collapse;
