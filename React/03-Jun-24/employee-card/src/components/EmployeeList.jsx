import Employee from "./Employee";
import React,{useState} from "react";
function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: 'Nob Chanvisal',
            role: 'Web Development',
            profile:'./image/anime.jpg'
        }
    ])
    return (
        <div className="flex flex-wrap justify-center">
            
        </div>
    )
}

export default EmployeeList;