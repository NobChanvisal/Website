import Input from "../category/Input";
function Price({handleChange}) {
  return (
    <>
      <h2 className="sidebar-title mt-5 tracking-wider uppercase">Price</h2>
      <div className="price-container flex flex-col mt-5">
        {/* <Input
          handleChange={handleChange}
          value="all"
          title="All"
          name="price"
        /> */}
        <label className="label-container text-[13px]">
          <input onChange={handleChange} type="radio" value="" name="price" />
          <span className="checkmark "></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="price"
        />
      </div>
    </>
  );
}
export default Price;
