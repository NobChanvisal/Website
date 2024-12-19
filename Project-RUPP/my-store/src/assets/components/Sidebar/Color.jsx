import Input from "../Category/Input";

function Color({ handleChange }) {
  const Color = [
    { title: "All", value: "" },
    { title: "Black", value: "Black", color: "black" },
    { title: "White", value: "White", color: "white" },
    { title: "Red", value: "Red", color: "red" },
    { title: "Blue", value: "Blue", color: "#3f5efb" },
    { title: "Gold", value: "Gold", color: "gold" },
    { title: "Green", value: "Green", color: "green" },
  ];

  return (
    <>
      
      <div className="color-container flex flex-col mt-3 ml-1">
        {Color.map(({ title, value, color }) => (
          <Input
            key={value || title} 
            handleChange={handleChange}
            value={value}
            title={title}
            name="color"
            color={color}  
          />
        ))}
      </div>
    </>
  );
}

export default Color;
