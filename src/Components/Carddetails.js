import React from "react";

function Carddetails(props) {
  return (
    <div>
      <div className="details-journal">
        <div className="location-details">
          <div className="location-img">
            <img src={props.img} alt="" />
          </div>
          <div className="location-about">
            <div className="first-line">
              <div className="location-logo">
                <img src={require("../images/location.png")} alt="" />
              </div>
              <div className="location-name">
                <p>{props.location}</p>
              </div>
              <div className="location-link">
                <a href={props.googleMapsUrl} target="_blank">
                  View on Google maps
                </a>
              </div>
            </div>
            <div className="paragraph">
              <h1>{props.title}</h1>
              <p>
                {props.startDate}-{props.endDate}
              </p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Carddetails;
