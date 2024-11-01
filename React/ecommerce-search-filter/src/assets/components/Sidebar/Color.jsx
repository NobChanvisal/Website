import Input from "../category/Input";
function Color({handleChange}) {
  return (
    <>
      <h2 className="sidebar-title mt-5 tracking-wider uppercase">Color</h2>
      <div className="color-container flex flex-col mt-5">
        {/* <Input
          handleChange={handleChange}
          value="all"
          title="All"
          name="color"
          color={"linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(0,121,32,1) 48%, rgba(255,136,0,1) 100%)"}
        /> */}
        <label className="label-container text-[13px]">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark bg-gradient-to-r from-customBlue via-customGreen to-customOrange"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color={"#3f5efb"}
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color={"#007920"}
        />
        <Input
          handleChange={handleChange}
          value="orage"
          title="Orange"
          name="color"
          color={"#ff8800"}
        />
      </div>
    </>
  );
}
export default Color;
