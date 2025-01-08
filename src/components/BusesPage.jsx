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
import "./BusesPage.css";

const CITIES = [
  { name: "Delhi", fullName: "Delhi, Delhi, India" },
  { name: "Kanpur", fullName: "Kanpur, Uttar Pradesh, India" },
  { name: "Mumbai", fullName: "Mumbai, Maharashtra, India" },
];

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

const BusesPage = () => {
  const [selectedOption, setSelectedOption] = useState("Buses");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Kanpur");
  const [departure, setDeparture] = useState("2024-11-29");
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric", weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (option.route) {
      navigate(option.route);
    }
  };

  const handleSearch = () => {
    alert(`Searching for buses from ${from} to ${to} on ${formatDate(departure)}`);
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
        {selectedOption === "Buses" && (
          <div className="bus-container">
            <h2 style={{ marginBottom: "1rem" }}>Bus Ticket Booking</h2>
            <p style={{ marginBottom: "1rem" }}>
              <span className="highlight-text" >Travelling with a group? Hire a bus.</span>
            </p>
            <div className="bus-search-box">
              <div className="search-row">
                <div className="search-field">
                  <label htmlFor="from">From</label>
                  <select
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    {CITIES.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.fullName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="search-field">
                  <label htmlFor="to">To</label>
                  <select
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    {CITIES.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.fullName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="search-field">
                  <label htmlFor="departure">Travel Date</label>
                  <input
                    type="date"
                    id="departure"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </div>
              </div>

              <div className="search-actions">
                <button className="search-button" onClick={handleSearch}>
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusesPage;
