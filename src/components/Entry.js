import React from "react";
import locationIcon from "../assets/location-dot-solid.svg";

export default function Entry(props) {
  return (
    <div className="entry-container">
      <div className="location-img-container">
        <img
          className="location-img"
          src={props.item.imageUrl}
          alt={props.item.alt}
        />
      </div>
      <div className="entry-right">
        <div className="title-container">
          <div className="location-container">
            <img
              className="location-icon"
              src={locationIcon}
              aria-label="none"
            />
            <h5>{props.item.location}</h5>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.item.title}</h1>
        </div>
        <div className="text-container">
          <h6>{`${props.item.startDate} - ${props.item.endDate}`}</h6>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
