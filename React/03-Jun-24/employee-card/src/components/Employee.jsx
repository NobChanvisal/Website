import React from "react";
import EditEmpButton from "./EditEmpButton";

function Employee(props){
    return (
        <div className="flex flex-row items-center max-w-sm bg-white shadow-lg m-[20px] py-[20px] px-[20px] rounded-[10px] ">
            <img className="w-[100px] h-[100px] rounded-full mr-5 object-cover"
                src={props.profile} alt="anime-image" />
            <div className="space-y-2 text-left">   
                <div>
                    <p className=" font-semibold text-lg">
                        {props.name}
                    </p>
                    <p className=" text-slate-500">
                        {props.role}
                    </p>
                </div>
                <EditEmpButton 
                    id={props.id}
                    name={props.name}
                    role={props.role}
                    profile={props.profile}
                    updateEmployee={props.updateEmployee}
                />
                
            </div>
        </div>
    )
}

export default Employee;
