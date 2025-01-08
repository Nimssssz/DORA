import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PLANE from "../assets/PLANE.png";
import Hotels from "../assets/Hotels.png";
import HomeStayvilla from "../assets/HomeStayvilla.png";
import HolidayPackage from "../assets/HolidayPackage.png";
import TrainsIcon from "../assets/Trains.png";
import Buses from "../assets/Buses.png";
import Cabs from "../assets/Cabs.png";
import ForexCardCurrency from "../assets/ForexCardCurrency.png";
import TravelInsurance from "../assets/TravelInsurance.png";
import "./TrainsPage.css";

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
  { icon: TrainsIcon, label: "Trains", route: "/trains" },
  { icon: Buses, label: "Buses", route: "/buses" },
  { icon: Cabs, label: "Cabs", route: "/cabs" },
  { icon: ForexCardCurrency, label: "Forex Card & Currency", route: "/forex" },
  { icon: TravelInsurance, label: "Travel Insurance", route: "/travel-insurance" },
];

const HEADER_TABS = ["Book Train Tickets", "Check PNR Status", "Live Train Status"];

const TrainsPage = () => {
  const [selectedOption, setSelectedOption] = useState("Trains");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Kanpur");
  const [departure, setDeparture] = useState("2024-11-29");
  const [activeTab, setActiveTab] = useState(0); // Tracks the active tab index
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
    alert(`Searching for trains from ${from} to ${to} on ${formatDate(departure)}`);
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
        {selectedOption === "Trains" && (
          <div className="train-container">
            {/* Train Header */}
            <div className="train-header">
              <div className="header-options">
                {HEADER_TABS.map((tab, index) => (
                  <div
                    key={tab}
                    className={`header-tab ${activeTab === index ? "active-tab" : ""}`}
                    onClick={() => setActiveTab(index)} // Update active tab on click
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Inputs */}
            <div className="search-row">
              <div className="search-field">
                <label htmlFor="from">From</label>
                <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
                  {CITIES.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.fullName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="search-field">
                <label htmlFor="to">To</label>
                <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
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

            {/* Search Button */}
            <div className="search-actions">
              <button className="search-button" onClick={handleSearch}>
                SEARCH
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainsPage;
