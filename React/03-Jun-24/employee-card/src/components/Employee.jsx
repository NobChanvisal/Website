import React from "react";
import EditEmpButton from "./EditEmpButton";

function Employee({ id, name, role, profile, updateEmployee }) {
    return (
        <div className="flex flex-row items-center max-w-sm bg-white shadow-lg m-[20px] py-[20px] px-[20px] rounded-[10px]">
            <img className="w-[100px] h-[100px] rounded-full mr-5 object-cover" src={profile} alt="employee-profile" />
            <div className="space-y-2 text-left">
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p className="text-slate-500">{role}</p>
                </div>
                <EditEmpButton id={id} name={name} role={role} profile={profile} updateEmployee={updateEmployee} />
            </div>
        </div>
    );
}

export default Employee;
