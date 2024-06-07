import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function EditEmpButton(props) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);
    const [profile, setProfile] = useState(props.profile);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateEmployee(props.id, name, role, profile);
        handleClose();
    };

    return (
        <>
            <button
                className="uppercase px-[20px] py-[10px] rounded-lg bg-blue-600 text-white hover:bg-blue-500"
                onClick={handleShow}
            >
                Update
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block pt-2 text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input 
                                className="block px-1 w-full border rounded-md py-1.5 bg-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block pt-2 text-sm font-medium leading-6 text-gray-900">Role</label>
                            <input 
                                className="block px-1 w-full border rounded-md py-1.5 bg-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block pt-2 text-sm font-medium leading-6 text-gray-900">Profile</label>
                            <input 
                                className="block px-1 w-full border rounded-md py-1.5 bg-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                type="text" 
                                value={profile}
                                onChange={(e) => setProfile(e.target.value)}
                            />
                        </div>
                        <button className="px-[20px] py-[8px] mt-[10px] bg-blue-500 rounded-lg text-white hover:bg-blue-600" type="submit">
                            Update
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

export default EditEmpButton;
