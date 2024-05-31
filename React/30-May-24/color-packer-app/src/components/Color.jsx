//onChange = event handler used primarily with form elements
//           ex. <input>, <textarea>,<select>, <radio>
//           Triggers a function every time th e value of the input changes.


import React,{useState} from "react";

function Color(){
    const [color,setColor] = useState("#FF0000")
    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(
        <div className="main-app">
            <h1>Color Packer App</h1>
            <div className="color-container" style={{backgroundColor: color}}>
                <p>Color: {color} </p>
            </div>
            <label>Set Color</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}
export default Color;