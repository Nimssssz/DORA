import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar from its separate file
import "./FlightCard.css";

export const FlightCard = () => {
  // Extracting data from the `location.state` with fallback default values
  const location = useLocation();
  const { origin = "N/A", destination = "N/A", departDate = "N/A", adults = 1 } = location.state || {};

  return (
    <>
      <Navbar />
      <div className="bg">
        <div className="Card">
          <h1>Flight Details</h1>
          <p>From: {origin}</p>
          <p>To: {destination}</p>
          <p>Departure Date: {departDate}</p>
          <p>No. of Adults: {adults}</p>
          <h2>Airline</h2>
          <p>TakeOff time | Total Time | Landing Time | Price</p>
        </div>
      </div>
    </>
  );
};
