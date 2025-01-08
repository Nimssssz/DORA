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
import "./CabsPage.css";

const CITIES = [
  { name: "Mumbai", code: "MUM", fullName: "Mumbai, Maharashtra" },
  { name: "Pune", code: "PUN", fullName: "Pune, Maharashtra" },
  { name: "Delhi", code: "DEL", fullName: "Delhi, India" },
  { name: "Bengaluru", code: "BLR", fullName: "Bengaluru, Karnataka" },
  { name: "Chennai", code: "MAA", fullName: "Chennai, Tamil Nadu" },
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

const CabsPage = () => {
  const [selectedOption, setSelectedOption] = useState("Cabs");
  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Pune");
  const [departure, setDeparture] = useState("2024-10-30");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [tripType, setTripType] = useState("One Way");
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "short", day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (option.route) {
      navigate(option.route);
    }
  };

  const handleSearch = () => {
    alert(`Searching for cabs from ${from} to ${to} (${tripType})`);
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
          <div className="cab-container">
            <div className="trip-type">
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="One Way"
                  checked={tripType === "One Way"}
                  onChange={(e) => setTripType(e.target.value)}
                />
                Outstation One-Way
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="Round Trip"
                  checked={tripType === "Round Trip"}
                  onChange={(e) => setTripType(e.target.value)}
                />
                Outstation Round-Trip
              </label>
              <label>
                <input
                  type="radio"
                  name="tripType"
                  value="Hourly Rentals"
                  checked={tripType === "Hourly Rentals"}
                  onChange={(e) => setTripType(e.target.value)}
                />
                Hourly Rentals
              </label>
            </div>

            <div className="cab-search">
              <div className="search-row">
                <div className="search-field">
                  <label htmlFor="from">From</label>
                  <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
                    {CITIES.map((city) => (
                      <option key={city.code} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  <span className="city-code">
                    {CITIES.find((city) => city.name === from)?.fullName}
                  </span>
                </div>

                <div className="search-field">
                  <label htmlFor="to">To</label>
                  <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
                    {CITIES.map((city) => (
                      <option key={city.code} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  <span className="city-code">
                    {CITIES.find((city) => city.name === to)?.fullName}
                  </span>
                </div>

                <div className="search-field">
                  <label htmlFor="departure">Departure</label>
                  <input
                    type="date"
                    id="departure"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                  <span className="day">{formatDate(departure)}</span>
                </div>

                <div className="search-field">
                  <label htmlFor="pickupTime">Pickup-Time</label>
                  <input
                    type="time"
                    id="pickupTime"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                  <span className="time">{pickupTime}</span>
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

export default CabsPage;
