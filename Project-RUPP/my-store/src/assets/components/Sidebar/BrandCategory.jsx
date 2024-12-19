import React from "react";
import Input from "../Category/Input";

function BrandCategory({ brand, handleChange }) {
  const categories = {
    Nike: [
      { value: "", title: "All" },
      { value: "Air Jordan", title: "Air Jordan" },
      { value: "Dunk", title: "Dunk" },
      { value: "Air Force", title: "Air Force" },
      { value: "Air Max", title: "Air Max" },
      { value: "Running", title: "Running" },
    ],
    "New Balance": [
      { value: "", title: "All" },
      { value: "550", title: "550" },
      { value: "327", title: "327" },
      { value: "574", title: "574" },
      { value: "530", title: "530"},
      { value: "990", title: "990" },
      { value: "Running", title: "Running" },
    ],
    Puma: [
      { value: "", title: "All" },
      { value: "Suede", title: "Suede" },
      { value: "RS", title: "RS" },
      { value: "Rider", title: "Rider" },
      { value: "Palermo", title: "Palermo" },
      { value: "Running", title: "Running" },
    ],
    Adidas: [
        { value: "", title: "All" },
        { value: "Samba", title: "Samba" },
        { value: "Gazelle", title: "Gazelle" },
        { value: "Campus", title: "Campus" },
        { value: "Forum", title: "Forum" },
        { value: "Running", title: "Running" },
      ],
  };

  const brandCategories = categories[brand] || [];

  return (
    <>
      {/* <h2 className="sidebar-title tracking-wider uppercase font-semibold mt-3">Collection</h2> */}
      <div className="category-container flex flex-col ml-1 mt-3">
        {brandCategories.map(({ value, title }) => (
          <Input
            key={value || title}
            handleChange={handleChange}
            value={value}
            title={title}
            name={brand.toLowerCase()}
          />
        ))}
      </div>
    </>
  );
}

export default BrandCategory;
