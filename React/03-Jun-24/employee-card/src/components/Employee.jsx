import React from "react";

function Employee(props){
    return (
        <div className="flex flex-row items-center max-w-sm bg-white shadow-lg m-5 py-5 px-5 rounded-[10px] ">
            <img className="w-[100px] h-[100px] rounded-full mr-5 object-cover"
                src={props.profile} alt="anime-image" />
            <div className="space-y-2">   
                <div>
                    <p className=" font-semibold text-lg">
                        {props.name}
                    </p>
                    <p className=" text-slate-500">
                        {props.role}
                    </p>
                </div>
                <button className=" bg-blue-500 px-4 py-1 rounded-lg text-white hover:bg-blue-400">Message</button>
            </div>
        </div>
    )
}
export default Employee;