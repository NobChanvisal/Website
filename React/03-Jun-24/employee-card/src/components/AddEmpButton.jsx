import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddEmpButton({ addEmployee }) {
    const [show, setShow] = useState(false);
    const [empName, setEmpName] = useState('');
    const [empRole, setEmpRole] = useState('');
    const [empProfile, setEmpProfile] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newEmployee = {
            id: Math.random(), // Generate a unique id
            name: empName,
            role: empRole,
            profile: empProfile
        };
        addEmployee(newEmployee);
        setEmpName('');
        setEmpRole('');
        setEmpProfile('');
        handleClose();
    };

    return (
        <>
            <button
                className="uppercase px-[20px] py-[10px] rounded-lg bg-blue-600 text-white hover:bg-blue-500"
                onClick={handleShow}
            >
                Add New Employee
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div>
                            <label for="street-address" class="block pt-2 text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input class="block px-1 w-full border rounded-md py-1.5 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                name={empName}
                                onChange={(e) => setEmpName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="street-address" class="block pt-2 text-sm font-medium leading-6 text-gray-900">Role</label>
                            <input class="block px-1 w-full border rounded-md py-1.5 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                name={empRole} 
                                onChange={(e) => setEmpRole(e.target.value)}
                            />
                        </div>
                        <div>
                            <label for="street-address" class="block pt-2 text-sm font-medium leading-6 text-gray-900">Image URL</label>
                            <input class="block px-1 w-full border rounded-md py-1.5 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                name={empProfile} 
                                onChange={(e) => setEmpProfile(e.target.value)}
                            />
                        </div>
                        <button className=" px-[20px] py-[8px] mt-[10px] bg-blue-500 rounded-lg text-white hover:bg-blue-600"
                            onClick={handleFormSubmit}
                        >
                            Add Employee
                        </button>
                    </form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmpButton;
