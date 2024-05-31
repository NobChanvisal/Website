import React, { useState } from "react";

function ReactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [DOB, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState("");
    const [address, setAddress] = useState("");

    function submitData(e) {
        e.preventDefault();
        console.log(
            "Name   : " + name + "\n" +
            "Email  : " + email + "\n" +
            "Contact: " + contact + "\n" +
            "DOB    : " + DOB + "\n" +
            "Gender : " + gender + "\n" +
            "Course : " + course + "\n" +
            "Address: " + address
        );
    }
    

    function resetForm() {
        alert("Data reset successful!");
        setName("");
        setEmail("");
        setContact("");
        setDOB("");
        setGender("");
        setCourse("");
        setAddress("");
    }

    return (
        <div className="main-container">
            <h1>Form in React</h1>
            <form className="user-data" onSubmit={submitData}>
                <div className="group-enter">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="group-enter">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="group-enter">
                    <label htmlFor="contact">Contact</label>
                    <input
                        type="number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <div className="group-enter">
                    <label htmlFor="DOB">Date of Birth</label>
                    <input
                        type="date"
                        value={DOB}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                <div className="group-enter">
                    <label htmlFor="gender">Gender</label>
                    <div className="group-radio">
                        <div>
                            <input
                                type="radio"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="group-enter">
                    <label htmlFor="course">Select Course</label>
                    <select
                        name="course"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Network">Network</option>
                    </select>
                </div>
                <div className="group-enter">
                    <label htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        id="about"
                        cols="30"
                        rows="10"
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                        placeholder="About your address"
                        required
                    ></textarea>
                </div>
                <div className="group-button">
                    <button type="button" onClick={resetForm}>Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ReactForm;
