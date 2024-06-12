import React, { useState } from "react";
import Employee from "../components/Employee";
import AddEmpButton from "../components/AddEmpButton";

function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
        id: 1,
        name: "Nob Chanvisal",
        role: "Web Development",
        profile:
            "https://images.pexels.com/photos/25724464/pexels-photo-25724464/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
        id: 2,
        name: "Chan Socheata",
        role: "Graphic Design",
        profile:
            "https://images.pexels.com/photos/25225806/pexels-photo-25225806/free-photo-of-a-husky-dog-laying-on-the-grass-in-front-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
        id: 3,
        name: "Hork Thida",
        role: "Teacher",
        profile:
            "https://images.pexels.com/photos/20704635/pexels-photo-20704635/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
        id: 4,
        name: "Rith Davith",
        role: "Network",
        profile:
            "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]);

    function addEmployee(newEmployee) {
        setEmployees([...employees, newEmployee]);
    }

    function updateEmployee(id, newName, newRole, newProfile) {
        const updatedEmployees = employees.map((employee) => {
        if (employee.id === id) {
            return {
            ...employee,
            name: newName,
            role: newRole,
            profile: newProfile,
            };
        }
        return employee;
        });
        setEmployees(updatedEmployees);
    }

    return (
        <>
        <div className="flex flex-wrap justify-center ">
            {employees.map((employee) => (
            <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                profile={employee.profile}
                updateEmployee={updateEmployee}
            />
            ))}
        </div>
        <AddEmpButton addEmployee={addEmployee} />
        </>
    );
    }

export default EmployeeList;
