import React from "react";
import world from "../images/world2.png";
import Carddetails from "./Carddetails";
import "./travel.css";
import TravelData from "./TravelData";

function Travel() {
  const data = TravelData.map((item) => {
    return <Carddetails
        img={item.imageUrl}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
     />
  });

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={world} alt="" />
          </div>
          <div className="heading">
            <h1>My Travel Journal</h1>
          </div>
        </div>
       
        {data}
        
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Travel;
