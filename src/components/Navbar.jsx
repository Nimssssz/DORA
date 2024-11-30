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
import "./Navbar.css";

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

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("Flights");
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (option.route) {
      navigate(option.route);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-options">
        {OPTIONS.map((option) => (
          <div
            key={option.label}
            className={`navbar-item ${selectedOption === option.label ? "active" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            <img src={option.icon} alt={option.label} className="navbar-icon" />
            <p className="navbar-label">{option.label}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
