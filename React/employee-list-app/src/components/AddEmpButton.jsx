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
                className="uppercase px-[20px] py-[10px] rounded-lg bg-green-600 text-white hover:bg-green-500"
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
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={empName}
                                onChange={(e) => setEmpName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter role"
                                value={empRole}
                                onChange={(e) => setEmpRole(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Profile URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter profile URL"
                                value={empProfile}
                                onChange={(e) => setEmpProfile(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Employee
                        </Button>
                    </Form>
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
