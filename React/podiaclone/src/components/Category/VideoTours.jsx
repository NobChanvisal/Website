import React from "react";
import checkmark from "../image/checkmark.svg";
function VideoTours(props){
    return(
    <section>
        <div className="container">
          <div className=" grid-layout-2 bg-[#f5efeb] p-10 rounded-lg">
            <div className="video-youtube-link w-full">
              <div class="ratio ratio-16x9">
                <iframe
                  className=" rounded-lg"
                  src={props.VDOlink}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="text-component text-[18px]">
              <p className="heading-text mb-1">Video Tour</p>
              <h2 className=" title-section">
                {props.title}
              </h2>
              <ul className=" py-6 pl-4">
                <div className="list-chil">
                  <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                    <img src={checkmark} alt="" />
                  </div>
                  <div>Learn what makes Podia different</div>
                </div>
                <div className="list-chil">
                  <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                    <img src={checkmark} alt="" />
                  </div>
                  <div>See how easy it is to start selling</div>
                </div>
                <div className="list-chil">
                  <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                    <img src={checkmark} alt="" />
                  </div>
                  <div>Go behind-the-scenes of every feature</div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}
export default VideoTours;