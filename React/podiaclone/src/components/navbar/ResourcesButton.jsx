import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function ResourcesButton() {
  return (
    <div class="btn-group w-full">
      <button
        type="button"
        class="dropdown-toggle px-6 py-2"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        Resources
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-start w-[420px] max-mobile:w-[300px]">
        <div className=" p-6 dropdown-info grid grid-cols-2 gap-[2rem] max-mobile:grid-cols-1">
            <div className="sub-navbar-info mb-6">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Free Resources</p>
                <a href="">Resource center</a>
                <a href="">Hire a Podia Pro</a>
                <a href="">Podia demo site</a>
                
            </div>
            <div className="sub-navbar-info mb-6">
                <p className="info-heading text-[12px] text-[#9c8881] uppercase">Future</p>
                <a href="">Creator stories</a>
                <a href="">Podia Creator Community</a>
                <a href="">Help center</a>
            </div>
        </div>
      </ul>
    </div>
  );
}
export default ResourcesButton;
