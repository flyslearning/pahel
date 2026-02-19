import React from "react";
import "./Card.css";

import sheildincycle from "../../assets/images/sheildincycle.png";

const Card = ({ header, description }) => {
  return (
    <div className="card">
      <img src={sheildincycle} />
      <p className="card-header font-zilla font-semibold">{header}</p>
      <p className="card-description font-500">{description}</p>
    </div>
  );
};

export default Card;
