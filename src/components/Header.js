import React from "react";
import earthIcon from "../assets/earth-americas-solid.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="earth-icon" src={earthIcon} alt="Earth icon" />
      <h4>my travel journal.</h4>
    </div>
  );
}
