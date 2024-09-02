import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function WebsiteButton() {
  return (
    <div class="btn-group w-full">
      <button
        type="button"
        class="dropdown-toggle px-6 py-2"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        Website
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-start w-[420px] max-mobile:w-[300px]">
        <div className=" p-6 dropdown-info grid grid-cols-2 gap-[2rem] max-mobile:grid-cols-1">
            <div className="sub-navbar-info mb-6">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Platform</p>
                <a href="">Website builder</a>
                <a href="">Website examples</a>
                <a href="">Landing page example</a>
                <a href="">Blogging example</a>
            </div>
            <div className="sub-navbar-info pl-6 max-mobile:pl-0 max-mobile:pt-6 max-mobile:border-x-0 max-mobile:border-t-2 mb-6 border-y-0 border-l-[1px] border-gray-300 border-r-0">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Future</p>
                <a href="">Blogging</a>
                <a href="">Landing pages</a>
                <a href="">Link in bio pages</a>
                <a href="">Portfolio Website</a>
                <a href="">Integrations</a>
            </div>
        </div>
      </ul>
    </div>
  );
}
export default WebsiteButton;
