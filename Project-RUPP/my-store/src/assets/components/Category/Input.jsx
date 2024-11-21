function Input({ handleChange, value, title, name, color }) {
    return (
      <label className="label-container block position-relative pl-9 mr-3 cursor-pointer text-sm">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ background: color }}></span>{title}
      </label>
    );
  }
  
  export default Input;
  