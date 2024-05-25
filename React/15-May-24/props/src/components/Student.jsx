// props = read-only properties that are shared between components.
//         A parent component can send data to child component.
//         <Component key = value />

// propsTypes = a mechanism that ensures that the passed value
//              is of the correct datatype.
//              age: PropTypes.number 

// defaultProps = default values for props in case they are not passed from the parent component 
//                name: "Default Name"
import React from "react";


function Hello()
{
    alert("HEllo")   
}
function Student()
{
    return(
        <div>
            <h1 className="duck" onClick={Hello}>Hello world</h1>
        </div>
    )
}
export default Student;