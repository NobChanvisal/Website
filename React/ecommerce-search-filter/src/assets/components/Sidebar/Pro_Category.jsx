import Input from "../category/Input";
import { AiFillStar } from "react-icons/ai";
function Pro_Category({handleChange}) {
  return (
    <>
      <h2 className="sidebar-title  tracking-wider uppercase">Category</h2>
      <div className="category-container flex flex-col mt-5">
        <label className="label-container text-[13px]">
          <input onChange={handleChange} type="radio" value="" name="pro-category" />
          <span className="checkmark "></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="pro-category"
          
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="pro-category"
          
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="pro-category"
          
        />
        <Input
          handleChange={handleChange}
          value="heals"
          title="Heals"
          name="pro-category" 
        />
      </div>
    </>
  );
}
export default Pro_Category;
