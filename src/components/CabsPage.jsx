import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PLANE from "../assets/PLANE.png";
import Hotels from "../assets/Hotels.png";
import HomeStayvilla from "../assets/HomeStayvilla.png";
import HolidayPackage from "../assets/HolidayPackage.png";
import Trains from "../assets/Trains.png";
import Buses from "../assets/Buses.png";
import Cabs from "../assets/Cabs.png";
import ForexCardCurrency from "../assets/ForexCardCurrency.png";
import TravelInsurance from "../assets/TravelInsurance.png";
import "./CabsPage.css";  // Create this CSS file based on HotelsPage.css

const OPTIONS = [
  { icon: PLANE, label: "Flights", route: "/" },
  { icon: Hotels, label: "Hotels", route: "/hotels" },
  { icon: HomeStayvilla, label: "Homestays & Villas", route: "/homestays" },
  { icon: HolidayPackage, label: "Holiday Packages", route: "/holiday-packages" },
  { icon: Trains, label: "Trains", route: "/trains" },
  { icon: Buses, label: "Buses", route: "/buses" },
  { icon: Cabs, label: "Cabs", route: "/cabs" },
  { icon: ForexCardCurrency, label: "Forex Card & Currency", route: "/forex" },
  { icon: TravelInsurance, label: "Travel Insurance", route: "/travel-insurance" },
];

const CabsPage = () => {
  const [selectedOption, setSelectedOption] = useState("Cabs");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (option.route) {
      navigate(option.route);
    }
  };

  return (
    <div className="container">
      <div className="options-navbar">
        {OPTIONS.map((option) => (
          <div
            key={option.label}
            className={`option ${selectedOption === option.label ? "active" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            <img src={option.icon} alt={option.label} className="icon" />
            <p>{option.label}</p>
          </div>
        ))}
      </div>
      <div className="search-box">
        {selectedOption === "Cabs" && (
          <>
            <h2>Search Cabs</h2>
            {/* Add detailed cab search functionality here */}
            <p>Find the best cab options for your travel.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CabsPage;
