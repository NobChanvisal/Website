import React, { useState } from "react";

function CarList() {
    const [cars, setCars] = useState([]);
    const [carName, setCarName] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    function handleAddCar() {
        const newCar = {
            year: carYear,
            name: carName,
            model: carModel
        };

        setCars(c => [...c, newCar]);
        setCarName("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }

    return (
        <div className="container">
            <h1>List Of Cars</h1>
            <div>
                {cars.map((car, index) => 
                    <p key={index}>
                        {car.name} {car.model} {car.year}
                    </p>
                )}
            </div>
            <input
                type="text"
                value={carName}
                placeholder="Enter name of car"
                onChange={(e) => setCarName(e.target.value)}
            />
            <input
                type="text"
                value={carModel}
                placeholder="Enter model of car"
                onChange={(e) => setCarModel(e.target.value)}
            />
            <input
                type="number"
                value={carYear}
                placeholder="Enter year of car"
                onChange={(e) => setCarYear(e.target.value)}
            />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default CarList;
