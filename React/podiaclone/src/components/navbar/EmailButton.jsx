import React from "react";



function EmailButton() {
  return (
    <div class="btn-group w-full">
      <button
        type="button"
        class="dropdown-toggle px-6 py-2"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        Email
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-start w-[420px] max-mobile:w-[300px]">
        <div className=" p-6 dropdown-info grid grid-cols-2 gap-[2rem] max-mobile:grid-cols-1">
            <div className="sub-navbar-info mb-6">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Platform</p>
                <a href="">Email marketing</a>
                <a href="">Email examples</a>
                
            </div>
            <div className="sub-navbar-info pl-6 max-mobile:pl-0 max-mobile:pt-6 max-mobile:border-x-0 max-mobile:border-t-2 mb-6 border-y-0 border-l-[1px] border-gray-300 border-r-0">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Future</p>
                <a href="">Email templates</a>
                <a href="">Email designer</a>
                <a href="">Email forms</a>
                <a href="">Email analytics</a>
                <a href="">Newsletters</a>
                <a href="">Automations</a>
                <a href="">Segmentation</a>
            </div>
        </div>
      </ul>
    </div>
  );
}
export default EmailButton;
