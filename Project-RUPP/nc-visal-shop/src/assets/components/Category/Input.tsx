interface Inputprops {
  value: string;
  title: string;
  color: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
}

const Input: React.FC<Inputprops> = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="label-container block relative pl-9 mr-3 cursor-pointer text-[13px]">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        className="radio-input"
      />
      <span className="checkmark" style={{ background: color }}></span>
      {title}
    </label>
  );
}

export default Input;
