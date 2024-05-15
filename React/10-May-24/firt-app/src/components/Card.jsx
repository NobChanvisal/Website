import React from "react";
import image from "./Visal.jpg";

function Card(){
    return (
        <div className="card-content">
            <img src={image} alt="" />
            <h2 className="name-card">Nob Chanvisal</h2>
            <p>Web developer and Freelandcer</p>
        </div>
    );
};
export default Card;